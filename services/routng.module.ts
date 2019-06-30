import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { LeadListComponent } from 'src/app/lead-list/lead-list.component';
import { LoginGaurdGuard } from 'src/app/login-gaurd.guard';
import { RoleEnum } from 'src/app/role-enum.enum';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { ProjectComponent } from 'src/app/project/project.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "welcome" },
    { path: "login", component: LoginComponent },
    { path: "logout/:id", component: LogoutComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "dashboard", component: LeadListComponent, canActivate: [LoginGaurdGuard], data: { roles: [RoleEnum.Contractor] } },
    { path: "project", component: ProjectComponent, canActivate: [LoginGaurdGuard], data: { roles: [RoleEnum.Contractor, RoleEnum.Developer] } },
    { path: '**', redirectTo: 'login' }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}