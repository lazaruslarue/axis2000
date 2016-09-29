import xs from 'xstream'
// import Axis from '../Axis'
import Hints from '../Hints'
import Instructions from '../Instructions'
import Navigation from '../Navigation'

export default function model(action$, sources) {

  const match$ = sources.router.define({
    '/': Instructions, // Main page
    '/hints': Hints, // Hints page
    '/instructions': Instructions, // Instructions page
  });

  const component$ = match$.map(({path, value: Component})=>{
    console.log('match');
    console.log('path', path, 'Component',Component);
    return Component({
      DOM: sources.DOM,
      router: sources.router.path(path)
    })
  })

  return component$

}
