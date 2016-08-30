// Main.js in Application
import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {makeRouterDriver} from 'cyclic-router'
import {createHistory} from 'history'

// Static Components
import GA from './Components/GA'
import Testimonials from './Components/Testimonials'
import VideoInstructions from './Components/VideoInstructions'
import Share from './Components/Share'

// MVI
import model from './Components/Axis/model';
import view from './Components/Axis/view';
import intent from './Components/Axis/intent'

function main(sources) {
  // click actions
  const action$ = intent(sources.DOM)
  // application state stream
  const state$ = model(action$, sources)
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
