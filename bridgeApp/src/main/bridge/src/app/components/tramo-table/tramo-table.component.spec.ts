import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramoTableComponent } from './tramo-table.component';

describe('TramoTableComponent', () => {
  let component: TramoTableComponent;
  let fixture: ComponentFixture<TramoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
