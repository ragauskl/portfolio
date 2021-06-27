import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ImgBubblesComponent } from './img-bubbles.component'

describe('ImgBubblesComponent', () => {
  let component: ImgBubblesComponent
  let fixture: ComponentFixture<ImgBubblesComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgBubblesComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBubblesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
