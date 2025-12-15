import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{

  constructor(private authService: AuthServiceService, private router: Router){}
  
  
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;
  errorMsg: string = '';
  
  get username() { return this.formLogin.get('username'); }
  get password() { return this.formLogin.get('password'); }


  ngOnInit(): void{
     this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
     })
  }

  sendLogin(){
   if(this.formLogin.valid){
    console.log('form is valid: ', this.formLogin.value.username, this.formLogin.value.password);
      this.authService.sendCredentials(this.formLogin.value.username, this.formLogin.value.password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/']);
          this.errorSession = false;
        },
        error: (error) => {
          this.errorMsg = error.message;
          this.errorSession = true;
        }
      })
   }else{
    console.log('form is invalid');
   }
  }


  createUser(){
    
  }

}