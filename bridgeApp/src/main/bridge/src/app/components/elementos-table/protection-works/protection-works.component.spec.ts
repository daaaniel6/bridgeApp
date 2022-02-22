import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionWorksComponent } from './protection-works.component';

describe('ProtectionWorksComponent', () => {
  let component: ProtectionWorksComponent;
  let fixture: ComponentFixture<ProtectionWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectionWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
