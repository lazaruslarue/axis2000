import xs from 'xstream'
import {ul, li} from '@cycle/dom'

export default function Navigation(sources){
  const sinks = {
    DOM: xs.of(
      ul('.nav', [
        li('.howto', 'helpful how-to'),
        li('.instructions', 'instructions'),
        li('.story', 'the axis story'),
      ])
    )
  }
  return sinks
}
