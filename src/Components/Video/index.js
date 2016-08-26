import xs from 'xstream'
import {div, iframe, p} from '@cycle/dom'

export default function Video(link){
  const sinks = {
    DOM: xs.of(
        iframe('.instruction-video', {
          props: {
            src: link,
            frameborder: '0',
          }
        })
      )

  }
  return sinks
}
