import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    links = [
        {
            title: "Google",
            url: "googl.com"
        },

        {
            title: "Salesforce",
            url: "salesforce.com"
        },

        {
            title: "Facebook",
            url: "facebook.com"
        }
    ];

    people = [
        {
            name: "Marc Beniof",
            title: "Chair & Chief Executive Officer",
            picSrc: "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/a-thumbnails/leadership/leadership_transparent/card-bio_benioff.jpg"
        },

        {
            name: "Parker Harris",
            title: "Co-Founder",
            picSrc: "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/a-thumbnails/leadership/leadership_transparent/card-bio_harris.jpg"
        },

        {
            name: "Mark Hawkins",
            title: "President and Chief Financial Officer",
            picSrc: "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/a-thumbnails/leadership/leadership_transparent/card-bio_hawkins.jpg"
        },

    ]
}
