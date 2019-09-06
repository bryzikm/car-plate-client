import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlateDialogComponent } from './car-plate-dialog.component';

describe('CarPlateDialogComponent', () => {
  let component: CarPlateDialogComponent;
  let fixture: ComponentFixture<CarPlateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPlateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPlateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
