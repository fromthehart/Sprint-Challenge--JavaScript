// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker({length, width, height}) {
//   this.length = length;
//   this.width = width;
//   this.height = height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.area = function() { // BONUS METHOD to make surfaceArea() below more DRY
//   return this.length * this.width;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return 6 * this.area();
// }

class CuboidMaker {
  constructor({length, width, height}) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  area() {
    return this.length * this.width;
  }
  surfaceArea() {
    return 6 * this.area();
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 120

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.