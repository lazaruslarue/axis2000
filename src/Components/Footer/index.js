import xs from 'xstream'
import {div, a, form, input, script} from '@cycle/dom'
import BuyButton from '../BuyButton'
import Share from '../../Components/Share'

require('./style.scss')

export default function Footer(sources){
  let shareDOM$ = Share(sources).DOM;

  let button$ = BuyButton().DOM
    .map(button => {
      return div('#footer.flexcontainer',[
        button
      ])
    })

  let vDom$ = xs.combine(
      shareDOM$,
      button$
    ).map(([
      share,
      button
    ])=>{
      return div([
        share,
        button
      ])
    })

  const sinks = {
    DOM: vDom$,
  }
  return sinks
}
