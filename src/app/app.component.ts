import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // تأكد من استيراد `RouterModule` لأنه مطلوب
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // ✅ يجب أن يكون هنا `export`
  title = 'portfolio - Mahmoud_Abdo'; // أضف هذه الخاصية إذا كان الاختبار يحتاجها
}
