import Image from 'next/image';
import aboutMinister from '../../../assets/aboutMinister.jpg';

export default function AboutMinister() {
    return (
        <div className='container mx-auto grid grid-cols-2 gap-x-5 p-4 py-12'>
            <div className='flex justify-center'>
                <Image src={aboutMinister}
                    className='w-9/12 h-full'
                    alt="aboutMinister" />
            </div>
            <div>
                <div className='text-primary text-lg font-semibold'> About Minister </div>
                <div className='py-4'>
                    <div className='text-primary'> Empowering Voices | Strengthening Vision </div>
                    Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
                </div>
                <div>
                    <button className="bg-primary text-white font-bold py-4 px-8 rounded-none">
                        Know More
                    </button>
                </div>
            </div>
        </div>
    );
}