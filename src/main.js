import {div, span, p, h1, h2, img, ul, li} from '@cycle/dom'
// Main.js in Application
import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {makeRouterDriver} from 'cyclic-router'
import {createHistory} from 'history'
import Axis from './Components/Axis'
import Hints from './Components/Hints'
import Instructions from './Components/Instructions'
// Static Components
import GA from './Components/GA'
import Intro from './Components/Intro'
import Testimonials from './Components/Testimonials'
import VideoInstructions from './Components/VideoInstructions'
import Share from './Components/Share'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'


function main(sources) {

  // application state stream
  const state$ = model(sources)

  // application view combines static components
  const view$ = view(state$, sources)

  return {
    DOM: view$
  }
}

const drivers = {
  DOM: makeDOMDriver('#root'),
  // HTTP: makeHTTPDriver(),
  router: makeRouterDriver(createHistory()),
};

run(main, drivers);


function model(sources) {
  const routedContent$ = sources.router.define({
    '/': Axis, // Main page
    '/hints': Hints, // Hints page
    '/instructions': Instructions, // Instructions page
  });

  // page content is the content from the router
  const pageContent$ = routedContent$.map(({path, value}) => {
     return value(Object.assign({}, sources, {
       router: sources.router.path(path)
     }))
   });

  return pageContent$
}

function view(state$, sources) {
  let intro$ = Intro().DOM;
  let navigation$ = Navigation(sources).DOM;
  let footer$ = Footer().DOM;

  let header$ = xs.combine(intro$, navigation$)
    .map(([intro, navigation]) => {
      return div('.page-header.flexcontainer.column', [
        intro, navigation
      ])
    })

  const contentDOM$ = state$.map(c => c.DOM).flatten()
  let wholeVtree$ = xs.combine( header$, navigation$, contentDOM$, footer$)
    .map(([head, nav, content, foot]) => {
      return div('.flexcontainer.column', [
        head, content, foot
      ])
    })

  return wholeVtree$
}
