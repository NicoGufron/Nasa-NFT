import { Disclosure } from "@headlessui/react";
import type { NextPage } from 'next'

const FAQ: NextPage = () => {
    return (
        <div className='disclosure-section'>
            <Disclosure>
                <Disclosure.Button className='disclosure-button'>How many photos are you selling?</Disclosure.Button>
                <Disclosure.Panel className='disclosure-panel'>3,456 photos of our selfies.</Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className='disclosure-button'>How much for the photo?</Disclosure.Button>
                <Disclosure.Panel className='disclosure-panel'>The price will be revealed soon enough.</Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className='disclosure-button'>What is N.A.S.A?</Disclosure.Button>
                <Disclosure.Panel className='disclosure-panel'>National Aeronautics and Space Administration for human language. But actually it is Not A Shitty Alien.</Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className='disclosure-button'>What network are you invading?</Disclosure.Button>
                <Disclosure.Panel className='disclosure-panel'>Using our latest technology of sniping, we set our sights in Ethereum.</Disclosure.Panel>
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className='disclosure-button'>Will the contract be shared before the start of minting?</Disclosure.Button>
                <Disclosure.Panel className='disclosure-panel'>Of course. We want the trust to be mutual. Humans will be able to check our contract before the mint phase start.</Disclosure.Panel>
            </Disclosure>
        </div>
    );
}

export default FAQ;