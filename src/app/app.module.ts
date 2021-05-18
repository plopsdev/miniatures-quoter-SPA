import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; //import du module pour l'api
import { FormsModule } from '@angular/forms' //pour gérer les formulaires
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesManagerComponent } from './quotes-manager/quotes-manager.component';
import { QuoteRowComponent } from './quote-row/quote-row.component';
import { AskAQuoteComponent } from './ask-a-quote/ask-a-quote.component';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';
import { UserDataScreenComponent } from './user-data-screen/user-data-screen.component';
import { QuoteService } from './services/quote.service';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HomeComponent } from './static-pages/home/home.component';
import { GalleryComponent } from './static-pages/gallery/gallery.component';
import { AboutComponent } from './static-pages/about/about.component';
// import { QuoteDetailsViewComponent } from './pages/admin/quote-details-view/quote-details-view.component';
// import { QuotesManagerViewComponent } from './pages/admin/quotes-manager-view/quotes-manager-view.component';
// import { AboutViewComponent } from './pages/client/about-view/about-view.component';
// import { ConfirmationViewComponent } from './pages/client/ask-a-quote/confirmation-view/confirmation-view.component';
// import { MiniaturesGroupsViewComponent } from './pages/client/ask-a-quote/miniatures-groups-view/miniatures-groups-view.component';
// import { UserInfosViewComponent } from './pages/client/ask-a-quote/user-infos-view/user-infos-view.component';
// import { GalleryViewComponent } from './pages/client/gallery-view/gallery-view.component';
// import { HomeViewComponent } from './pages/client/home-view/home-view.component';
// import { TestComponent } from './pages/admin/quotes-manager-view/test/test.component';
// import { QuotesManagerViewModule } from './pages/admin/quotes-manager-view/quotes-manager-view.module';



const appRoutes: Routes = [
    { path: 'quotes-manager', component: QuotesManagerComponent },
    { path: 'quotes-manager/:id', component: QuoteDetailsComponent },
    { path: 'client', component: HomeComponent },
    { path: 'client/user-data', component: UserDataScreenComponent },
    { path: 'client/ask-a-quote', component: AskAQuoteComponent },
    { path: 'client/confirmation', component: ConfirmationScreenComponent },
    { path: 'client/about', component: AboutComponent },
    { path: 'client/gallery', component: GalleryComponent }
    
    // { path: 'admin/quote-details/:id', component: QuoteDetailsViewComponent },

    // { path: 'client', component: HomeViewComponent },
    // { path: 'client/about', component: AboutViewComponent },
    // { path: 'client/gallery', component: GalleryViewComponent },
    // { path: 'client/ask-a-quote/user-infos', component: UserInfosViewComponent },
    // { path: 'client/ask-a-quote/miniatures-groups', component: MiniaturesGroupsViewComponent },
    // { path: 'client/ask-a-quote/confirmation', component: ConfirmationViewComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    QuotesManagerComponent,
    QuoteRowComponent,
    AskAQuoteComponent,
    ConfirmationScreenComponent,
    UserDataScreenComponent,
    QuoteDetailsComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [
      AppComponent,
      QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
