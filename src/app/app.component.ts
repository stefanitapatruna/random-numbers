import { Component } from '@angular/core';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private showSection:MenuServiceService){
  }
  
  title = 'random-numbers';
}
