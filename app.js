
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
  context.drawImage(feedViewer, 0, 0, 640, 480);
  saveLink.href = canvas.toDataURL();
  saveLink.download = 'screen.png';
  saveLink.click();

}

