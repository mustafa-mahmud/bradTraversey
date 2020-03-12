/* 
@version: 3.0.0
@author: Mithu
@license: MIT
*/

class EasyHTTP {
	//Make an HTTP GET Reaquest
	async get(url) {
		const response = await fetch(url);
		const res = await response.json();
		return res;
	}

	//Make an HTTP POST Reaquest
	async post(url, data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const res = await response.json();
		return res;
	}

	//Make an HTTP PUT/UPDATE Reaquest
	async put(url, data) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const res = await response.json();
		return res;
	}

	//Make an HTTP DELETE Reaquest 
	async delete(url) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			}
		});
		const res = await 'Deleted Succeffully!';
		return res;
	}

}