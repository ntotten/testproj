import { LightningElement, track, api } from 'lwc';

export default class RepeaterItem extends LightningElement {
    @api itemLayout;
    @api item;

    render() {
        return this.itemLayout.template;
    }
}