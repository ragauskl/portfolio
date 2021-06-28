import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { HorizontalTabPairComponent } from './horizontal-tab-pair.component'

describe('HorizontalTabPairComponent', () => {
  let component: HorizontalTabPairComponent
  let fixture: ComponentFixture<HorizontalTabPairComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalTabPairComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalTabPairComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
