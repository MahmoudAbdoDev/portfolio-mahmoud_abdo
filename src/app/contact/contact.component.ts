import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ مهم جدًا للمكونات المستقلة
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = 'mahmoudibra798@gmail.com';
  phone: string = '+201129863698';
  whatsapp: string = 'https://wa.me/2001129863698';
  linkedin: string = 'https://www.linkedin.com/in/mahmoud-ibrahim-abdo';
  github: string = 'https://github.com/MahmoudAbdoDev';
}
