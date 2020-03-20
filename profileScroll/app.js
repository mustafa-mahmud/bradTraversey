const data = [{
		name: 'John Doe',
		age: 32,
		gender: 'male',
		lookingfor: 'female',
		location: 'Dhaka',
		image: 'https://randomuser.me/api/portraits/men/82.jpg'
	},
	{
		name: 'Jen Smith',
		age: 22,
		gender: 'female',
		lookingfor: 'male',
		location: 'Ctg',
		image: 'https://randomuser.me/api/portraits/women/82.jpg'
	},
	{
		name: 'Bob Doe',
		age: 42,
		gender: 'male',
		lookingfor: 'female',
		location: 'Khulna',
		image: 'https://randomuser.me/api/portraits/men/83.jpg'
	}
]

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);

//first time call
nextProfile();

//next profile display
function nextProfile() {
	const imageDisplay = document.getElementById('imageDisplay');
	const currentProfile = profiles.next().value;

	if (currentProfile !== undefined) {
		imageDisplay.src = `${currentProfile.image}`;

		document.getElementById('profileDisplay').innerHTML = `
		<ul class='list-group'>
			<li class='list-group-item'>
				Name: ${currentProfile.name}
			</li>
			<li class='list-group-item'>
				Age: ${currentProfile.age}
			</li>
			<li class='list-group-item'>
				Location: ${currentProfile.location  }
			</li>
			<li class='list-group-item'>
				Gender: ${currentProfile.gender}
			</li>
			<li class='list-group-item'>
				Looking: ${currentProfile.lookingfor}
			</li>
		</ul>
		`;
	} else {
		window.location.reload();
	}

}

//Profile Iterator
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function () {
			return nextIndex < profiles.length ? {
				value: profiles[nextIndex++],
				done: false
			} : {
				done: true
			}
		}
	};
}