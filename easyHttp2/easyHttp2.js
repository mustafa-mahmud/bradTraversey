/* 
@version: 2.0.0
@author: Mithu
@license: MIT
*/

class EasyHTTP {
	//Make an HTTP GET Reaquest
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	//Make an HTTP POST Reaquest
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(data)
				})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	//Make an HTTP PUT/UPDATE Reaquest
	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
					method: 'PUT',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify(data)
				})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}


	//Make an HTTP DELETE Reaquest 
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
					method: 'DELETE',
					headers: {
						'Content-type': 'application/json'
					}
				})
				.then(res => res.json())
				.then(() => resolve('Deleted Successfully!'))
				.catch(err => reject(err));
		});
	}

}