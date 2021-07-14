import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualItemsComponent } from './mutual-items.component';

describe('MutualItemsComponent', () => {
  let component: MutualItemsComponent;
  let fixture: ComponentFixture<MutualItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
