import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Enums } from './common/enum.service';
import { FocusDirective } from './common/focus.directive';
import { GenerateInfo, Find } from './main/project/project.service';
import { MainComponent } from './main/main.component';
import { TreeComponent } from './common/tree.component';
import { D3TreeComponent } from './common/d3tree.component';

import { StatusPipe } from './main/status.pipe';
import { ModalComponent } from './common/modal.component';
import { ProjectComponent } from './main/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    MainComponent,
    ModalComponent,
    StatusPipe,
    TreeComponent,
    D3TreeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GenerateInfo, Find],
  bootstrap: [AppComponent]
})
export class AppModule { }
