import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{

  constructor( private authService : AuthService,
              private fb: FormBuilder,
              private router : Router
  ){}


  ngOnInit(): void {
  
  }

  myRegistro : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    login: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['USER_ROLE']
  })

  onSubmit(){
    if(this.myRegistro.valid){
      const {name, email, login, password, role} = this.myRegistro.value;

      this.authService.register(name, email, login, password, role).subscribe({
        next: response =>{
          this.router.navigate(['/']);
          console.log('Registro completo:', response);
        },
        error: (error) => {
          console.error('Error en el registro:', error);
        }
      })
    }
  }

}
