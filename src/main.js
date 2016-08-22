// Main.js in Application
import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHTTPDriver} from '@cycle/http'
import {makeRouterDriver} from 'cyclic-router'
import {createHistory} from 'history'
import Axis from './Components/Axis'
import Hints from './Components/Hints'

function main(sources) {
  const match$ = sources.router.define({
    '/': Axis,
    '/hints': Hints,
  });

  const page$ = match$.map(({path, value}) => {
    return value(Object.assign({}, sources, {
      router: sources.router.path(path)
    }))
  });

  return {
    DOM: page$.map(c => c.DOM).flatten()
  }
}

const drivers = {
  DOM: makeDOMDriver('#root'),
  HTTP: makeHTTPDriver(),
  router: makeRouterDriver(createHistory()),
};

run(main, drivers);
