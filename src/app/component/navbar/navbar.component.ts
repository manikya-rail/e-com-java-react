import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',

]

})



export class NavbarComponent {
public isCollapsed=true;
bool:boolean=true;

constructor() {}
isScrolled = false;

@HostListener("window:scroll")


  scrollEvent() {
    window.pageYOffset > 150 ? (this.isScrolled = true) : (this.isScrolled = false);
}


}
