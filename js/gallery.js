$(document).ready(function(){
	let count=0;
	var postCollection = document.querySelectorAll(".post");
	postCollection.forEach(function(item) {
		count++;
		let index = '' ;
		if (count<10) {
			index = "0";
			index = index + count; 
			console.log(index);
		}else{
			index=count;
		}
		item.setAttribute('src', 'img/gallery/gallery'+index+'.jpg');
	});








});