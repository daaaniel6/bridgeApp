import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBridgeComponent } from './delete-bridge.component';

describe('DeleteBridgeComponent', () => {
  let component: DeleteBridgeComponent;
  let fixture: ComponentFixture<DeleteBridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBridgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
