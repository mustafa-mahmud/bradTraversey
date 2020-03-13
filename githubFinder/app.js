//init 'Github' from github.js
const github = new Github;

//init 'UI' from ui.js
const ui = new UI;

//search user
const searchUser = document.getElementById('searchUser');

//event listner for get input value
searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value;

	if (userText !== '') {
		//make http call
		github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'Not Found') {
					//show alert
					ui.showAlert('User not found', 'alert alert-danger');
				} else {
					//show profile
					ui.showProfile(data.profile);
					//show repos
					ui.showRepos(data.repos);
				}
			})
	} else {
		//clear profile
		ui.clearProfile();
	}
})