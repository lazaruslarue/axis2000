import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, button, img, iframe} from '@cycle/dom'
// require('./style.scss')


export default function Testimonials(sources){
  const sinks = {
    DOM: xs.of(
      div('.testimonials', [
        div('.testimonials-header' ,'testimonials'),
        span('.testimonial','testimonial #1'),
        span('.testimonial','testimonial #2'),
        div('.testimonials-footer', [
          div('.inside','testimonials-footer')
        ])
      ])
    )
  }
  return sinks
}
