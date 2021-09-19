import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ModifyComponent } from './components/modify/modify.component';

const routes: Routes = [
 
  {path: 'incio', component: InicioComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:ModifyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
