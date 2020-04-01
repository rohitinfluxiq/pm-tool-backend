import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {UserManagementComponent} from './components/admin/user-management/user-management.component'
import { UserAddEditComponent } from './components/admin/user-management/user-add-edit/user-add-edit.component';
import { UserListingComponent } from './components/admin/user-management/user-listing/user-listing.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import {ResolveService} from './components/service/resolve.service';
import {RoleAddEditComponent} from './components/admin/role-management/role-add-edit/role-add-edit.component';;
import {RoleListingComponent} from './components/admin/role-management/role-listing/role-listing.component'
import { UploadOutput, UploadInput, UploadFile, UploaderOptions } from 'ngx-uploader';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path : 'login', component : LoginComponent},
  { 
    path: 'admin/user-management/add', 
    component: UserAddEditComponent
  },
  { 
    path: 'admin/role-management/add', 
    component: RoleAddEditComponent
  },
  { 
    path: 'admin/dashboard', 
    component: AdminDashboardComponent
  },
  {
    path: 'admin/user-management', 
    component: UserListingComponent, 
    // canActivate: [AuthguardService], 
    resolve: { userManagementData: ResolveService },
    data: {
      requestcondition: {
        source: 'data_users',
        condition: {
          type: "employee"
        }
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'admin/role-management', 
    component: RoleListingComponent, 
    // canActivate: [AuthguardService], 
    resolve: { roleManagementData: ResolveService },
    data: {
      requestcondition: {
        source: 'data_roles',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'admin/user-management/edit/:_id', 
    component: UserAddEditComponent, 
    // canActivate: [AuthguardService],
    resolve: { userData: ResolveService },
    data: {
      requestcondition: {
        source: 'data_users',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
  {
    path: 'admin/role-management/edit/:_id', 
    component: RoleAddEditComponent, 
    // canActivate: [AuthguardService],
    resolve: { roleData: ResolveService },
    data: {
      requestcondition: {
        source: 'data_users',
        condition: {}
      },
      endpoint: 'datalist'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
