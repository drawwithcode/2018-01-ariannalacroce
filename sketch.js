function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(25,25,112);
	fill(218,165,32);

	//Neck
	strokeWeight(0);
	stroke(184,134,11);
	fill(184,134,11);
	rect(148.4, 290, 5, 70);
	fill(245,222,179);
	rect(147, 293, 7.5, 3);
	rect(145, 288, 12, 5);
	rect(147, 319, 7.5, 3);
	rect(145, 322, 12, 5);

	//Wheel
	ellipse(150, 465, 70);
	strokeWeight(2);
	noFill();
	stroke(255,255,255);
	arc(155, 470, 40, 40, 0, HALF_PI);

	//Body
	strokeWeight(0);
	fill(	184,134,11);
	ellipse(103, 340, 30);
	ellipse(197, 340, 30);
	fill(218,165,32);
	rect(100, 325, 100, 140);

	fill(0,0,0,30);
	strokeWeight(0);
	rect(100, 325, 50, 140);

	fill(184,134,11);
	triangle(100, 325, 135, 325, 100, 355);
	triangle(165, 325, 200, 325, 200, 355);
	rect(90, 340, 5, 80);
	rect(205, 340, 5, 80);
	fill(245,222,179);
	rect(89, 415, 7, 3);
	rect(88.7, 418, 8, 5);
	rect(204.5, 415, 7, 3);
	rect(204, 418, 8, 5);

	fill(245,222,179);
	triangle(80, 321, 135, 325, 100, 340);
	triangle(165, 325, 220, 321, 200, 340);

	noFill();
	strokeWeight(4);
	stroke(245,222,179);
	arc(93.5, 435, 25, 25, 3, TWO_PI);
	arc(208, 435, 25, 25, 3, TWO_PI);

	strokeWeight(1);
	fill(184,134,11);
	rect(125, 355, 50, 25);
	ellipse(133, 367, 4);
	line(135, 390, 165, 390);
	line(130, 394, 170, 394);
	line(125, 398, 175, 398);
	line(120, 402, 180, 402);


	//Head
	fill(	184,134,11);
	strokeWeight(0);
	triangle(140, 191, 150, 181, 160, 191);
	fill(210,180,140);
	arc(194, 245, 20, 25, 4.8, HALF_PI);

	fill(218,165,32);
	ellipse(150, 240, 100);
	strokeWeight(1);
	line(107, 217, 193, 217);
	line(105, 220, 195, 220);
	ellipse(173, 210, 3);
	ellipse(180, 210, 3);

	strokeWeight(1.5);
	line(150, 182, 150, 140);
	line(145, 160, 155, 160);
	line(145, 157, 155, 157);
	strokeWeight(0);
	ellipse(150, 140, 9);

	fill(0,0,0,30);
	arc(150, 240, 100, 100, 7.86, -HALF_PI);
	fill(210,180,140);
	arc(105, 245, 20, 25, 7.86, -HALF_PI);
	fill(184,134,11);
	rect(105, 230, 4, 30);

	//Eye
	strokeWeight(0);
	fill(210,180,140);
	ellipse(155, 250, 46);
	fill(240,230,140);
	ellipse(160, 251, 45);
	fill(0,0,0);
	ellipse(160, 251, 30);
	fill(255,255,255);
	ellipse(155, 246, 3);

	//Robot2
	fill(0,128,128);
	ellipse(mouseX, mouseY, 30);
	rect(mouseX-15, mouseY, 30, 20);
	fill(255,255,255,30);
	ellipse(mouseX, mouseY-10, 65);
	fill(192,192,192);
	rect(mouseX-15, mouseY+16, 30, 5);

	fill(255,255,255);
	ellipse(mouseX-6, mouseY, 9);
	ellipse(mouseX+6, mouseY, 9);
	fill(0,0,0);
	ellipse(mouseX-6, mouseY+1, 4);
	ellipse(mouseX+6, mouseY+1, 4);
	strokeWeight(0.5);
	line(mouseX-3, mouseY+10, mouseX+3, mouseY+10);

	strokeWeight(2);
	line(mouseX, mouseY-14, mouseX, mouseY-27);
	noFill();
	ellipse(mouseX-7, mouseY-27, 8);
	ellipse(mouseX+7, mouseY-27, 8);
	triangle(mouseX-3, mouseY-29.5,mouseX-3, mouseY-25.5, mouseX-1, mouseY-28);
	triangle(mouseX+3, mouseY-29.5,mouseX+3, mouseY-25.5, mouseX+1, mouseY-28);

}
