import { App } from './app';
import { CensusApi } from './census-api';
import { FileCatalog } from './file-catalog';
import { FileSystem } from './file-system';
import { Logger } from './logger';
import { StateCodes } from './fips-state-codes';
import { Shape2GeoJson } from './shape2geojson';
import { Zip } from './zip';

// composition root
const api = new CensusApi();
const fileCatalog = new FileCatalog();
const logger = new Logger();
const fileSystem = new FileSystem(logger);
const zip = new Zip();
const shape2geojson = new Shape2GeoJson();
const app = new App(
    api,
    fileCatalog,
    fileSystem,
    zip,
    shape2geojson,
    logger);

try {
    app.run(StateCodes.FL);
} catch(err){
    logger.error(err);
}

