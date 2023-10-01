import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // image_hidden='false';
  constructor(private router:Router){
  }
  image_display(){
    const currentRoute = this.router.url;

    // Check if the current route is the home page
    return (currentRoute === '/' || currentRoute ==='/About' || currentRoute==='/Contact');
  }
}
