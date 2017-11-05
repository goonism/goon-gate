import React, {
	Component
} from 'react';

import InputSubmit from 'react-input-submit';

import Footer from 'sections/Footer';

import {
	readFile,
	readStream
} from 'utils/FileUtils';

import {
	ipfsNode
} from 'api';

export default class Home extends Component {

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
		//
		console.log(response);

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
		// TODO: @louisgv implement basic Home from Figma design mock.
		// I have implemented IPFS storage with the saveBufferToIPFS
		// function -- we can access the data from it here via React state.

		return(
			<div className="Home">
				<form>
					<input type="file" name="photo" id="photo"
						onChange={({target}) => {
							this.uploadToIPFS(target.files[0])}
						}/>
						<button onClick={(event) => event.preventDefault()}>
							Upload Image
						</button>
					</form>
					LOCAL IMAGE:
					<img style={{width: '30%'}} src={this.state.imageData}/>
					{this.state.returnedFromWrite &&
						<div>
							Yay it did something. Put notification here.
							{JSON.stringify(this.state.returnedFromWrite)}
						</div>
					}

						<InputSubmit placeholder="IPFS HASH" onSubmit={ this.getFromIPFS }/>

						REMOTE IMAGE:
						{this.state.readData &&
							<img style={{width: '30%'}} src={this.state.readData}/>
						}

						<Footer />
					</div>
		);
	}
}
