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

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('=== CUBOID ===');
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor({length, width, height}) {
    super(...arguments);
    this.side = length; // All sides of a cube are equal, so we should be able to choose any dimension here 
  }

  isCube() {
    return (this.volume() === Math.pow(this.side, 3));
  }

  cubeVolume() {
    if (this.isCube()) {
      return this.volume();
    } else {
      console.log("Warning: not a cube! All sides aren't all equal.");
      return null;
    }
  }

  cubeSurfaceArea() {
    if (this.isCube()) {
      return this.surfaceArea();
    } else {
      console.log("Warning: not a cube! All sides aren't all equal.");
      return null;
    }
  }
}

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5
});

const notCube = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
});

console.log('\n=== CUBE ===');
console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150

console.log('\n=== NOTCUBE ===');
console.log(notCube.cubeVolume()); // null
console.log(notCube.cubeSurfaceArea()); // null