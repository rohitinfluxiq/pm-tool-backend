import { Component, OnInit ,ViewChild,Input,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../../../service/http.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
export interface PeriodicElement {
  firstname: string;
  lastname: string;
  email: string;
  type: string;
  status: string;
  deleteRecord:any;
}
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'type','status','deleteRecord'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  public UserAllData: any = [];
  public apiUrl: any;
  public user_cookie: any;
  public dataSource : any;

  constructor(public activatedRoute: ActivatedRoute, public cookie: CookieService,
    public httpService: HttpService) {
    this.user_cookie = cookie.get('jwtToken');
    this.apiUrl = httpService.baseUrl;
  }

  ngOnInit(): void {
    this.activatedRoute.data.forEach((data) => {
      this.UserAllData = data.userManagementData.res;
      this.dataSource = new MatTableDataSource(this.UserAllData);
    })
  }
}
