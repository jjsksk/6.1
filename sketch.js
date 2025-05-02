let img;

function preload() {
  img = loadImage('path/to/your/image.jpg'); // 替換為你的影像路徑
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
}

function draw() {
  background('#dde5b6'); // 設定背景顏色

  if (img) {
    const imageWidth = width * 0.8;
    const imageHeight = height * 0.8;
    const x = (width - imageWidth) / 2;
    const y = (height - imageHeight) / 2;

    // 繪製影像
    image(img, x, y, imageWidth, imageHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}
