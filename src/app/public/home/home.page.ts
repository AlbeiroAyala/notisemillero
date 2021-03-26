import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, IonSlide, IonContent } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toggleMenu: boolean;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.toggleMenu = false;
   

  }
  openMenu(){
    this.toggleMenu = !this.toggleMenu
  }
}
