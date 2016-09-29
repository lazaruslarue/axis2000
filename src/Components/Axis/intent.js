import xs from 'xstream'

export default function intent (DOMSource, router) {

  // a stream of URL clicks in the App
  const navClicks$ = DOMSource.select('a').events('click')
    .map(event => event.target.hash.replace('#', ''))

  return navClicks$
}
