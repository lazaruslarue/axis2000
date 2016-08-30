import xs from 'xstream'
import {div, button, p, a, img} from '@cycle/dom'
require('./style.scss')
var instagram_icon = require('./Instagram_App_Large_May2016_200.png')
var facebook_icon = require('./facebook-icon.png')

export default function Share(sources){
  const sinks = {
    DOM: xs.of(
      div('.share',[
        p('.connect-to-us', 'connect with us'),
        a('.social-out', {props: {href: 'https://www.facebook.com/Axis2000'}}, [
          img( {
            props: {src: facebook_icon}
          }),
        ]),
        a('.social-out', {props: {href: 'https://www.instagram.com/theaxis2000/'}}, [
          img({
            props: {src: instagram_icon}
          }),
        ]),
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
        ])
      ])
    )
  }
  return sinks
}
