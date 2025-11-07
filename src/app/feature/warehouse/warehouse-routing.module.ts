import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PickingPageComponent } from "./picking/pages/picking/picking-page.component";
import { LayoutPageComponent } from "src/app/core/components/layout-page/layout-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'picking',
                component: PickingPageComponent,
            },
        ]
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
export class WarehouseRoutingModule { }