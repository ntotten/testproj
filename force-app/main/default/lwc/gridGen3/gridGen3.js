import { LightningElement, track, api } from 'lwc';
import itemLayout from './items.html';

export default class GridGen1 extends LightningElement {
    @api data;
    itemLayout = {template: itemLayout};
}
