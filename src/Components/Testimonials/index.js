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

  let header$ = xs.of(div('.testimonials-header' ,'testimonials'))

  let testimonial$ = xs.fromArray(testimonial_data)
    .map(t => {
      return span('.testimonial', t.text)
    })
    .fold((acc, x) => {
      acc.push(x)
      return acc
    }, [])
    .map(list => div('.testimonials', list))

  let footer$ = xs.of(div('.testimonials-footer', [
    div('.inside','testimonials-footer')
  ]))

  let vDom$ = xs.combine( header$, testimonial$, footer$)
    .map(([header, content, footer]) => {
      return div([header, content, footer])
    })

  return {
    DOM: vDom$
  }
}
