
/**
 * constraints for the media stream
 */
const constraints = {
  audio: false,
  video: {
    width: 640,
    height: 480
  }
}

/**
 * Elements
 */
const feedViewer = document.getElementById('Feed');
const saveLink = document.getElementById('SaveImage')
const canvas = document.createElement('canvas');

canvas.width = 640;
canvas.height = 480;

const context = canvas.getContext('2d');

/**
 * acessing the webcam using webRTC apis
 */
navigator.mediaDevices.getUserMedia(constraints)
  .then(function(stream) {

    feedViewer.srcObject = stream;
  })
  .catch(function(err) {
    console.log('error:', err);

  });

/**
 * Captures and saves an image from the stream
 */
function captureImage() {
  console.log('clicked')
  const constraints = {
  audio: false,
  video: {
    width: 320,
    height: 240
  }
}

/**
 * Elements
 */
const feedViewer = document.getElementById('Feed');
const canvas = document.createElement('canvas');
const saveLink = document.getElementById('SaveImage');
const fotoImg = document.getElementById('fotoImg');
canvas.width = 320;
canvas.height = 240;
const context = canvas.getContext('2d');

/**
 * acessing the webcam using webRTC apis
 */
navigator.mediaDevices.getUserMedia(constraints)
  .then(function(stream) {

    feedViewer.srcObject = stream;
  })
  .catch(function(err) {
    console.log('error:', err);

  });

  context.drawImage(feedViewer, 0, 0, 320, 240);
  saveLink.href = canvas.toDataURL();
  fotoImg.src=canvas.toDataURL();
  canvas.style.display = "none";
 
  saveLink.download = 'screen.png';
  saveLink.click();
}

