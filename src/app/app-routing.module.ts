import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
