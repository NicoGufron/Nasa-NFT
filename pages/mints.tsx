import React, { useEffect } from 'react';
import type { NextPage } from 'next'
import { useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import Link from 'next/link';
import { Alert } from '@mui/material';

let abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "allowListEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "canMint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "deleteAddressFromAllowlist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "inAllowList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxPerWallet", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "quantity", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "mintCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "mintedCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "_addresses", "type": "address[]" }], "name": "multipleWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_status", "type": "bool" }], "name": "setAllowListEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "q", "type": "uint256" }], "name": "setAllowlist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_max", "type": "uint256" }], "name": "setMaxPerWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_paused", "type": "bool" }], "name": "setPaused", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "setPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let contractAddress = "0x8DCf911DA20854BD82c5f9e0a5a7c01BdDC9885e"; //BSC TESTNET

const MintPage: NextPage = () => {

    const initialText = "Connect your wallet";
    const initialMintText = "Take one!"
    const initialTextAlert = "Error";

    const [buttonText, setButtonText] = useState(initialText);
    const [mintText, setMintText] = useState(initialMintText);
    const [walletConnected, setWalletConnected] = useState(false);
    const [mintPrice, setPrice] = useState("");
    const [totalMinted, setTotalMinted] = useState(0);
    const [walletWhitelisted, setWalletWhitelisted] = useState(false);
    const [alertText, setAlertText] = useState(initialTextAlert);
    const [displayAlert, setDisplayAlert] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(0);

    var i = 0;

    async function connectWallet() {

        const provider = new ethers.providers.Web3Provider((window as any).ethereum);

        const { chainId } = await provider.getNetwork();

        setButtonText("Pending...");

        if (chainId != 1) { //jangan lupa diganti jadi chainId != 1
            // alert('Please use the Ethereum network!');
            setAlertText("Please use the Ethereum network!");
            setButtonText("Connect Your Wallet");
            setDisplayAlert(true);
        } else if (chainId === 1) { //jangan lupa diganti jadi chainId == 1
            const accounts = await provider.send("eth_requestAccounts", []);
            setDisplayAlert(false);
            if (accounts.length > 0) {
                // localStorage.setItem("isWalletConnected", "true");
                setWalletConnected(true);
                setButtonText("Wallet Connected");
                checkAll(provider, accounts[0]);
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

        var { chainId } = await provider.getNetwork();

        // Check if the address is in whitelist

        if (chainId == 97) {   //Change it to == 1

            var tempCount;

            await contract.inAllowList(address).then(function (result: boolean) {
                if (result) {
                    setWalletWhitelisted(result);
                }
                else
                    setWalletWhitelisted(false);
            });

            // Check for the price in the contract, and set to setPrice
            await contract.price().then(function (result: any) {
                hex = result._hex;
                tempPrice = BigNumber.from(hex).toString();
                setPrice(tempPrice);
            });

            const tempMintCount = await contract.mintCount(address)
                .then(function (result: any) {
                    return result;
                }
                );

            // How many this address already minted
            const tempMintedCount = await contract.mintedCount(address)
                .then(function (result: any) {
                    return result;
                }
                );

            tempCount = tempMintCount - tempMintedCount;
            setTotalMinted(tempCount);

            if (totalMinted > 1)
                setMintText('Take one!');
            else
                setMintText("You can't take our photos anymore!");

        } else if (chainId != 1) {
            setDisplayAlert(true);
            setAlertText("Please connect to Ethereum network!");
        }
    }

    async function mint() {

        setMintText("Pending...");

        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const gasPrice = provider.getGasPrice();

        var contract = new ethers.Contract(contractAddress, abi, signer);
        

        if (totalMinted > 1) {
            await contract.mint(1, {
                from: accounts[0],
                value: mintPrice,
                gasPrice: gasPrice,
                gasLimit: ethers.utils.hexlify(148906),
                nonce: undefined
            }).then(function (result: any) {

                checkAll(provider, accounts[0]);
                setMintText("Take one!");

            }).catch(function (e: any) {
                setMintText("Take one!");
            });
        } else {
            var random;

            var cantMintText = [
                "Don't be greedy!", "That's enough!", 
                "Whoa, stop!", "Please stop!",
                "You can't do this!", "Oh please no!",
                "For fucks sake, stop!", "OH YES! DON'T STOP!", "AGAIN! PLEASE!",
                "HARDER DADDY!"
            ]

            setMintText("Don't be greedy!");
            setButtonClicked(i += 1); //selalu tambah 1
            if(buttonClicked >= 1) {
                random = Math.floor(i + Math.random() * (cantMintText.length - i));
                console.log(random);
                for(var j = 0; j < cantMintText.length; j++){
                    setMintText(cantMintText[random]);
                }
            }
        }
    }

    useEffect(() => {

    }, []);

    const backText = "<<< Back to Home";

    return (
        <>
            <div className='alert-section' style={{ display: displayAlert ? "block" : "none" }}>
                <Alert severity='error'>
                    {alertText}
                </Alert>
            </div>
            <div className='head-section'>
                <div className="nav-section">
                    <ul className="nav-mint-section">
                        <li><Link href="/">{backText}</Link></li>
                        <li><button className="nasa-button" onClick={connectWallet}>{buttonText}</button></li>
                    </ul>
                </div>
                <div className='wrapper'>

                    <div className="mint-section" style={{ display: walletConnected ? 'none' : 'flex' }}>
                        <h1> Please connect your wallet first! </h1>
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
                        <button className="nasa-button" style={{ display: walletWhitelisted ? "none" : "initial" }}>{walletWhitelisted ? "" : "Shit! Not whitelisted!"}</button>
                        <button className="nasa-button" onClick={mint} style={{ display: walletWhitelisted ? "initial" : "none" }}>{mintText}</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MintPage;

