import xs from 'xstream'
import {div, span, p, h1, img, ul, li} from '@cycle/dom'
import {instructions} from './new_data.js'
require('./style.scss')

export default function Instructions(sources) {
  let header$ = xs.of( div('.instructions-header', [
    h1('Instructions for Use')
  ]))

  // TODO: this should be a reusable component
  let instructions$ = xs.fromArray(instructions)
    .map(data => {
      let instructions = [];

      data.group_items.forEach((instruction) => {
        var ele = div('.instruction'+ instruction.orientation, [
          instruction.text,
          instruction.img,
        ])
        return instructions.push(ele)
      })

      let instruction = span('.instruction-group', [
        div('.flexcontainer.column.wrapper', [
          data.group_heading,
          div('.instruction-steps', instructions)
        ])
      ])

      return instruction;
    })
    .fold((acc,x)=> {
      acc.push(x);
      console.log(acc);
      return acc;
    }, [])
    .map(list => div('.instructions-body', list))

  let footer$ = xs.of(div('.instructions-footer', [
    div('.inside', [
      p('.full-width','Send your "testimonial" for a chance to win an Axis')
    ])
  ]))

  let vDom$ = xs.combine( header$, instructions$, footer$)
    .map(([head, content, foot]) => {
      return div('.instructions.flexcontainer.column', [head, content, foot])
    })

  return {
    DOM: vDom$
  }
}
