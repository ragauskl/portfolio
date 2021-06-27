import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ExperienceSectionComponent } from './experience-section.component'

describe('ExperienceSectionComponent', () => {
  let component: ExperienceSectionComponent
  let fixture: ComponentFixture<ExperienceSectionComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSectionComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
