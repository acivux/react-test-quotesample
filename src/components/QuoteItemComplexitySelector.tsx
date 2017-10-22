import * as React from 'react';
import ResourceComplexityModel from '../models/ResourceComplexityModel';
import QuoteItemComplexityOption from './QuoteItemComplexityOption';

interface QuoteItemComplexitySelectorStateInterface {
    value?: string;
}

export default class QuoteItemUnitSelector extends React.Component<QuoteItemComplexitySelectorStateInterface, QuoteItemComplexitySelectorStateInterface> {
    public static defaultProps: QuoteItemComplexitySelectorStateInterface = {value : 'KChar'};
    constructor(props: QuoteItemComplexitySelectorStateInterface) {
        super(props);
        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    createItems(items: Array<ResourceComplexityModel>) {
        return items.map((item: ResourceComplexityModel) => <QuoteItemComplexityOption key={item.id} isSelected={item.description === this.state.value} rateUnit={item} />);
    }

    handleChange(event: React.FormEvent<HTMLSelectElement>) {
        this.setState({value: event.currentTarget.value});
    }

    render() {
        const v: Array<ResourceComplexityModel> =  [
            new ResourceComplexityModel(0, '1'),
            new ResourceComplexityModel(1, '2'),
            new ResourceComplexityModel(2, '3'),
            new ResourceComplexityModel(3, '4')
        ];

        return(
            <select value={this.state.value} onChange={(e) => this.handleChange(e)} className="form-control input-sm">{this.createItems(v)}</select>
        );
    }
}
