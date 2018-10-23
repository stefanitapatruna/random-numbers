import { Component, OnInit, Injectable } from '@angular/core';
import { MenuServiceService } from '../../menu-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private menuService:MenuServiceService ) { }

  ngOnInit() {
  }

  setShowData (data:string){
    this.menuService.showData(data);
  }
}
