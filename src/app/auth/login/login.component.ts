import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router : Router) { }

  onSubmit() {
    if (this.user.email && this.user.password) {
      this.authService.login(this.user.email, this.user.password).subscribe(
        (resp) => {
          
          if (resp && resp.token) {
            this.router.navigateByUrl("/");
          } else {
            alert("Credenciales invalidas");
          }
        },
        (error) => {    
          console.error("Error al iniciar sesión:", error);
          alert("Error al iniciar sesión")
        }
      );
    }
  }
  

}
