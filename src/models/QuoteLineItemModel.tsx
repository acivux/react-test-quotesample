import RateUnit from './RateUnit';
import ResourceComplexityModel from './ResourceComplexityModel';

export default class QuoteLineItemModel {
    id: number
    description: string
    complexity: ResourceComplexityModel
    unit: RateUnit
    units: number
    rate: number
}