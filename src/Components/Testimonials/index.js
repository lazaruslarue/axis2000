import xs from 'xstream'
import {div, h1, h2, span, ul, li, a} from '@cycle/dom'

export default function Testimonials(sources){
  const sinks = {
    DOM: xs.of(
      div([
        span('testimonial #1'),
        span('testimonial #2'),
        a(  {props: {href: '/buts'}}, 'hsldkfjsldkjfsldkfji')
      ])
    ),
  }
  return sinks
}
