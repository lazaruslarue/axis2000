import xs from 'xstream'
import {div, span, p, img, li} from '@cycle/dom'
require('./style.scss')

const hints= [{
  id: 1,
  title: 'Keeping Your AXIS 2000 Clean',
  lead: 'Here are some helpful tips to get the most out of your AXIS 2000',
  items: ['Use the Cleaning Rod as a tamper to pack your cigarette if you need.',
    'When you roll your hand rolled cigarette, keep the tobacco slightly recessed  from the very end of the paper, or tamp the tobacco in using the Cleaning Rod so there is paper beyond the tobacco on the non-burning end.  This will leave some paper for the AXIS 2000 to easily hold onto and helps prevent tobacco from getting stuck inside the brass tube of the AXIS 2000.  It will stay clean and unclogged much longer if you do this.',
    'Humidify your smoking blend (see below)'
  ]
},
{
  id: 2,
  title: 'Humidity and Your Tobacco',
  lead: 'No matter what you smoke, keeping your blend at the proper humidity will enhance your smoking experience in many ways',
  items: ['It will be easier to roll when making hand rolled cigarettes',
    'Your tobacco will smoke slower, lasting longer, producing more    smoke for the same amount of tobacco',
    'If you are using the AXIS - 2000, your tobacco will stay in your cigarette and will not be drawn into the AXIS - 2000 tube.  Dry tobacco can easily crumble into dust.'
  ]
},
{
  id: 3,
  title: 'How To Build A Simple Humidifier',
  lead: 'There are many places where you can easily purchase a Tobacco Humidifier, especially for cigars, but they are also easy to make.',
  items: [
    'Take a small refrigerator container and punch some holes in the top.  Fold up a paper towel, wet it and put it inside the container.',
    'Take a medium size refrigerator container, where you will put your tobacco, and make sure it is not taller than the large outside container shown on the right.  If the medium size container is too tall, you can easily cut it down with scissors.  The container in the picture was cut down.',
    'The container that you put your tobacco in must be shorter than the large outside container when the top of the outside container is sealed.  This is so the humidified air from the small container with the wet paper towel in it can circulate to your tobacco.',
    'That\'s it.  Just wet the towel, put your tobacco into the medium size container and seal the lid onto the large container.  Keep your tobacco in this humidifier all the time and it will stay soft and moist and will greatly improve your smoking experience, as well as preventing your AXIS - 2000 from getting clogged for longer periods of time.'
  ]
},
]

export default function Hints(sources){
  let header$ = xs.of(div('.testimonials-header' , [
    p('helpful hints')
  ]))

  let hints$ = xs.fromArray(hints)
    .map(h => {

      let hint_steps$ = xs.fromArray(h.items)
        .map(step => {
          return li('.step', step)
        })



      let hint = span('.hint',  [
        div('.flexcontainer.column.wrapper', [
          p('.title', h.title),
          p('.lead',  h.lead),
          p('.location', h.items   )
        ])
      ]);

      return hint
    })
    .fold((acc, x) => {
      acc.push(x);
      return acc;
    }, [])
    .map(list => div('.testimonials-body', list))

  let footer$ = xs.of(div('.testimonials-footer', [
    div('.inside', [
      p('.full-width','Send your "testimonial" for a chance to win an Axis')
    ])
  ]))

  let vDom$ = xs.combine( header$, hints$, footer$)
    .map(([header, hint, footer]) => {
      return div('.testimonials.flexcontainer.column', [header, hint, footer])
    })

  return {
    DOM: vDom$
  }
}
