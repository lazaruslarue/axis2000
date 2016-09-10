// Main.js in Application
import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {makeRouterDriver} from 'cyclic-router'
import {createHistory} from 'history'

// Static Components
import Axis from './Components/Axis'
function main(sources) {

  return Axis(sources)

}

const drivers = {
  DOM: makeDOMDriver('#root'),
  router: makeRouterDriver(createHistory()),
};

run(main, drivers);
