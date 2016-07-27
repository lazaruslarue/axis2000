import xs from 'xstream'
import {div, button} from '@cycle/dom'

export default function Share(sources){
  const sinks = {
    DOM: xs.of(
      div('.share',[
        div('.call-to-action', 'tell us your story'),
        div('.buttons', [
          button('.share','share #1'),
          button('.share','share #2'),
        ])
      ])
    )
  }
  return sinks
}
