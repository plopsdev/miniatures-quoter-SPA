import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsViewComponent } from './pages/admin/quote-details-view/quote-details-view.component';
import { QuotesManagerViewComponent } from './pages/admin/quotes-manager-view/quotes-manager-view.component';
import { AboutViewComponent } from './pages/client/about-view/about-view.component';
import { ConfirmationViewComponent } from './pages/client/ask-a-quote/confirmation-view/confirmation-view.component';
import { MiniaturesGroupsViewComponent } from './pages/client/ask-a-quote/miniatures-groups-view/miniatures-groups-view.component';
import { UserInfosViewComponent } from './pages/client/ask-a-quote/user-infos-view/user-infos-view.component';
import { GalleryViewComponent } from './pages/client/gallery-view/gallery-view.component';
import { HomeViewComponent } from './pages/client/home-view/home-view.component';

const appRoutes: Routes = [
    { path: 'admin/quotes-manager', component: QuotesManagerViewComponent },
    { path: 'admin/quote-details', component: QuoteDetailsViewComponent },

    { path: 'client', component: HomeViewComponent },
    { path: 'client/about', component: AboutViewComponent },
    { path: 'client/gallery', component: GalleryViewComponent },
    { path: 'client/ask-a-quote/user-infos', component: UserInfosViewComponent },
    { path: 'client/ask-a-quote/miniatures-groups', component: MiniaturesGroupsViewComponent },
    { path: 'client/ask-a-quote/confirmation', component: ConfirmationViewComponent }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
