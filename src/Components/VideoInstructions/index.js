import xs from 'xstream'
import {div, iframe, p} from '@cycle/dom'
import Video from '../Video'
require('./style.scss')

export default function VideoInstructions(sources){

  let url = "https://www.youtube.com/embed/grsrzjkthh8"

  const sinks = {
    DOM: Video(url).DOM
      .map(ele => {
        return div('.instruction-video', [
            ele
        ])
      })

  }
  return sinks
}
