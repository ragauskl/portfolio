import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { Commit } from '../experience-section.component'
import { Subject } from 'rxjs'
import { auditTime } from 'rxjs/operators'
import moment from 'moment'
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
  styleFocusedIndex = 100

  private _selectedIndex?: number
  @Output() selectedIndexChange = new EventEmitter()
  @Input()
  get selectedIndex () {
    return this._selectedIndex
  }
  set selectedIndex (val: number) {
    this._selectedIndex = val
    this._focusCard.next('change')
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
    ).subscribe((x) => {
      if (this.cards.length) this.focusCard(this.currentIndex, x)
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
        moment(x.date, 'YYYY-MMM').format('MMM YYYY'),
        x.description,
        i - index,
        // top most index - offset (0 for focused, <0 for before and >0 for after)
        this.styleFocusedIndex - Math.abs(i - index),
        x.color || 'rgba(255, 255, 255, 0)'
      )

      return card
    })
    if (this._selectedIndex === undefined) this.SetSelectedIndex(index)
  }

  focusCard (target: Card | number, o: any) {
    const index = typeof target === 'number' ?
      target : this.cards.findIndex(x => x === target)
    if (index === undefined) return

    this.SetSelectedIndex(index)
    for (let i = 0; i < this.cards.length; i++) {
      const c = this.cards[i]
      c.index = i - index,
      c.zIndex = this.styleFocusedIndex - Math.abs(i - index)
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
  readonly maxBehind = 3
  readonly maxIndex = this.maxBehind - 1
  get hide () {
    return Math.abs(this._index) >= this.maxBehind
  }
  /*
  Style index is used to avoid creating styles that
  overflow parent container, therefore
  scroll from start to end happens outside the parent
  container
  */
  get styleIndex () {
    return Math.min(this.maxIndex, Math.max(-this.maxIndex, this._index))
  }

  style = {}

  get index () {
    return this._index
  }
  set index (val: number) {
    this._index = val
  }

  get zIndex () {
    return this._zIndex
  }
  set zIndex (val: number) {
    this._zIndex = val
    this.generateStyle()
  }

  constructor (
    public readonly title: string,
    public readonly subtitle: string | undefined,
    public readonly description: string,
    private _index: number,
    private _zIndex: number,
    public color: string
  ) {
    this.generateStyle()
  }

  generateStyle () {
    const multiplier = window.innerWidth < 600 ? 13 : 20
    this.style = {
      'z-index': -Math.abs(this.styleIndex),
      transform: `translate(-50%, ${-50 + (this.styleIndex * multiplier)}%) scale(${
        Math.max(0, 1 - Math.abs(this.styleIndex) / 10)
      })`
    }

    if (this.styleIndex === 0) {
      this.style['border-top'] = `5px solid ${this.color}`
    }
  }
}
