import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public logo: any = '../../assets/favicon.ico';
  // public signUpRouteingUrl: any = 'sign-up';
  public serverUrl:any = environment.apiBaseUrl;
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };
  public loginRouteingUrl: any = {
    // "path":"login",
    "path":"",
    "buttonName":"login",
    "customLink":"/login",
    "customURl":""
  };
  public signUpRouteingUrl: any = {
    "path":"",
    "customLink":"",
  };
  public buttonName: any = 'Reset Password';
  public domainUrl: any =  environment.siteBaseUrl + '/reset-password';

  constructor() { }

  ngOnInit(): void {
  }

}
