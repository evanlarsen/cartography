import { FileCatalog } from './file-catalog';
import { StateCodes } from './fips-state-codes';
import * as path from 'path';

test('gets cartographic filename for Florida', () => {
    const catalog = new FileCatalog();
    const file = catalog.getCartographicBoundaryFile(StateCodes.FL);
    const expected = path.resolve(__dirname, './data/12/cb_2014_12_tract_500k.zip')
    expect(file).toBe(expected);
});