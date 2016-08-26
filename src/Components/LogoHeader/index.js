import xs from 'xstream'
import {div, a, form, img, input} from '@cycle/dom'
import BuyButton from '../BuyButton'

require('./style.scss')

export default function LogoHeader(sources){
  let button$ = BuyButton().DOM;

  const sinks = {
    DOM: button$
    .map(button => {
      return div('.flexcontainer.column-reverse', [
        img('.logo', {
          props: {
            src: 'src/Static/axis_2000_oval_logo.jpg'
          }
        }),
        button
      ])
    })
  }
  return sinks
}
