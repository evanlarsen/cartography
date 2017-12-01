import fetch from 'node-fetch';
import { StateCodes } from './fips-state-codes';

export class CensusApi{
    
    public async getShapeFile(stateCode: StateCodes){
        const url = `https://www2.census.gov/geo/tiger/GENZ2014/shp/cb_2014_${stateCode}_tract_500k.zip`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}