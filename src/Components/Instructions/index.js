import xs from 'xstream'
import {div, span, p, h1, h2, img, ul, li} from '@cycle/dom'
import {instructions} from './data'
import LogoHeader from '../LogoHeader'

require('./style.scss')

export default function Instructions(sources) {
  let logo$ = LogoHeader().DOM;

  let text_header$ = xs.of(h1('Instructions for Use'))

  let header$ = xs.combine(logo$, text_header$)
    .map(([logo, text]) => {
      return div('.page-header.flexcontainer.column', [
        logo, text
      ])
    })

  // TODO: this should be a reusable component
  let instructions$ = xs.fromArray(instructions)
    .map(data => {
      let instructions = [];

      data.group_items.forEach((instruction) => {
        var ele = div('.instruction'+ instruction.orientation, [
          p(instruction.text),
          instruction.img ? img('.photo', {
            props: {
              src: instruction.img,
            }
          }) : null,
        ])

        return instructions.push(ele)
      })

      let instruction = span('.instruction-group', [
        div('.flexcontainer.column.wrapper', [
          h2('.group_heading', data.group_heading),
          div('.instruction-steps', instructions)
        ])
      ])

      return instruction;
    })
    .fold((acc,x)=> {
      acc.push(x);
      return acc;
    }, [])
    .map(list => div('.instructions-body', list))

  let footer$ = xs.of(div('.instructions-footer', [
    div('.inside', [
      p('.full-width','Send your "testimonial" for a chance to win an Axis')
    ])
  ]))

  let vDom$ = xs.combine(  header$, instructions$, footer$)
    .map(([head, content, foot]) => {
      return div('.instructions.flexcontainer.column', [ head, content, foot])
    })

  return {
    DOM: vDom$
  }
}
