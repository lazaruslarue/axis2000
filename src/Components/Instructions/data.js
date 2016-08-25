import {h2, div, p, li, img} from '@cycle/dom'
export const instructions = [{
  id: 0,
  title: h2('Using the Brass Carrying Case'),
  steps: [
    {
      id: 0,
      text: li('To open the Brass Container Push on the inside piece at the curved notch at one end of the container, sliding out the inside section. To close the Brass Container Make sure the curved notch is on the bottom far end of the inside section.'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/Thumb_Notch.jpg',
        }
      })
    },
    {
      id: 1,
      text: li('Use as a carrying case You can use the sliding brass container to hold The AXIS 2000 and two hand rolled cigaretts.  The container will protect both The AXIS 2000 and your cigarettes from damage and will also prevent any tobacco smell from entering your surroundings.  Place one or two cigarettes inside the container and place the AXIS 2000 in between them before sliding on the outside of the container.'),
      img: div('.photo.group',[
        img('.photo', {
          props: {src: 'src/Static/Instructions/2_Cicaretts_with_AXIS.JPG'}
        }),
        img('.photo', {
          props: {
            src: 'src/Static/Instructions/2_Cicaretts_Open_Container.JPG'}
        }),
        img('.photo', {
          props: {
            src: 'src/Static/Instructions/2_Cicaretts_Container_Almost_Closed.JPG'}
        })
      ]),
    },
    {
      id: 2,
      text: h2('Using the AXIS 2000 Clip', [
        p('Use the spring clip on top of the AXIS 2000 to open up the non-burning end of your cigarette. Insert the AXIS 2000 into the end of the cigarette and squeeze the spring clip together spreading apart the paper end.  Continue until the paper end is large enough to fit over the end of the brass tubing that is below the clip.'),
        img('.photo', {
          props: {src: 'src/Static/Instructions/Opening_End-Brighter.jpg'}
        }),
        p('Insert the brass tube into the non-burning end of the cigarette so that the paper is over the brass tubing.  Use the spring clip to gather the excess paper of the cigarette so that it is tight around the brass tubing end, and held by the spring clip.'),
        img('.photo', {
          props: {src: 'src/Static/Instructions/Cigarette_On_AXIS.JPG'}
        })
      ]),
    },{
      id: 3,
      text: h2('Cleaning the Axis 2000' [
        p('After using your AXIS 2000 a number of times, some resin from the tobacco will build up inside the brass tubing.  Please follow the instructions below to easily clean the inside of tubing so that it will keep from clogging and you can enjoy it’s use for many years.'),
        p('Take the cleaning rod supplied with your AXIS 2000  and push it through the tubing.  When it protrudes from the other side, use a paper towel (so you don’t get your hands dirty), and grab the rod and pull it through and out.'),
        p('You can easily clean the cleaning rod and the ends of the AXIS 2000  by using a small amount of solvent like rubbing alcohol, denatured alcohol,  or even vodka (though there are better uses for vodka than this).'),
        p('You will find that if you keep your tobacco well humidified,  it will burn slower with more smoke and the tobacco will not be drawn into the brass tubing, so you will have to clean the AXIS 2000 less often.  Please click this link to go to the page on our Website for more information and helpful hints to get the most out of the AXIS 2000 and enhance your smoking experience.')
      ])
    }]

}]
