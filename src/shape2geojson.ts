import * as shapefile from 'shapefile';

export class Shape2GeoJson{
    public async convert(shapeFilePath: string){
        const shape = await shapefile.open(shapeFilePath);
        const geojson = {};
        let feature = await shape.read();
        while (!feature.done){
            Object.assign(geojson, feature.value);
            feature = await shape.read();
        }
        return geojson;
    }
}

