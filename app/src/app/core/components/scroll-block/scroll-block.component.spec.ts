import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ArrowScrollComponent } from './scroll-block.component'

describe('ArrowScrollComponent', () => {
  let component: ArrowScrollComponent
  let fixture: ComponentFixture<ArrowScrollComponent>

  beforeEach(async(() => {
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
