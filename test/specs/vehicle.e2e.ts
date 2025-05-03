import { expect } from '@wdio/globals';
import VehiclePage from '../pageobjects/vehicle.page.js';
import data from '../data/vehicles.json' assert { type: 'json' };

describe('Vehicle Cloning Tests', () => {
  beforeEach(async () => {
    await browser.url('/AQA_Test_Task (1).html');
  });

  it('Test Case 1', async () => {
    const vehicleData = data.vehicle1;
    await VehiclePage.fillVehicleData(vehicleData.name, vehicleData.model, vehicleData.year);
    await VehiclePage.selectColor(vehicleData.color);
    await VehiclePage.cloneVehicle();
    await expect(VehiclePage.getClonedVehicleData()).resolves.toMatchObject(vehicleData);
  });

  it('Test Case 2', async () => {
    const testData = data.vehicle2;

    await VehiclePage.fillVehicleData(
      testData.initialData.name,
      testData.initialData.model,
      testData.initialData.year
    );

    await VehiclePage.changeModel(testData.expectedData.model);

    await VehiclePage.selectColor(testData.initialData.color);

    await VehiclePage.cloneVehicle();

    await expect(VehiclePage.getClonedVehicleData()).resolves.toMatchObject(testData.expectedData);
  });
});
