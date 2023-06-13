import vertexGenre from '../images/vertexGenre.svg'
import deftGenre from '../images/deftGenre.svg'
import manaClubGenre from '../images/manaClubGenre.svg'
import dubGenre from '../images/dubGenre.svg'
import logoDub from '../images/dubLogo.svg'
import logoDeft from '../images/deftLogo.svg'
import logoManaClub from '../images/manaClubLogo.svg'
import logoVertex from '../images/vertexLogo.svg'

const genresData = [
  {
    id: 1,
    cover: manaClubGenre,
    logo: logoManaClub,
    title: 'Mana Club',
    category: 'manaClub',
    mainDesc:
      'A Rave where music collides with bass, generating an eternal and boundless cascade of waves.',
    shortDesc: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
    longerDesc:
      'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!'
  },
  {
    id: 2,
    cover: deftGenre,
    logo: logoDeft,
    title: 'Deft',
    category: 'deft',
    mainDesc:
      "Unleash the beat, own the flow, and ignite the stage with hip-hop's electrifying glow.",
    shortDesc:
      'Unleash your inner rhythm and dive into the world of Deft, where the boundaries of hip-hop are pushed to the limit. ',
    longerDesc:
      'Experience the relentless beats, intricate flows, and fearless lyricism that define Deft, as the genre blurs the lines and creates an electrifying fusion of innovation and raw authenticity.'
  },
  {
    id: 3,
    cover: vertexGenre,
    logo: logoVertex,
    title: 'Vertex',
    category: 'vertex',
    mainDesc:
      'Where pulsating house beats converge, igniting an euphoric dance experience that resonates deep within.',
    shortDesc:
      'Get ready to ignite the dancefloor with Vertex, a genre-defying fusion of house and dancehall music. ',
    longerDesc:
      'Feel the pulsating rhythms, infectious melodies, and irresistible grooves as Vertex takes you on a euphoric journey that bridges the worlds of electronic beats and vibes.'
  },
  {
    id: 4,
    cover: dubGenre,
    logo: logoDub,
    title: 'Dub',
    category: 'dub',
    mainDesc:
      'Reggae rises, vibes unite, and the rhythm of the islands transports you to a state of pure bliss.',
    shortDesc:
      'Step into the mesmerizing world of Dub, where the rich heritage of reggae meets the innovative realm of electronic music. ',
    longerDesc:
      'Lose yourself in the deep basslines, ethereal echoes, and pulsating rhythms, surrendering to a sonic journey that transcends time and takes you on a captivating exploration of sound.'
  }
]

export default genresData
