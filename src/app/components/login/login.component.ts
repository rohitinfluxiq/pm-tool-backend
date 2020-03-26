import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logo: any = '../../assets/images/logo.png';
  public fromTitle: any = 'InfluxIQ PM Tool';    // This is a From Title
  public fullUrl: any = environment.apiBaseUrl;  // server url
  public endpoint: any = 'login';
  public buttonName: any = 'Login Button';

  public signUpRouteingUrl: any = {
    'path': '',
    // "buttonName": "",
    "customLink": "",
    // "customURl": ""
  };
  public forgetRouteingUrl: any = {
    "path": "",
    "buttonName": "Forget Password? ",
    "customLink": "/forget-password",
  };

  public routerStatus: any;
  constructor() { }

  ngOnInit(): void {
  }

}
