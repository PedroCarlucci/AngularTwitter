import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./components/user-login/user-login.component";
import { UserSignupComponent } from "./components/user-signup/user-signup.component";
import { MainPageComponent } from "./components/main-page/main-page.component";

const routes: Routes = [
    {path: 'login', component: UserLoginComponent},
    {path: 'signup', component: UserSignupComponent},
    {path: 'feed', component: MainPageComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }