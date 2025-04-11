import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ الصفحة الرئيسية
  { path: 'contact', component: ContactComponent } // ✅ صفحة مستقلة
];
