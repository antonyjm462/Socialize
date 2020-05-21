import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CoreComponent } from './core/components/core/core.component';
import { ListComponent } from './circle/components/list/list.component';
import { ItemComponent } from './circle/components/item/item.component';
import { GroupComponent } from './circle/components/group/group.component';
import { HistoryComponent } from './history/components/history/history.component';
import { NeedComponent } from './help/components/need/need.component';
import { HaveComponent } from './help/components/have/have.component';
import { NeedItemComponent } from './help/components/need-item/need-item.component';
import { HaveItemComponent } from './help/components/have-item/have-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoreComponent,
    ListComponent,
    ItemComponent,
    GroupComponent,
    HistoryComponent,
    NeedComponent,
    HaveComponent,
    NeedItemComponent,
    HaveItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
