import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from "./components/information/information.component";
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './components/skills/skills.component';
import { VideoComponent } from './components/video/video.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormationComponent } from './components/formation/formation.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    InformationComponent,
    VideoComponent,
    ValidationComponent,
    ProjectsComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
