import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public fromTitleName: any = 'Change Your Password Here';
  public logo: any = './assets/images/logo.png';
  public serverUrl: any = environment.apiBaseUrl;
  public addEndpoint: any = {
    endpoint:'resetpassword',
    source:'users'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
