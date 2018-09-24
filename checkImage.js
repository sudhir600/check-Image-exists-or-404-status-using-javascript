// I found this script here (http://bit.ly/2NEEoes) and updated in easy function 
// so that novice developers can also uderstand. 

function checkImgExists (url, success, failure) {
	var errors = {};
    var img = new Image(),
        loaded = false,
        errored = false;

    img.onload = function () {
      if (loaded) {
        return;
      }

      loaded = true;

      if (success && success.call) {
        success.call(img);
      }
    };

    img.onerror = function () {
      if (errored) {
        return;
      }

      errors[url] = errored = true;

      if (failure && failure.call) {
        failure.call(img);
      }
    };

    if (errors[url]) {
      img.onerror.call(img);
      return;
    }
    
    img.src = url;

    if (img.complete) {
      img.onload.call(img);
    }
}

//uses

var imgUrl = 'https://comedymood.com/wp-content/uploads/2017/05/comedymood_logo.png';
checkImgExists(imgUrl, successOnImgExits, failureOnImgExits);

function successOnImgExits(){
	document.body.style.backgroundImage = "url('" + this.src + "')";	
	alert(true);
}


function failureOnImgExits(){
	console.log('image (' + this.src + ') not found or may error occured in load');
	alert(false);
	// you can take alternate action here.
}
