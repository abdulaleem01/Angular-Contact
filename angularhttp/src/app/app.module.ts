import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ContactviewComponent } from './contactview/contactview.component'

import { ContactsService } from './contacts.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

// material ui
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


import { ContactaddComponent } from './contactadd/contactadd.component';
import { ContactupdateComponent } from './contactupdate/contactupdate.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactviewComponent,
    ContactaddComponent,
    ContactupdateComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
