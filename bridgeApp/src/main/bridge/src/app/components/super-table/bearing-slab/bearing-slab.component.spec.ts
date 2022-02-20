import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearingSlabComponent } from './bearing-slab.component';

describe('BearingSlabComponent', () => {
  let component: BearingSlabComponent;
  let fixture: ComponentFixture<BearingSlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BearingSlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BearingSlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
