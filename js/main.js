//you can always add script tag in html where coin needs to appear or after body 



// define images
						var images = [
							"media/fimo003.png",
							"media/fimo006.png",
							"media/fimo009.png",
							"media/fimo012.png",
							"media/fimo015.png",
							"media/fimo018.png",
							"media/fimo021.png",
							"media/fimo024.png",
							"media/fimo027.png",
							"media/fimo030.png",
							"media/fimo033.png",
							"media/fimo036.png",
							"media/fimo039.png",
							"media/fimo042.png",
							"media/fimo045.png",
							"media/fimo048.png",
							"media/fimo051.png",
							"media/fimo054.png",
							"media/fimo057.png",
							"media/fimo060.png",
							"media/fimo063.png",
							"media/fimo066.png",
							"media/fimo069.png",
							"media/fimo072.png",
							"media/fimo075.png",
							"media/fimo078.png",
							"media/fimo081.png",
							"media/fimo084.png",
							"media/fimo087.png",
							"media/fimo090.png",
							"media/fimo093.png",
							"media/fimo096.png",
							"media/fimo099.png",
							"media/fimo102.png",
							"media/fimo105.png",
							"media/fimo108.png",
							"media/fimo111.png",
							"media/fimo114.png",
							"media/fimo117.png",
							"media/fimo120.png",
							"media/fimo123.png",
							"media/fimo126.png",
							"media/fimo129.png",
							"media/fimo132.png",
							"media/fimo135.png",
							"media/fimo138.png",
							"media/fimo141.png",
							"media/fimo144.png",
							"media/fimo147.png",
							"media/fimo150.png",
							"media/fimo153.png",
							"media/fimo156.png",
							"media/fimo159.png",
							"media/fimo162.png",
							"media/fimo165.png",
							"media/fimo168.png",
							"media/fimo171.png",
							"media/fimo174.png",
							"media/fimo177.png",
							"media/fimo180.png",
							"media/fimo183.png",
							"media/fimo186.png",
							"media/fimo189.png",
							"media/fimo192.png",
							"media/fimo195.png",
							"media/fimo198.png",
							"media/fimo201.png",
							"media/fimo204.png",
							"media/fimo207.png",
							"media/fimo210.png",
							"media/fimo213.png",
							"media/fimo216.png",
							"media/fimo219.png",
							"media/fimo222.png",
							"media/fimo225.png",
							"media/fimo228.png",
							"media/fimo231.png",
							"media/fimo234.png",
							"media/fimo237.png",
							"media/fimo240.png",
							"media/fimo243.png",
							"media/fimo246.png",
							"media/fimo249.png",
							"media/fimo252.png",
							"media/fimo255.png",
							"media/fimo258.png"
						];

						// TweenMax can tween any property of any object. We use this object to cycle through the array
						var obj = {curImg: 0};

						// create tween
						var tween = TweenMax.to(obj, 0.5,
							{
								curImg: images.length - 1,	// animate propery curImg to number of images
								roundProps: "curImg",				// only integers so it can be used as an array index
								repeat: 0,									// repeat 4 times
								delay: 0.5,
								immediateRender: true,			// load first image automatically
								ease: Linear.easeNone,			// show every image the same ammount of time
								onUpdate: function () {
								  $("#myimg").attr("src", images[obj.curImg]); // set the image source
								}
							}
						);

						// init controller
						var controller = new ScrollMagic.Controller();

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 1000})
										.setTween(tween)
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);

						// handle form change
						$("form.move input[name=duration]:radio").change(function () {
							scene.duration($(this).val());
						});

//you can always add script tag in html where coin needs to appear or after body 



// define images
						var images2 = [
							"media/coinarrow_1.png",
							"media/coinarrow_2.png",
							"media/coinarrow_3.png",
							"media/coinarrow_4.png",
							"media/coinarrow_5.png",
							"media/coinarrow_6.png",
							"media/coinarrow_7.png",
							"media/coinarrow_8.png",
							"media/coinarrow_9.png",
							"media/coinarrow_10.png",
							"media/coinarrow_11.png",
							"media/coinarrow_12.png",
							"media/coinarrow_13.png",
							"media/coinarrow_14.png",
							"media/coinarrow_15.png",
							"media/coinarrow_16.png",
							"media/coinarrow_17.png",
							"media/coinarrow_18.png",
							"media/coinarrow_19.png",
							"media/coinarrow_20.png",
							"media/coinarrow_21.png",
							"media/coinarrow_22.png",
							"media/coinarrow_23.png",
							"media/coinarrow_24.png",
							"media/coinarrow_25.png",
							"media/coinarrow_26.png",
							"media/coinarrow_27.png",
							"media/coinarrow_28.png",
							"media/coinarrow_29.png",
							"media/coinarrow_30.png",
							"media/coinarrow_31.png",
							"media/coinarrow_32.png",
							"media/coinarrow_33.png",
							"media/coinarrow_34.png",
							"media/coinarrow_35.png",
							"media/coinarrow_36.png"
						];

						// TweenMax can tween any property of any object. We use this object to cycle through the array
						var obj2 = {curImg: 0};

						// create tween
						var tween = TweenMax.to(obj2, 0.5,
							{
								curImg: images2.length - 1,	// animate propery curImg to number of images
								roundProps: "curImg",				// only integers so it can be used as an array index
								repeat: 20,								// repeat 4 times
								immediateRender: true,			// load first image automatically
								ease: Linear.easeNone,			// show every image the same ammount of time
								onUpdate: function () {
								  $("#myimg2").attr("src", images2[obj2.curImg]); // set the image source
								}
							}
						);

						// init controller
						var controller = new ScrollMagic.Controller();

						// build scene
						var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 4000})
										.setTween(tween)
										//.addIndicators() // add indicators (requires plugin)
										.addTo(controller);

						// handle form change
						$("form.move input[name=duration]:radio").change(function () {
							scene.duration($(this).val());
						});


var totalImages = 47;
var videoFrames = [];
var videoCount ;
var canvas;
var context;
var loopID;

$(function (){

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	canvas.height = 1080;
	canvas.width = 1920;



	for (var i = 1; i <= totalImages; i++) {
 		var videoFrame = new Image;
 		var videoFrameUrl = 'media/guns' + i + '.png';  
 		//var videoFrameUrl = 'video/layer/slap' + i + '.png'; 
  		videoFrame.src = videoFrameUrl;
  		videoFrames.push(videoFrame);
	}


	setTimeout(function(){
		var currentImage = videoFrames[0];
		console.log("my image is " + currentImage.src);
		//var context = canvas.getContext("2d");
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(currentImage, 0, 0);
	}, 100);

	createEvent();

	//alert(videoFrameUrl);


	/*setInterval(function(){
		var currentImage = videoFrames[27];
		var videoCount =

		}, 300);
		*/

});//]]> 

function createEvent(){

		$("#my-input").on("input", function(event) {
			var dragPos = parseInt(event.target.value);
		  	var currentImage = videoFrames[dragPos];
		  	context.clearRect(0, 0, canvas.width, canvas.height);
		  	context.drawImage(currentImage, 0, 0);
		  	if(dragPos > 26){
		  		console.log("drag is at " + dragPos);
		  		videoCount = dragPos + 1;
		  		killEvent();
		  		startAnimationLoop();
		  	}


		  //$("#my-input").val(0);


	});

}


function killEvent(){
	// this removes our drag functionality
	$("#my-input").unbind("input");
}

function startAnimationLoop(){
	loopID = setInterval(function(){
		animationLoop();
	}, 1000/80);

}

function animationLoop(){
	videoCount++; // i = i +1;
	console.log("at frame " + videoCount)

	var currentImage = videoFrames[videoCount];
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.drawImage(currentImage, 0, 0);
	if(videoCount > 45){
		createEvent();
		clearInterval(loopID);
		videoCount = 0;
	}

}








