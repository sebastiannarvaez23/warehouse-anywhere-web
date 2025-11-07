import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-sidebar>
      <router-outlet></router-outlet>
    </app-sidebar>
  `,
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent { }
