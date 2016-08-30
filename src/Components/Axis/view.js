import xs from 'xstream'
import {div} from '@cycle/dom'

import Intro from '../Intro'
import Navigation from '../Navigation'
import Footer from '../Footer'
import GA from '../GA'

export default function view(state$, sources) {
  let intro$ = Intro().DOM;
  let navigation$ = Navigation(sources).DOM;
  let footer$ = Footer().DOM;
  let ga$ = GA().DOM;

  let header$ = xs.combine(intro$, navigation$)
    .map(([intro, navigation]) => {
      return div('.page-header.flexcontainer.column', [
        intro, navigation
      ])
    })

  const contentDOM$ = state$.map(c => c.DOM).flatten()

  let wholeVtree$ = xs.combine( header$, navigation$, contentDOM$, footer$, ga$)
    .map(([head, nav, content, foot, ga]) => {
      return div('.flexcontainer.column', [
        head, content, foot, ga
      ])
    })

  return wholeVtree$
}
