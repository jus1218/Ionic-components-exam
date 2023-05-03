import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule,ComponentsModule]
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      icon:'trash-outline',
      data: {
        action: 'delete'
      }
    },
    {
      text: 'Share',
      icon:'share-social-outline',
      data: {
        action: 'share'
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon:'close-outline',
      data: {
        action: 'cancel'
      }
    }
  ];

}
