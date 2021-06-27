import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ArrowScrollComponent } from './scroll-block.component'

describe('ArrowScrollComponent', () => {
  let component: ArrowScrollComponent
  let fixture: ComponentFixture<ArrowScrollComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowScrollComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowScrollComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
