import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent implements OnInit{

  opened : boolean = false;

  constructor (private _renderer : Renderer2) {}

  ngOnInit(): void {
  }

  open () {
    this.opened = true;
  }

  close () {
    this.opened = false;
  }

}
