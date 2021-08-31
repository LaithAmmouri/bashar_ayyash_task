import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DestinationItemComponent } from './components/destination-item/destination-item.component';
import { FallbackImageDirective } from './directives/fallback-image.directive';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { IndexComponent } from './components/pages/index/index.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { DetailsHeaderComponent } from './components/pages/details-header/details-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestinationsComponent,
    DestinationItemComponent,
    FallbackImageDirective,
    SearchComponent,
    DetailsComponent,
    FooterComponent,
    IndexComponent,
    PagenotfoundComponent,
    DetailsHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
