# check-Image-exists-or-404-status-using-javascript
Using this script, you can check either certain image exits or not using native javascript.
Based on the result you can use calback function. 
<h2>uses</h2>
    
```javascript

var imgUrl = 'https://comedymood.com/wp-content/uploads/2017/05/comedymood_logo.png';
checkImgExists(imgUrl, successOnImgExits, failureOnImgExits);

function successOnImgExits(){
	document.body.style.backgroundImage = "url('" + this.src + "')";	
	alert(true     );
}


function failureOnImgExits(){
	console.log('image (' + this.src + ') not found or may error occured in load');
	alert(false);
	// you can take alternate action here.
}

```
