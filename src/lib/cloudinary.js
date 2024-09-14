import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error('CLOUDINARY_CLOUD_NAME is not set');
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error('CLOUDINARY_API_KEY is not set');
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error('CLOUDINARY_API_SECRET is not set');
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(image) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(imageData).toString('base64');
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: 'nextjs-social-network',
  });
  return result.secure_url;
}

export async function uploadVideo(video) {
  const videoData = await video.arrayBuffer();
  
  const mime = video.type;
  
  const encoding = 'base64';
  const base64Data = Buffer.from(videoData).toString('base64');
  
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: 'nextjs-social-network',
    resource_type: 'video',
  });
  
  return result.secure_url;
}


export async function DeleteImage(imageUrl) {
  try {
    const urlParts = imageUrl.split('/');
    const fileName = urlParts.pop(); 
    const publicId = urlParts.slice(urlParts.indexOf('nextjs-social-network')).join('/') + '/' + fileName.split('.')[0];

    console.log(publicId);
    console.log(fileName);
    
    

    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result !== 'ok') {
      throw new Error('Failed to delete image');
    }

    console.log(`Image with public_id ${publicId} deleted successfully.`);
    return { success: true, message: 'Image deleted successfully' };
  } catch (error) {
    console.error('Error deleting image:', error);
    return { success: false, message: error.message };
  }

}