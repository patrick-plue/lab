// Builder: separate the construction of a complex object from its representation so that the same construction process can create different representation

import BicycleBuilder from './BicycleBuilder.js';

const myDreamBike = new BicycleBuilder('Simonelli')
    .chooseFrameSize(52)
    .chooseWheelSize(28)
    .choosetyreSize(40)
    .chooseFrameMaterial('steel')
    .addAccessories(['bell'])
    .build();

console.log('myDreamBike', myDreamBike.toString());
