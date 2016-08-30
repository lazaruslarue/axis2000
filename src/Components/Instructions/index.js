import xs from 'xstream'
import {div, span, p, h1, h2, img, ul, li} from '@cycle/dom'
import {instructions} from './data'
import Intro from '../Intro'
import Navigation from '../Navigation'
import Footer from '../Footer'

import VideoInstructions from '../VideoInstructions'

require('./style.scss')

export default function Instructions(sources) {
  let intro$ = Intro().DOM;
  let navigation$ = Navigation(sources).DOM;
  let video$ = VideoInstructions(sources).DOM;
  let footer$ = Footer().DOM;
  let header$ = xs.combine(intro$, navigation$, video$)
    .map(([intro, navigation, video]) => {
      return div('.page-header.flexcontainer.column', [
        intro, navigation, video
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

  let vDom$ = xs.combine(  video$, instructions$)
    .map(([video, instructions]) => {
      return div('.instructions.flexcontainer.column', [
        video,
        instructions
      ])
    })

  return {
    DOM: vDom$
  }
}
