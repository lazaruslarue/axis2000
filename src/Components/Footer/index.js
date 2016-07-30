import xs from 'xstream'
import {div, a} from '@cycle/dom'
require('./style.scss')

export default function Footer(sources){
  const sinks = {
    DOM: xs.of(
      div('#footer.flexcontainer',[
        div('.buy-button', [
          a( '.btn.anim', 'order now')
        ]),
      ])
    )
  }
  return sinks
}
