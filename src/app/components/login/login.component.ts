import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logo: any = '';
  public fromTitle: any = 'Login Here';    // This is a From Title
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
    "buttonName": "Forget Password",
    "customLink": "/forget-password",
  };

  public routerStatus: any;
  constructor(public cookies: CookieService) {
    this.routerStatus = {           // this is use for if login succcess then navigate which page
      "data": [
        {
          "type": "admin",
          "routerNav": "admin/dashboard"
        }
      ]
    }
   }

  ngOnInit(): void {
  }

}
