import { LightningElement, track, api } from 'lwc';

export default class Grid extends LightningElement {
    @api items;
    @api itemLayout;
}