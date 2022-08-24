import React, { useEffect } from 'react';
import type { NextPage } from 'next'
import { useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import Link from 'next/link';

let abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "allowListEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "canMint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "deleteAddressFromAllowlist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "inAllowList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxPerWallet", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "mintCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "mintedCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addresses", "type": "address[]" }], "name": "multipleWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_status", "type": "bool" }], "name": "setAllowListEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "q", "type": "uint256" }], "name": "setAllowlist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_max", "type": "uint256" }], "name": "setMaxPerWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_paused", "type": "bool" }], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let contractAddress = "0x8DCf911DA20854BD82c5f9e0a5a7c01BdDC9885e";

const MintPage: NextPage = () => {

    const initialText = "Connect your wallet";
    const initialMintText = "Take one!"
    const [buttonText, setButtonText] = useState(initialText);
    const [mintText, setMintText] = useState(initialMintText);
    const [walletConnected, setWalletConnected] = useState(false);
    const [mintPrice, setPrice] = useState("");
    const [mintCount, setMintCount] = useState(0);
    const [mintedCount, setMintedCount] = useState(0);
    const [totalMinted, setTotalMinted] = useState(0);
    const [walletWhitelisted, setWalletWhitelisted] = useState(false);

    async function connectWallet() {

        const provider = new ethers.providers.Web3Provider((window as any).ethereum);

        const { chainId } = await provider.getNetwork();

        setButtonText("Pending...");

        if (chainId == 1) { //jangan lupa diganti jadi chainId != 1
            alert("Please use the Ethereum network!");
        } else if (chainId != 1) { //jangan lupa diganti jadi chainId == 1
            const accounts = await provider.send("eth_requestAccounts", []);
            if (accounts.length > 0) {
                // localStorage.setItem("isWalletConnected", "true");
                setWalletConnected(true);
                setButtonText("Wallet Connected");
                checkAll(provider, accounts[0]);
                setTotalMinted(mintCount - mintedCount); 
            } else {
                alert("No accounts detected");
                setWalletConnected(false);
            }
        }
    }

    async function checkAll(provider: any, address: any) {

        var contract = new ethers.Contract(contractAddress, abi, provider);

        var tempPrice;
        var hex;

        // Check if the address is in whitelist
        await contract.inAllowList(address).then(function(result: any) {
            if(result)
                setWalletWhitelisted(result);
            else
                setWalletWhitelisted(false);
        });

        // Check for the price in the contract, and set to setPrice
        await contract.price().then(function (result: any) {
            hex = result._hex;
            tempPrice = BigNumber.from(hex).toString();
            setPrice(tempPrice);
        });

        // TOTAL MINTED
        var tempMintCount;
        var tempMintedCount;

        // How many this address can mint
        await contract.mintCount(address).then(function (result: any) {
            tempMintCount = BigNumber.from(result._hex).toNumber();
            setMintCount(tempMintCount);
        });

        // How many this address already minted
        await contract.mintedCount(address).then(function (result: any) {
            tempMintedCount = BigNumber.from(result._hex).toNumber();
            setMintedCount(tempMintedCount);
        });

        var tempTotalMinted = mintCount - mintedCount;

        console.log(tempTotalMinted);
    }

    async function mint() {

        setMintText("Pending...");

        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const gasPrice = provider.getGasPrice();

        var contract = new ethers.Contract(contractAddress, abi, signer);

        await contract.mint(1, {
            from: accounts[0],
            value: mintPrice,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(148906),
            nonce: undefined
        }).then(function (result: any) {

            checkAll(provider, accounts[0]);
            var tempTotalMinted = mintCount - mintedCount;
            setTotalMinted(tempTotalMinted);
            setMintText("Take one!");

        }).catch(function (e: any) {
            setMintText("Take one!");
        });
    }

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (localStorage?.getItem('isWalletConnected') === 'true') {
                try {
                    connectWallet();
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
        connectWalletOnPageLoad();
    }, []);

    return (
        <>
            <div className='head-section'>
                <div className="nav-section">
                    <ul className="nav-mint-section">
                        <li><Link href="/">Back to home</Link></li>
                        <li><button className="nasa-button" onClick={connectWallet}>{buttonText}</button></li>
                    </ul>
                </div>
                <div className="mint-section" style={{ display: walletConnected ? 'none' : 'flex' }}>
                    <h1>Connect your wallet first!</h1>
                </div>
                <div className="mint-section" style={{ display: walletConnected ? 'flex' : 'none' }}>
                    <h1>GET OUR SELFIE PHOTOS HERE!</h1>
                    <h4>Max: 2 Photos / Wallet</h4>
                    <div className="information-section">
                        <div className="first-box">
                            <h2>Price per photo:</h2>
                            <h3>0.02 Ξ</h3>
                        </div>
                        <div className="second-box">
                            <h2>Max supply:</h2>
                            <h3>3,456</h3>
                        </div>
                    </div>
                    <h4>You can only take {totalMinted > 1 ? totalMinted + " photos" : totalMinted + " photo"} </h4>
                    <button className="nasa-button" style={{display: walletWhitelisted ? "none" : "initial"}}>{walletWhitelisted ? "" : "Shit! Not whitelisted!"}</button>
                    <button className="nasa-button" onClick={mint} style={{display: walletWhitelisted ? "initial" : "none"}}>{mintText}</button>
                </div>
            </div>
        </>
    );
}

export default MintPage;

