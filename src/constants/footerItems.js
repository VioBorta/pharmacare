import navigationConstants from './navigationConstants';
import { colors } from '../style/base';

export const footerItems = [
    {
        source: require('../../assets/images/footer_search_green.png') ,
        navigationPage: navigationConstants.HOME,
        pageName: "TROVA"
    },
    {
        source:  require('../../assets/images/footer_prestazioni_green.png'),
        navigationPage: navigationConstants.SERVICES,
        pageName: "PRESTAZIONI" 
    },
    {
        source: require('../../assets/images/footer_richieste_green.png'),
        navigationPage: navigationConstants.REQUESTS,
        pageName: "RICHIESTE"
    },
    {
        source: require('../../assets/images/footer_profile_green.png'),
        navigationPage: navigationConstants.USER,
        pageName: "PROFILO" 

    },
 
];
