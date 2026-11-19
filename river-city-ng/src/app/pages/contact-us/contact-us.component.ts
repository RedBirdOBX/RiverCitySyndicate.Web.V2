import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ContactUsTitleComponent } from './contact-us.title.component';

// EmailJS settings. The public key is designed to be exposed in browser code.
// Replace the two IDs below with the ones from your EmailJS dashboard.
const EMAILJS_PUBLIC_KEY = 'Ycpk6WN52pRO08L4S';
const EMAILJS_SERVICE_ID = 'gmail-service-rcs'; // Email Services -> Service ID
const EMAILJS_TEMPLATE_ID = 'contact-us-template-rcs'; // Email Templates -> Template ID

const TOPIC_LABELS: Record<string, string> = {
    booking: 'Booking inquiry',
    question: 'General question',
    other: 'Something else'
};

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsTitleComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})

export class ContactUsComponent
{
    model = { name: '', email: '', phone: '', topic: '', message: '' };

    sending = false;
    status: { type: 'success' | 'error'; text: string } | null = null;

    phoneTouched = false;

    // Phone is optional, but if anything is entered it must be a full 10 digits.
    get phoneInvalid(): boolean
    {
        const digits = this.model.phone.replace(/\D/g, '').length;
        return digits > 0 && digits < 10;
    }

    // Formats the phone field as the user types: (555) 555-5555
    onPhoneInput(event: Event): void
    {
        const input = event.target as HTMLInputElement;
        const digits = input.value.replace(/\D/g, '').slice(0, 10);

        let formatted = '';
        if (digits.length > 6) {
            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
        } else if (digits.length > 3) {
            formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        } else if (digits.length > 0) {
            formatted = `(${digits}`;
        }

        input.value = formatted;
        this.model.phone = formatted;
    }

    onSubmit(form: NgForm): void
    {
        this.phoneTouched = true;

        if (form.invalid || this.phoneInvalid || this.sending) {
            form.control.markAllAsTouched();
            return;
        }

        this.sending = true;
        this.status = null;

        // Keys must match the {{variables}} used in your EmailJS template.
        const params = {
            from_name: this.model.name,
            from_email: this.model.email,
            subject: TOPIC_LABELS[this.model.topic] ?? this.model.topic,
            message: this.model.message,
            phone: this.model.phone,
            time: new Date().toLocaleString()
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, { publicKey: EMAILJS_PUBLIC_KEY })
            .then(() => {
                this.status = { type: 'success', text: "Message sent successfully! We'll get back to you soon." };
                form.resetForm({ name: '', email: '', topic: '', message: '' });
                this.model.phone = '';
                this.phoneTouched = false;
            })
            .catch((error: unknown) => {
                console.error('EmailJS failed', error);
                this.status = { type: 'error', text: 'Failed to send message. Please try again or contact us directly.' };
            })
            .finally(() => {
                this.sending = false;
            });
    }
}
