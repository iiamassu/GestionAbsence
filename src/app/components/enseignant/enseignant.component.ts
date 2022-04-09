import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  enseignants : any;

  constructor(private service : EnseignantService, private route : Router) { }

  ngOnInit(): void {
    this.service.getEnseignants().subscribe(data=>{
      this.enseignants = data;
    });
  }



  listeAbsenceEnseignant(mat:string,nom:string) : void
  {
    this.route.navigate(['/absensesensei'],{queryParams : {mat:mat , nom:nom}});
  }

  ajouterAbs(mat:string,nom:string):void
  {
    this.route.navigate(['/ajouterabsensei'],{queryParams : {data:mat , nom:nom}});
  }

}
