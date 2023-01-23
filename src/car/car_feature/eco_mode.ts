import Car from "../car";
import CarFeatureDecorator from "./car_featue";

export default class EcoMode extends CarFeatureDecorator {
  car: Car;
  constructor(car: Car) {
    super();
    this.car = car;
    console.log(this.getDescription());
  }

  getDescription(): string {
    return "Eco Mode Activated";
  }

  getMileage(): number {
    return this.car.getMileage() + 10;
  }
}
