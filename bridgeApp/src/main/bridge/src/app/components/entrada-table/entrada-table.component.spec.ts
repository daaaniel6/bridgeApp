import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaTableComponent } from './entrada-table.component';

describe('EntradaTableComponent', () => {
  let component: EntradaTableComponent;
  let fixture: ComponentFixture<EntradaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
