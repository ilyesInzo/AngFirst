import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

import { MyService } from './services/myservice.service';
import { Authentification } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';

import { AuthComponent } from './auth/auth.component';
import { MyViewComponent } from './my-view/my-view.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PostComponentComponent,
    PostListComponentComponent,
    AuthComponent,
    MyViewComponent,
    SingleViewComponent,
    FourOhFourComponent,
    EditViewComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, MyService, Authentification, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
