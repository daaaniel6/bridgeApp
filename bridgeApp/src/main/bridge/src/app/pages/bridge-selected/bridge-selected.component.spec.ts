import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeSelectedComponent } from './bridge-selected.component';

describe('BridgeSelectedComponent', () => {
  let component: BridgeSelectedComponent;
  let fixture: ComponentFixture<BridgeSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridgeSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgeSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
