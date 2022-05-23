function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TzlRyPcX0/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random() * 255)+1;
        random_number_g=Math.floor(Math.random() * 255)+1;
        random_number_b=Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML='I can hear- '+ results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy- '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb(" + random_number_r + "," +random_number_g+ "," +random_number_b + ")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r + "," +random_number_g+ "," +random_number_b + ")";
    
        img=document.getElementById('cat_1');
        img1=document.getElementById('cow_1');
        img2=document.getElementById('dog_1');
        img3=document.getElementById('chicken_1');  

        if (results[0].label=="Cat"){
            img.src='dancing-cat_1.gif';
            img1.src='dog_1.jpg';
            img2.src='cow_1.webp';
            img3.src='chicken_1.webp';
        }
        else if (results[0].label=="Dog"){
            img.src='cat_1.jpg';
            img1.src='dancing-dog_1.gif';
            img2.src='cow_1.webp';
            img3.src='chicken_1.webp';
        }
        else if (results[0].label=="Cow"){
            img.src='cat_1.jpg';
            img1.src='dog_1.jpg';
            img2.src='dancing-cow_1.gif';
            img3.src='chicken_1.webp';
        }
        else (results[0].label=="Cock"){
            img.src='cat_1.jpg';
            img1.src='dog_1.jpg';
            img2.src='cow_1.jpg';
            img3.src='dancing-chicken_1.gif';
        }
    } 

}











