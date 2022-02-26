import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingBridgesComponent } from './existing-bridges.component';

describe('ExistingBridgesComponent', () => {
  let component: ExistingBridgesComponent;
  let fixture: ComponentFixture<ExistingBridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingBridgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingBridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
