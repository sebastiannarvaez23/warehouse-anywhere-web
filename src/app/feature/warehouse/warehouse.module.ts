import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PickingPageComponent } from './picking/pages/picking/picking-page.component';
import { IndicatorComponent } from './picking/components/indicator/indicator.component';
import { SaleorderSearchComponent } from './picking/components/saleorder-search/saleorder-search.component';
import { SaleorderInfoComponent } from './picking/components/saleorder-info/saleorder-info.component';
import { PickingListComponent } from './picking/components/picking-list/picking-list.component';
import { BoxComponent } from './picking/pages/box/box.component';
import { CoreModule } from 'src/app/core/core.module';
import { WarehouseRoutingModule } from './warehouse-routing.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        PickingPageComponent,
        IndicatorComponent,
        SaleorderSearchComponent,
        SaleorderInfoComponent,
        PickingListComponent,
        BoxComponent,
    ],
    exports: [PickingPageComponent],
    imports: [
        CommonModule,
        NgxChartsModule,
        CoreModule,
        WarehouseRoutingModule,
        TranslateModule,
    ],
})
export class WarehouseModule { }