import xs from 'xstream'
import {div, a} from '@cycle/dom'
require('./style.scss')

export default function Intro(sources){
  const sinks = {
    DOM: xs.of(
      div('.intro.flexcontainer.column-reverse', [
        a('.btn.anim', { props: {href: '/buy-now'} },'order now')
      ])
    )
  }
  return sinks
}
