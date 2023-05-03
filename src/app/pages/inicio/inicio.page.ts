import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaComponentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet' 
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert' 
    },
    {
      icon: 'search-outline',
      name: 'Buscar',
      redirectTo: '/ion-searchbar' 
    }
  ];

}
