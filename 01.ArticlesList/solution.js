// Condition of the task:

// In this problem, you should create a JS functionality which creates articles and appends them into some article section.

// Constraints:
// •	Title value from the title input should be a heading 3 element <h3>
// •	Content text from the textarea element should be a paragraph <p>
// •	Both new created elements (h3 and p) should be appended to a new article element <article>
// •	The current article element should be appended to the section which has an id articles (#articles)
// •	You should create new article element only if title and content are not empty
// •	After the button is pressed you must clear the title value and text value


function createArticle() {
	let title = document.getElementById("createTitle").value;
	let content = document.getElementById("createContent").value;

	let createTitleH3 = document.createElement("h3");
	createTitleH3.innerHTML = title;
	let createContentP = document.createElement("p");
	createContentP.innerHTML = content; 

	if(title !== '' && content !=='') {
		let newArticle = document.createElement("article");
		newArticle.appendChild(createTitleH3);
		newArticle.appendChild(createContentP);
		document.getElementById("articles").appendChild(newArticle);
	}

	document.getElementById("createTitle").value = "";
	document.getElementById("createContent").value = ""; 
}