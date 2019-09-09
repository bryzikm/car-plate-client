import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlateListComponent } from './car-plate-list.component';

describe('CarPlateListComponent', () => {
  let component: CarPlateListComponent;
  let fixture: ComponentFixture<CarPlateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPlateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPlateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
