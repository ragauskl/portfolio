import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { FeaturedProjectsComponent } from './featured-projects.component'

describe('FeaturedProjectsComponent', () => {
  let component: FeaturedProjectsComponent
  let fixture: ComponentFixture<FeaturedProjectsComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProjectsComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProjectsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
