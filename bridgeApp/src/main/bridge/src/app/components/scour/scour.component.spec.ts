import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScourComponent } from './scour.component';

describe('ScourComponent', () => {
  let component: ScourComponent;
  let fixture: ComponentFixture<ScourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
