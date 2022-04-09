import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants : any;

  constructor(private service : EtudiantService, private route : Router) { }

  ngOnInit(): void {
    this.service.getEtudiants().subscribe(data=>{
      this.etudiants = data;
    });
  }

  listeAbsenceEtudiant(mat:string,nom:string) : void
  {
    this.route.navigate(['/absensesetud'],{queryParams : {mat:mat , nom:nom}});
  }

  ajouterAbs(mat:string,nom:string) {
    this.route.navigate(['/ajouterabsetud'],{queryParams : {data:mat , nom:nom}},);
  }

}
