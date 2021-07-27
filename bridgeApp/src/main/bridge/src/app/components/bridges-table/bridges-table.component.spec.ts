import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgesTableComponent } from './bridges-table.component';

describe('BridgesTableComponent', () => {
  let component: BridgesTableComponent;
  let fixture: ComponentFixture<BridgesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
