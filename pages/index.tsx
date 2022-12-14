import type { NextPage } from 'next'
import Marquee from "react-fast-marquee";
import Head from "next/head";
import Navbar from '../components/Navbar';
import Fab from '@mui/material/Fab';
import TwitterIcon from '@mui/icons-material/Twitter';
import Telegram from '@mui/icons-material/Telegram';
import { useState, useEffect } from 'react';
import FAQ from '../components/FAQ';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box, Container } from '@mui/system';
import { FaCoins, FaRocket } from "react-icons/fa";
import { GiLockedChest } from "react-icons/gi";
import 'animate.css';

const Home: NextPage = () => {

  function toTheTop() {
    window.scrollTo(0, 0);
  }

  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(0);
  const [progress, setProgress] = useState(0);

  var i = 0;
  var limit = 99;

  useEffect(() => {
    setLoading(true);
    // setLoading(false);

    // For loading progress bar with numbers
    setInterval(() => {
      if (i <= limit) {
        i += 1;
        setProgress(i);
        setWidth(i);
      } else {
        setTimeout(function (){
          setLoading(false);
        }, 1000);

      }
    }, 100)
  }, []);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>N.A.S.A | Not Another Shitty Alien</title>
        <link rel="canonical" href="https://nasanft.space"></link>
        <meta name='description' content="N.A.S.A is a showcase of NFTs that will go live on Ethereum!" />
        <meta property='og:title' content="N.A.S.A | Not Another Shitty Alien" />
        <meta property='og:site_name' content="N.A.S.A | Not Another Shitty Alien" />
        <meta property='twitter:site' content="@ETH_NASANFT" />
        <meta property='twitter:creator' content="@ETH_NASANFT" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      {
        loading ?
          <div className='loading-screen animate__animated animate__fadeOut animate__delay-5s' >
            <div className='progress-bar' style={{ width: width * 3 }}>{progress}%</div>
            <div className='titles'>
              <h1>Please wait, Shitty Humans!</h1>
            </div>
          </div>
          :
          <>
            <Navbar></Navbar>
            <div className='first-section'>
              <h1 className='main-title'>N.A.S.A</h1>
              <h4 className='sub-title'>Not Another Shitty Alien</h4>
              <div className='hero-buttons'>
                <button className='hero-button telegram'>Join Telegram</button>
                <button className='hero-button ca'>Contract Address</button>
                <button className='hero-button buy'>Buy Token</button>
                <button className='hero-button chart'>Chart</button>
              </div>

              <div className='fab-buttons'>
                {/* <a target="_blank" rel='noreferrer' href="https://discord.gg/ZQp5Tg4wjp"><Fab><img src="images/discord.svg"></img></Fab></a> */}
                <a target="_blank" rel='noreferrer' href=""><Fab><TwitterIcon></TwitterIcon></Fab></a>
                <a target="_blank" rel='noreferrer' href=""><Fab><Telegram></Telegram></Fab></a>
              </div>
            </div>
            <div className="marquee">
              <Marquee gradient={false} style={{ backgroundColor: "rgb(14, 159, 8)", color: "#fff" }}>
                <p className='marquee-text'>NFT Collection - Coming Soon &nbsp;</p>
                <p className='marquee-text'>NFT Collection - Coming Soon &nbsp;</p>
                <p className='marquee-text'>NFT Collection - Coming Soon &nbsp;</p>
                <p className='marquee-text'>NFT Collection - Coming Soon &nbsp;</p>
              </Marquee>
            </div>
            <div className='third-section'>
              <div className='third-section-image'>
                <img className='banner-image' alt="Banner Image" src="images/preview-1.webp"></img>
              </div>
              <div className='collection-section' id="collection">
                <h1 className='main-title'>Collection</h1>
                <div className='content-section'>
                  <p>N.A.S.A is a collection of NFT&apos;s showcasing a wide variety of (definitely not shitty) alien characters equipped with selection of different traits and attributes. Entirely hand drawn, these aliens are depicted invading and taking over Earth as we know it!</p>
                </div>
              </div>
            </div>
            <div className='second-section'>
              <div className='about-container' id="about">
                <h1 className='main-title'>ABOUT</h1>
                <div className='about-section'>
                  <p className='about-text'>
                    We come from the Tadpole galaxy, and unlike other disgusting, ugly, big headed aliens, we are N.A.S.A: Not Another Shitty Alien!
                  </p><br></br>
                  <p className='about-text'>We are planning to invade earth through your worlds most famous blockchain, Ethereum. <br></br> Vitalik gave us a heads up. Don&apos;t you know? He&apos;s part of N.A.S.A too!</p>
                  <br></br>
                  <p className='about-text'>We are offering our interstellar currency <b>&apos;$NASA&apos;</b> with liquidity locked and renounced contract. Low tax & LOW max transaction. No shitty whales will control the chart.</p>
                  <div className='multiple-marquees'>
                    <Marquee gradient={false} direction={"right"}>
                      <img className='marquee-pictures' alt="Image 1" src="/images/1.png"></img>
                      <img className='marquee-pictures' alt="Image 2" src="/images/2.png"></img>
                      <img className='marquee-pictures' alt="Image 3" src="/images/3.png"></img>
                      <img className='marquee-pictures' alt="Image 4" src="/images/4.png"></img>
                      <img className='marquee-pictures' alt="Image 5" src="/images/5.png"></img>
                      <img className='marquee-pictures' alt="Image 6" src="/images/6.png"></img>
                    </Marquee>

                    <Marquee gradient={false} direction={"left"}>
                      <img className='marquee-pictures' alt="Image 7" src="/images/7.png"></img>
                      <img className='marquee-pictures' alt="Image 8" src="/images/8.png"></img>
                      <img className='marquee-pictures' alt="Image 9" src="/images/9.png"></img>
                      <img className='marquee-pictures' alt="Image 10" src="/images/10.png"></img>
                      <img className='marquee-pictures' alt="Image 11" src="/images/11.png"></img>
                      <img className='marquee-pictures' alt="Image 12" src="/images/12.png"></img>
                    </Marquee>

                    <Marquee gradient={false} direction={"right"}>
                      <img className='marquee-pictures' alt="Image 13" src="/images/13.png"></img>
                      <img className='marquee-pictures' alt="Image 14" src="/images/14.png"></img>
                      <img className='marquee-pictures' alt="Image 15" src="/images/15.png"></img>
                      <img className='marquee-pictures' alt="Image 16" src="/images/16.png"></img>
                      <img className='marquee-pictures' alt="Image 17" src="/images/17.png"></img>
                      <img className='marquee-pictures' alt="Image 18" src="/images/18.png"></img>
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>

            <div className='offers-section'>
              <Container>
                <h1 className='main-title'> Features</h1>
                <Box className='boxes' display={"flex"} justifyContent={"space-around"} mb={7}>
                  <Box className='box' display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"} sx={{
                    marginBottom: "20px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    backgroundColor: 'black',
                    borderRadius: '25px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#01BAEF',
                      color: 'white',
                    }
                  }}>

                    <h1>$NASA</h1>
                    <FaCoins size={"32"}></FaCoins>
                    <p className='body-box text'>A small liquidity will be locked and will grow overtime. Contract will be renounced and tax will be 5/5</p>

                  </Box>
                  <Box className='box' display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"} sx={{
                    marginBottom: "20px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    backgroundColor: 'black',
                    borderRadius: '25px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#01BAEF',
                      color: 'white',
                    }
                  }}>

                    <h1>NFT Launch</h1>
                    <FaRocket size={"32"}></FaRocket>
                    <p className='body-box text'>There are only 3.456 collections of N.A.S.A selfies. Only a few percentage of $NASA holders will have a free mint.</p>

                  </Box>
                  <Box className='box' display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"space-around"} sx={{
                    marginBottom: "20px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    backgroundColor: 'black',
                    borderRadius: '25px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#01BAEF',
                      color: 'white',
                    }
                  }}>

                    <h1>Mystery Box</h1>
                    <GiLockedChest size={"32px"}></GiLockedChest>
                    <p className='body-box text'>-.-. --- -.. . -. .- -- . --. .- -. -.-- -- . -.. .-- --- --- -. -- .. ... ... .. --- -. .-.-.- .--. .-. . .--. .- .-. . - --- .-. . .- -.-. .... .---- -- .. .-.. .-.. .. --- -. -- .- .-. -.- . - -.-. .- .--.</p>

                  </Box>
                </Box>
              </Container>

            </div>

            <div className='fourth-section'>
              <div className='faq-section'>
                <h1 className='main-title'>FAQ</h1>
                <p className='faq-text'>All your concerns are answered right here.</p>
                <FAQ></FAQ>
              </div>
            </div>

            <div className='network-section' id="network">
              <h1>Join us in our social media!</h1>
              <h3>We will be waiting for you!</h3>
              <div className='footer-buttons'>
                <a className='network-links' rel='noreferrer' target="_blank" href=""><TwitterIcon></TwitterIcon> Join Twitter <LaunchIcon></LaunchIcon></a>
                <a className='network-links' rel='noreferrer' target="_blank" href=""><Telegram></Telegram> Join Telegram <LaunchIcon></LaunchIcon></a>
              </div>
            </div>
          </>
      }

    </>
  );
}

export default Home
