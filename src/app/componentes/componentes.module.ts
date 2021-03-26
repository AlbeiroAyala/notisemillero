import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { NabvarComponent } from './nabvar/nabvar.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [FooterComponent,NabvarComponent,MenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports :[
    FooterComponent,
    NabvarComponent,
    MenuComponent
  ]
})
export class ComponentesModule { }
