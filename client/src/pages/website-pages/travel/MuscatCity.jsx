import React from 'react';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import muscat from '../../../assets/images/muscat.avif'
import muscatCorniche from '../../../assets/images/muscat-corniche.avif'
import InfoCards from './InfoCards';

const MuscatCity = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'MUSCAT CITY'} image={muscat} />
            <ContentContainer>
                <div className='flex justify-center items-center w-full mb-10'>
                    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-md w-[30rem] mx-auto">
                        <img src={muscatCorniche} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-3 text-3xl font-bold text-white">Muscat</h3>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">Your New Destination!</div>
                    </article>
                </div>
                <CommonParagraph>
                    Muscat, the capital of Oman, has a character quite different from neighbouring capitals. There are few high-rise blocks and even the most functional building is required to reflect tradition with a dome or an arabesque window. The result of these building policies is an attractive, spotlessly clean and uniform city – not much different in essence from the ‘very elegant town with very fine houses’ that the Portuguese admiral Alfonso de Alburqueque observed as he sailed towards Muscat in the 16th century.
                </CommonParagraph>

                <CommonParagraph>
                    Muscat means ‘safe anchorage’, and the sea continues to constitute a major part of the city: it brings people on cruise ships and goods in containers to the historic ports of Old Muscat and Muttrah. It contributes to the city’s economy through the onshore refinery near Qurum, and provides a livelihood for fishermen along the beaches of Shatti al-Qurm and Athaiba
                </CommonParagraph>
                <InfoCards />

            </ContentContainer>

        </div>
    );
}

export default MuscatCity;
