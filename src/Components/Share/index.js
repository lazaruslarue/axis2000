import xs from 'xstream'
import {div, button, p} from '@cycle/dom'
require('./style.scss')

export default function Share(sources){
  const sinks = {
    DOM: xs.of(
      div('.share',[
        p('.connect-to-us', 'connect with us'),
        div('.buttons', [
          button('.share','share #1'),
          button('.share','share #2'),
        ])
      ])
    )
  }
  return sinks
}
