import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { AjouteretudiantComponent } from './components/ajouteretudiant/ajouteretudiant.component';
import { AjouterenseignantComponent } from './components/ajouterenseignant/ajouterenseignant.component';
import { AbsencesenseiComponent } from './components/absencesensei/absencesensei.component';
import { AbsencesetudComponent } from './components/absencesetud/absencesetud.component';

@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    EtudiantComponent,
    AjouteretudiantComponent,
    AjouterenseignantComponent,
    AbsencesenseiComponent,
    AbsencesetudComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
