// Read some blob and parse into base64 string
export function readFile(fileBlob, progressCallback) {
	const reader = new FileReader();

	// async/await is internally promises, and to do async await stuff with
	// simply wrap them in a promise :p
	return new Promise(function(resolve, reject) {
		reader.onloadend = ({target}) => {
			resolve(target)
		};

		reader.onprogress = progressCallback;

		reader.onerror = (error) => {
			reject(error);
		};

		reader.readAsDataURL(fileBlob)
	});
};
