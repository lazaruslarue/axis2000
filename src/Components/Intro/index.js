import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, p, img} from '@cycle/dom'
require('./style.scss')

// <p><a href = '#' class="btn anim">Jiggle</a></p>

export default function Intro(sources){
  const sinks = {
    DOM: xs.of(
      div('.intro', [
        div('.mask', [
          div('.axis-logo'),
          div('.mask-text', 'an american made precision smoking heirloom')
        ]),
        p( [
          a('.btn.anim', 'order now')
        ])
      ])
    )
  }
  return sinks
}
