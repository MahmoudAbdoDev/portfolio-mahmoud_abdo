import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true, // ✅ تأكد من أنه standalone
  imports: [RouterModule], // ✅ استيراد RouterModule لاستخدام routerLink
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] // ✅ تصحيح الخطأ
})
export class HeroComponent {}
