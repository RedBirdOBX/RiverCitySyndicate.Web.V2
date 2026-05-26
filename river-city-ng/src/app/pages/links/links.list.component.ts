import { Component } from '@angular/core';

@Component({
  selector: 'app-links-list',
  imports: [],
  templateUrl: './links.list.component.html',
  styleUrl: './links.list.component.scss'
})
export class LinksListComponent {
  links = [
     {
      name: 'Venmo',
      description: 'Enjoyed the show? Buy us a round! Tip the band or help cover show expenses.',
      url: 'https://account.venmo.com/u/brent-roberts-136',
      icon: 'fa-brands fa-venmo',
      colorClass: 'link-venmo',
      buttonText: 'Buy Us a Drink'
    },
    {
      name: 'YouTube',
      description: 'Watch live performances, music videos, and behind-the-scenes content on our channel.',
      url: 'https://www.youtube.com/@rivercitysyndicate',
      icon: 'fa-brands fa-youtube',
      colorClass: 'link-youtube',
      buttonText: 'See Videos'
    },    {
      name: 'Facebook',
      description: 'Follow us on Facebook for show announcements, band updates, and community fun.',
      url: 'https://www.facebook.com/rivercitysyndicateva',
      icon: 'fa-brands fa-facebook',
      colorClass: 'link-facebook',
      buttonText: 'Follow Us'
    }
  ];
}
