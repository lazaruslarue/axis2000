import xs from 'xstream'
import {div, span, p, h1, h2, img, ul, li} from '@cycle/dom'
import {hints} from './data'
import Intro from '../Intro'
import Navigation from '../Navigation'
import Footer from '../Footer'

require('./style.scss')

export default function Hints(sources) {
  let intro$ = Intro().DOM;
  let navigation$ = Navigation().DOM;
  let footer$ = Footer().DOM;
  let header$ = xs.combine(intro$, navigation$)
    .map(([intro, navigation]) => {
      return div('.page-header.flexcontainer.column', [
        intro, navigation
      ])
    })

  // TODO: this should be a reusable component
  let instructions$ = xs.fromArray(hints)
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

  let vDom$ = xs.combine(  header$, instructions$, footer$)
    .map(([head, content, foot]) => {
      return div('.instructions.flexcontainer.column', [ head, content, foot])
    })

  return {
    DOM: vDom$
  }
}
