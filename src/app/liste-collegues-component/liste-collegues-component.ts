import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues-component.html',
  styleUrls: ['./liste-collegues-component.css']
})
export class ListeColleguesComponent implements OnInit {

  @Input() listeCollegues: Collegue[]
  p: number = 1;

  constructor() { }

  ngOnInit() {
  }



}
