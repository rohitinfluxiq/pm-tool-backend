import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {MaterialModule} from './Module/material/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from 'login-lib-influxiq';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { UserAddEditComponent } from './components/admin/user-management/user-add-edit/user-add-edit.component';
import { UserListingComponent } from './components/admin/user-management/user-listing/user-listing.component';
import { ListingModule } from 'listing-angular7';
import { RoleAddEditComponent } from './components/admin/role-management/role-add-edit/role-add-edit.component';
import { RoleListingComponent } from './components/admin/role-management/role-listing/role-listing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { MatDialogRef, MatDialog } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AdminDashboardComponent,
    UserManagementComponent,
    UserAddEditComponent,
    UserListingComponent,
    RoleAddEditComponent,
    RoleListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LoginModule,
    ListingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
