import xs from 'xstream'

export default function intent (DOMSource, History, click$) {
  return
    // a stream of URL clicks in the App
    DOMSource.select('a').events('click')
      .map(event => event.target.hash.replace('#', ''))
      .map(payload => ({type: 'url', payload}))

  
}
