import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, button, img} from '@cycle/dom'
require('./style.scss')

// <img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">

export default function Axis(sources){
  const sinks = {
    DOM: xs.of(
      div([
        div('.intro', [
          div('.mask', [
            div('.axis-logo'),
            div('.mask-text', 'an american made precision smoking heirloom')
          ]),
          div('.buy-button', [
            button('.buy-now', 'order now')
          ])
        ]),
        div('.testimonials', [
          span('.testimonial','testimonial #1'),
          span('.testimonial','testimonial #2'),
        ]),
        div('.video', [
          span('youtubevideohere')
        ]),
        div('.sharebuttons',[
          button('.share','share #1'),
          button('.share','share #2'),
        ]),
        ul('.nav', [
          li('.howto', 'helpful how-to'),
          li('.instructions', 'instructions'),
          li('.story', 'the axis story'),
        ]),
        div('ordern now again'),
        a(  {props: {href: '/test'}}, 'hsldkfjsldkjfsldkfji')
      ])
    )
  }
  return sinks
}
