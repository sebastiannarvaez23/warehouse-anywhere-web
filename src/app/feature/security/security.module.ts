import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CoreModule } from 'src/app/core/core.module';
import { LoginPageComponent } from './login/pages/login/login-page.component';
import { SecurityRoutingModule } from './security-routing.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        LoginPageComponent,
    ],
    exports: [
        LoginPageComponent,
    ],
    imports: [
        CommonModule,
        NgxChartsModule,
        HttpClientModule,
        CoreModule,
        SecurityRoutingModule,
        TranslateModule,
    ]
})
export class SecurityModule { }