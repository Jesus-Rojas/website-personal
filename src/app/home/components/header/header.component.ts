import { Component } from '@angular/core';
import {
  faGithub,
  faFacebook,
  faWhatsapp,
  faInstagram,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { SocialMedia } from '../../types/social-media.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  SocialMedia = SocialMedia;
  icons: Record<SocialMedia, { icon: IconDefinition; url: string }> = {
    [SocialMedia.Facebook]: {
      icon: faFacebook,
      url: 'https://www.facebook.com/rojas.unknown',
    },
    [SocialMedia.Email]: {
      icon: faEnvelope,
      url: 'mailto:jarojas6524@misena.edu.co',
    },
    [SocialMedia.Instagram]: {
      icon: faInstagram,
      url: 'https://www.instagram.com/jesusrojasnet/',
    },
    [SocialMedia.Github]: {
      icon: faGithub,
      url: 'https://github.com/jesus-rojas',
    },
    [SocialMedia.WhatsApp]: {
      icon: faWhatsapp,
      url: 'https://api.whatsapp.com/send?phone=573144885932&text=Hola',
    },
    [SocialMedia.Phone]: {
      icon: faPhone,
      url: 'tel:3144885932',
    },
  };
  iconKeys = Object.keys(this.icons) as SocialMedia[];
  iconStyles = {
    color: '#fff',
  };

  navigateByUrl(socialMedia: SocialMedia) {
    window.open(this.icons[socialMedia].url, '_blank');
  }
}
