function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xxkTwUDR6/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error){
        console.error(error);
        console.log("There is an error")
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML= 'I can hear- '+ results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Accuracy- '+ (results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result_label").style.color= "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color= "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img= document.getElementById("ear_img");
        
        


        if (results[0].label == "Bark") {
            img.src="dog.jpg";
            
        }

        else if (results[0].label == "Meow") {
            img.src="Cat.jpg";
           
        }

        else if (results[0].label == "Neigh") {
            img.src="horse.png";
          
        }

        else if (results[0].label == "Quack-Quack") {
            img.src="duck.png";
           
        }

        else if (results[0].label == "Roar") {
            img.src="lion.png";
         
        }

        else if (results[0].label == "Whoop") {
            img.src="monkey.jpg";
         
        }

        else {
            img.src="bg_img.jpg";
            
        }

        


    }
}