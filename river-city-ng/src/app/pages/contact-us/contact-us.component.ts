import { Component } from '@angular/core';
import { ContactUsTitleComponent } from './contact-us.title.component';
import { ContactUsFormComponent } from './contact-us.form.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsTitleComponent, ContactUsFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})

export class ContactUsComponent
{
}
