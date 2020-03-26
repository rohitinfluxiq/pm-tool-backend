import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  public UserAllData: any = [];
  public allUserData_skip: any = [
    "_id",
    "user_type",
    "password",
    "created_at",
    "access_code",
    "address",
    "city",
    "state",
    "updated_at",
    "zip"
  ];
  public editUrl: any = "admin/user-management/edit";
  public allUserData_modify_header: any = {
    "firstname": "First Name",
    "lastname": "Last Name",
    "email": "Email",
    "phone": "Phone Number",
    "status": "Status",
  };

  public UpdateEndpoint: any = "addorupdatedata";
  public deleteEndpoint: any = "deletesingledata";
  public previewModal_skip: any = [
    "_id",
    "user_type",
    "password",
    "created_at",
    "access_code",
    "updated_at",
  ];
  public tableName: any = "data_users";
  public apiUrl: any;
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public SearchingEndpoint: any = "datalist";
  public SearchingSourceName: any = "";
  public search_settings: any =
    {
      selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
      textsearch: [{ label: "Search By Name", field: 'name_search' },
      { label: "Search By E-Mail", field: 'email' }],

    };
  public user_cookie: any;


  constructor(public activatedRoute: ActivatedRoute, public cookie: CookieService,
    public httpService: HttpService) {
    this.user_cookie = cookie.get('jwtToken');
    this.apiUrl = httpService.baseUrl;
  }

  ngOnInit(): void {
    this.activatedRoute.data.forEach((data) => {
      this.UserAllData = data.userManagementData.res;
    })
  }
}
