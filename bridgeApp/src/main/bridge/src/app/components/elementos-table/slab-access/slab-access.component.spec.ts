import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlabAccessComponent } from './slab-access.component';

describe('SlabAccessComponent', () => {
  let component: SlabAccessComponent;
  let fixture: ComponentFixture<SlabAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlabAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlabAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
