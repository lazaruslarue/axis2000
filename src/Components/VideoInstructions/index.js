import xs from 'xstream'
import {div, iframe, p} from '@cycle/dom'

export default function VideoInstructions(sources){
  const sinks = {
    DOM: xs.of(
      div('.video', [
        div('.testimonials-header' , [
          p('instructions')
        ]),
        iframe('.instruction-video', {
          props: {
            src: "https://www.youtube.com/embed/grsrzjkthh8",
            frameborder: '0',
          }
        })
      ])
    )
  }
  return sinks
}
