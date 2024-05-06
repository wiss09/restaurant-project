import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlatComponent } from './single-plat.component';

describe('SinglePlatComponent', () => {
  let component: SinglePlatComponent;
  let fixture: ComponentFixture<SinglePlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
