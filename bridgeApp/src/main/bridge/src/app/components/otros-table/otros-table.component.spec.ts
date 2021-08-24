import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosTableComponent } from './otros-table.component';

describe('OtrosTableComponent', () => {
  let component: OtrosTableComponent;
  let fixture: ComponentFixture<OtrosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
