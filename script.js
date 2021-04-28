// Unsplash API
const count = 10;
const apiKey = '6bPj9d6DbUY-8sQ7PSwpSO_MoTlCP1C-w0_fX0GbQLY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();