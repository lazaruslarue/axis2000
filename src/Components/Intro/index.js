import xs from 'xstream'
import {div, a, form, input} from '@cycle/dom'
require('./style.scss')

export default function Intro(sources){
  const sinks = {
    DOM: xs.of(

        div('.intro.flexcontainer.column-reverse', [
          form('#paypal', { props: {
            action: 'https://www.paypal.com/cgi-bin/webscr',
            method: 'post',
            target: '_top'
          }}, [
            input({props: {
              type: 'hidden',
              name: 'cmd',
              value: '_s-xclick'
            }}),
            input({props: {
              type: 'hidden',
              name: 'hosted_button_id',
              value: 'M8YBF5EK6H9QL'
            }}),
            input('.btn.anim',{props: {
              type: 'submit',
              name: 'submit',
              value: 'order now'
            }}),
          // a('.btn.anim', { props: {href: '/buy-now'} },'order now')
        ])

      ])
    )
  }
  return sinks
}
