import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from "./login/pages/login/login-page.component";
import { SecurityModule } from './security.module';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SecurityRoutingModule { }