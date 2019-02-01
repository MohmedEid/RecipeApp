import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  NavSelected = new EventEmitter<string>();

  onNavSelect(NavName: string){
    this.NavSelected.emit(NavName);
  }

  constructor() { }

  ngOnInit() {
  }

}
