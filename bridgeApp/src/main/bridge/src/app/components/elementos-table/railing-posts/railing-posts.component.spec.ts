import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailingPostsComponent } from './railing-posts.component';

describe('RailingPostsComponent', () => {
  let component: RailingPostsComponent;
  let fixture: ComponentFixture<RailingPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailingPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
