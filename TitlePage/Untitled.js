class CollisionChecker {
  constructor(canvasElement) {
  this.canvas = gameCanvasElement;

      // set this to true to test everything
      this._test = false;
      if (this._test) {
        this._test_logMouseMovement();
      }

      this.typeOfGameElement = {
        nothing : "nothing",
        button : "button"
      }
  }

  // ==============================================
  // checkPixelType  ==============================
  // inputs
      // pixelX  - x pixel coordinate to check
      // pixelY  - y pixel coordinate to check
  // outputs
    // any type of (typeOfGameElement)
  // ==============================================
  checkPixelType(pixelX, pixelY) {

    // How did I figure this out?  Stolen from: https://bfy.tw/SbUU
    var pixelData = this.canvas.getContext('2d').getImageData(pixelX, pixelY, 1, 1).data;

    // If (this.test) is set to TRUE (in the constructor), log details
    if (this._test) {
      this._test_logTestData(pixelData);
    }


    if (pixelData) {
      // Check if wall
      if (this.isButton(pixelData)) {
        return this.typeOfGameElement.wall;
      }
    }
  }

  // Checks if its a wall (assumed RGB values are 255,255,255)
  isButton(pixelData) {
    if (pixelData[0] == '156' && pixelData[1] == '176' && pixelData[2] == '125' && pixelData[3] == '255') {
      console.log('buttonclick');
      return true;
    }
    return false;
  }


  // This is only used for testing, can be deleted...
  // This draws a gradient and shows the RGB values at any given pixel
  // stolen from https://tinyurl.com/ytmnvtct
  _test_logMouseMovement() {
    let self = this;
    this.canvas.addEventListener('click', e => {
      self.checkPixelType(e.offsetX, e.offsetY);
    });
  }

  _test_logTestData(pixelData) {
    if (pixelData) {
      console.log('R: ' + pixelData[0]);
      console.log('G: ' + pixelData[1]);
      console.log('B: ' + pixelData[2]);
      console.log('A: ' + pixelData[3]);
    }
  }

}

let gameCanvasElement = document.getElementById('game');
const cc = new CollisionChecker(this.canvas);
