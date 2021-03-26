import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  ruta : string;
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    console.log(this.router.url)
    this.ruta = this.router.url
  }

}
