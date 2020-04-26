import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { SkillMetadata, SkillLevel } from '@core/utils/content'

@Component({
  selector: 'app-horizontal-skill-bar',
  templateUrl: './horizontal-skill-bar.component.html',
  styleUrls: ['./horizontal-skill-bar.component.scss']
})
export class HorizontalSkillBarComponent implements OnInit {
  @Input() skill!: SkillMetadata
  skillLevelName: string

  ngOnInit () {
    this.skillLevelName = SkillLevel[this.skill.level]
  }
}
