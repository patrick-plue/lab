export default class Bicycle {
    constructor(builder) {
        this.brand = builder.brand;
        this.frameSize = builder.frameSize;
        this.wheelSize = builder.wheelSize;
        this.tyreSize = builder.tyreSize;
        this.frameMaterial = builder.frameMaterial;
        this.mileage = builder.mileage;
        this.accessories = builder.accessories || [];
    }
    toString() {
        return JSON.stringify(this);
    }
}
