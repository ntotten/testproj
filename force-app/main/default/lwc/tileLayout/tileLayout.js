import { LightningElement, track, api } from 'lwc';

export default class TileLayout extends LightningElement {
    @api imgUrl;
    @api heading;
    @api subTitle;
}