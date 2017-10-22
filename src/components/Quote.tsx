import * as React from 'react';
import QuoteLineItems from './QuoteLineItems';
import { IQuoteProps } from '../components/IProps';
import QuoteStatusModel  from '../models/QuoteStatusModel';
import { WaitingStatus, ApprovedStatus, OnHoldStatus, CancelStatus }  from '../models/QuoteStatusModel';


class Quote extends React.Component<IQuoteProps> {
    
    constructor (props: IQuoteProps){
        super(props);
    }

    MapStatusToPanelType(status: QuoteStatusModel) {
        switch (status.id) {
            case ApprovedStatus.id:
                return "panel-success";
            case OnHoldStatus.id:
                return "panel-warning";
            case CancelStatus.id:
                return "panel-danger";
            case WaitingStatus.id:
            return "panel-default";
        }
        return "panel-default";
    }

    render() {
        return (
        <div className="row">
            <div className="col-lg-12">
            <div className={"panel "+ this.MapStatusToPanelType(this.props.quote.status)}>
            <div className="panel-heading">{this.props.quote.summary}<div className="pull-right">{this.props.quote.dateCreated.toDateString()}</div></div>
            <div className="panel-body">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th>Resource</th>
                        <th>Title</th>
                        <th>Complexity</th>
                        <th>UnitType</th>
                        <th>Units</th>
                        <th>Rate</th>
                        <th>Deliverable</th>
                        </tr>
                    </thead>
                    <QuoteLineItems />
                </table>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h4>Special Instructions</h4>
                        <textarea className="form-control" rows={4}>{this.props.quote.specialInstructions}</textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="btn-group pull-right" role="group">
                        <button type="button" className="btn btn-default">Cancel</button>
                        <button type="button" className="btn btn-default">Hold</button>
                        <button type="button" className="btn btn-default">Approve</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Quote;