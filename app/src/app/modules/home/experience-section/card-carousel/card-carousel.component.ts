import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { Commit } from '../experience-section.component'
import { Subject } from 'rxjs'
import { auditTime } from 'rxjs/operators'

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  private _focusCard = new Subject()
  private readonly _reversed = true
  private _loaded = false
  // Set top most index to 100, this will last a while
  // until there are under 100 items
  focusedIndex = 100

  private _selectedIndex?: number
  @Output() selectedIndexChange = new EventEmitter()
  @Input()
  get selectedIndex () {
    return this._selectedIndex
  }
  set selectedIndex (val: number) {
    this._selectedIndex = val
    this._focusCard.next()
  }

  private _items: Commit[] = []
  @Input()
  get items () {
    return this._items
  }
  set items (val: Commit[]) {
    this._items = val
    if (this._loaded) this.RenderCards()
  }
  cards: Card[] = []

  ngOnInit () {
    this.RenderCards()

    this._focusCard.pipe(
      auditTime(10)
    ).subscribe(() => {
      if (this.cards.length) this.focusCard(this.currentIndex)
    })

    this._loaded = true
  }

  get currentIndex () {
    let index: number = 0
    if (this._selectedIndex === undefined || !this._items.length) return index

    index = this._selectedIndex
    if (this._reversed) index = this.ReverseIndex(index)

    return Math.min(this._items.length - 1, Math.max(0, index))
  }

  abs (i: number) {
    return Math.abs(i)
  }

  private RenderCards () {
    const items = [...this.items]
    if (this._reversed) items.reverse()
    let index = this.currentIndex

    this.cards = items.map((x, i) => {
      const card = new Card(
        x.comment,
        x.date,
        x.description,
        i - index,
        // top most index - offset (0 for focused, <0 for before and >0 for after)
        this.focusedIndex - Math.abs(i - index)
      )

      return card
    })
    if (this._selectedIndex === undefined) this.SetSelectedIndex(index)
  }

  focusCard (target: Card | number) {
    const index = typeof target === 'number' ?
      target : this.cards.findIndex(x => x === target)
    if (index === undefined) return

    this.SetSelectedIndex(index)
    for (let i = 0; i < this.cards.length; i++) {
      const c = this.cards[i]
      c.index = i - index,
      c.zIndex = this.focusedIndex - Math.abs(i - index)
    }
  }

  private SetSelectedIndex (index: number) {
    if (index < 0 || !this._loaded) return
    this._selectedIndex = this._reversed ?
    this.ReverseIndex(index) : index

    this.selectedIndexChange.emit(this._selectedIndex)
  }

  private ReverseIndex (index: number) {
    return this._items.length - 1 - index
  }
}

class Card {
  get hide () {
    return Math.abs(this.index) > 2
  }
  /*
  Style index is used to avoid creating styles that
  overflow parent container, therefore
  scroll from start to end happens outside the parent
  container
  */
  get styleIndex () {
    return Math.min(3, Math.max(-3, this.index))
  }
  get style () {
    const style = {
      position: 'absolute',
      'z-index': this.zIndex,
      left: '50%',
      top: `${50 + this.styleIndex * 5}%`,
      transform: `translate(-50%, -50%) scale(${Math.max(0, 1 - Math.abs(this.styleIndex) / 10)})`,
      opacity: this.hide ? 0 : 1,
      'pointer-events': this.hide ? 'none' : 'initial'
    }

    return style
  }
  constructor (
    public readonly title: string,
    public readonly subtitle: string | undefined,
    public readonly description: string,
    public index: number,
    public zIndex: number
  ) {}
}
