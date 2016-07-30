import xs from 'xstream'
import {div, span, p, img} from '@cycle/dom'
require('./style.scss')

// TODO: these items need alt-text
// TODO: testimonials should be an individual Component with options
//       to support placement of the text div.

const testimonial_data = [{
  id: 1,
  img_class_hack: '.beach.flexcontainer.column-reverse', //HACK column-reverse
  text: [
    "My friend bought himself one, and one for me.",
    "What a great surprise!",
    "It's compact, discreet, odorless, and incredibly sturdy.",
    "And, I love how handy the clip is."
    ].join(' '),
  name_first: "Jesse",
  name_last:  " L.",
  location:   "San Francisco, CA",
  // background_url: "./Beach_Case.JPG",
},
{
  id: 2,
  img_class_hack: '.boot',
  text: [
    "I bought one for my boyfriend, he loves it. As a medical user, it's important that he's got convenient access, wherever he goes. It's a designer product, it's durable, and I love that it reminds him of me every time he uses it."
    ].join(' '),
  name_first: "Kristen",
  name_last:  " E.",
  location:   "Denver, CO",
  // background_url: "Boot_On_Case.jpg",
}]

export default function Testimonials(sources){
  let header$ = xs.of(div('.testimonials-header' , [
    p('testimonials')
  ]))

  let testimonial$ = xs.fromArray(testimonial_data)
    .map(t => {
      return span('.testimonial' + t.img_class_hack,  [
        div('.flexcontainer.column.wrapper', [
          p('.message', t.text),
          p('.name',  t.name_first + t.name_last),
          p('.location', t.location)
        ])
      ]);
    })
    .fold((acc, x) => {
      acc.push(x);
      return acc;
    }, [])
    .map(list => div('.testimonials-body', list))

  let footer$ = xs.of(div('.testimonials-footer', [
    div('.inside', [
      p('.full-width','Send your "testimonial" for a chance to win an Axis')
    ])
  ]))

  let vDom$ = xs.combine( header$, testimonial$, footer$)
    .map(([header, content, footer]) => {
      return div('.testimonials.flexcontainer.column', [header, content, footer])
    })

  return {
    DOM: vDom$
  }
}
