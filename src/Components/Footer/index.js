import xs from 'xstream'
import {div, a, form, input, script} from '@cycle/dom'
import BuyButton from '../BuyButton'

require('./style.scss')

export default function Footer(sources){
  let button$ = BuyButton().DOM
    .map(button => {
      return div('#footer.flexcontainer',[
        button
      ])
    })

  const sinks = {
    DOM: button$,
  }
  return sinks
}
