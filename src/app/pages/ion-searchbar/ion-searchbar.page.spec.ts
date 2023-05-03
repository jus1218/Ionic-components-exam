import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonSearchbarPage } from './ion-searchbar.page';

describe('IonSearchbarPage', () => {
  let component: IonSearchbarPage;
  let fixture: ComponentFixture<IonSearchbarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonSearchbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
