import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { CartComponent } from './cart/cart.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FaqComponent,
    CartComponent,
    CalendarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCr8j0ZJdzGMHC_WK-8jojosvkQmOmyyxU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
