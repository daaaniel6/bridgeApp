import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBridgeComponent } from './new-bridge.component';

describe('NewBridgeComponent', () => {
  let component: NewBridgeComponent;
  let fixture: ComponentFixture<NewBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
