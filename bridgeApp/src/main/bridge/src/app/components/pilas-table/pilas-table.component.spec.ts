import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilasTableComponent } from './pilas-table.component';

describe('PilasTableComponent', () => {
  let component: PilasTableComponent;
  let fixture: ComponentFixture<PilasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilasTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
