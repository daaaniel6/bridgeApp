import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosTableComponent } from './elementos-table.component';

describe('ElementosTableComponent', () => {
  let component: ElementosTableComponent;
  let fixture: ComponentFixture<ElementosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
