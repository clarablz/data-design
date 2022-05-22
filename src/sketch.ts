// // -------------------
// //  Parameters and UI
// // -------------------

// const gui = new dat.GUI()
// const params = {
//     Ellipse_Size: 30,
//     Download_Image: () => save(),
// }
// gui.add(params, "Ellipse_Size", 0, 100, 1)
// gui.add(params, "Download_Image")

// // -------------------
// //       Drawing
// // -------------------

// function draw() {
//     background("black")
//     ellipse(mouseX, mouseY, params.Ellipse_Size)
// }

// // -------------------
// //    Initialization
// // -------------------

// function setup() {
//     p6_CreateCanvas()
// }

// function windowResized() {
//     p6_ResizeCanvas()
// }



let tweet_table = [];
let category_table =[];
let data_table;
let category_sum_table = [204,214,269,220,284];
let img_profil;


let category_1_table = [];
let category_2_table = [];
let category_3_table = [];
let category_4_table = [];
let category_5_table = [];


let category_1_table_angle=[];
let category_2_table_angle=[];
let category_3_table_angle=[];
let category_4_table_angle=[];
let category_5_table_angle=[];

let category_5_table_color=['#e190a4','#CF5573'];
let category_3_table_color=['#D9A3B8','#B87A92','#9C5570'];
let category_4_table_color=['#C795CC','#D7ABDC','#8D4A94','#A168A7'];
let category_2_table_color=['#B0A7E3','#796EBD'];
let category_1_table_color=['#7580ED','#B7BDFB','#5562E5','#7580ED',     '#919AF1','#4452DE'];

var cate_display =' ';

let scale_x = 0.7;
let scale_y = 0.7;



function preload() {  
  data_table = loadTable("https://github.com/clarablz/data-design/blob/master/data.csv", 'csv');
  img_profil= loadImage("https://github.com/clarablz/data-design/blob/master/user.png");
}

function setup() {
  p6_CreateCanvas()
  //createCanvas(1920, 1080);

  for(var i = 0; i < data_table.getRowCount(); i++)
    {
      tweet_table.push(data_table.getString(i,3));
      category_table.push(data_table.getString(i,5));
    }
    
}


function windowResized() {
    p6_ResizeCanvas()
}



function mouseClicked() {
  

  //cate_3
  var x=710*scale_x
  var y = 780*scale_y
  var radius = category_sum_table[2]*exp(0.4)/2 *scale_x
  let magnitude = dist(mouseX, mouseY, x, y);
  
  
  let origin = createVector(710*scale_x,780*scale_x);
  let target = createVector(mouseX - 710*scale_x, (mouseY - 780*scale_x) * -1);
  let angle = origin.angleBetween(target);
 
  
  //print(radians(category_3_table_angle[0])). magnitude > radius && 
 
  
  let withinDist = magnitude > radius-35*scale_x && magnitude < radius ;
  let withinAngle = angle > -1.17 && angle < -0.84;
  

  
  if(withinAngle &&  withinDist) 
    {
      print("cate 3_1");
      cate_display = "3_1";
      
    }
  withinAngle = angle > -2.18 && angle < -1.17
  
  if(withinAngle &&  withinDist) 
    {
      print("cate 3_2");
      cate_display = "3_2";
      
    }
  
  withinAngle = (angle > -0.84 && angle < PI)||(angle<-2.18 && angle>-PI)
  
  if(withinAngle &&  withinDist) 
    {
      print("cate 3_3");
      cate_display = "3_3";
    }
  
  
  //cate_5 270, 850,category_sum_table[4]*exp(0.4)-70)
  x=270*scale_x
  y = 850*scale_x
  radius = category_sum_table[4]*exp(0.4)/2*scale_x
  magnitude = dist(mouseX, mouseY, x, y);
  
  
  origin = createVector(270*scale_x,850*scale_x);
  target = createVector(mouseX - 270*scale_x, (mouseY - 850*scale_x) * -1);
  angle = origin.angleBetween(target);
 
  
  print(angle)
  //print(radians(category_3_table_angle[0])). magnitude > radius && 
 
  
  withinDist =  magnitude > radius-35*scale_x && magnitude < radius;
  withinAngle = angle > -1.21 && angle < 2.8;
  

  
  if(withinAngle &&  withinDist) 
    {
      print("cate 5_2");
      cate_display = "5_2";
      
    }
  withinAngle = (angle > 2.8 && angle < PI)||(angle<-1.21 && angle>-PI)
  
  if(withinAngle &&  withinDist) 
    {
      print("cate 5_1");
      cate_display = "5_1";
      
    }
  
  
  //cate_4 450, 490,category_sum_table[3]*exp(0.4)-70)
 x=450*scale_x
  y = 490*scale_x
  radius = category_sum_table[3]*exp(0.4)/2*scale_x
  magnitude = dist(mouseX, mouseY, x, y);
  
  
  origin = createVector(450*scale_x,490*scale_x);
  target = createVector(mouseX - 450*scale_x, (mouseY - 490*scale_x) * -1);
  angle = origin.angleBetween(target);
 
  
  //print(angle)
  //print(radians(category_3_table_angle[0])). magnitude > radius && 
 
  
  withinDist =  magnitude > radius-35*scale_x && magnitude < radius;
  withinAngle = angle < -2.27 && angle > -2.5;
  

  
  if(withinAngle &&  withinDist) 
    {
      print("cate 4_2");
      cate_display = "4_2";
      
    }
  
  withinAngle = angle < -0.83 && angle > -2.28;
  //withinAngle = (angle > 2.55 && angle < PI)||(angle<1.98 && angle>-PI)
  
  if(withinAngle &&  withinDist) 
    {
      print("cate 4_5");
      cate_display = "4_5";
      
    }
   withinAngle = angle < 0.3 && angle > -0.83;
  

  
  if(withinAngle &&  withinDist) 
    {
      print("cate 4_1");
      cate_display = "4_1";
      
    }
  
  withinAngle = (angle > 0.3 && angle < PI)||(angle<-2.5 && angle>-PI)
   if(withinAngle &&  withinDist) 
    {
      print("cate 4_4");
      cate_display = "4_4";
      
    }
  
  
  //cate_2. 200, 240,category_sum_table[1]*exp(0.4)-70)
  x=200*scale_x
  y = 240*scale_x
  radius = category_sum_table[1]*exp(0.4)/2*scale_x
  magnitude = dist(mouseX, mouseY, x, y);
  
  
  origin = createVector(200*scale_x,240*scale_x);
  target = createVector(mouseX - 200*scale_x, (mouseY - 240*scale_x) * -1);
  angle = origin.angleBetween(target);
 
  
  //print(angle)
  //print(radians(category_3_table_angle[0])). magnitude > radius && 
 
  
  withinDist =  magnitude > radius-35*scale_x && magnitude < radius;
  withinAngle = (angle > 2.8 && angle < PI)||(angle<-0.88 && angle>-PI)
  

  
  if(withinAngle &&  withinDist) 
    {
      print("cate 2_1");
      cate_display = "2_1";
      
    }
  withinAngle = angle < 2.8 && angle > -0.88;
  
  if(withinAngle &&  withinDist) 
    {
      print("cate 2_3");
      cate_display = "2_3";
      
   }
  
  
  //cate1 550, 170,category_sum_table[0]*exp(0.4)-70)
  
   x=550*scale_x
  y = 170*scale_x
  radius = category_sum_table[0]*exp(0.4)/2*scale_x
  magnitude = dist(mouseX, mouseY, x, y);
  
  
  origin = createVector(550*scale_x,170*scale_x);
  target = createVector(mouseX - 550*scale_x, (mouseY - 170*scale_x) * -1);
  angle = origin.angleBetween(target);
 
  
  //print(angle)
  //print(radians(category_3_table_angle[0])). magnitude > radius && 
 
  
  withinDist =  magnitude > radius-35*scale_x && magnitude < radius;
  withinAngle = angle > -1.8 && angle < -1.4;
  

  
  if(withinAngle &&  withinDist) 
   {
      print("cate 1_2");
     cate_display = "1_2";
      
    }
  withinAngle = angle > 1.32 && angle < 1.98;
  

  
  if(withinAngle &&  withinDist) 
   {
      print("cate 1_6");
     cate_display = "1_6";
      
    }
  
  withinAngle =(angle >1.98  && angle < PI)||(angle<-3.12 && angle>-PI)
  
  if(withinAngle &&  withinDist) 
   {
      print("cate 1_4");
     cate_display = "1_4";
      
    }
  
  withinAngle = angle < -0.31 && angle > -1.4;
  
  if(withinAngle &&  withinDist) 
   {
      print("cate 1_1");
     cate_display = "1_1";
      
    }
  
  withinAngle = angle < -1.8 && angle > -3.12;
  
  if(withinAngle &&  withinDist) 
   {
      print("cate 1_3");
     cate_display = "1_3";
      
    }
  
  withinAngle = angle < 1.32 && angle > -0.31;
  
  if(withinAngle &&  withinDist) 
   {
      print("cate 1_7");
     cate_display = "1_7";
      
    }


  
}








function draw() {
  
  background('#f8f8fa');
  noStroke();

  scale(scale_x,scale_y)

  category_1_table = fill_category_table(1);
  category_2_table= fill_category_table(2);
  category_3_table= fill_category_table(3);
  category_4_table= fill_category_table(4);
  category_5_table= fill_category_table(5);
  category_1_table_angle = fill_category_angle(1,category_1_table);
  category_2_table_angle = fill_category_angle(2,category_2_table);
  category_3_table_angle = fill_category_angle(3,category_3_table);
  category_4_table_angle = fill_category_angle(4,category_4_table);
  category_5_table_angle = fill_category_angle(5,category_5_table);
  
  
  
  
  draw_pie_chart();
  
  draw_tweet(cate_display);

    //text
  textFont("Raleway");
  
  fill('#2A0525');
  textAlign(LEFT)
  
  textSize(66);
  textStyle(BOLD);
  text("Desinformation on global warning",880,110)
  
  //textSize(40);
  //textStyle(BOLD);
  //text("Desinformation on global warning",1200,55)
  
  textFont("Montserrat");
  textSize(28);
  textStyle(NORMAL);
  text("Collection of tweets categorized by type of misinformation",1140,170)
  
  
  
  textSize(13);
  textStyle(ITALIC);
  text("dataset from Critical Climate Machine by Gaëtan Robillard",1600,1000)
  text("design by Clara Balzano - Louise Delrieu - Elise Gondange",1600,1020)
  
  
  
}
