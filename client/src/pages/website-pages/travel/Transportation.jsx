import React from 'react';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import ParagraphTitle from '../../../components/website/ParagraphTitle';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';

const Transportation = () => {
    return (
        <div>
            <SectionHeadingTitleAndImage title={'TRANSPORTATION'} />
            <ContentContainer>
                <ParagraphTitle title={'Local Transportation'} />
                <CommonParagraph>
                    It is hard to imagine that in 1970 Oman only had 3 Km of asphalted road. Today, the roads in Oman are compared to the best anywhere in the world. Motorways link Muscat with all major cities and towns in the Sultanate. There are also excellent roads leading to other cities of Oman. For visitors, an international drivers licence is valid in Oman.</CommonParagraph>
                <ParagraphTitle title={'Taxis'} />
                <div className="p-4 font-custom font-light">
                    <ol className="list-decimal">
                        <li className="mb-2">
                            <span className="font-bold">Mandatory Fare Meters:</span> As of June 1, 2023, all orange and white taxis in Oman must use the Aber digital fare meter. The fare starts at 300 baisa, with 130 baisa per kilometer and a 50 baisa per minute waiting charge after the first five minutes.
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">Negotiated Fares:</span> Drivers and passengers can agree on a fare beforehand, but the meter must be used. If the driver refuses to use the meter, the ride is free.
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">Taxi Apps and Licensing:</span> By January 1, 2024, all taxis in public places must join licensed applications such as OmanTaxi, OTaxi, Marhaba, Hala, and Tasleem.
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">Airport Taxis:</span> Taxis from Muscat International Airport have a regulated fare, with a base fare of OMR 8.00 to downtown Muscat hotels. These taxis are blue and white.
                        </li>
                        <li className="mb-2">
                            <span className="font-bold">Drop-off/Pick-up Points:</span> There are designated drop-off and pick-up points by the main entrance of the Convention Centre, with a separate holding area for taxis in front of the car park.
                        </li>
                    </ol>
                </div>

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
