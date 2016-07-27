import xs from 'xstream'
import {ul, li, a} from '@cycle/dom'

export default function Navigation(sources){
  const sinks = {
    DOM: xs.of(
      ul('.nav', [
        li('.howto',[
          a('.link', { props: {href: '/how-to'} }, 'helpful how-to')
        ]),
        li('.instructions',[
          a('.link', { props: {href: '/instructions'} }, 'instructions')
        ]),
        li('.story',[
          a('.link', { props: {href: '/story'} }, 'the axis story')
        ])
      ])
    )
  }
  return sinks
}
