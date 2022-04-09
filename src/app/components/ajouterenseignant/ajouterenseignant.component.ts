import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouterenseignant',
  templateUrl: './ajouterenseignant.component.html',
  styleUrls: ['./ajouterenseignant.component.css']
})
export class AjouterenseignantComponent implements OnInit {

  nom !: any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.nom = params.nom
    });

  }

}
