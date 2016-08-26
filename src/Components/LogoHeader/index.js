import xs from 'xstream'
import {div, a, form, img, input} from '@cycle/dom'
require('./style.scss')

export default function LogoHeader(sources){
  const sinks = {
    DOM: xs.of(

        div('.header', [
          img('.logo', {
            props: {
              src: 'src/Static/axis_2000_oval_logo.jpg'
            }
          })
      ])
    )
  }
  return sinks
}
