import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Permet d'augmenter l'interface GlobalComponents qui est définie en y ajoutant le typage pour FaIcon
declare module 'vue' {
  export interface GlobalComponents {
    FaIcon: typeof FontAwesomeIcon
  }
}
