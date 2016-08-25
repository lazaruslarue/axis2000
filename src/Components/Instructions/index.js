import xs from 'xstream'
import {div, span, p, img, ul, li} from '@cycle/dom'
import {instructions} from './data.js'
require('./style.scss')

export default function Instructions(sources) {
  let header$ = xs.of( div('.instructions.header', [
    p('instructions')
  ]))

  // TODO: this should be a reusable component
  let instructions$ = xs.fromArray(instructions)
    .map(obj => {
      let instructions = [];
      obj.steps.forEach((instruction) => {
        var ele = div('.instruction', [
          instruction.text,
          instruction.img,
        ])
        // return instructions.push(instruction.text)
        return instructions.push(ele)
      })

      let instruction = span('.instruction', [
        div('.flexcontainer.column.wrapper', [
          obj.title,
          div('.instruction-steps', instructions),
          obj.img
        ])
      ])
      return instruction;
    })
    .fold((acc,x)=> {
      acc.push(x);
      return acc;
    }, [])
    .map(list => div('.testimonials-body', list))

  let footer$ = xs.of(div('.instructions-footer', [
    div('.inside', [
      p('.full-width','Send your "testimonial" for a chance to win an Axis')
    ])
  ]))

  let vDom$ = xs.combine( header$, instructions$, footer$)
    .map(([head, instructions, foot]) => {
      return div('.instructinos.flexcontainer.column', [head, instructions, foot])
    })

  return {
    DOM: vDom$
  }
}
