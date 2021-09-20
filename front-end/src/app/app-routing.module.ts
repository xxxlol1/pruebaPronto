import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { AddComponent } from './components/add/add.component';
import { AvailableUsersComponent } from './components/available-users/available-users.component';
import { IndexComponent } from './components/index/index.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModifyComponent } from './components/modify/modify.component';

const routes: Routes = [
  
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'add', component:AddComponent},
  {path:'index', component:IndexComponent},
  {path:'available-users', component:AvailableUsersComponent},
  {path:'addusers', component:AddUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
