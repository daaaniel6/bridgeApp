import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandrailRailingComponent } from './handrail-railing.component';

describe('HandrailRailingComponent', () => {
  let component: HandrailRailingComponent;
  let fixture: ComponentFixture<HandrailRailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandrailRailingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandrailRailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
