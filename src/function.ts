function get_category_count( cate)
{
  let count = 0;
  for(var i = 0; i < category_table.length; i++)
    {
      if(category_table[i]===cate)
        {
          count ++;
        }
    }
  return count;
}

function fill_category_table(n)
{
  let count =0;
  let res = [];
  for(var i=1;i<9;i++)
    {
      if(get_category_count(n+"_"+i) != 0)
        {
          res[count]=get_category_count(n+"_"+i);
          count ++;
        }
      
    }
  return res;
  
}

function fill_category_angle(n,category_n_table)
{
  let res = [];
  for(var i=0;i<category_n_table.length;i++)
    {
      
      res[i] = 360 * category_n_table[i] / category_sum_table[n-1];
    }
  return res;
}



function pieChart(diameter, data, x, y,color_table) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
      let color = map(i, 0, data.length, 0, 255);
      fill(color_table[i]);
      
        arc(
          x,
          y,
          diameter,
          diameter,
          lastAngle,
          lastAngle + radians(data[i])
        );
      
    
      
      lastAngle += radians(data[i]);
    }
  }

function draw_pie_chart()
{
    //pie chart
  
  //cate 5
  pieChart(category_sum_table[4]*exp(0.4),  category_5_table_angle,  270, 840,category_5_table_color);
  fill(171, 28, 36)
  circle(270, 840,category_sum_table[4]*exp(0.4)-70)
  textSize(39);
  textFont("Montserrat");
  textStyle(BOLD);
  fill(255,255,255)
  textAlign(CENTER)
  text("Climate science is unreal",100, 820, 350, 150)
  
  
  //cate 3
  pieChart(category_sum_table[2]*exp(0.4),  category_3_table_angle, 710, 780,category_3_table_color);
  fill(127, 24, 65)
  circle( 710, 780,category_sum_table[2]*exp(0.4)-70)
  textSize(36);
  textFont("Montserrat");
  textStyle(BOLD);
  fill(255,255,255)
  textAlign(CENTER)
  text("Climate impacts are not bad",550, 750, 330, 150)
  
  //cate 4
  pieChart(category_sum_table[3]*exp(0.4),  category_4_table_angle,  450, 490,category_4_table_color);
  fill(111, 28, 120)
  circle( 450, 490,category_sum_table[3]*exp(0.4)-70)
  textSize(29);
  textFont("Montserrat");
  textStyle(BOLD);
  fill(255,255,255)
  textAlign(CENTER)
  text("Climate solutions won't work",355, 440, 200, 150)
  
  //cate 2
  pieChart(category_sum_table[1]*exp(0.4),  category_2_table_angle,200, 240,category_2_table_color);
  fill(73, 54, 167)
  circle(200, 240,category_sum_table[1]*exp(0.4)-70)
  textSize(22);
  textFont("Montserrat");
  textStyle(BOLD);
  fill(255,255,255)
  textAlign(CENTER)
  text("Greenhouse Gases are not causing global warming",80, 210, 250, 150)
  
  
  //cate 1
  pieChart(category_sum_table[0]*exp(0.4),  category_1_table_angle,550, 170,category_1_table_color);
  fill(31, 48, 199)
  circle(550, 170,category_sum_table[0]*exp(0.4)-70)
  textSize(24);
  textFont("Montserrat");
  textStyle(BOLD);
  fill(255,255,255)
  textAlign(CENTER)
  text("Global warming is not happening",450, 140, 210, 170)
  
}


function draw_tweet(cate)
{
  textFont("Raleway");
  textSize(43);
  textStyle(BOLD);
  textAlign(LEFT)
  img_profil.resize(78, 78);
  
  
  if(cate==="1_1")
    {
    fill( 245, 245, 245,90);
    rect(0,0,1920, 1080);
      
    pieChart(category_sum_table[0]*exp(0.4),  category_1_table_angle,550, 170,category_1_table_color);
    fill(31, 48, 199)
    circle(550, 170,category_sum_table[0]*exp(0.4)-70)
    fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("37 tweets",470, 190)

    fill('#1f30c7');
   
  text("\"Ice is’t melting\"",1545,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("37 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("JaggerMickOZ",1350,515)
      fill(0,0,0)
    text("RT @dbirch214: A light dusting of ice and snow covers the polar circle.. Lmfao.",1245,570,590,120)
    image(img_profil, 1250,470);
      
    }
  
  if(cate==="1_2")
    {

        fill( 245, 245, 245,90);
    rect(0,0,1920, 1080);
    pieChart(category_sum_table[0]*exp(0.4),  category_1_table_angle,550, 170,category_1_table_color);
    fill(31, 48, 199)
    circle(550, 170,category_sum_table[0]*exp(0.4)-70)
    fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("12 tweets",470, 190)
      fill('#1f30c7');
   
  text("\"Heading into ice age\"",1435,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("12 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("JaggerMickOZ",1350,515)
      fill(0,0,0)
    text("Inconvenient Truth Planet Earth is Cooling",1245,570,590,120)
    image(img_profil, 1250,470);

      
    }
  
  if(cate==="1_3")
    {
        fill( 245, 245, 245,90);
    rect(0,0,1920, 1080);
    pieChart(category_sum_table[0]*exp(0.4),  category_1_table_angle,550, 170,category_1_table_color);
    fill(31, 48, 199)
    circle(550, 170,category_sum_table[0]*exp(0.4)-70)
    fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("43 tweets",470, 190)
      fill('#1f30c7');
   
  text("\"Weather is cold\"",1535,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("43 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("JunkScience",1350,515)
      fill(0,0,0)
    text("It's winter in Siberia but at the WaPo:\"The exceptional cold is occurring in some of the planet’s fastest-warming areas...\" It's not called climate idiocy for nothing.",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  
  if(cate==="1_4")
    {
        fill( 245, 245, 245,90);
    rect(0,0,1920, 1080);
    pieChart(category_sum_table[0]*exp(0.4),  category_1_table_angle,550, 170,category_1_table_color);
    fill(31, 48, 199)
    circle(550, 170,category_sum_table[0]*exp(0.4)-70)
    fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("38 tweets",470, 190)
      fill('#1f30c7');
   
  text("\"Hiatus in warning\"",1485,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("38 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("PeterDClack",1350,515)
      fill(0,0,0)
    text("@waywardprairie @ThomBradley8 Not warmed for 15 years Mitch. That is why they switched to climate change.",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  if(cate==="1_6")
    {
        fill( 245, 245, 245,90);
    rect(0,0,1920, 1080);
    pieChart(category_sum_table[0]*exp(0.4),  category_1_table_angle,550, 170,category_1_table_color);
    fill(31, 48, 199)
    circle(550, 170,category_sum_table[0]*exp(0.4)-70)
    fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("21 tweets",470, 190)
      fill('#1f30c7');
   
  text("\"Sea level rise is exaggerated\"",1300,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("21 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("NoTricksZone",1350,515)
      fill(0,0,0)
    text("COASTLINES ARE SAFE...Sea Level Alarmism Unravels As Earth’s Coastlines Are Observed Expanding Since 1984",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  if(cate==="1_7")
    {
        fill( 245, 245, 245,90);
    rect(0,0,1920, 1080);
    pieChart(category_sum_table[0]*exp(0.4),  category_1_table_angle,550, 170,category_1_table_color);
    fill(31, 48, 199)
    circle(550, 170,category_sum_table[0]*exp(0.4)-70)
    fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("53 tweets",470, 190)
      fill('#1f30c7');
   
  text("\"Extremes aren’t increasing\"",1320,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("53 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("wattsupwiththat",1350,515)
      fill(0,0,0)
    text("How Pressure Systems Control The Climate Part 1 – Decline In Extreme Weather",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  
  if(cate==="2_1")
    {

        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[1]*exp(0.4),  category_2_table_angle,200, 240,category_2_table_color);
        fill(73, 54, 167)
        circle(200, 240,category_sum_table[1]*exp(0.4)-70)
        fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("89 tweets",110, 250)
      fill('#4936a7');
   
  text("\"It’s natural cycles\"",1490,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("89 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("IowaClimate",1350,515)
      fill(0,0,0)
    text("Arctic Ocean Warming Began Already In Early 20th Century, Meaning Natural Factors Strongly At Play, Not CO2",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  if(cate==="2_3")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[1]*exp(0.4),  category_2_table_angle,200, 240,category_2_table_color);
        fill(73, 54, 167)
        circle(200, 240,category_sum_table[1]*exp(0.4)-70)
        fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("125 tweets",110, 250)
      fill('#4936a7');
   
  text("\"No evidence for Greenhouse Effect\"",1180,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("125 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("WEschenbach",1350,515)
      fill(0,0,0)
    text("3/ To date, we have almost no evidence that CO2 is the secret temperature control knob. We have evidence that it has reduced outgoing LW, but not that it has correspondingly increased the temperature.",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  if(cate==="3_1")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[2]*exp(0.4),  category_3_table_angle, 710, 780,category_3_table_color);
  fill(127, 24, 65)
  circle( 710, 780,category_sum_table[2]*exp(0.4)-70)
  fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("14 tweets",630, 790)
        
      fill('#7f1841');
   
  text("\"Sensibility is low\"",1500,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("14 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("IowaClimate",1350,515)
      fill(0,0,0)
    text("2 More Studies: The Climate’s CO2 Sensitivity Is Low…Models Erroneously Overestimate CO2 Warming",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  if(cate==="3_2")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[2]*exp(0.4),  category_3_table_angle, 710, 780,category_3_table_color);
  fill(127, 24, 65)
  circle( 710, 780,category_sum_table[2]*exp(0.4)-70)
  fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("44 tweets",630, 790)
      fill('#7f1841');
   
  text("\"No species impact\"",1480,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("44 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("NoTricksZone",1350,515)
      fill(0,0,0)
    text("Great Barrier Reef Warming, Coral Bleaching Driven By Cloud Radiative Forcing, Nothing to Do With CO2!",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  
  if(cate==="3_3")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[2]*exp(0.4),  category_3_table_angle, 710, 780,category_3_table_color);
  fill(127, 24, 65)
  circle( 710, 780,category_sum_table[2]*exp(0.4)-70)
  fill(255,255,255)
    textFont("Montserrat");
    textSize(35);
    text("211 tweets",630, 790)
      fill('#7f1841');
   
  text("\"Not a pollutant\"",1530,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("211 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("JaggerMickOZ",1350,515)
      fill(0,0,0)
    text("Imagine a world where we protected our Young, rather than sacrifice them to Agenda. That world used to be Planet Earth",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  
  if(cate==="4_1")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[3]*exp(0.4),  category_4_table_angle,  450, 490,category_4_table_color);
        fill(111, 28, 120)
        circle( 450, 490,category_sum_table[3]*exp(0.4)-70)
        fill(255,255,255)
        textFont("Montserrat");
        textSize(35);
        text("51 tweets",370, 500)
        
      fill('#6f1c78');
    
        text("\"Policies are harmful\"",1440,300)
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0,0,0);
        text("51 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("wattsupwiththat",1350,515)
      fill(0,0,0)
    text("When The Costs Hit Home, Nobody Will Give Up Fossil Fuels",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  
  if(cate==="4_2")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[3]*exp(0.4),  category_4_table_angle,  450, 490,category_4_table_color);
        fill(111, 28, 120)
        circle( 450, 490,category_sum_table[3]*exp(0.4)-70)
        fill(255,255,255)
        textFont("Montserrat");
        textSize(35);
        text("8 tweets",370, 500)
      fill('#6f1c78');
   
  text("\"Policies are ineffective\"",1390,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("8 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("PeterDClack",1350,515)
      fill(0,0,0)
    text("World climate hasn't changed, not by 1 degree. The worst case scenario - a 1 degree rise since 1860. But this is doubtful. No evidence carbon dioxide changed climate. Only the hoax remains.",1245,570,590,120)
    image(img_profil, 1250,470);
    }
   if(cate==="4_4")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[3]*exp(0.4),  category_4_table_angle,  450, 490,category_4_table_color);
        fill(111, 28, 120)
        circle( 450, 490,category_sum_table[3]*exp(0.4)-70)
        fill(255,255,255)
        textFont("Montserrat");
        textSize(35);
        text("121 tweets",370, 500)
      fill('#6f1c78');
   
  text("\"Clean energy won’t work\"",1355,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("121 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("JunkScience",1350,515)
      fill(0,0,0)
    text("Climate is a hoax. Wind, solar, EVs and the rest of green tech are pointlessly expensive idiocy. ",1245,570,590,120)
    image(img_profil, 1250,470)
    }
  
  if(cate==="4_5")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[3]*exp(0.4),  category_4_table_angle,  450, 490,category_4_table_color);
        fill(111, 28, 120)
        circle( 450, 490,category_sum_table[3]*exp(0.4)-70)
        fill(255,255,255)
        textFont("Montserrat");
        textSize(35);
        text("40 tweets",370, 500)
      fill('#6f1c78');
   
  text("\"We need energy\"",1500,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("40 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text(" CFACT",1350,515)
      fill(0,0,0)
    text("Nuclear power is not new. It has been in operation for over half a century, with an excellent record for providing reliable baseload electricity.It is also the safest, greenest and most inexpensive electricity currently available to mankind.",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  
  if(cate==="5_1")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[4]*exp(0.4),  category_5_table_angle,  270, 840,category_5_table_color);
        fill(171, 28, 36)
        circle(270, 840,category_sum_table[4]*exp(0.4)-70)
        fill(255,255,255)
        textFont("Montserrat");
        textSize(35);
        text("99 tweets",180, 860)
  fill('#ab1c23');
   
  text("\"Climate science is unreal\"",1355,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("99 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("NoTricksZone",1350,515)
      fill(0,0,0)
    text("Physicists: Climate Model Error Overestimates CO2 Impact On Global Temps By FACTOR OF 5 ",1245,570,590,120)
    image(img_profil, 1250,470); 
    }
  if(cate==="5_2")
    {
        fill( 245, 245, 245,90);
        rect(0,0,1920, 1080);
        pieChart(category_sum_table[4]*exp(0.4),  category_5_table_angle,  270, 840,category_5_table_color);
        fill(171, 28, 36)
        circle(270, 840,category_sum_table[4]*exp(0.4)-70)
        fill(255,255,255)
        textFont("Montserrat");
        textSize(35);
        text("185 tweets",180, 860)
      fill('#ab1c23');
   
  text("\"Movement is unreliable\"",1395,300)
  textFont("Montserrat");
   textStyle(NORMAL);
  textSize(25);
  fill(0,0,0);
  text("185 tweets",1700,340)
      fill('#F3F5F9')
      rect(1200, 440, 650, 280, 30);
      fill('#2A0525');
    text("JaggerMickOZ",1350,515)
      fill(0,0,0)
    text("Alarmists and their Warmist Acolytes Pretend Meanwhile Planet Earth just does it’s thing",1245,570,590,120)
    image(img_profil, 1250,470);
    }
  

  
  
  
  
  
  
}
