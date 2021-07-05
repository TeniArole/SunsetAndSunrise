const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg( )
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/america/new_york")

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;


    // write code slice the datetime
    hour = datetime.slice(11,13)
    console.log(hour)

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 05 && hour <= 06) {
        bg = "sunrise1.png"
    }
    else if(hour >= 06 && hour <= 07) {
        bg= "sunrise2.png"
    }
    else if(hour >= 07 && hour <=08){
        bg = "sunrise3.png"
    }
    else if (hour >=09 && hour <= 11){
        bg= "sunrise4.png"
    }
    else if (hour >=12 && hour <= 13){
        bg= "sunrise5.png"
    }
    else if (hour >=13 && hour <= 14){
        bg= "sunrise6.png"
    }
    else if (hour >=14 && hour <= 15){
        bg= "sunset7.png"
    }
    else if (hour >=15 && hour <= 16){
        bg= "sunset8.png"
    }
    else if (hour >=16 && hour <= 17){
        bg= "sunset9.png"
    }
    else if (hour >=17 && hour <= 22){
        bg= "sunset10.png"
    }
    else if (hour >=22 && hour == 0){
        bg= "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
