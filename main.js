function startclassify() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QSOUmKwEO/model.json" , modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        rannum_r = Math.floor(Math.random() * 255) + 1;
        rannum_g = Math.floor(Math.random() * 255) + 1;
        rannum_b = Math.floor(Math.random() * 255) + 1;

    }
    document.getElementById('result').innerHTML = "I can hear - " + results[0].label
    document.getElementById('confi').innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + " %"
    document.getElementById('result').style.color = "rgb("+rannum_r+","+rannum_g+","+rannum_b+")"
    document.getElementById('confi').style.color = "rgb("+rannum_r+","+rannum_g+","+rannum_b+")"

    img = document.getElementById('alien1');
    img1 = document.getElementById('alien2');
    img2 = document.getElementById('alien3');
    img3 = document.getElementById('alien4');

    if ( results[0].label == 'clap') {
        img.src = 'aliens-01.gif'
        img1.src = 'aliens-02.png'
        img2.src = 'aliens-03.png'
        img3.src = 'aliens-04.png'
    } else if ( results[0].label == 'Bell' ) {
        img.src = 'aliens-01.png'
        img1.src = 'aliens-02.gif'
        img2.src = 'aliens-03.png'
        img3.src = 'aliens-04.png'
    } else if ( results[0].label == 'snapping' ) {
        img.src = 'aliens-01.png'
        img1.src = 'aliens-02.png'
        img2.src = 'aliens-03.gif'
        img3.src = 'aliens-04.png'
    } else {
        img.src = 'aliens-01.png'
        img1.src = 'aliens-02.png'
        img2.src = 'aliens-03.png'
        img3.src = 'aliens-04.gif'
    }
}