import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/routes/home-page/home-page.component';
import { JoinAsProComponent } from './components/routes/join-as-pro/join-as-pro.component';
import { PostTaskComponent } from './components/routes/post-task/post-task.component';
import { HireProComponent } from './components/routes/hire-pro/hire-pro.component';
import { CustomerComponent } from './components/routes/customer/customer.component';
import { SubCategoryComponent } from './components/shared/sub-category/sub-category.component';
import { ProfessionalsComponent } from './components/routes/professionals/professionals.component';
import { AllTaskComponent } from './components/routes/all-task/all-task.component';
import { DetailedTaskViewComponent } from './components/routes/detailed-task-view/detailed-task-view.component';
import { MytaskComponent } from './components/routes/mytask/mytask.component';
import { AppliedTasksComponent } from './components/routes/applied-tasks/applied-tasks.component';
import { ProfileComponent } from './components/routes/profile/profile.component';
import { TermsConditionComponent } from './components/routes/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './components/routes/privacy-policy/privacy-policy.component';
import { LoginComponent } from './components/routes/login/login.component';
import { RegistrationComponent } from './components/routes/registration/registration.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'joinaspro', component: JoinAsProComponent },
  { path: 'task', component: PostTaskComponent },
  { path: 'hire-pro', component: HireProComponent },
  { path: 'search-task', component: CustomerComponent },
  { path: 'subcategory/:categoryId', component: SubCategoryComponent },
  { path: 'professionals', component: ProfessionalsComponent },
  { path: 'alltasks', component: AllTaskComponent },
  { path: 'taskdetails/:taskId', component: DetailedTaskViewComponent },
  { path: 'mytasks', component: MytaskComponent },
  { path: 'applied', component: AppliedTasksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'terms', component: TermsConditionComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
<<<<<<< HEAD
  { path: 'login', component: LoginMainPageComponent },
  { path: 'register', component: RegisterMainPageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'faq', component: FaqComponent }

=======
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
>>>>>>> e0f62638e9b3c3f9dc9969fd9d8f6bc8998398de


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
