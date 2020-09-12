//accessing neccessary dom elements

var button = document.querySelectorAll('.tab-links');
var tabContents = document.querySelectorAll('.tab-contents .tab_all')


button.forEach(function (but) {
	but.addEventListener('click', function () {
		button.forEach(function (fun) {
			fun.classList.remove('tab_active');
		})
		but.classList.add('tab_active');
		console.log(but.classList);
		var currentButton = but.classList[0];
		// console.log(currentButton);
		tabContents.forEach(function (fun) {
			if (fun.classList[0] == currentButton) {
				fun.classList.remove("hideme");
			} else {
				if (fun.classList[1] == currentButton) {
					fun.classList.remove("hideme");
				} else {
					fun.classList.add("hideme");
				}
			}

		})

	})
});