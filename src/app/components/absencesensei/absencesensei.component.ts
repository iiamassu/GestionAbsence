import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-absencesensei',
  templateUrl: './absencesensei.component.html',
  styleUrls: ['./absencesensei.component.css']
})
export class AbsencesenseiComponent implements OnInit {

  nom !: string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.nom = params.nom
    });

  }

}
