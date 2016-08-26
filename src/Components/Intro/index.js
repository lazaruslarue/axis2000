import xs from 'xstream'
import {div, a, form, input} from '@cycle/dom'
import BuyButton from '../BuyButton'
require('./style.scss')

export default function Intro(sources){
  let button$ = BuyButton().DOM;

  return {
    DOM: button$
    .map(button => {
      return div('.intro-container', [
        div('.intro.flexcontainer.column-reverse', [
          button])
      ])
    })
  }
}
