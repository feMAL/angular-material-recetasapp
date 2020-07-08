import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceCardsComponent } from './workspace-cards/workspace-cards.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './recetas/view/view.component';
import { AddComponent } from './recetas/add/add.component';
import { EditComponent } from './recetas/edit/edit.component';



@NgModule({
  declarations: [
  	WorkspaceCardsComponent,
  	HeaderComponent,
  	FooterComponent,
  	ViewComponent,
  	AddComponent,
  	EditComponent
  ],
  imports: [
    CommonModule
  ],exports: [
	  WorkspaceCardsComponent,
	  HeaderComponent,
	  FooterComponent,
	  ViewComponent,
	  AddComponent,
	  EditComponent
  ]
})
export class ComponentsModule { }
