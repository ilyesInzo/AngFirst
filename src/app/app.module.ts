import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

import { MyService } from './services/myservice.service';
import { Authentification } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { AuthComponent } from './auth/auth.component';
import { MyViewComponent } from './my-view/my-view.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PostComponentComponent,
    PostListComponentComponent,
    AuthComponent,
    MyViewComponent,
    SingleViewComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, MyService, Authentification],
  bootstrap: [AppComponent]
})
export class AppModule { }
