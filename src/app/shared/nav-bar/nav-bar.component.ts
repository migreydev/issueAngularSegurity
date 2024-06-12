import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  constructor(private authService : AuthService){}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); 
  }

  logout(){
    this.authService.logout();
  }

}
