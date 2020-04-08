import mock from '../mock';
import namor from 'namor';

import CoreUtils from '@core/utils';

const newCarRental = () => {
  const statusChance = Math.random();
  return {
    id: CoreUtils.generateGUID(),
    contactNo: namor.generate({ words: 1, numbers: 0 }),
    contactTitle: namor.generate({ words: 1, numbers: 0 }),
    bizPartner: namor.generate({ words: 1, numbers: 0 }),
    poc: namor.generate({ words: 1, numbers: 0 }),
    carPlate: Math.floor(Math.random() * 10000),
    contractStatus: statusChance > 0.66 ? 'Done' : statusChance > 0.33 ? 'In Progress' : 'Pending',
    contractedBy: namor.generate({ words: 1, numbers: 0 }),
    effectFrom: '',
    effectTo: '',
  };
};

const makeData = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return CoreUtils.range(len).map((d) => {
      return {
        ...newCarRental(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
};

mock.onGet('/api/carRentals').reply((config) => {
  const carRentalDB = {
    carRentals: [...makeData(30000)],
  };

  return [200, carRentalDB.carRentals];
});
