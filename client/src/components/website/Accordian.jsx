import React from 'react';
import 'flowbite';

const Accordian = () => {
    return (

        <div className="max-w-screen-xl mx-auto p-10 dark:bg-gray-800">
            <div id="accordion-flush" data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h3 id="accordion-flush-heading-1">
                    <button type="button"
                        className="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                        aria-controls="accordion-flush-body-1">
                        <span>Terms & conditions?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <ol className='list-decimal ml-5'>
                            <li className='mb-1'>Items and activities not availed by the delegate will not be reimbursed.</li>
                            <li className='mb-1'>Registration fees vary according to payment date.</li>
                            <li className='mb-1'>Registration cannot be confirmed without payment.</li>
                            <li className='mb-1'>If the payment is made after the deadline of the selected period, the registration fee of the following period will apply and the difference will be invoiced for immediate payment.</li>
                            <li className='mb-1'>Upon successful payment, an automated receipt and confirmation of your registration will be sent via email.</li>
                            <li className='mb-1'>Delegates without proof of payment will not be allowed access to the event.</li>
                            <li className='mb-1'>In the event of acts of God, government restrictions, civil disorder, epidemic or pandemic, or any other comparable calamity or condition beyond the control of the Organizers (collectively a “Force Majeure”) before the first day of the Conference, the Organizer has the right to cancel or reschedule the Conference.</li>
                        </ol>
                    </div>
                </div>
                {/*  */}
                <h3 id="accordion-flush-heading-2">
                    <button type="button"
                        className="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-2" aria-expanded="true"
                        aria-controls="accordion-flush-body-2">
                        <span>Cancellation Terms</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-2" className="" aria-labelledby="accordion-flush-heading-2">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <ol className='list-decimal ml-5'>
                            <li className='mb-1'>If a registered delegate cannot attend the event, a substitute colleague may be accepted before 01 November 2024. After this date, cancellation fees apply.</li>
                            <li className='mb-1'>Requests for substitutions will only be accepted by e-mail to info@mioc.org.om, indicating the delegate registration ID and the name of the substitute.</li>
                            <li className='mb-1'>The substitute must be from the same organization.</li>
                            <li className='mb-1'>If a delegate has to cancel his/her registration before 01 November 2024, 50% of registration fee will be reimbursed.</li>
                            <li className='mb-1'>100% cancellation charges will be applied for cancellations received after 01 November 2024.</li>
                            <li className='mb-1'>No-shows will not qualify for a refund.</li>
                            <li className='mb-1'>Reimbursements and refunds will not be given for delegates who only partially attended the conference.</li>
                        </ol>
                    </div>
                </div>
                {/*  */}
                <h3 id="accordion-flush-heading-3">
                    <button type="button"
                        className="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-3" aria-expanded="true"
                        aria-controls="accordion-flush-body-3">
                        <span>Important information</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-3" className="" aria-labelledby="accordion-flush-heading-3">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <ol className="list-decimal ml-5">
                            <li>Acceptance of the terms and conditions above constitutes a legal binding contract under Oman law.</li>
                            <li>The organiser accepts no responsibility for the views or opinions expressed by the speakers, chairmen, moderators, or any other persons at the event.</li>
                            <li>Participants are required to abide by the local Oman law and local customs.</li>
                            <li>Please note that delegates with inappropriate attire might not be allowed into the conference venue.</li>
                            <li>The organiser will do its utmost effort to ensure the accuracy of the information presented online in regards to the program, speakers, and participants. However, it will not be liable in the unexpected event that a speaker does not attend the conference.</li>
                            <li>The organiser reserves the right “in extreme circumstances” to change the time and meeting venue.</li>
                        </ol>
                    </div>
                </div>

                <h3 id="accordion-flush-heading-4">
                    <button type="button"
                        className="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-4" aria-expanded="true"
                        aria-controls="accordion-flush-body-4">
                        <span>Credit Card Payment FAQs</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-4" className="" aria-labelledby="accordion-flush-heading-4">
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <ol className="list-decimal ml-5 space-y-4">
                            <li>
                                Which credit cards are accepted for payment?
                                <ul className="list-disc ml-5 mt-2">
                                    <li>We only accept Visa and MasterCard.</li>
                                </ul>
                            </li>
                            <li>
                                What should I do when I face any error in registration or abstract submission?
                                <ul className="list-disc ml-5 mt-2">
                                    <li>You should contact <a href="mailto:info@meaco-oman.org" className="text-yellow-500">info@mioc.org.om</a></li>
                                </ul>
                            </li>
                            <li>
                                What are the credit card requirements?
                                <ul className="list-disc ml-5 mt-2 space-y-2">
                                    <li>Kindly be informed that credit or debit cards need to be 3-D Secure compliant in order to pay the registration fee online.</li>
                                    <li>If you are facing a difficulty or unable to make the payment online, you may need to check if you are registered for 3-D secure, if you have not done so already.</li>
                                    <li>Kindly check with your card-issuing bank if you are not sure whether your card is 3-D secure or not.</li>
                                </ul>
                            </li>
                            <li>
                                What is 3D secure compliance?
                                <ul className="list-disc ml-5 mt-2 space-y-2">
                                    <li>Kindly be informed that credit or debit cards need to be 3-D Secure compliant in order to pay the registration fee online. If you are facing a difficulty or unable to make the payment online, you may need to check if you are registered for 3-D secure, if you have not done so already. Kindly check with your card-issuing bank if you are not sure whether your card is 3-D secure or not.</li>
                                    <li>3-D Secure is a protocol designed to be an additional security layer for online credit and debit card transactions. It is an established means of reducing all types of online fraud.</li>
                                    <li>The UAE Central Bank has mandated the compliance to 3-D Secure protocol for online transactions. A transaction being carried out through 3-D Secure technology redirects the payment process to the website of the bank that has issued the card to authenticate the transaction.</li>
                                    <li>3-D Secure asks shoppers to enter either a static or dynamic password to help confirm the identity of the cardholder during the time of purchase. For first time shoppers, a registration process may be available at the time of transaction itself.</li>
                                </ul>
                            </li>
                            <div className="ml-5 mt-4">
                                <p className="font-bold">Types of 3-D Secure</p>
                                <p>Services based on the 3-D Secure protocol have been adopted by the following companies:</p>
                                <ul className="list-disc ml-5 mt-2 space-y-2">
                                    <li>Verified by Visa: 3D Secure by Visa is called Verified by Visa.</li>
                                    <li>MasterCard Secure Code: 3D Secure by MasterCard is called Secure Code.</li>
                                    <li>JCB J/Secure: 3D Secure by JCB is called J/Secure.</li>
                                </ul>
                            </div>

                            <div className="ml-5 mt-4">
                                <p className="font-bold">Important note</p>
                                <p>In the event that credit card payment is still not possible after the steps listed on the document, we have introduced the possibility to register now and pay later. In this case, please select the pay later option and our staff will contact you to organize an alternative payment method.</p>
                            </div>
                            <li>
                                What is CVV number?
                                <ul className="list-disc ml-5 mt-2">
                                    <li>CVV number refers to the security number on the back of the card and comprises of the last 3 digits within the security strip.</li>
                                </ul>
                            </li>
                            <li>
                                How will I know that the payment was successful?
                                <ul className="list-disc ml-5 mt-2 space-y-2">
                                    <li>At the end of the process, you will be presented with a screen entitled ‘Transaction Approved’. You will also receive an email confirming your payment transaction within two working days.</li>
                                    <li>
                                        <p>What are the usual reasons for online payment failure? (If payment process fails, you will get an error message ‘Unable to complete transaction’.)</p>
                                        <ul className="list-disc ml-5 mt-2 space-y-2">
                                            <li>The most common reasons that you will receive a payment failed message are:</li>
                                            <li>You are using a Debit card rather than a typical Credit card.</li>
                                            <li>Your billing address and/or zip code does not match what is on file with your financial institution.</li>
                                            <li>Some P.O. Box addresses will not be accepted.</li>
                                            <li>Your (CVV) 3 digit security code is incorrect.</li>
                                            <li>Your transaction was declined by your financial institution.</li>
                                            <li>You might be using an old version of browser or your pop-up blocker is activated.</li>
                                            <li>You have a slow internet connection so it times out during the registration process.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                What should I do to make a successful payment?
                                <ul className="list-disc ml-5 mt-2 space-y-2">
                                    <li>Please use Visa and MasterCard.</li>
                                    <li>Be sure to enter correct credentials.</li>
                                    <li>Double check your (CVV) 3 digit security code is correct.</li>
                                    <li>Deactivate any pop-up blocker in your browser and mark our website as a safe website.</li>
                                    <li>Be sure that your browser is up to date.</li>
                                    <li>Please use a good internet connection such as Broadband ISDN, DSL, ADSL, ISDN etc.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Accordian;
