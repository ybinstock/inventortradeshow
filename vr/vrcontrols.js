// AFRAME.registerComponent('cursor-listener', {
//   init: function() {
//     this.el.addEventListener('click', function(evt) {
//       console.log('I was clicked at: ', evt.detail.intersection.point);

//       console.log('this product', evt.target.className);

//       (evt.target).emit('fade');

//       localStorage.setItem("product", evt.target.className);

//     });

//   }
// });

// // AFRAME.registerComponent('collider-check', {
// //  dependencies: ['raycaster'],
// //  init: function () {
// //    this.el.addEventListener('raycaster-intersected', function () {
// //      console.log('Player hit something!');
// //    });
// //  }
// // });

// //I need to run this function either every time the page loads and if there are no relevant cookies, then do nothing
// // or i have it run when the submit button from app.js is emitted?

// // I need to know if I'm creating a fourth booth or one booth.
// // If fourth booth, I need to create booth entity with all the children according to the selection JSON_booth_data.option?
// // If one booth, I just need to have a
// // if one booth, position is 0. If 4th booth, I need to figure out the 4 booth positions.

// AFRAME.registerComponent('booth-creator', {
//   init: function (jsonData) {

//     function readCookies () {
//       var booth_cookie = Cookies.get();
//       var booth_cookie_json = Cookies.getJSON();
//       console.log('booth_cookie', booth_cookie);
//       console.log('booth_cookie_json', booth_cookie_json);
//       createBoothOne (booth_cookie);
//   }

//     function createBoothOne (booth_cookie) {
//       var jsonData = booth_cookie;
//       console.log('jsonData', jsonData);
//       // Create booth entities
//       var sceneEl = document.querySelector('a-scene');
//       var boothEl = document.createElement('a-entity');
//       var boothFloor = document.createElement('a-entity');
//       var leftWall = document.createElement('a-entity');
//       var rightWall = document.createElement('a-entity');
//       var backWall = document.createElement('a-entity');
//       var pedestal = document.createElement('a-entity');
//       var model = document.createElement('a-entity');
//       var boothNumberFixture = document.createElement('a-entity');
//       var boothNumberOnFloor = document.createElement('a-text');
//       var boothNumberBox = document.createElement('a-entity');
//       var boothNumberBoxText1 = document.createElement('a-text');
//       var boothNumberBoxText2 = document.createElement('a-text');
//       var boothLogo1 = document.createElement('a-plane');
//       var boothLogo2 = document.createElement('a-plane');
//       var inventorBio = document.createElement('a-text');
//       var productImage1 = document.createElement('a-plane');
//       var productImage2 = document.createElement('a-plane');
//       var productImage3 = document.createElement('a-plane');
//       var productVideo = document.createElement('a-video');
//       var companyName = document.createElement('a-text');
//       var companyDescription = document.createElement('a-text');

//       // Modify attributes
//       boothEl.setAttribute('position', {x: 0, y: 2, z: -2});
//       boothEl.setAttribute('rotation', {x: 0, y: 0, z: 0});

//       boothFloor.setAttribute('position', {x: 0, y: -1.99, z: 0});
//       boothFloor.setAttribute('rotation', {x: -90, y: 0, z: 0});
//       boothFloor.setAttribute('width', 5);
//       boothFloor.setAttribute('height', 5);
//       boothFloor.setAttribute('material', 'src', ('img/wood_floor_2.jpg'))

//       leftWall.setAttribute('position', {x: -2.5, y: 0, z: 0});
//       leftWall.setAttribute('rotation', {x: 0, y: 90, z: 0});
//       leftWall.setAttribute('width', 5);
//       leftWall.setAttribute('height', 5);
//       leftWall.setAttribute('material', 'src', ('img/black_wall_texture2.jpg'));
//       leftWall.setAttribute('material', 'side', 'double');

//       rightWall.setAttribute('position', {x: 2.5, y: 0, z: 0});
//       rightWall.setAttribute('rotation',  {x: 0, y: 90, z: 0});
//       rightWall.setAttribute('material', 'src', ('img/black_wall_texture2.jpg'));
//       leftWall.setAttribute('material', 'side', 'double');

//       backWall.setAttribute('position', {x: 0, y: 0, z: -2.5});
//       backWall.setAttribute('material', 'src', ('img/black_wall_texture2.jpg'));
//       leftWall.setAttribute('material', 'side', 'double');

//       pedestal.setAttribute('position', {x: 0, y: -1.5, z: -.1});
//       pedestal.setAttribute('rotation',  {x: 0, y: 0, z: 0});
//       pedestal.setAttribute('geometry', 'box');
//       pedestal.setAttribute('width', 1);
//       pedestal.setAttribute('height', 1);
//       pedestal.setAttribute('depth', 1);
//       leftWall.setAttribute('material', 'color', 'black');

//       model.setAttribute('position', {x: .3, y: -1, z: 0});
//       model.setAttribute('rotation',  {x: 0, y: 90, z: 0});
//       model.setAttribute('scale',  {x: 0.5, y: 0.5, z: 0.5});
//       model.setAttribute('gltf-model', 'url', ('url(bull/scene.gltf)'));

//       boothNumberFixture.setAttribute('position', {x: 0, y: 3.8, z: 0});
//       boothNumberFixture.setAttribute('geometry', 'cylinder');
//       boothNumberFixture.setAttribute('height', 1.5);
//       boothNumberFixture.setAttribute('radius', .1);
//       boothNumberFixture.setAttribute('color', "black");

//       boothNumberOnFloor.setAttribute('position', {x: 2, y: -2, z: 2.7});
//       boothNumberOnFloor.setAttribute('rotation',  {x: -90, y: 0, z: 0});
//       boothNumberOnFloor.setAttribute('align', 'center');
//       boothNumberOnFloor.setAttribute('width', 6);
//       boothNumberOnFloor.setAttribute('color', 'white');
//       boothNumberOnFloor.setAttribute('value', 'Booth3');

//       boothNumberBox.setAttribute('position', {x: 0, y: -1, z: 0});
//       boothNumberBox.setAttribute('geometry', 'box');
//       boothNumberBox.setAttribute('width', 1);
//       boothNumberBox.setAttribute('height', 1);
//       boothNumberBox.setAttribute('depth', 1);
//       boothNumberBox.setAttribute('material', 'color', 'black');

//       boothNumberBoxText1.setAttribute('position', {x: 0, y: 0, z: 0.5});
//       boothNumberBoxText1.setAttribute('align', 'center');
//       boothNumberBoxText1.setAttribute('width', 6);
//       boothNumberBoxText1.setAttribute('color', 'white');
//       boothNumberBoxText1.setAttribute('value', 'Booth 3.');

//       boothNumberBoxText2.setAttribute('position', {x: 0, y: 0, z: -0.5});
//       boothNumberBoxText2.setAttribute('rotation',  {x: 0, y: 180, z: 0});
//       boothNumberBoxText1.setAttribute('align', 'center');
//       boothNumberBoxText1.setAttribute('width', 6);
//       boothNumberBoxText1.setAttribute('color', 'white');
//       boothNumberBoxText1.setAttribute('value', 'Booth 3.');

//       boothLogo1.setAttribute('position', {x: .51, y: 0, z: 0});
//       boothLogo1.setAttribute('rotation',  {x: 0, y: 90, z: 0});
//       boothLogo1.setAttribute('width', 1);
//       boothLogo1.setAttribute('height', 1);
//       boothLogo1.setAttribute('material', 'src', ('img/company_logo.png'));

//       boothLogo2.setAttribute('position', {x: -0.51, y: 0, z: 0});
//       boothLogo2.setAttribute('rotation',  {x: 0, y: -90, z: 0});
//       boothLogo2.setAttribute('width', 1);
//       boothLogo2.setAttribute('height', 1);
//       boothLogo2.setAttribute('material', 'src', ('img/company_logo.png'));

//       inventorBio.setAttribute('position', {x: 1.85, y: .1, z: -.1});
//       inventorBio.setAttribute('rotation', {x: 0, y: 180, z: 0});
//       inventorBio.setAttribute('align', 'center');
//       inventorBio.setAttribute('width', 2.5);
//       inventorBio.setAttribute('wrap-count', 30);
//       inventorBio.setAttribute('color', 'white');
//       inventorBio.setAttribute('value', 'Inventor Bio');

//       productImage1.setAttribute('position', {x: -1.5, y: 0, z: .15});
//       productImage1.setAttribute('rotation', {x: 0, y: 0, z: 0});
//       productImage1.setAttribute('width', 1.5);
//       productImage1.setAttribute('height', 1.5);
//       productImage1.setAttribute('material', 'src', ('img/product-picture.jpg'));

//       productImage2.setAttribute('position', {x: 1.2, y: .2, z: .1});
//       productImage1.setAttribute('width', 1.5);
//       productImage1.setAttribute('height', 1.5);
//       productImage1.setAttribute('material', 'src', ('img/product-picture.jpg'));

//       productImage3.setAttribute('position', {x: 0, y: 0, z: 0});
//       productImage1.setAttribute('width', 1.5);
//       productImage1.setAttribute('height', 1.5);
//       productImage1.setAttribute('material', 'src', ('img/product-picture.jpg'));

//       productVideo.setAttribute('position', {x: -.9, y: .2, z: .1});
//       productVideo.setAttribute('width', 2);
//       productVideo.setAttribute('height', 1);

//       companyName.setAttribute('position', {x: 0, y: 2, z: .1});
//       companyName.setAttribute('align', 'center');
//       companyName.setAttribute('width', 10);
//       companyName.setAttribute('wrap-count', 60);
//       companyName.setAttribute('color', 'white');
//       companyName.setAttribute('value', 'Company Name.');

//       companyDescription.setAttribute('position', {x: .85, y: .1, z: .1});
//       companyDescription.setAttribute('align', 'center');
//       companyDescription.setAttribute('width', 2.5);
//       companyDescription.setAttribute('wrap-count', 30);
//       companyDescription.setAttribute('color', 'white');
//       companyDescription.setAttribute('value', 'This is a company/product description.');

//       // Add entities to the corresponding parents.
//       boothEl.appendChild(boothFloor);
//       boothEl.appendChild(leftWall);
//       boothEl.appendChild(rightWall);
//       boothEl.appendChild(backWall);
//       boothEl.appendChild(pedestal);
//       boothEl.appendChild(model);
//       boothEl.appendChild(boothNumberFixture);
//       boothEl.appendChild(boothNumberOnFloor);
//       boothNumberFixture.appendChild(boothNumberBox);
//       boothNumberBox.appendChild(boothNumberBoxText1);
//       boothNumberBox.appendChild(boothNumberBoxText2);
//       boothNumberBox.appendChild(boothLogo1);
//       boothNumberBox.appendChild(boothLogo2);
//       rightWall.appendChild(inventorBio);
//       rightWall.appendChild(productImage3);
//       rightWall.appendChild(inventorBio);
//       backWall.appendChild(productVideo);
//       backWall.appendChild(productImage2);
//       backWall.appendChild(companyName);
//       leftWall.appendChild(productImage1);
//       leftWall.appendChild(companyDescription);
//       leftWall.appendChild(companyName);
//       sceneEl.appendChild(boothEl);
//     };

//     console.log('booth creator hit!');
//     // pull the json out of the cookies and have it equal JSON_booth_data
//     // with that data, set the src attributes for the text and images
//     // first find which booth the user picked. And then create the entity for that
//     readCookies()
//     // if selection is choice one, run function createBoothOne and so on.
//     // if no selection, create a dummy one.
//     createBoothOne(jsonData);
//     // createBoothTwo(jsonData);
//     // createBoothThree(jsonData);

//   }
//  });

function hideInstructions() {
  $(".text").attr('visible', 'false');
}

setTimeout(hideInstructions, 10000);
