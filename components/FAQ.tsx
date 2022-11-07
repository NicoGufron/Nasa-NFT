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
            "Will the contract be shared before started trading?",
            "Do you have max transaction and max wallet?",
            "What is mystery box?"
        ],
        answers: [
            "National Aeronautics and Space Administration for human language. Pfftt lol",
            "1000 x 10⁶ tokens will be generated.",
            "Yes, there will be taxes. 1% for Liquidity and 4% for our Military Funds.",
            "Ethereum will be nicer than BSC. The shitty people are strong here.",
            "No. Those shitty people will fire at us immediately.",
            "Yes, we have! They will be 0.05% of total supply, respectively.",
            "What mystery box?"
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