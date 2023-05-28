import { ref } from 'vue'
import videodub from '../images/dub-genre_1.mp4'
import videodeft from '../images/deft-genre_1.mp4'
import videomanackub from '../images/manaclub-genre_1.mp4'
import videovertex from '../images/vertex-genre_1.mp4'
import logodub from '../images/logo-dub.png'
import logodeft from '../images/logo-deft.png'
import logomanaclub from '../images/logo-manaclub.png'
import logovertex from '../images/logo-vertex.png'

const getSinglegenre = () => {
    const state = ref([
        {
            id: 1,
            video: videodub,
            title: 'DUB',
            category: 'dub',
            maindescription: 'Reggae rises, vibes unite, and the rhythm of the islands transports you to a state of pure bliss.',
            logo: logodub,
            description1: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
            description2: 'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!',
        },
        {
            id: 2,
            video: videodeft,
            title: 'DEFT',
            category: 'deft',
            maindescription: "Unleash the beat, own the flow, and ignite the stage with hip-hop's electrifying glow.",
            logo: logodeft,
            description1: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
            description2: 'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!',
        },
        {
            id: 3,
            video: videomanackub,
            title: 'MANA CLUB',
            category: 'manaclub',
            maindescription: 'A Rave where music collides with bass, generating an eternal and boundless cascade of waves.',
            logo: logomanaclub,
            description1: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
            description2: 'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!',
        },
        {
            id: 4,
            video: videovertex,
            title: 'VERTEX',
            category: 'vertex',
            maindescription: 'Where pulsating house beats converge, igniting an euphoric dance experience that resonates deep within.',
            logo:  logovertex,
            description1: 'A place where music meets bass, and creates an ongoing and endless flow of waves.',
            description2: 'Enter the Exuberant World of Mana Club: Surrender to the Beats, Ignite Your Spirit, and Dance Through the Night. Let Your Soul Soar in a Mesmerizing Rave Experience Like No Other!',
        },
        
    ]
    )
    
    return {
        state
    }
    
}

export default getSinglegenre