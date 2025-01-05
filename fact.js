
async function fetchAndDisplayImages() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'; // Replace with actual API URL

        const response = await fetch(apiUrl);
        const data = await response.json(); // Parse the JSON response

        // Log the data to understand its structure
        console.log(data);
                const img = document.createElement('img');
                img.src = data.message; // Access the URL inside each object
                document.getElementById('imageContainer').appendChild(img);
    }
