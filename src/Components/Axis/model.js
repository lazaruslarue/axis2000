import Axis from '../Axis'
import Hints from '../Hints'
import Instructions from '../Instructions'

export default function model(action$, sources) {
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
