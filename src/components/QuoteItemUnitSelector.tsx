import * as React from 'react';
import RateUnit from '../models/RateUnit';
import QuoteItemUnitOption from './QuoteItemUnitOption';

interface QuoteItemUnitSelectorStateInterface {
    value?: string;
}

export default class QuoteItemUnitSelector extends React.Component<QuoteItemUnitSelectorStateInterface, QuoteItemUnitSelectorStateInterface> {
    public static defaultProps: QuoteItemUnitSelectorStateInterface = {value : 'KChar'};
    constructor(props: QuoteItemUnitSelectorStateInterface) {
        super(props);
        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    createItems(items: Array<RateUnit>) {
        return items.map((item: RateUnit) => <QuoteItemUnitOption key={item.id} isSelected={item.description === this.state.value} rateUnit={item} />);
    }

    handleChange(event: React.FormEvent<HTMLSelectElement>) {
        this.setState({value: event.currentTarget.value});
    }

    render() {
        const v: Array<RateUnit> =  [
            new RateUnit(0, 'KChar'),
            new RateUnit(1, 'Minutes'),
            new RateUnit(2, 'Pages')
        ];

        return(
            <select value={this.state.value} onChange={(e) => this.handleChange(e)} className="form-control input-sm">{this.createItems(v)}</select>
        );
    }
}
