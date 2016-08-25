import {h1, h2, div, p, li, img} from '@cycle/dom'
export const instructions = [{
  id: 0,
  group_heading: h2('Using the Brass Carrying Case:'),
  group_items: [
    {
      id: 0,
      text: p('To open the Brass Container Push on the inside piece at the curved notch at one end of the container, sliding out the inside section. To close the Brass Container Make sure the curved notch is on the bottom far end of the inside section.'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/Thumb_Notch.jpg',
        }
      }),
      orientation: '.left'
    }, {
      id: 1,
      text: p('To close the Brass Container Make sure the curved notch is on the bottom far end of the inside section. Use as a carrying case You can use the sliding brass container to hold The AXIS 2000 and two hand rolled cigarettes.'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/2_Cicaretts_Open_Container.JPG'
        }
      }),
      orientation: '.right'
    }, {
      id: 2,
      text: p('The container will protect both The AXIS 2000 and your cigarettes from damage and will also prevent any tobacco smell from entering your surroundings.'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/2_Cicaretts_with_AXIS.JPG'
        }
      }),
      orientation: '.left'
    }, {
      id: 3,
      text: p('Place one or two cigarettes inside the container and place the AXIS 2000 in between them before sliding on the outside of the container.'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/2_Cicaretts_Container_Almost_Closed.JPG'
        }
      }),
      orientation: '.right'
    }]
}, {
  id: 1,
  group_heading: h2('Using the AXIS 2000 Clip:'),
  group_items: [
    {
      id: 0,
      text: p('Use the spring clip on top of the AXIS 2000 to open up the non-burning end of your cigarette.  Insert the AXIS 2000 into the end of the cigarette and squeeze the spring clip together spreading apart the paper end.  Continue until the paper end is large enough to fit over the end of the brass tubing that is below the clip.'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/Opening_End-Brighter.jpg',
        }
      }),
      orientation: '.left'
    }, {
      id: 1,
      text: p('Insert the brass tube into the non-burning end of the cigarette so that the paper is over the brass tubing.  Use the spring clip to gather the excess paper of the cigarette so that it is tight around the brass tubing end, and held by the spring clip.'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/Cigarette_On_AXIS.JPG',
        }
      }),
      orientation: '.right'
    }, {
      id: 2,
      text: p('Light your cigarette and draw the smoke from the back end of the AXIS 2000.  You will find the smoke will be cooler and less irritating to your throat, enabling you to smoke all the tobacco in your cigarette without waste.  All that will be left when you are finished is a small amount of paper around the outside of the brass tubing and the paper that is held by the clip'),
      img: img('.photo', {
        props: {
          src: 'src/Static/Instructions/AXIS_with_Cigarette_1-2015_Rev_2.jpg',
        }
      }),
      orientation: '.right'
    }, {
      id: 3,
      text: p('When finished, open the spring clip and remove any remaining small amount of paper.'),
      // img: img('.photo', {
      //   props: {
      //     src: '',
      //   }
      // }),
      orientation: '.right'
    },
  ]
}, {
  id: 1,
  group_heading: h2('Cleaning the AXIS 2000:'),
  group_items: [
    {
      id: 0,
      text: p('After using your AXIS 2000 a number of times, some resin from the tobacco will build up inside the brass tubing.  Please follow the instructions below to easily clean the inside of tubing so that it will keep from clogging and you can enjoy it’s use for many years.'),
      // img: img('.photo', {
      //   props: {
      //     src: '',
      //   }
      // }),
      orientation: '.left'
    }, {
      id: 1,
      text: p('Take the cleaning rod supplied with your AXIS 2000  and push it through the tubing.  When it protrudes from the other side, use a paper towel (so you don’t get your hands dirty), and grab the rod and pull it through and out.'),
      // img: img('.photo', {
      //   props: {
      //     src: '',
      //   }
      // }),
      orientation: '.left'
    }, {
      id: 2,
      text: p('You can easily clean the cleaning rod and the ends of the AXIS 2000  by using a small amount of solvent like rubbing alcohol, denatured alcohol,  or even vodka (though there are better uses for vodka than this).'),
      // img: img('.photo', {
      //   props: {
      //     src: '',
      //   }
      // }),
      orientation: '.left'
    }, {
      id: 3,
      text: p('You will find that if you keep your tobacco well humidified,  it will burn slower with more smoke and the tobacco will not be drawn into the brass tubing, so you will have to clean the AXIS 2000 less often.  Please click this link to go to the page on our Website for more information and helpful hints to get the most out of the AXIS 2000 and enhance your smoking experience.'),
      // img: img('.photo', {
      //   props: {
      //     src: '',
      //   }
      // }),
      orientation: '.left'
    },
  ]
}];
