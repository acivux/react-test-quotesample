import * as React from 'react';
import QuoteLineItem from './QuoteLineItem';

export default class QuoteLineItems extends React.Component {
    render() {
        return(
            <tbody>
            <QuoteLineItem />
            <QuoteLineItem />
            <QuoteLineItem />
            </tbody>
        );
    }
}