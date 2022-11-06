import { Disclosure } from "@headlessui/react";
import type { NextPage } from 'next'

const FAQ: NextPage = () => {
    
    var disclosures = [];

    var faqQuestions = {
        questions: [
            "What is N.A.S.A?",
            "How many token supply will be created?",
            "Are there any taxes?",
            "What network are you invading?",
            "Will be the contract be shared before started trading?",
            "Are there any NFTs will be launched?",
            "Why there is a mystery box above FAQ?"
        ],
        answers: [
            "National Aeronautics and Space Administration for human language. But actually it is Not A Shitty Alien.",
            "1.000.000.000 tokens will be created.",
            "Yes, there are taxes will be applied, such as marketing and liquidity taxes. It will be 5 / 5.",
            "Using our latest technology of sniping, we set our sights in Ethereum.",
            "Of course. We want the trust to be mutual. Humans will be able to check our contract before the mint phase start.",
            "Yes! We have NFTs that will be launched soon enough when it is ready!",
            "Huh? What mystery box?"
        ]
    }

    for (var i = 0; i < faqQuestions.questions.length; i++) {
        disclosures.push(
            <Disclosure>
                <Disclosure.Button className='disclosure-button'>{faqQuestions.questions[i]}</Disclosure.Button>
                <Disclosure.Panel className='disclosure-panel'>{faqQuestions.answers[i]}</Disclosure.Panel>
            </Disclosure>
        )
    }



    return (
        <div className='disclosure-section'>
            {disclosures}
        </div>
    );
}

export default FAQ;