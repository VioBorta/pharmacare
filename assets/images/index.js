// @flow
/* eslint-disable global-require */
import {Asset} from "expo";

export default class Images {
    static login = require("./login.jpg");
    static background = require("./background.jpg")
    static signUp = require("./signUp.jpg");
    static walkthrough = require("./walkthrough.jpg");
    static profile = require("./profile.jpg");

    static defaultAvatar = require("./avatars/default-avatar.jpg");
    static avatar1 = require("./avatars/avatar-1.jpg");
    static avatar2 = require("./avatars/avatar-2.jpg");
    static avatar3 = require("./avatars/avatar-3.jpg");

    static music = require("./music.jpg");
    static architecture = require("./architecture.jpg");
    static travel = require("./travel.jpg");

    // Icons
    static logo = require("./logo.svg");
    static logoPharma = require("./logoPharma.svg");
    static phone = require("./phone.svg");
    static phonePharma = require("./phonePharma.svg");
    static lock = require("./lock.svg");
    static lockPharma = require("./lockPharma.svg");
    static user = require("./user.svg");
    static userPharma = require("./userPharma.svg");
    static circle = require("./circle.svg");
    static footerPrestazioniWhite = require("./footer_prestazioni_white.svg");
    static footerPrestazioniGreen = require("./footer_prestazioni_green.svg");
    static footerProfileWhite = require("./footer_profile_white.svg");
    static footerProfileGreen = require("./footer_profile_green.svg");
    static footerRichiesteWhite = require("./footer_richieste_white.svg");
    static footerRichiesteGreen = require("./footer_richieste_green.svg");
    static footerSearchGreen= require("./footer_search_green.svg");
    static footerSearchWhite = require("./footer_search_white.svg");
    static arrow = require("./arrow.svg");
    static arrowRotated = require("./arrowRotated.svg");
    static arrowRotated2 = require("./arrowRotated2.svg");
    // static sort = require("./sort.png");
    static sort = require("./sort.svg");
    static profileCard = require("./profileCard.svg");
    static profileGeopin = require("./ProfileGeopin.svg");
    static profileLock = require("./profileLock.svg");
    static profilePhone = require("./profilePhone.svg");
    static profileTrash = require("./profileTrash.svg");
    static profileUser = require("./profileUser.svg");
    static nurse = require("./nurse.svg");
    static calendar = require("./calendar.svg");
    static searchbox = require("./searchbox.svg");

    static downloadAsync(): Promise<*>[] {
        return [
            Asset.fromModule(Images.login).downloadAsync(),
            Asset.fromModule(Images.background).downloadAsync(),
            Asset.fromModule(Images.signUp).downloadAsync(),
            Asset.fromModule(Images.walkthrough).downloadAsync(),
            Asset.fromModule(Images.profile).downloadAsync(),

            Asset.fromModule(Images.defaultAvatar).downloadAsync(),
            Asset.fromModule(Images.avatar1).downloadAsync(),
            Asset.fromModule(Images.avatar2).downloadAsync(),
            Asset.fromModule(Images.avatar3).downloadAsync(),

            Asset.fromModule(Images.music).downloadAsync(),
            Asset.fromModule(Images.architecture).downloadAsync(),
            Asset.fromModule(Images.travel).downloadAsync(),

            // Icons
            Asset.fromModule(Images.logo).downloadAsync(),
            Asset.fromModule(Images.logoPharma).downloadAsync(),
            Asset.fromModule(Images.phone).downloadAsync(),
            Asset.fromModule(Images.phonePharma).downloadAsync(),
            Asset.fromModule(Images.lock).downloadAsync(),
            Asset.fromModule(Images.lockPharma).downloadAsync(),
            Asset.fromModule(Images.user).downloadAsync(),
            Asset.fromModule(Images.userPharma).downloadAsync(),
            Asset.fromModule(Images.circle).downloadAsync(),
            Asset.fromModule(Images.footerPrestazioniWhite).downloadAsync(),
            Asset.fromModule(Images.footerPrestazioniGreen).downloadAsync(),
            Asset.fromModule(Images.footerProfileWhite).downloadAsync(),
            Asset.fromModule(Images.footerProfileGreen).downloadAsync(),
            Asset.fromModule(Images.footerRichiesteWhite).downloadAsync(),
            Asset.fromModule(Images.footerRichiesteGreen).downloadAsync(),
            Asset.fromModule(Images.footerSearchGreen).downloadAsync(),
            Asset.fromModule(Images.footerSearchWhite).downloadAsync(),
            Asset.fromModule(Images.arrow).downloadAsync(),
            Asset.fromModule(Images.arrowRotated).downloadAsync(),
            Asset.fromModule(Images.arrowRotated2).downloadAsync(),
            Asset.fromModule(Images.sort).downloadAsync(),
            Asset.fromModule(Images.profileCard).downloadAsync(),
            Asset.fromModule(Images.profileCard).downloadAsync(),
            Asset.fromModule(Images.profileLock).downloadAsync(),
            Asset.fromModule(Images.profilePhone).downloadAsync(),
            Asset.fromModule(Images.profileTrash).downloadAsync(),
            Asset.fromModule(Images.nurse).downloadAsync(),
            Asset.fromModule(Images.calendar).downloadAsync(),
            Asset.fromModule(Images.profileUser).downloadAsync(),
            Asset.fromModule(Images.searchbox).downloadAsync()
        ];
    }
}
