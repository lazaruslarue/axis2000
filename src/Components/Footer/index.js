import xs from 'xstream'
import {div, a, form, input, script} from '@cycle/dom'
require('./style.scss')

export default function Footer(sources){
  const sinks = {
    DOM: xs.of(
      script("          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');          ga('create', 'UA-62092769-1', 'auto');          ga('send', 'pageview');"),
      div('#footer.flexcontainer',[
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
      ])
    ])
  )
  }
  return sinks
}
