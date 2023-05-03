import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
  precio:string;
}

@Component({
  selector: 'app-ion-searchbar',
  templateUrl: './ion-searchbar.page.html',
  styleUrls: ['./ion-searchbar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})


export class IonSearchbarPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  //airplane-outline

  //, 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'
   data: Componente[] = [
    {
      icon: 'airplane-outline',
      name: 'Buenos Aires',
      redirectTo: '/#',
      precio:'500'
    },
    {
      icon: 'airplane-outline',
      name: 'Cairo',
      redirectTo: '/#',
      precio:'200'
    },
    {
      icon: 'airplane-outline',
      name: 'Geneva',
      redirectTo: '/#',
      precio:'300'
    },
    {
      icon: 'airplane-outline',
      name: 'Hong Kong',
      redirectTo: '/#',
      precio:'900'
    },
    {
      icon: 'airplane-outline',
      name: 'Istanbul',
      redirectTo: '/#',
      precio:'500'
    },
    {
      icon: 'airplane-outline',
      name: 'London',
      redirectTo: '/#',
      precio:'700'
    },
    {
      icon: 'airplane-outline',
      name: 'Madrid',
      redirectTo: '/#',
      precio:'600'
    },
    {
      icon: 'airplane-outline',
      name: 'Germany',
      redirectTo: '/#',
      precio:'450'
    },
  ];

  public results = [...this.data];

  handleInput(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase() || '';
    this.results = this.data.filter(
      (d) => d.name.toLowerCase().indexOf(query) > -1
    );
    //toLowerCase().indexOf(query) > -1
  }
}
