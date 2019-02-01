import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';

  loadNavName = 'recipes';
  onNavigate(NavName: string){
    this.loadNavName = NavName;
  }

}
