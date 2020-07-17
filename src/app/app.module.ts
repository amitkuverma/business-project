import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationService } from './services/registration.service';
import { LoginService } from './services/login.service';
import { CategoryService } from './services/category.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CacheService } from './services/cache.service';
import { JoinAsProComponent } from './join-as-pro/join-as-pro.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { AddressComponent } from './address/address.component';
import { CategoryComponent } from './category/category.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './services/task.service';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { AllTaskComponent } from './all-task/all-task.component'
import { ProfessionalsService } from './services/professionals.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ProfessionalDetailComponent } from './professional-detail/professional-detail.component';
import { DetailedTaskViewComponent } from './detailed-task-view/detailed-task-view.component';
import { MytaskComponent } from './mytask/mytask.component';
import { ProfileComponent } from './profile/profile.component';
import { AppliedTasksComponent } from './applied-tasks/applied-tasks.component';
import { AllTaskListComponent } from './all-task-list/all-task-list.component'




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HireProComponent } from './hire-pro/hire-pro.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './sharedComponents/about/about.component';
import { PhotosComponent } from './sharedComponents/photos/photos.component';
import { ReviewComponent } from './sharedComponents/review/review.component';
import { FaqComponent } from './sharedComponents/faq/faq.component';
import { SharedProfessionalComponent } from './shared-professional/shared-professional.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    JoinAsProComponent,
    SubCategoryComponent,
    AddressComponent,
    CategoryComponent,
    TasksComponent,
    ProfessionalsComponent,
    AllTaskComponent,
    TaskDetailComponent,
    ProfessionalDetailComponent,
    DetailedTaskViewComponent,
    MytaskComponent,
    ProfileComponent,
    AppliedTasksComponent,
    AllTaskListComponent,
    HireProComponent,
    CustomerComponent,
    AboutComponent,
    PhotosComponent,
    ReviewComponent,
    FaqComponent,
    SharedProfessionalComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [RegistrationService, CacheService, LoginService, CategoryService, TaskService, ProfessionalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
