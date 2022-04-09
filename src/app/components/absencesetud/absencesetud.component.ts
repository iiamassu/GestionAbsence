import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-absencesetud',
  templateUrl: './absencesetud.component.html',
  styleUrls: ['./absencesetud.component.css']
})
export class AbsencesetudComponent implements OnInit {


  nom !: string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.nom = params.nom
    });

  }

}
