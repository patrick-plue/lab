import Bicycle from './Bicycle.js';

export default class BicycleBuilder {
    constructor(brand) {
        this.brand = brand;
    }

    chooseFrameSize(frameSize) {
        this.frameSize = frameSize;
        return this;
    }

    chooseWheelSize(wheelSize) {
        this.wheelSize = wheelSize;
        return this;
    }

    choosetyreSize(tyreSize) {
        this.tyreSize = tyreSize;
        return this;
    }

    chooseFrameMaterial(frame) {
        this.frameMaterial = frame;
        return this;
    }

    addAccessories(accessories = []) {
        this.accessories = accessories;
        return this;
    }

    build() {
        return new Bicycle(this);
    }
}
