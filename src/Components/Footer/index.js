import xs from 'xstream'
import {div, a} from '@cycle/dom'


export default function Footer(sources){
  const sinks = {
    DOM: xs.of(
      div('.app',[
        div('ordern now again'),
        a( '.link',  {
          props: {href: '/test'}
        },
        'hsldkfjsldkjfsldkfji')])
    )
  }
  return sinks
}
