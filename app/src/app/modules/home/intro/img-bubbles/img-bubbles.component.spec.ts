import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBubblesComponent } from './img-bubbles.component';

describe('ImgBubblesComponent', () => {
  let component: ImgBubblesComponent;
  let fixture: ComponentFixture<ImgBubblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgBubblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
