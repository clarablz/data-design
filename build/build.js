function get_category_count(cate) {
    var count = 0;
    for (var i = 0; i < category_table.length; i++) {
        if (category_table[i] === cate) {
            count++;
        }
    }
    return count;
}
function fill_category_table(n) {
    var count = 0;
    var res = [];
    for (var i = 1; i < 9; i++) {
        if (get_category_count(n + "_" + i) != 0) {
            res[count] = get_category_count(n + "_" + i);
            count++;
        }
    }
    return res;
}
function fill_category_angle(n, category_n_table) {
    var res = [];
    for (var i = 0; i < category_n_table.length; i++) {
        res[i] = 360 * category_n_table[i] / category_sum_table[n - 1];
    }
    return res;
}
function pieChart(diameter, data, x, y, color_table) {
    var lastAngle = 0;
    for (var i = 0; i < data.length; i++) {
        var color_1 = map(i, 0, data.length, 0, 255);
        fill(color_table[i]);
        arc(x, y, diameter, diameter, lastAngle, lastAngle + radians(data[i]));
        lastAngle += radians(data[i]);
    }
}
function draw_pie_chart() {
    pieChart(category_sum_table[4] * exp(0.4), category_5_table_angle, 270, 840, category_5_table_color);
    fill(171, 28, 36);
    circle(270, 840, category_sum_table[4] * exp(0.4) - 70);
    textSize(39);
    textFont("Montserrat");
    textStyle(BOLD);
    fill(255, 255, 255);
    textAlign(CENTER);
    text("Climate science is unreal", 100, 820, 350, 150);
    pieChart(category_sum_table[2] * exp(0.4), category_3_table_angle, 710, 780, category_3_table_color);
    fill(127, 24, 65);
    circle(710, 780, category_sum_table[2] * exp(0.4) - 70);
    textSize(36);
    textFont("Montserrat");
    textStyle(BOLD);
    fill(255, 255, 255);
    textAlign(CENTER);
    text("Climate impacts are not bad", 550, 750, 330, 150);
    pieChart(category_sum_table[3] * exp(0.4), category_4_table_angle, 450, 490, category_4_table_color);
    fill(111, 28, 120);
    circle(450, 490, category_sum_table[3] * exp(0.4) - 70);
    textSize(29);
    textFont("Montserrat");
    textStyle(BOLD);
    fill(255, 255, 255);
    textAlign(CENTER);
    text("Climate solutions won't work", 355, 440, 200, 150);
    pieChart(category_sum_table[1] * exp(0.4), category_2_table_angle, 200, 240, category_2_table_color);
    fill(73, 54, 167);
    circle(200, 240, category_sum_table[1] * exp(0.4) - 70);
    textSize(22);
    textFont("Montserrat");
    textStyle(BOLD);
    fill(255, 255, 255);
    textAlign(CENTER);
    text("Greenhouse Gases are not causing global warming", 80, 210, 250, 150);
    pieChart(category_sum_table[0] * exp(0.4), category_1_table_angle, 550, 170, category_1_table_color);
    fill(31, 48, 199);
    circle(550, 170, category_sum_table[0] * exp(0.4) - 70);
    textSize(24);
    textFont("Montserrat");
    textStyle(BOLD);
    fill(255, 255, 255);
    textAlign(CENTER);
    text("Global warming is not happening", 450, 140, 210, 170);
}
function draw_tweet(cate) {
    textFont("Raleway");
    textSize(43);
    textStyle(BOLD);
    textAlign(LEFT);
    img_profil.resize(78, 78);
    if (cate === "1_1") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[0] * exp(0.4), category_1_table_angle, 550, 170, category_1_table_color);
        fill(31, 48, 199);
        circle(550, 170, category_sum_table[0] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("37 tweets", 470, 190);
        fill('#1f30c7');
        text("\"Ice is’t melting\"", 1545, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("37 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("JaggerMickOZ", 1350, 515);
        fill(0, 0, 0);
        text("RT @dbirch214: A light dusting of ice and snow covers the polar circle.. Lmfao.", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "1_2") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[0] * exp(0.4), category_1_table_angle, 550, 170, category_1_table_color);
        fill(31, 48, 199);
        circle(550, 170, category_sum_table[0] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("12 tweets", 470, 190);
        fill('#1f30c7');
        text("\"Heading into ice age\"", 1435, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("12 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("JaggerMickOZ", 1350, 515);
        fill(0, 0, 0);
        text("Inconvenient Truth Planet Earth is Cooling", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "1_3") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[0] * exp(0.4), category_1_table_angle, 550, 170, category_1_table_color);
        fill(31, 48, 199);
        circle(550, 170, category_sum_table[0] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("43 tweets", 470, 190);
        fill('#1f30c7');
        text("\"Weather is cold\"", 1535, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("43 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("JunkScience", 1350, 515);
        fill(0, 0, 0);
        text("It's winter in Siberia but at the WaPo:\"The exceptional cold is occurring in some of the planet’s fastest-warming areas...\" It's not called climate idiocy for nothing.", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "1_4") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[0] * exp(0.4), category_1_table_angle, 550, 170, category_1_table_color);
        fill(31, 48, 199);
        circle(550, 170, category_sum_table[0] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("38 tweets", 470, 190);
        fill('#1f30c7');
        text("\"Hiatus in warning\"", 1485, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("38 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("PeterDClack", 1350, 515);
        fill(0, 0, 0);
        text("@waywardprairie @ThomBradley8 Not warmed for 15 years Mitch. That is why they switched to climate change.", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "1_6") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[0] * exp(0.4), category_1_table_angle, 550, 170, category_1_table_color);
        fill(31, 48, 199);
        circle(550, 170, category_sum_table[0] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("21 tweets", 470, 190);
        fill('#1f30c7');
        text("\"Sea level rise is exaggerated\"", 1300, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("21 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("NoTricksZone", 1350, 515);
        fill(0, 0, 0);
        text("COASTLINES ARE SAFE...Sea Level Alarmism Unravels As Earth’s Coastlines Are Observed Expanding Since 1984", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "1_7") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[0] * exp(0.4), category_1_table_angle, 550, 170, category_1_table_color);
        fill(31, 48, 199);
        circle(550, 170, category_sum_table[0] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("53 tweets", 470, 190);
        fill('#1f30c7');
        text("\"Extremes aren’t increasing\"", 1320, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("53 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("wattsupwiththat", 1350, 515);
        fill(0, 0, 0);
        text("How Pressure Systems Control The Climate Part 1 – Decline In Extreme Weather", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "2_1") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[1] * exp(0.4), category_2_table_angle, 200, 240, category_2_table_color);
        fill(73, 54, 167);
        circle(200, 240, category_sum_table[1] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("89 tweets", 110, 250);
        fill('#4936a7');
        text("\"It’s natural cycles\"", 1490, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("89 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("IowaClimate", 1350, 515);
        fill(0, 0, 0);
        text("Arctic Ocean Warming Began Already In Early 20th Century, Meaning Natural Factors Strongly At Play, Not CO2", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "2_3") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[1] * exp(0.4), category_2_table_angle, 200, 240, category_2_table_color);
        fill(73, 54, 167);
        circle(200, 240, category_sum_table[1] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("125 tweets", 110, 250);
        fill('#4936a7');
        text("\"No evidence for Greenhouse Effect\"", 1180, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("125 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("WEschenbach", 1350, 515);
        fill(0, 0, 0);
        text("3/ To date, we have almost no evidence that CO2 is the secret temperature control knob. We have evidence that it has reduced outgoing LW, but not that it has correspondingly increased the temperature.", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "3_1") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[2] * exp(0.4), category_3_table_angle, 710, 780, category_3_table_color);
        fill(127, 24, 65);
        circle(710, 780, category_sum_table[2] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("14 tweets", 630, 790);
        fill('#7f1841');
        text("\"Sensibility is low\"", 1500, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("14 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("IowaClimate", 1350, 515);
        fill(0, 0, 0);
        text("2 More Studies: The Climate’s CO2 Sensitivity Is Low…Models Erroneously Overestimate CO2 Warming", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "3_2") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[2] * exp(0.4), category_3_table_angle, 710, 780, category_3_table_color);
        fill(127, 24, 65);
        circle(710, 780, category_sum_table[2] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("44 tweets", 630, 790);
        fill('#7f1841');
        text("\"No species impact\"", 1480, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("44 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("NoTricksZone", 1350, 515);
        fill(0, 0, 0);
        text("Great Barrier Reef Warming, Coral Bleaching Driven By Cloud Radiative Forcing, Nothing to Do With CO2!", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "3_3") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[2] * exp(0.4), category_3_table_angle, 710, 780, category_3_table_color);
        fill(127, 24, 65);
        circle(710, 780, category_sum_table[2] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("211 tweets", 630, 790);
        fill('#7f1841');
        text("\"Not a pollutant\"", 1530, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("211 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("JaggerMickOZ", 1350, 515);
        fill(0, 0, 0);
        text("Imagine a world where we protected our Young, rather than sacrifice them to Agenda. That world used to be Planet Earth", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "4_1") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[3] * exp(0.4), category_4_table_angle, 450, 490, category_4_table_color);
        fill(111, 28, 120);
        circle(450, 490, category_sum_table[3] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("51 tweets", 370, 500);
        fill('#6f1c78');
        text("\"Policies are harmful\"", 1440, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("51 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("wattsupwiththat", 1350, 515);
        fill(0, 0, 0);
        text("When The Costs Hit Home, Nobody Will Give Up Fossil Fuels", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "4_2") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[3] * exp(0.4), category_4_table_angle, 450, 490, category_4_table_color);
        fill(111, 28, 120);
        circle(450, 490, category_sum_table[3] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("8 tweets", 370, 500);
        fill('#6f1c78');
        text("\"Policies are ineffective\"", 1390, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("8 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("PeterDClack", 1350, 515);
        fill(0, 0, 0);
        text("World climate hasn't changed, not by 1 degree. The worst case scenario - a 1 degree rise since 1860. But this is doubtful. No evidence carbon dioxide changed climate. Only the hoax remains.", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "4_4") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[3] * exp(0.4), category_4_table_angle, 450, 490, category_4_table_color);
        fill(111, 28, 120);
        circle(450, 490, category_sum_table[3] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("121 tweets", 370, 500);
        fill('#6f1c78');
        text("\"Clean energy won’t work\"", 1355, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("121 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("JunkScience", 1350, 515);
        fill(0, 0, 0);
        text("Climate is a hoax. Wind, solar, EVs and the rest of green tech are pointlessly expensive idiocy. ", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "4_5") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[3] * exp(0.4), category_4_table_angle, 450, 490, category_4_table_color);
        fill(111, 28, 120);
        circle(450, 490, category_sum_table[3] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("40 tweets", 370, 500);
        fill('#6f1c78');
        text("\"We need energy\"", 1500, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("40 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text(" CFACT", 1350, 515);
        fill(0, 0, 0);
        text("Nuclear power is not new. It has been in operation for over half a century, with an excellent record for providing reliable baseload electricity.It is also the safest, greenest and most inexpensive electricity currently available to mankind.", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "5_1") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[4] * exp(0.4), category_5_table_angle, 270, 840, category_5_table_color);
        fill(171, 28, 36);
        circle(270, 840, category_sum_table[4] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("99 tweets", 180, 860);
        fill('#ab1c23');
        text("\"Climate science is unreal\"", 1355, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("99 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("NoTricksZone", 1350, 515);
        fill(0, 0, 0);
        text("Physicists: Climate Model Error Overestimates CO2 Impact On Global Temps By FACTOR OF 5 ", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
    if (cate === "5_2") {
        fill(245, 245, 245, 90);
        rect(0, 0, 1920, 1080);
        pieChart(category_sum_table[4] * exp(0.4), category_5_table_angle, 270, 840, category_5_table_color);
        fill(171, 28, 36);
        circle(270, 840, category_sum_table[4] * exp(0.4) - 70);
        fill(255, 255, 255);
        textFont("Montserrat");
        textSize(35);
        text("185 tweets", 180, 860);
        fill('#ab1c23');
        text("\"Movement is unreliable\"", 1395, 300);
        textFont("Montserrat");
        textStyle(NORMAL);
        textSize(25);
        fill(0, 0, 0);
        text("185 tweets", 1700, 340);
        fill('#F3F5F9');
        rect(1200, 440, 650, 280, 30);
        fill('#2A0525');
        text("JaggerMickOZ", 1350, 515);
        fill(0, 0, 0);
        text("Alarmists and their Warmist Acolytes Pretend Meanwhile Planet Earth just does it’s thing", 1245, 570, 590, 120);
        image(img_profil, 1250, 470);
    }
}
var tweet_table = [];
var category_table = [];
var data_table;
var category_sum_table = [204, 214, 269, 220, 284];
var img_profil;
var category_1_table = [];
var category_2_table = [];
var category_3_table = [];
var category_4_table = [];
var category_5_table = [];
var category_1_table_angle = [];
var category_2_table_angle = [];
var category_3_table_angle = [];
var category_4_table_angle = [];
var category_5_table_angle = [];
var category_5_table_color = ['#e190a4', '#CF5573'];
var category_3_table_color = ['#D9A3B8', '#B87A92', '#9C5570'];
var category_4_table_color = ['#C795CC', '#D7ABDC', '#8D4A94', '#A168A7'];
var category_2_table_color = ['#B0A7E3', '#796EBD'];
var category_1_table_color = ['#7580ED', '#B7BDFB', '#5562E5', '#7580ED', '#919AF1', '#4452DE'];
var cate_display = ' ';
var scale_x = 0.7;
var scale_y = 0.7;
function preload() {
    data_table = loadTable("https://github.com/Louisedlr/Desinformation-on-global-warning/blob/master/data.csv", 'csv');
    img_profil = loadImage("https://github.com/Louisedlr/Desinformation-on-global-warning/blob/master/user.png");
}
function setup() {
    p6_CreateCanvas();
    for (var i = 0; i < data_table.getRowCount(); i++) {
        tweet_table.push(data_table.getString(i, 3));
        category_table.push(data_table.getString(i, 5));
    }
}
function windowResized() {
    p6_ResizeCanvas();
}
function mouseClicked() {
    var x = 710 * scale_x;
    var y = 780 * scale_y;
    var radius = category_sum_table[2] * exp(0.4) / 2 * scale_x;
    var magnitude = dist(mouseX, mouseY, x, y);
    var origin = createVector(710 * scale_x, 780 * scale_x);
    var target = createVector(mouseX - 710 * scale_x, (mouseY - 780 * scale_x) * -1);
    var angle = origin.angleBetween(target);
    var withinDist = magnitude > radius - 35 * scale_x && magnitude < radius;
    var withinAngle = angle > -1.17 && angle < -0.84;
    if (withinAngle && withinDist) {
        print("cate 3_1");
        cate_display = "3_1";
    }
    withinAngle = angle > -2.18 && angle < -1.17;
    if (withinAngle && withinDist) {
        print("cate 3_2");
        cate_display = "3_2";
    }
    withinAngle = (angle > -0.84 && angle < PI) || (angle < -2.18 && angle > -PI);
    if (withinAngle && withinDist) {
        print("cate 3_3");
        cate_display = "3_3";
    }
    x = 270 * scale_x;
    y = 850 * scale_x;
    radius = category_sum_table[4] * exp(0.4) / 2 * scale_x;
    magnitude = dist(mouseX, mouseY, x, y);
    origin = createVector(270 * scale_x, 850 * scale_x);
    target = createVector(mouseX - 270 * scale_x, (mouseY - 850 * scale_x) * -1);
    angle = origin.angleBetween(target);
    print(angle);
    withinDist = magnitude > radius - 35 * scale_x && magnitude < radius;
    withinAngle = angle > -1.21 && angle < 2.8;
    if (withinAngle && withinDist) {
        print("cate 5_2");
        cate_display = "5_2";
    }
    withinAngle = (angle > 2.8 && angle < PI) || (angle < -1.21 && angle > -PI);
    if (withinAngle && withinDist) {
        print("cate 5_1");
        cate_display = "5_1";
    }
    x = 450 * scale_x;
    y = 490 * scale_x;
    radius = category_sum_table[3] * exp(0.4) / 2 * scale_x;
    magnitude = dist(mouseX, mouseY, x, y);
    origin = createVector(450 * scale_x, 490 * scale_x);
    target = createVector(mouseX - 450 * scale_x, (mouseY - 490 * scale_x) * -1);
    angle = origin.angleBetween(target);
    withinDist = magnitude > radius - 35 * scale_x && magnitude < radius;
    withinAngle = angle < -2.27 && angle > -2.5;
    if (withinAngle && withinDist) {
        print("cate 4_2");
        cate_display = "4_2";
    }
    withinAngle = angle < -0.83 && angle > -2.28;
    if (withinAngle && withinDist) {
        print("cate 4_5");
        cate_display = "4_5";
    }
    withinAngle = angle < 0.3 && angle > -0.83;
    if (withinAngle && withinDist) {
        print("cate 4_1");
        cate_display = "4_1";
    }
    withinAngle = (angle > 0.3 && angle < PI) || (angle < -2.5 && angle > -PI);
    if (withinAngle && withinDist) {
        print("cate 4_4");
        cate_display = "4_4";
    }
    x = 200 * scale_x;
    y = 240 * scale_x;
    radius = category_sum_table[1] * exp(0.4) / 2 * scale_x;
    magnitude = dist(mouseX, mouseY, x, y);
    origin = createVector(200 * scale_x, 240 * scale_x);
    target = createVector(mouseX - 200 * scale_x, (mouseY - 240 * scale_x) * -1);
    angle = origin.angleBetween(target);
    withinDist = magnitude > radius - 35 * scale_x && magnitude < radius;
    withinAngle = (angle > 2.8 && angle < PI) || (angle < -0.88 && angle > -PI);
    if (withinAngle && withinDist) {
        print("cate 2_1");
        cate_display = "2_1";
    }
    withinAngle = angle < 2.8 && angle > -0.88;
    if (withinAngle && withinDist) {
        print("cate 2_3");
        cate_display = "2_3";
    }
    x = 550 * scale_x;
    y = 170 * scale_x;
    radius = category_sum_table[0] * exp(0.4) / 2 * scale_x;
    magnitude = dist(mouseX, mouseY, x, y);
    origin = createVector(550 * scale_x, 170 * scale_x);
    target = createVector(mouseX - 550 * scale_x, (mouseY - 170 * scale_x) * -1);
    angle = origin.angleBetween(target);
    withinDist = magnitude > radius - 35 * scale_x && magnitude < radius;
    withinAngle = angle > -1.8 && angle < -1.4;
    if (withinAngle && withinDist) {
        print("cate 1_2");
        cate_display = "1_2";
    }
    withinAngle = angle > 1.32 && angle < 1.98;
    if (withinAngle && withinDist) {
        print("cate 1_6");
        cate_display = "1_6";
    }
    withinAngle = (angle > 1.98 && angle < PI) || (angle < -3.12 && angle > -PI);
    if (withinAngle && withinDist) {
        print("cate 1_4");
        cate_display = "1_4";
    }
    withinAngle = angle < -0.31 && angle > -1.4;
    if (withinAngle && withinDist) {
        print("cate 1_1");
        cate_display = "1_1";
    }
    withinAngle = angle < -1.8 && angle > -3.12;
    if (withinAngle && withinDist) {
        print("cate 1_3");
        cate_display = "1_3";
    }
    withinAngle = angle < 1.32 && angle > -0.31;
    if (withinAngle && withinDist) {
        print("cate 1_7");
        cate_display = "1_7";
    }
}
function draw() {
    background('#f8f8fa');
    noStroke();
    scale(scale_x, scale_y);
    category_1_table = fill_category_table(1);
    category_2_table = fill_category_table(2);
    category_3_table = fill_category_table(3);
    category_4_table = fill_category_table(4);
    category_5_table = fill_category_table(5);
    category_1_table_angle = fill_category_angle(1, category_1_table);
    category_2_table_angle = fill_category_angle(2, category_2_table);
    category_3_table_angle = fill_category_angle(3, category_3_table);
    category_4_table_angle = fill_category_angle(4, category_4_table);
    category_5_table_angle = fill_category_angle(5, category_5_table);
    draw_pie_chart();
    draw_tweet(cate_display);
    textFont("Raleway");
    fill('#2A0525');
    textAlign(LEFT);
    textSize(66);
    textStyle(BOLD);
    text("Desinformation on global warning", 880, 110);
    textFont("Montserrat");
    textSize(28);
    textStyle(NORMAL);
    text("Collection of tweets categorized by type of misinformation", 1140, 170);
    textSize(13);
    textStyle(ITALIC);
    text("dataset from Critical Climate Machine by Gaëtan Robillard", 1600, 1000);
    text("design by Clara Balzano - Louise Delrieu - Elise Gondange", 1600, 1020);
}
var __MARGIN_SIZE = 0;
function __desiredCanvasWidth() {
    return windowWidth - __MARGIN_SIZE * 2;
}
function __desiredCanvasHeight() {
    return windowHeight - __MARGIN_SIZE * 2;
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map