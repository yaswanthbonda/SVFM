import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from "./contact/contact.component";
import { FaqComponent } from "./faq/faq.component";
import { HeaderComponent } from "./header/header.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "product-detail",
    component: ProductDetailComponent
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path: "faq",
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}