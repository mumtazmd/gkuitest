import { Component } from '@angular/core';
import { UserService  } from "../user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any = {email:''}
  
  constructor(private user$: UserService) { }

  onSubmit(form:any){
    console.log(this.user, form.form._value)
   this.user$.loginUser(this.user)
  }
}