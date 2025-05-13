const fs = require('fs');
const path = require('path');
const https = require('https');

const files = [
    { url: 'https://tprs.madmadmad.net/favicon.ico', path: 'favicon.ico' },
    { url: 'https://tprs.madmadmad.net/style.css', path: 'style.css' },
    { url: 'https://tprs.madmadmad.net/img/loading-spinner.gif', path: 'img/loading-spinner.gif' },
    { url: 'https://tprs.madmadmad.net/js/three/build/three.module.js', path: 'js/three/build/three.module.js' },
    { url: 'https://tprs.madmadmad.net/js/three/examples/jsm/controls/OrbitControls.js', path: 'js/three/examples/jsm/controls/OrbitControls.js' },
    { url: 'https://tprs.madmadmad.net/js/three/examples/jsm/loaders/MTLLoader.js', path: 'js/three/examples/jsm/loaders/MTLLoader.js' },
    { url: 'https://tprs.madmadmad.net/js/three/examples/jsm/loaders/OBJLoader.js', path: 'js/three/examples/jsm/loaders/OBJLoader.js' },
    { url: 'https://tprs.madmadmad.net/js/BLOB.js', path: 'js/BLOB.js' },
    { url: 'https://tprs.madmadmad.net/js/Tween.js', path: 'js/Tween.js' },
    { url: 'https://tprs.madmadmad.net/js/animData.js', path: 'js/animData.js' },
    { url: 'https://tprs.madmadmad.net/js/colors.js?v=10', path: 'js/colors.js' },
    { url: 'https://tprs.madmadmad.net/js/jquery-3.2.0.min.js', path: 'js/jquery-3.2.0.min.js' },
    { url: 'https://tprs.madmadmad.net/js/typedarray.js', path: 'js/typedarray.js' },
    { url: 'https://tprs.madmadmad.net/tex/OSB.jpg', path: 'tex/OSB.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/box-vent-mill.jpg', path: 'tex/box-vent-mill.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/chimney.jpg', path: 'tex/chimney.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/deck-defense_1.jpg', path: 'tex/deck-defense_1.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/mat-self-sealing.jpg', path: 'tex/mat-self-sealing.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/mat-self-sealing_1.jpg', path: 'tex/mat-self-sealing_1.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/starter.jpg', path: 'tex/starter.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/trudefinition-duration-driftwood-ridge.jpg', path: 'tex/trudefinition-duration-driftwood-ridge.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/trudefinition-duration-driftwood.jpg', path: 'tex/trudefinition-duration-driftwood.jpg' },
    { url: 'https://tprs.madmadmad.net/tex/vent.jpg', path: 'tex/vent.jpg' }
];

files.forEach(file => {
    const filePath = path.join(__dirname, file.path);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const fileStream = fs.createWriteStream(filePath);
    https.get(file.url, response => {
        response.pipe(fileStream);
        fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded ${file.path}`);
        });
    }).on('error', err => {
        console.error(`Error downloading ${file.url}: ${err.message}`);
    });
});

