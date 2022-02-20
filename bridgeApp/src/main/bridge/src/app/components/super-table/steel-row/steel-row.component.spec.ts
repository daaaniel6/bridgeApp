import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelRowComponent } from './steel-row.component';

describe('SteelRowComponent', () => {
  let component: SteelRowComponent;
  let fixture: ComponentFixture<SteelRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteelRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
