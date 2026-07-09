import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideTitleComponent } from './style-guide.title.component';

@Component({
  selector: 'app-style-guide',
  standalone: true,
  imports: [CommonModule, StyleGuideTitleComponent],
  templateUrl: './style-guide.component.html',
  styleUrl: './style-guide.component.scss'
})

export class StyleGuideComponent
{
  contextualVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  buttonSizes = ['btn-lg', '', 'btn-sm'];
}
