import type { NextPage } from 'next'
import Marquee from "react-fast-marquee";
import Head from "next/head";
import Navbar from '../components/Navbar';
import Fab from '@mui/material/Fab';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import FAQ from '../components/FAQ';

const Home: NextPage = () => {

  function toTheTop() {
    window.scrollTo(0, 0);
  }

  const [loading, setLoading] = useState(false);

  var i = 0;
  var limit = 99;

  useEffect(() => {
    // setLoading(true);
    setLoading(true);

    // For loading screen with 8 seconds timer
    // setTimeout(() => {
    //   setLoading(false)
    // }, 7000);

    // For loading progress bar with numbers
    setInterval(() => {
      if (i <= limit) {
        i += 1;
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

            <img className='loading-screen-image' src="images/preview-2.webp"></img>

            {/* For loading bar with numbers */}
            {/* <div className='progress-bar' style={{ width: width * 3 }}>{progress}%</div> */}
            <div className='titles'>
              <h1>LOADING...</h1>
              {/* <h1>N.A.S.A</h1>
              <h2>Not A Shitty Alien</h2> */}
            </div>
          </div>
          :
          <>
            <Navbar></Navbar>
            <div className='first-section'>
              <h1 className='main-title'>N.A.S.A</h1>
              <h4 className='sub-title'>Not A Shitty Alien</h4>
              {/* <div className='title-buttons'>
          <a target="_blank" rel='noreferrer' href="https://google.com"><button>Reserve your alien</button></a>
        </div> */}

              <div className='fab-buttons'>
                <a target="_blank" rel='noreferrer' href="https://discord.gg/ZQp5Tg4wjp"><Fab><img src="images/discord.svg"></img></Fab></a>
                <a target="_blank" rel='noreferrer' href="https://twitter.com/ETH_NASANFT/"><Fab><TwitterIcon></TwitterIcon></Fab></a>
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
                  <p className='about-text'>To start the Earth invasion, we kinda need your funds. Hence, we will be selling our 3,456 selfie photos since we know feet pics are overrated.
                  </p>
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

            <div className='fourth-section'>
              <div className='faq-section'>
                <h1 className='main-title'>FAQ</h1>
                <p className='faq-text'>All your concerns are answered right here.</p>
                <FAQ></FAQ>
              </div>
            </div>

            <div className='network-section' id="network">
              <h1>Join us in our social media!</h1>
              <div className='footer-buttons'>
                <a rel='noreferrer' target="_blank" href="https://twitter.com/ETH_NASANFT/"><button className='twitter-button'>Twitter</button></a>
                <a rel='noreferrer' target="_blank" href="https://discord.gg/ZQp5Tg4wjp"><button className='discord-button'>Discord</button></a>
              </div>
              <button className='toTop' onClick={toTheTop}>To The Top</button>
            </div>
          </>
      }

    </>
  );
}

export default Home
