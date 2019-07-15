import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit {
  @ViewChild('bubblesLeft', { static: false }) bubblesLeft!: ElementRef<HTMLElement>

  constructor (
  private _http: HttpClient
 ) {}

  ngAfterViewInit () {
    this._http.get('assets/skills.json').subscribe((json: SkillsConfig) => {
      const maxItems = Math.max(json.development.length, json.devops.length)
      // TODO: randomize sizes and position
      for (const skill of json.development) {
        const div = document.createElement('div')
        div.className = 'bubble'

        const img = document.createElement('img')
        img.src = `assets/icons/skills/development/${skill.src}`

        div.appendChild(img)
        // div.style.transform = `translate(${position.x}px, ${position.y}px) scale(${position.s || 1})`
        this.bubblesLeft.nativeElement.appendChild(div)
      }
    })
  }

}

interface SkillsConfig {
  development: Skill[]
  devops: Skill[]
}

interface Skill {
  title: string
  src: string
}

class Bubbles {
  update () {
     // Call each individual bubble's update method
    // this.bubbles.forEach(bubble => bubble.update())

     // Queue up another update() method call on the next frame
    requestAnimationFrame(this.update.bind(this))
  }
}

class Bubble {

//   const NOISE_SPEED = 0.004; // The frequency. Smaller for flat slopes, higher for jagged spikes.
// const NOISE_AMOUNT = 5;    // The amplitude. The amount the noise affects the movement.
  update () {
    // this.noiseSeedX += NOISE_SPEED;
    // this.noiseSeedY += NOISE_SPEED;

    // // The noise library we're using: https://github.com/josephg/noisejs
    // let randomX = noise.simplex2(this.noiseSeedX, 0);
    // let randomY = noise.simplex2(this.noiseSeedY, 0);

    // this.x -= SCROLL_SPEED;
    // this.xWithNoise = this.x + (randomX * NOISE_AMOUNT);
    // this.yWithNoise = this.y + (randomY * NOISE_AMOUNT)

    // if (this.x <  -200) {
    //   this.x = CANVAS_WIDTH;
    // }

    // this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`;
  }
}
