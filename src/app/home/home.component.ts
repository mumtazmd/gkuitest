import { Component, OnInit } from '@angular/core';
import { UserService  } from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any = {email:''}
  userDisplayData:any;
  orders:any;
  
  constructor(private user$: UserService) {
    this.userDisplayData=this.user$.userDetails;
    this.orders = this.user$.dashBoardDetails;
    // this.onSubmit(this.userDisplayData.key);
   }
   onSubmit(key:any){
    // console.log(this.user, form.form._value)
  //  this.user$.dashboard(key)
   console.log(this.user$.dashBoardDetails);
   this.orders = this.user$.dashBoardDetails;
  }

  ngOnInit(): void {
    console.log(this.user$.userDetails);
  }

}
