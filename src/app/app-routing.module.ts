import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CennikComponent } from './cennik/cennik.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InfoComponent } from './info/info.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'cennik', component: CennikComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
