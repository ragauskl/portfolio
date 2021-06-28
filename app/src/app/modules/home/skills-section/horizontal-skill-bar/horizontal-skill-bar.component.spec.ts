import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { HorizontalSkillBarComponent } from './horizontal-skill-bar.component'

describe('HorizontalSkillBarComponent', () => {
  let component: HorizontalSkillBarComponent
  let fixture: ComponentFixture<HorizontalSkillBarComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalSkillBarComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalSkillBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
