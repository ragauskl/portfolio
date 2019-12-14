import { Component, EventEmitter, Input, Output, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core'
import { Commit } from '../experience-section.component'

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {
  @Input() startingIndex = 1

  private _previousSelectedIndex?: number
  private _selectedIndex?: number
  @Output() selectedIndexChange = new EventEmitter()
  @Input()
  get selectedIndex () {
    return this._selectedIndex
  }
  set selectedIndex (val: number) {
    this._selectedIndex = Math.min(
      this.items.length - 1, Math.max(0, val)
    )
    this.selectedIndexChange.emit(this._selectedIndex)
  }

  private _items: Commit[] = []
  @Input()
  get items (): Commit[] {
    return this._items
  }
  set items (items: Commit[]) {
    this._items = items
    let index = this.selectedIndex
    if (index === undefined) index = this.startingIndex

    this.cards = this.items.map((x, i) => {
      const card = new Card(
        x.comment,
        x.date,
        x.description,
        i - index
      )

      return card
    })
  }

  cards: Card[] = []

  get container (): HTMLElement {
    return this._el.nativeElement
  }

  constructor (
    private _el: ElementRef
  ) {}
}

class Card {
  constructor (
    public readonly title: string,
    public readonly subtitle: string | undefined,
    public readonly description: string,
    public index: number
  ) {

  }
}
