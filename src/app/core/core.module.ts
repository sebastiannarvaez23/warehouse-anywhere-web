import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';

import { BlurLayerComponent } from './components/blur-layer/blur-layer.component';
import { CardPrimaryComponent } from './components/card-primary/card-primary.component';
import { CardSecondaryComponent } from './components/card-secondary/card-secondary.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { ModalPrimaryComponent } from './components/modal-primary/modal-primary.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TablePrimaryComponent } from './components/table-primary/table-primary.component';
import { FormInputComponent } from './components/form-input/form-input.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        BlurLayerComponent,
        CardPrimaryComponent,
        CardSecondaryComponent,
        ModalPrimaryComponent,
        SidebarComponent,
        TablePrimaryComponent,
        LayoutPageComponent,
        FormInputComponent,
    ],
    exports: [
        CardPrimaryComponent,
        CardSecondaryComponent,
        SidebarComponent,
        TablePrimaryComponent,
        LayoutPageComponent,
        FormInputComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        TranslateModule,
    ]
})
export class CoreModule { }