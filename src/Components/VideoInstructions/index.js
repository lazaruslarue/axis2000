import xs from 'xstream'
import {div, iframe, p} from '@cycle/dom'
import Video from '../Video'
require('./style.scss')

export default function VideoInstructions(sources){

  let url = "https://www.youtube.com/embed/grsrzjkthh8"

  let youtubevid$ = Video(url).DOM;

  const view$ = xs.of(
    div('.video', [
      div('.testimonials-header' , 'hi')
    ])
  )

  let test$ = youtubevid$
    .map(ele => {
      return div('.instruction-video', [
          ele
      ])
    })

  const sinks = {
    DOM: test$

  }
  return sinks
}
