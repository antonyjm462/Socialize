import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthComponent } from './auth/services/auth/auth.component';
import { CoreComponent } from './core/components/core/core.component';
import { ListComponent } from './circle/components/list/list.component';
import { ItemComponent } from './circle/components/item/item.component';
import { GroupComponent } from './circle/components/group/group.component';
import { OwnerComponent } from './help/components/owner/owner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    CoreComponent,
    ListComponent,
    ItemComponent,
    GroupComponent,
    OwnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
