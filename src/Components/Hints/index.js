import xs from 'xstream'
import {div, span, p, img, ul, li} from '@cycle/dom'
import {hints} from './data.hints.js'
require('./style.scss')

export default function Hints(sources){
  let header$ = xs.of(div('.testimonials-header' , [
    p('helpful hints')
  ]))

  let hints$ = xs.fromArray(hints)
    .map(h => {
      let hint_steps$ = xs.fromArray(h.steps)
        .map(step => {
          console.log(step);
          return li('.step', step)
        })
        .map(steps => {
          return ul('.hints', steps)
        });

      let steps = [];
      h.steps.forEach((step) => {
        return steps.push(li('.step', step))
      });

      // make the hints with the steps
      let hint = span('.hint',  [
        div('.flexcontainer.column.wrapper', [
          p('.title', h.title),
          p('.lead',  h.lead),
          ul('.hint-steps', steps   ),
          h.img === undefined ? null : img('.hint', {
            props: {src: h.img }
          })
        ])
      ]);

      return hint
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

  let vDom$ = xs.combine( header$, hints$, footer$)
    .map(([header, hint, footer]) => {
      return div('.testimonials.flexcontainer.column', [header, hint, footer])
    })

  return {
    DOM: vDom$
  }
}
