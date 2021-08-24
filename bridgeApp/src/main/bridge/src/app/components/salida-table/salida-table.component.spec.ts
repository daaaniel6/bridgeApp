import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaTableComponent } from './salida-table.component';

describe('SalidaTableComponent', () => {
  let component: SalidaTableComponent;
  let fixture: ComponentFixture<SalidaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
