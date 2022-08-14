import { NextPage } from 'next';

const MintPage: NextPage = () => {
    return (
        <>
            <div className='navbar'>
                <ul className='nav'>
                    <li className='nav-links'><a href="#collection">Collection</a></li>
                    <li className='nav-links'><a href="#about">About</a></li>
                    <li className='nav-links'><a href="#network">Network</a></li>
                </ul>
            </div>
        </>
    );
}

export default MintPage;