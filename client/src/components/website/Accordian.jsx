import React from 'react';
import 'flowbite';

const Accordian = () => {
    return (

        <div class="max-w-screen-xl mx-auto p-10 dark:bg-gray-800">
            <div id="accordion-flush" data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h3 id="accordion-flush-heading-1">
                    <button type="button"
                        class="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                        aria-controls="accordion-flush-body-1">
                        <span>Terms & conditions?</span>
                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
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
                        class="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-2" aria-expanded="true"
                        aria-controls="accordion-flush-body-2">
                        <span>Cancellation Terms</span>
                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-2" class="" aria-labelledby="accordion-flush-heading-2">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
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
                        class="flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-accordion-target="#accordion-flush-body-3" aria-expanded="true"
                        aria-controls="accordion-flush-body-3">
                        <span>Important information</span>
                        <svg data-accordion-icon="" class="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </h3>
                <div id="accordion-flush-body-3" class="" aria-labelledby="accordion-flush-heading-3">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
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

            </div>
        </div>


    );
}

export default Accordian;
