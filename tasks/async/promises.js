const {
	getDogs,
	getCats,
	getBirds,
	firstPromise,
	secondPromise
} = require("./utils/utilPromises");

/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
	return Promise.resolve('Resolved!');
}

/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
	return Promise.reject('Rejected!');
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 */

function fullPromise(param) { //to-do https://learn.javascript.ru/promise
	return new Promise((resolve, reject) => (param === true) ? resolve("Resolved!") : reject("Rejected!")); //зачем тогда resolve / reject если засунули всё в обычный if else?
}

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise()
 * from the './utils/utilPromises' file) 
 * and store the result to the
 * variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function
 */
let chainingResult = '';

async function promisesChaining() {
	return firstPromise()
		.then(function (result) {
			chainingResult = chainingResult + result;
			return secondPromise();
		})
		.then(function (result) {
			return chainingResult = chainingResult + " " + result;
		})
}

/**
 * Task-5: Implement a function getAnimals() that will return the result of
 * 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * getAnimals() -> ["dogs", "cats", "birds"]
 * @returns {Promise<"["dogs", "cats", "birds"]">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

async function getAnimals() {
	return Promise.all([getDogs(), getCats(), getBirds()]);
}

module.exports = {
	promiseResolve,
	promiseReject,
	fullPromise,
	getAnimals,
	promisesChaining
};