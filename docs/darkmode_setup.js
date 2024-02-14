/*

site is dark-mode-first
instead of a white flash before loading the dark mode styles, this looks like 
a transition screen (kinda)

*/

window.onload = function() {
	let bDarkModeUser = true;

	const sLocalName = "dark_mode_user";
	const el = document.querySelector("label[for=dark]");
	const elCheck = document.getElementById("dark");

	if (window.localStorage.getItem(sLocalName)) {
		bDarkModeUser = window.localStorage.getItem(sLocalName) == "true" ? true : false;
	}
    else {
        window.localStorage.setItem(sLocalName, "true");
    }

    if (!bDarkModeUser && elCheck.checked) {
    	elCheck.click();
    }

    el.addEventListener("click", function() {
    	bDarkModeUser = !bDarkModeUser;
    	window.localStorage.setItem(sLocalName, bDarkModeUser.toString());
    });
}