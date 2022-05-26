import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserService {
  baseUrl: string = "https://winter-2017-phortonssf.c9users.io:8080/api/appUsers";
  // baseUrl: string = "https://dev.greenkoncepts.com/gktest/login";
  waynesWorld:string = "https://dev.greenkoncepts.com/gktest/login"
  orders:string = "https://dev.greenkoncepts.com/gktest/getAllOrders"
  returnUrl: string = "home";
  loginPage: string = "";
  userData: any;
  userDetails:any;
  dashBoardDetails:any;
  constructor( 
    private http: HttpClient,
    private router: Router 
  ) { }

  toLogin(){
    this.router.navigate([this.loginPage])  
  }

  registerUser(userData:any){
    this.http.post(`${this.baseUrl}`, userData)
      .subscribe( resData => {
        this.toHomePage(resData)
    })
  }


  loginUser1(userData:any){
    this.http.post(`${this.waynesWorld}/login`, userData)
     
      .subscribe( resData => {
        console.log("$ data", resData)
        this.toHomePage(resData)
      })
  }
  loginUser(userData:any){
    this.http.get(`${this.waynesWorld}?username=${userData.email}&password=${userData.password}` )
     
      .subscribe( resData => {
        console.log("$ data", resData)
        this.userDetails=resData;
        this.dashboard(this.userDetails.key,resData);
        
      })
  }

  dashboard(keyData:any,userdata:any){
    this.http.get(`${this.orders}?token=${keyData}` )
     
      .subscribe( resData => {
        console.log("$ data", resData)
        this.dashBoardDetails=resData;
        // this.toHomePage(resData)
        this.toHomePage(userdata)
      })
  }

   
  toHomePage(resData:any){
    //Save data from our succesfull login in sessionStorage
    window.sessionStorage.setItem( "token", resData.token)
    window.sessionStorage.setItem( "userId", resData.userId)
    this.router.navigate([this.returnUrl])   
  }
}