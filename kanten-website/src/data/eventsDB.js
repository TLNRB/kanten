//Importing images
import studio from '../images/studio.png'

const events = [
  {
    id: 0,
    title: 'Event1 title',
    shortDesc: 'Event1 short desc',
    longDesc: 'Event1 long desc ',
    coverImg: studio,
    date: '18.05.2023',
    time: '20:00',
    price: '50,-',
    genre: 'Mana Club',
    age: '16+',
    performer: 'Event1 performer',
    address: 'Event1 address',
    ticketURL: 'https://www.google.com/'
  },
  {
    id: 1,
    title: 'Event2 title',
    shortDesc: 'Event2 short desc',
    longDesc: 'Event2 long desc',
    coverImg: studio,
    date: '17.05.2023',
    time: '21:00',
    price: '40,-',
    genre: 'Deft',
    age: '-',
    performer: 'Event2 performer',
    address: 'Event2 address',
    ticketURL: 'https://www.google.com/'
  },
  {
    id: 2,
    title: 'Event3 title',
    shortDesc: 'Event3 short desc',
    longDesc: 'Event3 long desc',
    coverImg: studio,
    date: '16.05.2023',
    time: '22:00',
    price: 'FREE',
    genre: 'Vertex',
    age: '18+',
    performer: 'Event3 performer',
    address: 'Event3 address',
    ticketURL: 'https://www.google.com/'
  }
]

export default events
