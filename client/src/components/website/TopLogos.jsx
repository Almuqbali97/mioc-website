import miocWhite from '../../assets/images/mainLogoWhite.svg'
import emcoWhite from '../../assets/images/EMCOwhite.svg'
import IKSwhite from '../../assets/images/IKSwhite2.svg'
const TopLogos = () => {
    return (
        <div className='inline-flex items-center justify-center space-x-2 transition-all'>
            <img className='h-20 sm:h-28 md:h-32 lg:h-36' src={miocWhite} />
            <div className='flex -space-x-3 border-l-[2px]'>
                <img className='h-14 sm:h-16 md:h-20 lg:h-24' src={emcoWhite} />
                <img className='h-14 sm:h-16 md:h-20 lg:h-24' src={IKSwhite} />
            </div>
        </div>
    );
}

export default TopLogos;
