var nav1 = document.getElementsByClassName('navButton')[0];
var nav2 = document.getElementsByClassName('navButton')[1];
var nav3 = document.getElementsByClassName('navButton')[2];
var nav4 = document.getElementsByClassName('navButton')[3];
var nav5 = document.getElementsByClassName('navButton')[4];
var nav6 = document.getElementsByClassName('navButton')[5];

nav1.addEventListener('click', function() {

// Page 1
	TweenMax.to(scene.position, 3, {y: -30, ease: Power2.easeOut});
	TweenMax.to("#introTextSm", 1, {autoAlpha:1});
	TweenMax.to("#introTextLg", 1, {autoAlpha:1});

// Page 2

	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#bigI", 1, {autoAlpha:0});
	TweenMax.to("#instructions", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});

});

nav2.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to("#wantToTry", 1, {autoAlpha:1});
	TweenMax.to("#sorry", 1, {autoAlpha:1});

// Page 3

	TweenMax.to("#bigI", 1, {autoAlpha:0});
	TweenMax.to("#instructions", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});


});



nav3.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#bigI", 1, {autoAlpha:1});
	TweenMax.to("#instructions", 1, {autoAlpha:1});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});

});

nav4.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#bigI", 1, {autoAlpha:0});
	TweenMax.to("#instructions", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:1});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});


});


nav5.addEventListener('click', function() {


// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#bigI", 1, {autoAlpha:0});
	TweenMax.to("#instructions", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:1});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:0});
	TweenMax.to("#share", 1, {autoAlpha:0});
	TweenMax.to("#subscribe", 1, {autoAlpha:0});
	TweenMax.to("#learn", 1, {autoAlpha:0});


});

nav6.addEventListener('click', function() {

// Page 1
	TweenMax.to("#introTextSm", 1, {autoAlpha:0});
	TweenMax.to("#introTextLg", 1, {autoAlpha:0});

// Page 2

	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});
	TweenMax.to("#wantToTry", 1, {autoAlpha:0});
	TweenMax.to("#sorry", 1, {autoAlpha:0});

// Page 3

	TweenMax.to("#bigI", 1, {autoAlpha:0});
	TweenMax.to("#instructions", 1, {autoAlpha:0});

// Page 4

	TweenMax.to("#wantToTry4", 1, {autoAlpha:0});

// Page 5

	TweenMax.to("#wantToTry5", 1, {autoAlpha:0});

// Page 6

	TweenMax.to("#logo", 1, {autoAlpha:1});
	TweenMax.to("#share", 1, {autoAlpha:1});
	TweenMax.to("#subscribe", 1, {autoAlpha:1});
	TweenMax.to("#learn", 1, {autoAlpha:1});

});



// nav6.addEventListener('click', function() {

// 	if (document.getElementById('share').style.opacity = '1' ) {

// 		document.getElementById('mainSix').style.zIndex = '30';
// 		document.getElementById('mainSix').style.backgroundColor = 'red';


// 	} else if (document.getElementById('share').style.opacity = '0' ) {

// 		document.getElementById('mainSix').style.zIndex = '-10';
// 		document.getElementById('mainSix').style.backgroundColor = 'green';

// 	}

// 	document.getElementById('mainSix').style.backgroundColor = 'red';
// });











// document.getElementsByTagName('body')[0].addEventListener('click', function() {


					// var position = { x: 0, y: 0 };
					// var target = { x: 20, y: 20 };

					// // Tween 1

					// var tween = new TWEEN.Tween(position).to(target, 3000);

					// tween.onUpdate(function() {

					// 	ncube.position.x = position.x;
					// 	ncube.position.y = position.y;
					// 	tween.easing(TWEEN.Easing.Elastic.InOut)

					// });

					// tween.start();


					// Tween 2

					// var positionCam = { x: 25, y: 0, z: 25 };
					// var targetCam = { x: 125, y: 50, z: 125 };

					// var tweenCam = new TWEEN.Tween(positionCam).to(targetCam, 1000);



					// tweenCam.onUpdate(function() {

					// 	camera.lookAt(new THREE.Vector3( 0, 0, 0 ));

					// 	camera.position.x = positionCam.x;
					// 	camera.position.y = positionCam.y;
					// 	camera.position.z = positionCam.z;

					// });

					// tweenCam.delay(500);

					// tweenCam.start();
					// console.log(camera.position.x, camera.position.y, camera.position.z);


					// Tween 3

				// 	TweenMax.to(scene.position, 3, {y: 0, ease: Power2.easeOut});

					
				// });



