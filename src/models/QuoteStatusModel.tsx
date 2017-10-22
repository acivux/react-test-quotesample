export default class QuoteStatusModel {
    id: number;
    description : string;
    date: Date
    
    constructor (stateId: number, stateDescription: string) {
        this.id = stateId;
        this.description = stateDescription;
    }
}

export let WaitingStatus = new QuoteStatusModel(0, "Waiting");
export let ApprovedStatus = new QuoteStatusModel(1, "Approved");
export let OnHoldStatus = new QuoteStatusModel(2, "On Hold");
export let CancelStatus = new QuoteStatusModel(3, "Cancelled");