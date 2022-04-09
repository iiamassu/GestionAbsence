import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouteretudiant',
  templateUrl: './ajouteretudiant.component.html',
  styleUrls: ['./ajouteretudiant.component.css']
})
export class AjouteretudiantComponent implements OnInit {

  nom !: string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.nom = params.nom
    });
  }

}
