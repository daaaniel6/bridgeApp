import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchRowComponent } from './stretch-row.component';

describe('StretchRowComponent', () => {
  let component: StretchRowComponent;
  let fixture: ComponentFixture<StretchRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StretchRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
