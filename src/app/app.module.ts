import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PostComponentComponent,
    PostListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
