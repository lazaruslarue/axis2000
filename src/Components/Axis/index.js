import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, button, img, iframe} from '@cycle/dom'
import Intro from '../../Components/Intro'
import Testimonials from '../../Components/Testimonials'
import VideoInstructions from '../../Components/VideoInstructions'
import Share from '../../Components/Share'
import Navigation from '../../Components/Navigation'
import Footer from '../../Components/Footer'

require('./style.scss')


export default function Axis(sources){
  const sinks = {
    DOM: xs.of(
      div('.app',[
        div('ordern now again'),
        a( '.link',  {
          props: {href: '/test'}
        },
        'hsldkfjsldkjfsldkfji')])
      )
  }
  let introDOM$ = Intro().DOM
  let testimonialsDOM$ = Testimonials().DOM;
  let videoInstructionsDOM$ = VideoInstructions().DOM;
  let shareDOM$ = Share().DOM;
  let navigationDOM$ = Navigation().DOM;
  let footer$ = Footer().DOM;


  const axisVdom$ = xs.combine(
    introDOM$,
    videoInstructionsDOM$,
    testimonialsDOM$,
    shareDOM$,
    // navigationDOM$,
    footer$)
    .map(([
        introVdom,
        testimonialsVdom,
        videoInstructionsVdom,
        shareVdom,
        // navigationVdom,
        footerVdom
      ]) =>{

return    div([
      introVdom,
      testimonialsVdom,
      videoInstructionsVdom,
      shareVdom,
      // navigationVdom,
      footerVdom
    ])
  }
  )
  return {DOM: axisVdom$}
}
