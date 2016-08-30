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

export default function Axis(sources){
// view
  let analytics$ = GA(sources).DOM;
  let introDOM$ = Intro(sources).DOM;
  let testimonialsDOM$ = Testimonials(sources).DOM;
  let videoInstructionsDOM$ = VideoInstructions(sources).DOM;
  let shareDOM$ = Share(sources).DOM;
  let navigationDOM$ = Navigation(sources).DOM;
  let footer$ = Footer(sources).DOM;



  const axisVdom$ = xs.combine(
    analytics$,
    introDOM$,
    videoInstructionsDOM$,
    testimonialsDOM$,
    shareDOM$,
    navigationDOM$,
    footer$)
    .map(([
        analytics,
        introVdom,
        testimonialsVdom,
        videoInstructionsVdom,
        shareVdom,
        navigationVdom,
        footerVdom
      ]) =>{

return    div([
      // analytics,
      // introVdom,
      // navigationVdom,
      testimonialsVdom,
      videoInstructionsVdom,
      shareVdom,
      // footerVdom
    ])
  }
  )
  return {DOM: axisVdom$}
}
