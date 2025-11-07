import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'security',
    loadChildren: () =>
      import('./feature/security/security.module')
        .then(m => m.SecurityModule),
  },
  {
    path: 'warehouse',
    loadChildren: () =>
      import('./feature/warehouse/warehouse.module')
        .then(m => m.WarehouseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
