import createBrowserHistory from "history/createBrowserHistory";
import IPFS from "ipfs";

export const customHistory = createBrowserHistory();

export const repo = "diffy-13234234"

export const ipfsNode = new IPFS({ repo });