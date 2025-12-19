import { Component } from '@angular/core';
import { AuthServiceService } from '@modules/auth/services/auth-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  constructor(private auth: AuthServiceService) { }

  logout() {
    this.auth.logout();
  }

  isAdmin: boolean = this.auth.admin;
  
}
