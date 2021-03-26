import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  toggleMenu : boolean;
  constructor() { }

  ngOnInit() {
    this.toggleMenu = false;
  }
  openMenu(){
    this.toggleMenu = !this.toggleMenu
  }
}
