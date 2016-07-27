import xs from 'xstream'
import {ul, li, a} from '@cycle/dom'
// here's our style
require('./style.scss')

export default function Navigation(sources){
  const sinks = {
    DOM: xs.of(
      ul('.navigation', [
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
