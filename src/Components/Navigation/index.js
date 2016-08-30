import xs from 'xstream'
import {ul, li, div, a} from '@cycle/dom'
// here's our style
require('./style.scss')

export default function Navigation(sources){

  // const intent =  Intent(sources)

  // todo: catch events & don't let the <a> redirection happen
  const sinks = {
    // router: intent,
    DOM: xs.of(
      ul('.navigation', [
        li('.howto',[
          a('.link', { props: {href: 'index.html'} }, 'the axis 2000')
        ]),
        li('.instructions',[
          a('.link', { props: {href: 'hints.html'} }, 'helpful hints')
        ]),
        li('.story',[
          a('.link', { props: {href: 'instructions.html'} }, 'instructions')
        ])
      ])
    )
  }
  return sinks
}

function Intent(sources) {
  return xs.merge(
    sources.DOM.select('.link').events('click')
      .debug(msg => {
        debugger
        console.log(msg);
        return msg
      })
      .mapTo({pathname: '/hints'})
  )
}
