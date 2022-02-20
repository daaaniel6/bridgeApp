import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteRowComponent } from './concrete-row.component';

describe('ConcreteRowComponent', () => {
  let component: ConcreteRowComponent;
  let fixture: ComponentFixture<ConcreteRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
