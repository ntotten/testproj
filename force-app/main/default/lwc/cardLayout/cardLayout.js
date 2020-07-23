import { LightningElement, track, api } from 'lwc';

export default class CardLayout extends LightningElement {
    @api imgUrl;
    @api heading;
    @api subTitle;
}