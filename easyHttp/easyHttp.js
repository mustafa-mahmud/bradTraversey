function easyHTTP() {
	this.http = new XMLHttpRequest();
}

//http get reques
/* easyHTTP.prototype.get = function (url, callback) {
	let slef = this;
	slef.http.open('GET', url, true);
	slef.http.onload = function () {
		if (slef.http.status === 200) {
			callback(null, slef.http.responseText);
		} else {
			callback('Error ' + self.http.status);
		}
	}
	this.http.send();
} */

//http post request
/* 
easyHTTP.prototype.post = function (url, data, callback) {
	this.http.open('POST', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	self.http.onload = function () {
		callback(null, self.http.responseText);
	}

	this.http.send(JSON.stringify(data));
}
 */

//http put requesquest(update)
/* easyHTTP.prototype.put = function (url, data, callback) {
	this.http.open('PUT', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	self.http.onload = function () {
		callback(null, self.http.responseText);
	}

	this.http.send(JSON.stringify(data));
} */


//http delete request
easyHTTP.prototype.delete = function (url, callback) {
	let slef = this;
	slef.http.open('DELETE', url, true);
	slef.http.onload = function () {
		if (slef.http.status === 200) {
			callback(null, 'Post Deleted');
		} else {
			callback('Error ' + self.http.status);
		}
	}
	this.http.send();
}