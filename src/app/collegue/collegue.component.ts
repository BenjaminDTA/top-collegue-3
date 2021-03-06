import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avis, Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue
  message: string
  disabledBtn1 = false;
  disabledBtn2 = false;

  //Traiter() permet de mettre a jour le collegue avec le collegue a jour de la requete
  traiter(param: Avis) {
    this._dataServ.donnerUnAvis(this.collegue, param)
      .subscribe(
        collegueServeur => this.collegue = collegueServeur
      )
    this.testScore();
  }

  constructor(private _dataServ: DataService) {

  }

  ngOnInit() {
    this.testScore();
  }


  testScore() {
    console.log(this.collegue.pseudo)
    if (this.collegue.score >= 100) {
      this.disabledBtn1 = true
    } else {
      this.disabledBtn1 = false
      if (this.collegue.score <= -100) {
        this.disabledBtn2 = true
      } else {
        this.disabledBtn2 = false
      }
    }
  }

}
