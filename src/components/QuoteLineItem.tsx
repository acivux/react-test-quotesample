import * as React from 'react';
import QuoteItemUnitSelector from './QuoteItemUnitSelector';
import QuoteItemComplexitySelector from './QuoteItemComplexitySelector';

export default class QuoteLineItem extends React.Component {
    render() {
        return (
            <tr>
                <td>ANCH</td>
                <td>ASas asD asdasd ;ldfka sd;flkdfsdf aasf asdfasf asdf asdf asdfa sfasf asf asdf</td>
                <td><QuoteItemComplexitySelector /></td>
                <td><QuoteItemUnitSelector /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td>xml</td>
            </tr>
        );
    }
}