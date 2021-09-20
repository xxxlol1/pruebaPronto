import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { IndexComponent } from './components/index/index.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModifyComponent } from './components/modify/modify.component';

const routes: Routes = [
  
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'add', component:AddComponent},
  {path:'edit', component:ModifyComponent},
  {path:'index', component:IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
