import QuoteLineItemModel from './QuoteLineItemModel';
import QuoteStatusModel from './QuoteStatusModel';

export default class QuoteModel {
    summary: string;
    dateCreated: Date;
    status: QuoteStatusModel;
    items: Array<QuoteLineItemModel>;
    specialInstructions: string;

    constructor (date: Date) {
        this.dateCreated = date;
    }
}