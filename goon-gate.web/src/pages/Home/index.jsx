import React, { Component } from 'react';
import Footer from 'sections/Footer';
import ipfsNode from '../../index.js';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      returnedFromWrite: null,
      isDoneUploading: false,
    };
  }

  uploadToIPFS = async (fileToUpload) => {
    if(ipfsNode.isOnline()) {
      console.log("up");
      // const buf = Buffer.from(fileToUpload);
      const result = await ipfsNode.files.add(fileToUpload);
      /*
      console.log(result);
      result.forEach(function(file) { console.log('successfully stored', file.Hash); }); 
      this.setState({
        ...this.state,
        returnedFromWrite: result,
        isDoneUploading: true
      });
      */
    }
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
      const fileInput = <input type="file" name="photo" id="photo" onChange={(event) => { console.log(event); this.uploadToIPFS(event.target.files[0])} }/>;
    return (
      <div className="Home">
        <form>
          {fileInput}
          <button onClick={(event) => event.preventDefault()}>
              Upload Image 
          </button>
        </form>
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
