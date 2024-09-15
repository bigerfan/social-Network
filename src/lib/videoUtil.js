export const getVideoThumbnail = (videoUrl) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = videoUrl;
        video.crossOrigin = 'anonymous'; // Handle cross-origin issues
        video.addEventListener('loadeddata', () => {
            video.currentTime = 0; // Go to the start of the video
        });
        video.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) {
                return reject(new Error('Unable to create canvas context.'));
            }
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/jpeg');
            resolve(dataURL);
        });
    });
};
