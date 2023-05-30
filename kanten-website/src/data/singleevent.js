import { ref } from 'vue'
import event1 from '../images/event1.png'
import event2 from '../images/event2.png'
import event3 from '../images/event3.png'
import event4 from '../images/event4.png'

const getSingleevent = () => {
  const state = ref([
    {
      id: 1,
      title: 'KANDIDATKONCERT TIMUR ALLISSTONE',
      date: '08. Jun, 15:00',
      image: event1,
      category: 'OTHER',
      ticket: '',
      description:
        'Kom med til en klubkoncert i dagslys når jeg spiller “Baglæns” live på Kanten. For 5 år siden startede jeg på linjen Elektronisk Musik og Lydkunst på SDMK Esbjerg. Efter at have fuldendt min bachelor for to år siden, valgte jeg at fortsætte på kandidaten - og jeg kan nu snart, langt om længe, kalde mig færdiguddannet. Derfor inviteres i alle til min kandidatkoncert på spillestedet Kanten (v/ Huset Esbjerg). Til koncerten vil jeg fremføre mit album Baglæns. Det vil desuden også være muligt at købe albummet på vinyl. Da min sidste eksamen først er ugen efter, så kan jeg med denne koncert desværre ikke kalde mig helt færdig endnu. Jeg vil dog gerne fejre det med de fremmødte, men jeg forventer ikke flag og blomster.',
      performer: 'Timur Allistone',
      price: '50',
      age: '18'
    },
    {
      id: 2,
      title: 'FABRÄK PÅ KANTEN SUPPORT: ØNDI',
      date: '09. Jun, 20:00',
      image: event2,
      category: 'OTHER',
      ticket: '',
      description:
        'D. 9 juni blæser vi taget af Kanten Esbjerg når vi afholder den største koncert hidtil, inden alle os fra Kanten går på en velfortjent sommerferie! Og hold nu på hat og briller. FABRÄK SPILLER PÅ KANTEN D. 9 JUNI // SUPPORT: ØNDI FABRÄK skulle oprindeligt have været forbi Tobakken på deres tour, men grundet Tobakkens triste omstændigheder, blev koncerten aflyst. Vi er efterfølgende i fællesskab med bandet blevet enige om, at afholde en ny koncert på Kanten i stedet. Det er en stor ting for os på Kanten at huse et band som FABRÄK, og vi er derfor nødsaget til at tage entré til denne koncert. Entré bliver på 140,- eksklusiv gebyr, og der er kun et begrænset antal billetter - se billetlink! Stor tak til Spar Nord Fonden der har hjulpet os med at gøre dette muligt.',
      performer: 'FabrÄk',
      price: '140',
      age: '18'
    },
    {
      id: 3,
      title: 'DEFT - DENNE GANG MED USSEL',
      date: '09. Jun, 20:00',
      image: event3,
      category: 'DEFT',
      ticket: '',
      description:
        'D. 11 November slår vi igen dørene op til DEFT - denne gang med USSEL på plakaten, og vi kan ikke få armene ned! USSELs musik er en følelsesmæssig rutsjebanetur, hvor man som lytter kastes fra festklædte pop-bangers til en rå og næsten punket emo-rap. Det er fandenivoldsk, men også med sprækker til en eftertænksom dybde og hudløshed, som gør den danske kunstner til en stærkt medrivende oplevelse. Den sønderborgensiske multikunstner Emil Mercedes Baadsgaard, der står bag USSEL, har udgivet to EP’er og en række fængende singler, der har gjort ham til et varmt navn på den danske upcoming musikscene. Han har udgivet sange med navne som Marcus.wav og Suspekts Orgi-E. Hans intense og originale udtryk, og stærke live-performances indbragte ham sejren til DRs KarriereKanonen 2022. Det har ikke fået ham til at hvile på laurbærrene. Tværtimod. 2023 blev sparket i gang af den guitardrevne single ‘Datter Af Dæmoner’, som indkapsler den energi, man kan opleve til USSELs koncerter, hvor der er plads til både rocket attitude og poppet charme. ‘Datter Af Dæmoner’ blev Ugens Uundgåelige på P3 i foråret 2023, og sommeren byder på både ny musik og store live-oplevelser, som SPOT-festival, Syd For Solen og Roskilde Festival.',
      performer: 'USSEL',
      price: '50',
      age: '16'
    },
    {
      id: 4,
      title: 'FABRÄK PÅ KANTEN SUPPORT: ØNDI',
      date: '09. Jun, 20:00',
      image: event4,
      category: 'MANA CLUB',
      ticket: '',
      description:
        'We’re super proud to announce our next Mana Club on the 14th of October. This time Mana Club will be darker and harder with fast-pumping techno and rowdy tunes together with the best people for the job. As always the residents Dj’s will be playing flaming tracks to help you get into the vibes on the floor. After the residents’ set, we have two of the greatest Dj’s we know, with one TBA.',
      performer: 'AK75, Rafael santi, tba',
      price: '50',
      age: '18'
    }
  ])

  return {
    state
  }
}

export default getSingleevent
