class Github {
	constructor() {
		this.clientID = 'bb25e13009842449c6bd';
		this.clientSecret = '98f0db6b72bb46e06961cc1f2f4714dec3';
		this.reposCount = 5;
		this.reposSort = 'created:asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);

		const profile = await profileResponse.json()
		const repos = await repoResponse.json()

		return {
			profile,
			repos
		}
	}
}