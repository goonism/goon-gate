import React, {
	Component
} from 'react';

import InputSubmit from 'react-input-submit';

import {
	readFile,
	readStream
} from 'utils/FileUtils';

import {
	ipfsNode
} from 'api';

export default class ImageUploader extends Component {

	constructor() {
		super();
		this.state = {
			returnedFromWrite: null,
			imageData: null
		};
	}

	uploadToIPFS = async (fileBlob) => {
		if(!ipfsNode.isOnline()) return;

		const base64Data = await readFile(fileBlob);

		const buffer = Buffer.from(base64Data.result);

		const response = await ipfsNode.files.add([buffer]);

		this.setState({
			imageData: base64Data.result,
			returnedFromWrite: response
		});
	}

	getFromIPFS = async (hash) => {
		if(!ipfsNode.isOnline()) return;

		const response = await ipfsNode.files.cat(hash);

		const data = await readStream(response);

		this.setState({
			readData: data
		});
	}

	render() {
		return(
			<div className="ImageUploader">
				<form>
					<input type="file" name="photo" id="photo"
						onChange={({target}) => {
							this.uploadToIPFS(target.files[0])}
						}/>
						<button onClick={(event) => event.preventDefault()}>
							Upload Image
						</button>
					</form>

					<h2>
						LOCAL IMAGE:
					</h2>

					<img style={{width: '30%'}} src={this.state.imageData} alt="Local"/>
					{this.state.returnedFromWrite &&
						<div>
							Yay it did something. Put notification here.
							{JSON.stringify(this.state.returnedFromWrite)}
						</div>
					}

					<InputSubmit placeholder="IPFS HASH" onSubmit={ this.getFromIPFS }/>
					<h2>
						REMOTE IMAGE:
					</h2>
					{this.state.readData &&
						<img style={{width: '30%'}} src={this.state.readData} alt="Remote"/>
					}
				</div>
			);
		}
	}
