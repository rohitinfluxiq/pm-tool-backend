import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators ,FormGroupDirective} from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {HttpService} from './../../../service/http.service'


@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  public addUpdateAnswerForm: FormGroup;
  public condition:any;
  public roleArray:any=[];
  constructor(public fb: FormBuilder,public router:Router,public cookieService:CookieService,public apiservice:HttpService) { 
    this.addUpdateAnswerForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname :["",Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      role:["",Validators.required],
      phone :["", Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
      city :["",Validators.required],
      state :["",Validators.required],
      address :["",Validators.required],
      doj :["",Validators.required],
      password :["",Validators.required],
      confirmpassword :["",Validators.required],
    },{validator: this.checkIfMatchingPasswords('password', 'confirmpassword')});
    this.getroledata();
  }
  

  ngOnInit(): void {
  }
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
  inputUntouch(form: any, val: any) {
  form.controls[val].markAsUntouched();
}
setDefaultValue(defaultValue:any){

  this.addUpdateAnswerForm.patchValue({
    firstname:defaultValue.firstname,
    lastname:defaultValue.lastname,
    email:defaultValue.email,
    role:defaultValue.role,
    phone:defaultValue.phone,
    city:defaultValue.city,
    state:defaultValue.state,
    address:defaultValue.address,
    doj:defaultValue.doj,
  })
}
getroledata() {
let data: any={
  "source":'data_roles',
  "token":this.cookieService.get('jwtToken')
};
this.apiservice.httpViaPost('datalist',data).subscribe((response:any) => {
  console.log('+++++++++++++',response);
  this.roleArray = response.res
})
}

formSubmitFunction(){
  for (let x in this.addUpdateAnswerForm.controls) {
    this.addUpdateAnswerForm.controls[x].markAsTouched();
  }
  console.log("values",this.addUpdateAnswerForm.value);
  if(this.addUpdateAnswerForm.valid){

    //status
    if (this.addUpdateAnswerForm.value.status) {
     this.addUpdateAnswerForm.value.status = parseInt("1");
   }
   else {
     this.addUpdateAnswerForm.value.status = parseInt("0");
   }
   delete this.addUpdateAnswerForm.value.confirmpassword;

   //start process for add or update
   let postData: any = {
     "source": 'users',
     "data": Object.assign(this.addUpdateAnswerForm.value, this.condition),
     "token": this.cookieService.get('jwtToken')
   };

   this.apiservice.httpViaPost('addorupdatedata',postData).subscribe((response: any) => {
     let result: any;
     result = response;
     // console.log('>>>>>>', result)

     if (result.status == "success") {

       this.router.navigateByUrl('/admin/user-management');
     }

   })



 }
}

}
