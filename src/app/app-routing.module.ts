import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MyViewComponent } from './my-view/my-view.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: "myList/:id",canActivate: [AuthGuard], component: SingleViewComponent },
  { path: 'myList',canActivate: [AuthGuard], component: MyViewComponent },
  { path: '', component: MyViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
