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
        setLoading(false);
      }
    }, 100)
  }, []);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>N.A.S.A | Not A Shitty Alien</title>
        <link rel="canonical" href="https://nasanft.space"></link>
        <meta name='description' content="N.A.S.A is a showcase of NFTs that will go live on Ethereum!" />
        <meta property='og:title' content="N.A.S.A | Not A Shitty Alien" />
        <meta property='og:site_name' content="N.A.S.A | Not A Shitty Alien" />
        <meta property='twitter:site' content="@ETH_NASANFT" />
        <meta property='twitter:creator' content="@ETH_NASANFT" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      {
        loading ?
          <div className='loading-screen'>
            <div className='progress-bar' style={{ width: width * 3 }}>{progress}%</div>
            <div className='titles'>
              <h1>Please wait, you shitty people!</h1>
            </div>
          </div>
          :
          <>
            <Navbar></Navbar>
            <div className='first-section'>
              <h1 className='main-title'>N.A.S.A</h1>
              <h4 className='sub-title'>Not A Shitty Alien</h4>

              <div className='fab-buttons'>
                {/* <a target="_blank" rel='noreferrer' href="https://discord.gg/ZQp5Tg4wjp"><Fab><img src="images/discord.svg"></img></Fab></a> */}
                <a target="_blank" rel='noreferrer' href="https://twitter.com/ETH_NASANFT/"><Fab><TwitterIcon></TwitterIcon></Fab></a>
                <a target="_blank" rel='noreferrer' href="https://t.me/nasaerc20/"><Fab><Telegram></Telegram></Fab></a>
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
                  <p>N.A.S.A is a showcase of NFTs with different types of aliens, including with different traits and attributes. Entirely hand drawn, N.A.S.A will showcase the characters of Aliens who crashed on earth and invading Earth. </p>
                </div>
              </div>
            </div>
            <div className='second-section'>
              <div className='about-container' id="about">
                <h1 className='main-title'>ABOUT</h1>
                <div className='about-section'>
                  <p className='about-text'>
                    We came from the Tadpole galaxy. Unlike other disgusting, big-headed aliens, we are N.A.S.A, Not A Shitty Alien. We are planning to invade Earth through one of your famous blockchain network, Ethereum!
                  </p><br></br>
                  <p className='about-text'>We offer our mighty currency $NASA with liquidity locked and renounced contract, low tax and max transaction. No shitty whales controlling the chart. <br></br><br></br> We are not just ordinary aliens. We are N.A.S.A, Not A Shitty Aliens.</p>
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
                  <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} sx={{
                    width: 300,
                    height: 300,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    backgroundColor: 'black',
                    borderRadius: '25px',
                    color: 'white'
                  }}>

                    <h1>$NASA</h1>
                    <p>A small liquidity will be locked and will grow overtime. Contract will be renounced and tax will be 5/5</p>

                  </Box>
                  <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} sx={{
                    width: 300,
                    height: 300,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    backgroundColor: 'black',
                    borderRadius: '25px',
                    color: 'white'
                  }}>

                    <h1>NFT Launch</h1>
                    <p>There are only 3.456 collections of N.A.S.A selfies. Only a few percentage of $NASA holders will have a free mint.</p>

                  </Box>
                  <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} sx={{
                    width: 300,
                    height: 300,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    backgroundColor: 'black',
                    borderRadius: '25px',
                    color: 'white'
                  }}>

                    <h1>Mystery Box</h1>
                    <p>Huh? What's that?</p>

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
                <a className='network-links' rel='noreferrer' target="_blank" href="https://twitter.com/ETH_NASANFT/"><TwitterIcon></TwitterIcon> Join Twitter <LaunchIcon></LaunchIcon></a>
                <a className='network-links' rel='noreferrer' target="_blank" href="https://t.me/nasaerc20"><Telegram></Telegram> Join Telegram <LaunchIcon></LaunchIcon></a>
              </div>
            </div>
          </>
      }

    </>
  );
}

export default Home
