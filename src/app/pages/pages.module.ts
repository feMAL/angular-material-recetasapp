import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component'


@NgModule({
	declarations: [
		LoginComponent,
		WorkspaceComponent
	],
  	imports: [
    	CommonModule
  	],
  	exports: [
  		LoginComponent,
  		WorkspaceComponent
  	]
})
export class PagesModule { }
