import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, button, img, iframe} from '@cycle/dom'
// require('./style.scss')

const testimonial_data = [{
  id: 1,
  text: [
    "my friend bought himself one, and one for me.",
    "what a great surprise!",
    "it's compact, discreet, odorless, and incredibly sturdy.",
    "i love how handy the clip is."
    ].join(' '),
  name_first: "Jesse",
  name_last:  "L.",
  location:   "Phoenix, AZ",
},
{
  id: 2,
  text: [
    "one day i stepped on it, then threw it under a car tire.",
    "i should have known better!",
    "it's compact, discreet, odorless, and incredibly sturdy.",
    "i love how handy the clip is."
    ].join(' '),
  name_first: "Jesse",
  name_last:  "L.",
  location:   "Phoenix, AZ",
}]

export default function Testimonials(sources){
  let testimonial$ = xs.fromArray(testimonial_data)
    .map(t => {
      return span('.testimonial', t.text)
    })
    .fold((acc, x) => {
      acc.push(x)
      return acc
    }, [])
    .map(list => div('.testimonials', list))


  let vDom$ = xs.combine(
    xs.of(div('.testimonials-header' ,'testimonials')),
    testimonial$,
    xs.of(div('.testimonials-footer', [
      div('.inside','testimonials-footer')
    ])    ))
    .map(([header, content, footer]) => {
      return div([header, content, footer])
    })

  const sinks = {
    DOM: vDom$
      //   xs.of(
      //   div('.testimonials', [
      //     div('.testimonials-header' ,'testimonials'),
      //     span('.testimonial','testimonial #1'),
      //     span('.testimonial','testimonial #2'),
      //     div('.testimonials-footer', [
      //       div('.inside','testimonials-footer')
      //     ])
      //   ])
      // )
  }
  return sinks
}
