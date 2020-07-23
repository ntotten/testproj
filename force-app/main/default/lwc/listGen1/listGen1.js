import { LightningElement, track, api } from 'lwc';
import itemLayout from './itemLayout.html';

export default class ListGen1 extends LightningElement {
    @api data;
    itemLayout = {template: itemLayout};
}
