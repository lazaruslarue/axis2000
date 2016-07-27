import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, button, img, iframe} from '@cycle/dom'
// require('./style.scss')


export default function Intro(sources){
  const sinks = {
    DOM: xs.of(
      div('.intro', [
        div('.mask', [
          div('.axis-logo', 'test'),
          div('.mask-text', 'an american made precision smoking heirloom')
        ]),
        div('.buy-button', [
          button('.buy-now', 'order now')
        ])
      ])
    )
  }
  return sinks
}
