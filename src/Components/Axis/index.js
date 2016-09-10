import xs from 'xstream'
import {div} from '@cycle/dom'
import GA from '../../Components/GA'
import Intro from '../../Components/Intro'
import Testimonials from '../../Components/Testimonials'
import VideoInstructions from '../../Components/VideoInstructions'
import Share from '../../Components/Share'
import Navigation from '../../Components/Navigation'
import Footer from '../../Components/Footer'

require('./style.scss')

// MVI
import intent from './intent'
import model from './model';
import view from './view';


export default function Axis(sources){
  // click actions
  const action$ = intent(sources.DOM, sources.router)
  // application state stream
  const state$ = model(action$, sources)
  // application view combines static components
  const view$ = view(state$, sources)


  return {
    DOM: view$,
    router: action$
  }
}
