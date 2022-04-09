function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
 
}
function modelready(){
classifier.classify(gotresult)
}
function gotresult(error,results){
console.log(results);

document.getElementById("result_label").innerHTML="i can hear-" + results[0].label;
document.getElementById("result_confidence").innerHTML="accuracy" +(results[0].confidence*100).toFixed(1)+"%"


img1=document.getElementById("animal")
if( results[0].label=="barking")
{
    img1.src='bark.gif';

}
else if( results[0].label=="meowing")
{
    img1.src='meow.gif';
    

}

else{
    img1.src='listen.gif';
    
}
}