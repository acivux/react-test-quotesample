import * as React from 'react';
import * as QuoteProps from './IProps';

export default class QuoteItemUnitOption extends React.Component<QuoteProps.IRateUnitProps> {

    render() {
        return (
            <option key={this.props.rateUnit.id} value={this.props.rateUnit.description}>{this.props.rateUnit.description}</option>
        );
    }
}
