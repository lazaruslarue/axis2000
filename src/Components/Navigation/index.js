import xs from 'xstream'
import {ul, li, div, a} from '@cycle/dom'

require('./style.scss')

export default function Navigation(sources){

  const navDom$ = xs.of(
    ul('.navigation', [
      li('.howto',[
        a('.link.home', { props: {href: '#/index'} }, 'the axis 2000')
      ]),
      li('.instructions',[
        a('.link.hints', { props: {href: '#/hints'} }, 'helpful hints')
      ]),
      li('.story',[
        a('.link.story', { props: {href: '#/instructions'} }, 'instructions')
      ])
    ])
  )

  const homeClick$ = sources.DOM.select('a.home').events('click')
  const hintsClick$ = sources.DOM.select('a.hints').events('click')
  const storyClick$ = sources.DOM.select('a.story').events('click')

  const clicks$ = xs.merge(homeClick$, hintsClick$, storyClick$)
    .debug(console.log)
    .map(e => event.target.hash.replace('#', ''))

  const sinks = {
    DOM: navDom$,
    router: clicks$,

  }
  return sinks
}
