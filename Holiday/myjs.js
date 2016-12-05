var imageArray = [
	"http://sunsounds.org/sites/default/files/field/image/2015/10/happyhalloween%5B1%5D.jpg",
	"http://plusquotes.com/images/quotes-img/halloween-02.jpg",
	"http://plusquotes.com/images/quotes-img/o-HALLOWEEN-facebook.jpg",
    "http://media.salon.com/2015/10/pumpkin-dance.jpg",
	"http://animations.fg-a.com/halloween-bgs/halloween-scary-scene.jpg"
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

var name = prompt("What is your name?");
var outputString = "Happy Halloween, " + name + 
"!";
$("h1").html(outputString);


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Person');
data.addColumn('number', 'Treats');
data.addRows([
  ['Ethan', 52],
  ['Matthew', 36],
  ['Elizabeth', 81],
  ['Ruffles the Dog', 5],
  ['Neal', 44]
]);

var chartWidth = $(window).width()*0.35;

// Set chart options
var options = {
	'title':'Treats from Trick-or-Treating',
    'width':chartWidth,
    'height':300,
    'backgroundColor': '#ffffff',
    'colors': ['#9600bc'],
    'fontName': 'Roboto'
};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
}
