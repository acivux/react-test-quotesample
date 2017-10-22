import RateUnit from '../models/RateUnit';
import ResourceComplexityModel from '../models/ResourceComplexityModel';
import QuoteModel from '../models/QuoteModel';

export interface IRateUnitProps {
    isSelected: boolean
    rateUnit: RateUnit
}

export interface IComplexityProps {
    isSelected: boolean
    resourceComplexity: ResourceComplexityModel
}

export interface IQuoteProps {
    quote: QuoteModel
}