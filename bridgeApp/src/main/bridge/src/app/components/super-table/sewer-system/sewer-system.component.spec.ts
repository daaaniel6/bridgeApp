import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewerSystemComponent } from './sewer-system.component';

describe('SewerSystemComponent', () => {
  let component: SewerSystemComponent;
  let fixture: ComponentFixture<SewerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewerSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SewerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
