import type { NextPage } from 'next'
import Link from 'next/link';
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";

const Home: NextPage = () => {

  useEffect(() => {
    document.title = "N.A.S.A | Not A Shitty Alien"
  }, [])

  return (
    <>

      <div className='navbar'>
        <ul className='nav'>
          <li className='nav-links'><a href="#collection">Collection</a></li>
          <li className='nav-links'><a href="#about">About</a></li>
          <li className='nav-links'><a href="#network">Network</a></li>
        </ul>
      </div>
      <div className='first-section'>
        <h1 className='main-title'>N.A.S.A</h1>
        <h4 className='sub-title'>Not A Shitty Alien</h4>
        <div className='title-buttons'>
          <a target="_blank" rel='noreferrer' href="https://google.com"><button>Reserve your alien</button></a>
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
      <div className='third-section' id="collection">
        <div className='third-section-image'>
          <img src="images/preview.jpg"></img>
        </div>
        <div className='collection-section'>
          <h1 className='main-title'>Collection</h1>
          <div className='content-section'>
            <p>N.A.S.A is a showcase of NFTs with different types of aliens, including with different traits and attributes. Entirely hand drawn, N.A.S.A will showcase the characters of Aliens who crashed on earth and invading Earth. </p>
          </div>
        </div>
      </div>
      <div className='second-section'>
        <div className='about-container'  id="about">
          <h1 className='main-title'>ABOUT</h1>
          <div className='about-section'>
            <p className='about-text'>
              We came from the Tadpole galaxy. Unlike other disgusting, big-headed aliens, we are NASA, Not A Shitty Alien. We are planning to invade Earth through one of your famous blockchain network, Ethereum!
            </p><br></br>
            <p className='about-text'>To start the Earth invasion, we kinda need your funds. Hence, we will be selling our 3,456 selfie photos since we know feet pics are overrated.
            </p>
            <div className='multiple-marquees'>
              <Marquee gradient={false} direction={"right"}>
                <img className='marquee-pictures' src="/images/1.png"></img>
                <img className='marquee-pictures' src="/images/2.png"></img>
                <img className='marquee-pictures' src="/images/3.png"></img>
                <img className='marquee-pictures' src="/images/4.png"></img>
                <img className='marquee-pictures' src="/images/5.png"></img>
                <img className='marquee-pictures' src="/images/6.png"></img>
              </Marquee>

              <Marquee gradient={false} direction={"left"}>
                <img className='marquee-pictures' src="/images/7.png"></img>
                <img className='marquee-pictures' src="/images/8.png"></img>
                <img className='marquee-pictures' src="/images/9.png"></img>
                <img className='marquee-pictures' src="/images/10.png"></img>
                <img className='marquee-pictures' src="/images/11.png"></img>
                <img className='marquee-pictures' src="/images/12.png"></img>
              </Marquee>

              <Marquee gradient={false} direction={"right"}>
                <img className='marquee-pictures' src="/images/13.png"></img>
                <img className='marquee-pictures' src="/images/14.png"></img>
                <img className='marquee-pictures' src="/images/15.png"></img>
                <img className='marquee-pictures' src="/images/16.png"></img>
                <img className='marquee-pictures' src="/images/17.png"></img>
                <img className='marquee-pictures' src="/images/18.png"></img>
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-section' id='network'>
        <div className='network-section'>
          <a className='social-media-images' href="https://google.com"><img src='images/discord.png'></img></a>
          <a className='social-media-images' href="https://google.com"><img src='images/twitter.png'></img></a>
          <h4 className='sub-title'>Our social media</h4>
        </div>
      </div>
    </>
  );
}

export default Home
