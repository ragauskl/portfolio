import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ImageShatterComponent } from './image-shatter.component'

describe('ImageShatterComponent', () => {
  let component: ImageShatterComponent
  let fixture: ComponentFixture<ImageShatterComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageShatterComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageShatterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
