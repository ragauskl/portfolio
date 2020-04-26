import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { SkillMetadata, SkillLevel, BubbleType } from '@core/utils/content'

@Component({
  selector: 'app-horizontal-skill-bar',
  templateUrl: './horizontal-skill-bar.component.html',
  styleUrls: ['./horizontal-skill-bar.component.scss']
})
export class HorizontalSkillBarComponent implements OnInit {
  @Input() skill!: SkillMetadata
  skillLevelName: string
  src: string
  smallerIcon = false

  ngOnInit () {
    this.skillLevelName = SkillLevel[this.skill.level]
    const srcFolder = this.skill.bubble === BubbleType.DevOps ? 'devops' : 'development'
    this.src = `assets/icons/skills/jpg/${srcFolder}/${this.skill.src}`

    this.smallerIcon = ['swagger', 'javascript', 'typescript'].includes(this.skill.sprite)
  }
}
