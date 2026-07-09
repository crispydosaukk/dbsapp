const Jimp = require('jimp');

async function padImage() {
  try {
    const image = await Jimp.read('public/digitalbotsolutions.png');
    const origWidth = image.bitmap.width;
    const origHeight = image.bitmap.height;
    
    // We want the original image to take up about 70% of the new canvas
    // to ensure the circular part isn't clipped by rounded corners or circular masks.
    const scaleFactor = 0.7;
    const newWidth = Math.round(origWidth / scaleFactor);
    const newHeight = Math.round(origHeight / scaleFactor);
    
    // Create a new image with the new dimensions and transparent background
    // (Jimp background color 0x00000000 means completely transparent)
    const paddedImage = new Jimp(newWidth, newHeight, 0x00000000);
    
    // Calculate the x and y offsets to center the original image
    const x = Math.round((newWidth - origWidth) / 2);
    const y = Math.round((newHeight - origHeight) / 2);
    
    // Composite the original image onto the padded canvas
    paddedImage.composite(image, x, y);
    
    // Save the padded image
    await paddedImage.writeAsync('public/digitalbotsolutions-padded.png');
    console.log('Successfully padded image and saved to public/digitalbotsolutions-padded.png');
  } catch (err) {
    console.error('Error padding image:', err);
  }
}

padImage();
