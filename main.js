var canvas = new fabric.Canvas("canvas1");
b_width = 30;
b_height = 30;
playerX = 10;
playerY = 10;
var playerObj = "";
var blockObj = "";

function playerUpdate() {
  fabric.Image.fromURL("player.png", function (Img) {
    playerObj = Img;
    playerObj.scaleToWidth(150);
    playerObj.scaleToHeight(140);
    playerObj.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(playerObj);
  });
}

// playerUpdate();

function newImage(Img) {
  fabric.Image.fromURL(Img, function (image1) {
    blockObj = image1;
    blockObj.scaleToWidth(b_width);
    blockObj.scaleToHeight(b_height);
    blockObj.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(blockObj);
  });
}

window.addEventListener("keydown", function (e) {
  keyPressed = e.keyCode;
  if (keyPressed == "38") {
    up();
    console.log("Up arrow is pressed");
  }

  if (keyPressed == "40") {
    down();
  }

  if (keyPressed == "37") {
    left();
  }

  if (keyPressed == "39") {
    right();
  }

  if (keyPressed == "87") {
    newImage("wall.jpg"); // For wall click on w button
  }

  if (keyPressed == "71") {
    newImage("ground.jpg"); // For ground click on g button
  }

  if (keyPressed == "76") {
    newImage("light_green.jpg"); // For light green grass click on l button
  }

  if (keyPressed == "84") {
    newImage("trunk.jpg"); // For trunk click on t button
  }

  if (keyPressed == "82") {
    newImage("roof.jpg"); // For roof click on r button
  }

  if (keyPressed == "89") {
    newImage("yellow_wall.jpg"); // For yellow wall click on y button
  }

  if (keyPressed == "68") {
    newImage("dark_green.png"); // For dark green grass click on d button
  }

  if (keyPressed == "85") {
    newImage("unique.png"); // For unique image click on u button
  }

  if (keyPressed == "67") {
    newImage("cloud.jpg"); // For cloud image click on c button
  }

  if (keyPressed == "80" && e.shiftKey == true) {
    // To increase the size of the block press Shift + p
    b_width = b_width + 10;
    b_height = b_height + 10;
    document.getElementById("cWidth").innerHTML = b_width;
    document.getElementById("cHeight").innerHTML = b_height;
  }

  if (keyPressed == "77" && e.shiftKey == true) {
    // To decrease the size of the block press Shift + m
    b_width = b_width - 10;
    b_height = b_height - 10;
    document.getElementById("cWidth").innerHTML = b_width;
    document.getElementById("cHeight").innerHTML = b_height;
  }
});

function up() {
  if (playerY >= 0) {
    playerY = playerY - b_height;
  }
  canvas.remove(playerObj);
  playerUpdate();
}

function down() {
  if (playerY <= 500) {
    playerY = playerY + b_height;
  }
  canvas.remove(playerObj);
  playerUpdate();
}

function left() {
  if (playerX >= 0) {
    playerX = playerX - b_width;
  }
  canvas.remove(playerObj);
  playerUpdate();
}

function right() {
  if (playerX <= 900) {
    playerX = playerX + b_height;
  }
  canvas.remove(playerObj);
  playerUpdate();
}
