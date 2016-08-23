import xs from 'xstream'
import {ul, li, a} from '@cycle/dom'
// here's our style
require('./style.scss')

export default function Navigation(sources){

  // todo: catch events & don't let the <a> redirection happen
  
  const sinks = {
    DOM: xs.of(
      ul('.navigation', [
        li('.howto',[
          a('.link', { props: {href: '/hints'} }, 'helpful hints')
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
