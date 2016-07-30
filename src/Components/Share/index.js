import xs from 'xstream'
import {div, button, p} from '@cycle/dom'
require('./style.scss')

export default function Share(sources){
  const sinks = {
    DOM: xs.of(
      div('.share',[
        p('.connect-to-us', 'connect with us'),
        div('.flexcontainer.contact-container', [
          div('.contact-item', [
            p('POST OFFICE MAIL'),
            p('The AXIS 2000'),
            p('72 E. 2nd Street, Mineola, NY  11501')
          ]),
          div('.contact-item', [
            p('CUSTOMER SERVICE'),
            p('Peter'),
            p('800-445-0525')
          ]),
          div('.contact-item', [
            p('SALES'),
            p('Greg'),
            p('800-445-0525')
          ]),
          div('.contact-item', [
            p('EMAIL'),
            p('sales@theAxis2000.com')
          ]),
        ]),
        // div('.buttons', [
        //   button('.share','share #1'),
        //   button('.share','share #2'),
        // ])
      ])
    )
  }
  return sinks
}
