import React, {
	Component
} from 'react';

import Footer from 'sections/Footer';

import {readFile} from 'utils/FileUtils';

import {ipfsNode} from 'api';

export default class Home extends Component {

	constructor() {
		super();
		this.state = {
			returnedFromWrite: null,
			isDoneUploading: false,
			imageData: null
		};
	}

	uploadToIPFS = async (fileBlob) => {
		if (!ipfsNode.isOnline()) return;

		const base64Data = await readFile(fileBlob);

		this.setState({
		  imageData: base64Data.result
		});

		const buffer = Buffer.from(base64Data.result);

		const response = await ipfsNode.files.add([buffer]);
    //
		console.log(response);
		/*
		result.forEach(function(file) { console.log('successfully stored', file.Hash); });
		this.setState({
		  ...this.state,
		  returnedFromWrite: result,
		  isDoneUploading: true
		});
		*/
	}

	/*
  startUploadFlow(fileInput) {
    console.log(fileInput);
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
      this.uploadToIPFS(reader.result);
    };
    reader.readAsArrayBuffer(fileInput)
  }
  */

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
				<img src={this.state.imageData}/>
        {this.state.isDoneUploading &&
            <div>
              Yay it did something. Put notification here.
              {JSON.stringify(this.state.returnedFromWrite)}
            </div>}
        <Footer />
      </div>
		);
	}
}
