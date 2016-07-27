import xs from 'xstream'
import {div, h1, h2, span, ul, li, a, button, img, iframe} from '@cycle/dom'
import Intro from '../../Components/Intro'
import Testimonials from '../../Components/Testimonials'
import VideoInstructions from '../../Components/VideoInstructions'
require('./style.scss')


export default function Axis(sources){




  const sinks = {
    DOM: xs.of(
      div('.app',[
        div('.share',[
          div('.call-to-action', 'tell us your story'),
          div('.buttons', [
            button('.share','share #1'),
            button('.share','share #2'),
          ])
        ]),
        ul('.nav', [
          li('.howto', 'helpful how-to'),
          li('.instructions', 'instructions'),
          li('.story', 'the axis story'),
        ]),
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
  let other$ = sinks.DOM;


  const axisVdom$ = xs.combine(
    introDOM$,
    testimonialsDOM$,
    videoInstructionsDOM$,
    other$)
    .map(([
        introVdom,
        testimonialsVdom,
        videoInstructionsVdom,
        sinksVDom
      ]) =>{

return    div([
      introVdom,
      testimonialsVdom,
      videoInstructionsVdom,
      sinksVDom
    ])
  }
  )
  return {DOM: axisVdom$}
}
