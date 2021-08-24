import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauceTableComponent } from './cauce-table.component';

describe('CauceTableComponent', () => {
  let component: CauceTableComponent;
  let fixture: ComponentFixture<CauceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CauceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
