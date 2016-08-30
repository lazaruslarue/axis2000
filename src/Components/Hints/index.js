import xs from 'xstream'
import {div, span, p, h1, h2, img, ul, li} from '@cycle/dom'
import {hints} from './data'
import Intro from '../Intro'
import Navigation from '../Navigation'
import Footer from '../Footer'

require('./style.scss')

export default function Hints(sources) {

  // TODO: this should be a reusable component
  let hints$ = xs.fromArray(hints)
    .map(data => {
      let hints = [];

      data.group_items.forEach((hint) => {
        var ele = div('.instruction'+ hint.orientation, [
          p(hint.text),
          hint.img ? img('.photo', {
            props: {
              src: hint.img,
            }
          }) : null,
        ])

        return hints.push(ele)
      })

      let hint = span('.instruction-group', [
        div('.flexcontainer.column.wrapper', [
          h2('.group_heading', data.group_heading),
          div('.instruction-steps', hints)
        ])
      ])

      return hint;
    })
    .fold((acc,x)=> {
      acc.push(x);
      return acc;
    }, [])
    .map(list => div('.instructions-body', list))

  let vDom$ = hints$.map(hints => div('.instructions.flexcontainer.column', [hints]))

  return {
    DOM: vDom$
  }
}
