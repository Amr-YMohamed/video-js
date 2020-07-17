var  videojsInstance = videojs('my-video');
var videoJsButtonClass = videojs.getComponent('Button');


//Natural language & translate button class
var Nat_trans_ButtonClass = videojs.extend(videoJsButtonClass, {

  constructor: function() {
    videoJsButtonClass.call(this, videojsInstance);
  }, // notice the comma

  handleClick: function(){
    alert("one of lang buttons clicked");
    //show div of langs
  }
});



//Natural language button
var naturalButtonInstance = videojsInstance.controlBar.addChild(new Nat_trans_ButtonClass());
naturalButtonInstance.addClass("vjs-natural");


//Translate language button - No need to define new class as both buttons do the same
var translateButtonInstance = videojsInstance.controlBar.addChild(new Nat_trans_ButtonClass());
translateButtonInstance.addClass("vjs-translate");


//Eye button class class
var Eye_ButtonClass = videojs.extend(videoJsButtonClass, {

    constructor: function() {
      videoJsButtonClass.call(this, videojsInstance);
    }, // notice the comma
  
    handleClick: function(){
      alert("Eye button clicked");
      //draw distinct objects
    }
  });
  
  //Eye button
  var eyeButtonInstance = videojsInstance.controlBar.addChild(new Eye_ButtonClass());
  eyeButtonInstance.addClass("vjs-eye");



  //video onclick event
  videojsInstance.on('click', function(evt) { 
    if (evt.target.tagName === 'VIDEO') {
      alert("the video was clicked");
    }
  });