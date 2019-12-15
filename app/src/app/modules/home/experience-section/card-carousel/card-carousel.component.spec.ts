import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardCarouselComponent } from './card-carousel.component'

describe('CardCarouselComponent', () => {
  let component: CardCarouselComponent
  let fixture: ComponentFixture<CardCarouselComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarouselComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarouselComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
