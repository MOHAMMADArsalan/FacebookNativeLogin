import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook} from "ionic-native";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  logout() {
    Facebook.logout().then((res)=>{ 
        console.log("Logout: ", res)
    },(err)=>{
      console.log("Error: ",err);
    })
  }
  getStatus() {
    Facebook.getLoginStatus().then((res) => {
      // function (response) {
      if (res.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token 
        // and signed request each expire
        var uid = res.authResponse.userID;
        var accessToken = res.authResponse.accessToken;
        console.log("connected")
      } else if (res.status === 'not_authorized') {
        // the user is logged in to Facebook, 
        // but has not authenticated your app
        console.log("not_authorized")
      } else {
        // the user isn't logged in to Facebook.
        console.log("dkljsdkljskldsjkdsljlksd");
      }
      // }
    });
  }

  login() {
    Facebook.login(["email"]).then((res) => {
      console.log(res);
    }, (err) => {
      console.log("Error: ", err);
    })
  }
}
