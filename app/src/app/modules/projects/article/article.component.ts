import { Component, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MarkdownComponent } from 'ngx-markdown'
import { Article, Content } from '@core/utils/content'

@Component({
  selector: 'app-project',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  article: Article
  @ViewChild('description', { static: false }) description!: MarkdownComponent

  constructor (
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(p => {
      this.article = Content.Articles.find(x => x.article === p['project-tag'])
    })
  }

  onLoad () {
    const links = Array.from(this.description.element.nativeElement.getElementsByTagName('a'))
    for (const link of links) {
      const url = new URL(link.href)
      if (url.host === window.location.host) {
        link.href = `${window.location.origin}${window.location.pathname}${url.hash}`
      }
    }
  }
}
