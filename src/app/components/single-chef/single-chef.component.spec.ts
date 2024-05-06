import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChefComponent } from './single-chef.component';

describe('SingleChefComponent', () => {
  let component: SingleChefComponent;
  let fixture: ComponentFixture<SingleChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
