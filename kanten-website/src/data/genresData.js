import { ref } from 'vue'
import videoDub from '../images/dub-genre_1.mp4'
import videoDeft from '../images/deft-genre_1.mp4'
import videoManaClub from '../images/manaclub-genre_1.mp4'
import videoVertex from '../images/vertex-genre_1.mp4'
import logoDub from '../images/dubLogo.png'
import logoDeft from '../images/deftLogo.png'
import logoManaClub from '../images/manaClubLogo.png'
import logoVertex from '../images/vertexLogo.png'

const genresData = () => [
  {
    id: 1,
    video: videoManaClub,
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
    video: videoDeft,
    logo: logoDeft,
    title: 'Deft',
    category: 'deft',
    mainDesc:
      "Unleash the beat, own the flow, and ignite the stage with hip-hop's electrifying glow.",
    shortDesc: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
    longerDesc:
      'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!'
  },
  {
    id: 3,
    video: videoVertex,
    logo: logoVertex,
    title: 'Vertex',
    category: 'vertex',
    mainDesc:
      'Where pulsating house beats converge, igniting an euphoric dance experience that resonates deep within.',
    shortDesc: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
    longerDesc:
      'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!'
  },
  {
    id: 4,
    video: videoDub,
    logo: logoDub,
    title: 'Dub',
    category: 'dub',
    mainDesc:
      'Reggae rises, vibes unite, and the rhythm of the islands transports you to a state of pure bliss.',
    shortDesc: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
    longerDesc:
      'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!'
  }
]

export default genresData
