import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowWidthRowComponent } from './row-width-row.component';

describe('RowWidthRowComponent', () => {
  let component: RowWidthRowComponent;
  let fixture: ComponentFixture<RowWidthRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowWidthRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowWidthRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
