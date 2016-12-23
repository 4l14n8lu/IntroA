var imageArray = [
	"http://www.pixelstalk.net/wp-content/uploads/2016/11/Merry-Christmas-hd-Wallpapers-Images-Free-Download.jpg",
	"http://www.merrychristmasphotos.com/wp-content/uploads/2016/11/Christmas-Images-Free-Download.jpg",
	"http://www.merrychristmasphotos.com/wp-content/uploads/2016/11/Merry-Christmas-Pictures.jpg",
    "http://www.birdstone.org/wp-content/uploads/2016/09/merry-christmas.jpg",
	"http://www.merrychristmasphotos.com/wp-content/uploads/2016/11/Happy-Christmas-Pictures.jpg"
];
var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked!
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});