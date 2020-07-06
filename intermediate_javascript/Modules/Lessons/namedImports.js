import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './namedImports';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(`${element.name} meets staff requirements: ${meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)}`);
  });
}

displayFuelCapacity();
displayStaffStatus();