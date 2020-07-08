import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/pages/login/login.component'
import { WorkspaceComponent } from 'src/app/pages/workspace/workspace.component'


const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'workspace', component: WorkspaceComponent },
	{ path: '**' ,pathMatch:'full', redirectTo:'workspace' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
