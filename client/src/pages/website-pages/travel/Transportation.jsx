import React from 'react';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import transportImg from '../../../assets/images/transport.jpg'

const Transportation = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'TRANSPORTATION'} image={transportImg} />
            <ContentContainer>
                <ParagraphTitle title={'Local Transportation'} />
                <CommonParagraph>
                    It is hard to imagine that in 1970 Oman only had 3 Km of asphalted road. Today, the roads in Oman are compared to the best anywhere in the world. Motorways link Muscat with all major cities and towns in the Sultanate. There are also excellent roads leading to other cities of Oman. For visitors, an international drivers licence is valid in Oman.</CommonParagraph>
                <ParagraphTitle title={'Taxis'} />
                <CommonParagraph>
                    Three companies are available for hire: City Taxi, Bid Bid Taxi and Al Dar Taxi. Omani law states that all taxi drivers are Omani. Taxis are mainly orange and white, they are not metered so it is advisable to negotiate the fare before the start of any journey. As of 21 December 2014, taxis from Muscat International Airport (which are blue & white) to downtown Muscat hotels are capped at OMR 8.00 (Euros 19), and a small additional fee for extra kms. There will be a drop off/pick up point by the Convention Centre’s main entrance with a separate taxi holding area in front of the car park.
                </CommonParagraph>
                <ParagraphTitle title={'Buses'} />
                <CommonParagraph>
                    The city public transport services – Mwasalat – connect to the most relevant areas of Muscat. Routes include Wadi Adei, Wadi Kabir, Mabelah, Muttrah and Al Almerat. These routes connect the main transport areas of Muscat, such as the Muscat International Airport, Port Sultan Qaboos or Buruj Sahawa; a great number of commercial and business areas; and the main residential areas of Muscat such as Al Khuwair, Gubrah, Al Azaiba, Mawalih or Seeb. Shuttle buses around the OCEC precinct can be arranged. A 48 seater bus costs OMR 160 (Euros 380) and a 16 seater bus costs OMR 80 (Euros 190) for 8 hours. Prices as of May 2015.
                </CommonParagraph>
                <ParagraphTitle title={'Rental Cars'} />
                <CommonParagraph>
                    Hire cars are freely available in Oman with all the major car rental companies represented throughout the nation. Rates starting from OMR 10.000 (Euros 23) per day.
                </CommonParagraph>
                <ParagraphTitle title={'Coaches'} />
                <CommonParagraph>
                    Oman National Transport Corporation (ONTC) and other coach companies and tour operators, can offer exclusive hire of their modern fleet of coaches, mini-buses and small vans for transfers during your congress. Alternatively, arrangements can be made through your preferred Destination Management Company.
                </CommonParagraph>
                <ParagraphTitle title={'Ferries'} />
                <CommonParagraph>
                    Getting around Oman is not limited to vehicular transport. National Ferries Company (NFC) connects Oman’s coastal towns with high-speed catamarans and diesel-powered passenger ferries that link the capital city of Muscat with Khasab on the Musandam Peninsula.
                </CommonParagraph>
            </ContentContainer>
        </div>
    );
}

export default Transportation;
