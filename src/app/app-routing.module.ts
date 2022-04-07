import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesenseiComponent } from './components/absencesensei/absencesensei.component';
import { AbsencesetudComponent } from './components/absencesetud/absencesetud.component';
import { AjouterenseignantComponent } from './components/ajouterenseignant/ajouterenseignant.component';
import { AjouteretudiantComponent } from './components/ajouteretudiant/ajouteretudiant.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';

const routes: Routes = [
  {path : "enseignants" , component : EnseignantComponent},
  {path : "etudiants" , component : EtudiantComponent},
  {path : "ajouterabsetud" , component : AjouteretudiantComponent},
  {path : "ajouterabsensei" , component : AjouterenseignantComponent},
  {path : "absensesetud" , component : AbsencesetudComponent},
  {path : "absensesensei" , component : AbsencesenseiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
