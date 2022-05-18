Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera= document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:', ml5.version);
console.log('ml5 version:', ml5.version);

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/jRPcDNvr6/');


function check() {
    result= document.getElementById("result");
    classifier.classify(img, gotResult());
}
gotResult(error, results);
gotResult() 
{
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}

























