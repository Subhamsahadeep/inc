import Image from 'next/image';
import mainBanner from "../../../assets/background.jpg";

export default function HomeBanner() {
    return (
        <div>
            <Image 
            className='w-full h-full'
            src={mainBanner} 
            alt="Main Image" 
            />
        </div>
    );
}