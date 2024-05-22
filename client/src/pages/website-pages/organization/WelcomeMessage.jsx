import React from 'react';
import SectionHeadingTitleAndImage from '../../../components/website/SectionHeadingTitleAndImage';
import ContentContainer from '../../../components/common/ContentContainer';
import CommonParagraph from '../../../components/common/CommonParagraph';
import drRashidImg from '../../../assets/images/drRashid-original.png'
import welcomMsgImg from '../../../assets/images/welcomImage.avif'
const WelcomeMessage = () => {
    return (
        <section>
            <SectionHeadingTitleAndImage
                image={welcomMsgImg}
                title={'Welcome Message'} />

            <ContentContainer>
                <div className='flex justify-start items-center lg:items-start flex-col mb-5'>
                    <img src={drRashidImg} className='h-40 mb-4' />
                    <p className='font-bold'>Rashid Al Saidi,MD,FEBO.</p>
                    <CommonParagraph>Chairman of the Joint Organizing Committee</CommonParagraph>
                </div>
                <div className='hidden lg:block w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-900 to-transparent my-11'></div>
                <CommonParagraph>
                    I am delighted to invite you all to attend the 20th Muscat International Ophthalmology Conference (MIOC), which will be conducted jointly with the 4th Eastern Mediterranean Council of Optometry (EMCO) conference and the International Keratoconus Society (IKS).
                </CommonParagraph>

                <CommonParagraph>
                    MIOC is constantly committed to partnering with other prominent societies in the field to bring all ophthalmic professionals together on one platform with the common purpose of knowledge sharing, networking, and skill transfer to the next generation.
                </CommonParagraph>

                <CommonParagraph>
                    EMCO, the region's largest optometry community, joined MIOC this year, strengthening the links between two inseparable professions by sharing insights and fostering collaborations that will impact the future of eye care.
                </CommonParagraph>

                <CommonParagraph>
                    IKS is a world-known society, that gathers experts from around the world to fight Keratoconus worldwide. Its mission is focused on education, research, establishing guidelines, and fostering consensus. It would be the appropriate platform for conducting conferences and research and developing internationally recognised guidelines.
                </CommonParagraph>

                <CommonParagraph>
                    We are proud and privileged to host these two distinguished societies here in Muscat
                </CommonParagraph>

                <CommonParagraph>
                    The entire scientific programme is enriched with sessions on hot topics and management updates in practically all subspecialties, as well as workshops, instructional courses, and skill transfer wet labs with hands-on training.
                </CommonParagraph>

                <CommonParagraph>
                    The organising committee works hard to bring brilliant minds in ophthalmology and optometry from around the world, and we invite ophthalmologists, optometrists, vision scientists, residents, students, ophthalmic nurses, assistants, and technicians to attend the joint conference and seize this great opportunity to brush up your knowledge, improve your surgical and optometry skills, interact with speakers and colleagues, and visit the trade exhibition to witness cutting-edge technology.

                </CommonParagraph>

                <CommonParagraph>
                    I look forward to meeting you in Muscat.
                </CommonParagraph>

                <CommonParagraph>
                    Rashid Al Saidi
                </CommonParagraph>

            </ContentContainer>
        </section>
    );
}

export default WelcomeMessage;
