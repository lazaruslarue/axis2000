import xs from 'xstream'
import {div} from '@cycle/dom'

import GA from '../GA'
import Intro from '../Intro'
import Testimonials from '../Testimonials'
import VideoInstructions from '../VideoInstructions'
import Share from '../Share'
import Navigation from '../Navigation'
import Footer from '../Footer'


export default function view(state$, sources) {
  let intro$ = Intro(sources).DOM;
  let navigation$ = Navigation(sources).DOM;
  let footer$ = Footer().DOM;
  let ga$ = GA().DOM;

  let header$ = xs.combine(intro$, navigation$)
    .map(([intro, navigation]) => {
      return div('.page-header.flexcontainer.column', [
        intro, navigation
      ])
    })

  let body$ = state$.map(c => c.DOM).flatten()

    // const axisVdom$ = xs.combine(
    //   analytics$,
    //   introDOM$,
    //   videoInstructionsDOM$,
    //   testimonialsDOM$,
    //   navigationDOM$,
    //   footer$)
    //   .map(([
    //       analytics,
    //       introVdom,
    //       testimonialsVdom,
    //       // content$,
    //       videoInstructionsVdom,
    //       navigationVdom,
    //       footerVdom
    //     ]) =>{
    //
    //   return    div([
    //     // content,
    //         testimonialsVdom,
    //         videoInstructionsVdom,
    //       ])
    // }
    // )


  let wholeVtree$ = xs.combine( header$, navigation$, body$, footer$, ga$)
    .map(([head, nav, body, foot, ga]) => {
      return div('.flexcontainer.column', [
        head, body, foot, ga
      ])
    })

  return wholeVtree$
}
