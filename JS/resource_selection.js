// Simulates resource mapping
// Every resource is stored as an object with attributes ranking its difficulty
// sort through resources based on age
// push object to array if difficulty matches

// array of filtered resources
var result = [];
var filteredResult = [];
var companyList = [];
var interestList = [];
var categories = [];

// Role model object constructor
function roleModel(name, summary, area, Url) {
	this.name = name;
	this.summary = summary;
	this.area = area;
	this.Url = Url;
}

// full list of role models
var roleModels = [ new roleModel('Marissa Mayer', 'Marissa is the CEO of Yahoo', 'Science', 'Url'),
new roleModel('Hilary Mason', 'Hilary is the Chief Engineer at Bit.ly', 'Math', 'Url'),
new roleModel('Bla', 'Bla is the Chief Technology Officer at Rent the Runway', 'Fashion', 'Url'),
new roleModel('Bla', 'Bla is the bla at food company', 'Food', 'Url')];
// Resource object constructor
function Resource(name, summary, Url, difficulty, learningStyle) {
	this.name = name;
	this.summary = summary;
	this.Url = Url;
	this.level = difficulty;
	this.learningStyle = learningStyle;
}

// full list of resources
var resources = [ new Resource('Codeacademy', 'teaches you with tutorials', 'https://www.codecademy.com/', 3, ['Reading']),
new Resource('Coursera', 'Universities upload lessons', 'https://www.coursera.com', 4, ['Video', 'Friends']),
new Resource('CodeHS: Karel The Dog', 'Teach a virtual dog how to move and pick up tennis balls while learning the basics of code', 'http://hoc.codehs.com/hoc_editor.html#course=16#module=17#item=1', 3, ['Video', 'Games']),
new Resource('Mozilla Thimble', 'Remix a "Keep Calm and Carry On" poster', 'https://thimble.mozilla.org', 3, ['Reading', 'Friends']), 
new Resource('Code Combat', 'Defeat ogres to learn Python or JavaScript in this epic programming game', 'https://codecombat.com/play', 4, ['Games', 'Friends']),
new Resource('Google Made with Code', 'Mix your own music', 'https://www.madewithcode.com/projects/music', 3, ['Games', 'Friends']),
new Resource('Make Academy', 'Create a Pokémon-inspired action game and write code in Swift, used for iOS apps', 'https://www.makeschool.com/build-an-iphone-game-in-your-browser', 3, ['Video', 'Friends']),
new Resource('Code.org Studio', '', 'https://studio.code.org', 3, ['Games', 'Friends']),
new Resource('Make Magazine', '', 'http://makezine.com/category/technology/?post_type=projects', 3, ['Video', 'Friends']),
new Resource('Scratch', '', 'https://scratch.mit.edu', 3, ['Video', 'Friends']),
new Resource('MakeQuest', '', 'http://code.globaloria.com', 3, ['Video', 'Friends']),
new Resource('Technovation Challenge', 'Become a technology entrepreneur and develop a mobile app prototype', 'http://www.technovationchallenge.org/get-started/', 3, ['Video', 'Friends']),
new Resource('Khan Academy', 'Create drawings and animations with JavaScript', 'https://www.khanacademy.org/computing/computer-programming/programming', 2, ['Video', 'Games']),
new Resource('Twine', 'A literal choose-your-own-adventure story builder', 'http://www.auntiepixelante.com/twine/', 2, ['Video', 'Games']),
new Resource('Gamestar Mechanic', 'Learn game design and how to design your own video games', 'http://gamestarmechanic.com', 2, ['Video', 'Games']),
new Resource('Girl Develop It', 'Slides on basic web design, programming concepts', 'https://www.girldevelopit.com/materials', 2, ['Video', 'Games']),
new Resource('Blockly Games', '', 'https://blockly-games.appspot.com/?lang=en', 2, ['Video', 'Games']),
new Resource('Code Newbie', '', 'http://www.codenewbie.org/podcast', 2, ['Video', 'Games']),
new Resource('Lady Loves Code', '', 'http://www.ladylovescode.com/category/podcast/', 2, ['Video', 'Games']),
new Resource('TedTalks Technology', '', 'https://itunes.apple.com/gb/podcast/tedtalks-technology/id470624027?mt=2', 2, ['Video', 'Games']),
new Resource('Note to Self', '', 'http://www.wnyc.org/shows/notetoself/episodes/2', 2, ['Video', 'Games'])
];

// Company object constructor
function Company(name, Url, category, summary) {
	this.name = name;
	this.Url = Url;
	this.category = category;
	this.summary = summary;
}

// full list of companies
var companies = [new Company('Fitbit', 'www.fitbit.com', 'Sports', 'makes tracking devices that record your heartrate, steps taken etc.'),
new Company('Airbnb', 'www.airbnb.com', 'Travel', 'lets people host guests in their houses and apartments'),
new Company('Rent the Runway', 'www.renttherunway.com', 'Fashion', 'lets users rent designer dresses for a fraction of the cost'),
new Company('Spotify', 'www.spotify.com', 'Music', 'hosts a large music library and charges users a small fee every month'),
new Company('Doordash', 'www.doordash.com', 'Food', 'delivers food to consumers from a wide range of restaurants'),
new Company('Pinterest', 'www.pinterest.com', 'Art', 'shows pins ranging from fashion trends to photography')];

function checkEqual (category, array) {
	for (var k = 0; k < array.length; k++) {
		if (category == array[k]) {
			return false;
		}
	}
	return true;
}

(function getInterest() {
	function sortArt() {
		if (checkEqual('Art', interestList)) {
			interestList.push('Art');
		}
	}
	function sortSports() {
		if (checkEqual('Sports', interestList)) {
			interestList.push('Sports');
		}
	}
	function sortTravel() {
		if (checkEqual('Travel', interestList)) {
			interestList.push('Travel');
		}
	}
	function sortScience() {
		if (checkEqual('Science', interestList)) {
			interestList.push('Science');
		}
	}
	function sortMusic() {
		if (checkEqual('Music', interestList)) {
			interestList.push('Music');
		}
	}
	function sortMath() {
		if (checkEqual('Math', interestList)) {
			interestList.push('Math');
		}
	}
	function sortGames() {
		if (checkEqual('Games', interestList)) {
			interestList.push('Games');
		}
	}
	function sortFashion() {
		if (checkEqual('Fashion', interestList)) {
			interestList.push('Fashion');
		}
	}
	function sortFood() {
		if (checkEqual('Food', interestList)) {
			interestList.push('Food');
		}
	}

	document.getElementById('chooseArt').addEventListener("click", sortArt);
	document.getElementById('chooseSports').addEventListener("click", sortSports);
	document.getElementById('chooseTravel').addEventListener("click", sortTravel);
	document.getElementById('chooseScience').addEventListener("click", sortScience);
	document.getElementById('chooseMusic').addEventListener("click", sortMusic);
	document.getElementById('chooseMath').addEventListener("click", sortMath);
	document.getElementById('chooseGames').addEventListener("click", sortGames);
	document.getElementById('chooseFashion').addEventListener("click", sortFashion);
	document.getElementById('chooseFood').addEventListener("click", sortFood);

	//array of user interests
	return interestList;
})();

// sorts user interest
// categories input is array of user selected interests eg. Art, Science etc.
// iterates through list of companies, pushing to companyList array if there's a match
// for companies with multiple categories, checks that company isn't already in companyList array
function sortInterest (categories) {
	for (var j = 0; j < categories.length; j++) {
		for (var i = 0; i < companies.length; i++) {
			if (categories[j] == companies[i].category) {
				companyList.push(companies[i]);
			}
		}
	}
	return companyList;
};

(function showInterest() {
	document.getElementById("grandResults2").innerHTML = "";
	  function sortInterests() {
	  	document.getElementById("grandResults2").innerHTML = "";

	  	(function() {
	  		return sortInterest(interestList);
	  	})();

	  	for (var i = 0; i < companyList.length; i++) {
	 	
	 	document.getElementById("grandResults2").innerHTML += "<a href=" + companyList[i].Url + ">" + companyList[i].name + "</a>: " + companyList[i].summary + "<br />";
	 }
	}
document.getElementById("finalPrompt").addEventListener("click", sortInterests);
companyList = [];
document.getElementById("grandResults2").innerHTML = "";
})();

// function takes in user selections
// pushes to arrays of links
function sortLevel (level) {
	result = [];
	for (var i = 0; i < resources.length; i++) {
		if (level == 'middleSchool' && resources[i].level == 2) {
			//result = [];
			result.push(resources[i]);
		}
		if (level == 'highSchool' && resources[i].level == 3) {
			result.push(resources[i]);
		}
		if (level == 'college' && resources[i].level == 4) {
			//result = [];
			result.push(resources[i]);
		}
	}
	return result;
}

(function getLevel() {
	result = [];
	function sortMS() {
		return sortLevel('middleSchool');
	}
	function sortHS() {
		//result = [];
		return sortLevel('highSchool');
	}
	function sortCollege() {
		//result = [];
		return sortLevel('college');
	}
	document.getElementById("chooseMS").addEventListener("click", sortMS);
	document.getElementById("chooseHS").addEventListener("click", sortHS);
	document.getElementById("chooseCollege").addEventListener("click", sortCollege);

	//result = [];

})();

(function getLearningStyle() {
	function sortVideo() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Video') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	function sortReading() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Reading') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	function sortFriends() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Friends') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	function sortGames() {
		for (var i = 0; i < result.length; i++) {
			for (var j = 0; j < result[i].learningStyle.length; j++) {
				if (result[i].learningStyle[j] == 'Games') {
					if (checkEqual(result[i], filteredResult)) {
						filteredResult.push(result[i]);
					}
				}
			}
		}
		return filteredResult;
	}
	document.getElementById("videos").addEventListener("click", sortVideo);
	document.getElementById("reading").addEventListener("click", sortReading);
	document.getElementById("friends").addEventListener("click", sortFriends);
	document.getElementById("gaming").addEventListener("click", sortGames);
})();

(function showResults() {
	function sortResults() {
		document.getElementById("grandResults1").innerHTML = "";
		for (var i = 0; i < filteredResult.length; i++) {
			document.getElementById("grandResults1").innerHTML += "<a href=" + filteredResult[i].Url + ">" + filteredResult[i].name + "</a>: " + filteredResult[i].summary + " <br />";
		}
	}

	document.getElementById("finalPrompt").addEventListener("click", sortResults);
	filteredResult = [];
})();

(function showRoleModel() {
	function sortWomen() {
		document.getElementById("grandResults3").innerHTML = "";
		for (var j = 0; j < interestList.length; j++) {
			for (var i = 0; i < roleModels.length; i++) {
				if (interestList[j] == roleModels[i].area) {
					document.getElementById("grandResults3").innerHTML = "Your Role Model is " + roleModels[i].name;
					return;
				}
			}
		}
	}
	document.getElementByIdById("finalPrompt").addEventListener("click", sortWomen);
})();

// function testfn() {
// 	return interestList.push('Travel');
// }

// document.getElementById("chooseTravel").addEventListener("click", testfn);

// function resourceList(age, subject, goal, style){

// }