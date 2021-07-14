import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMItemsComponent } from './card-m-items.component';

describe('CardMItemsComponent', () => {
  let component: CardMItemsComponent;
  let fixture: ComponentFixture<CardMItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
