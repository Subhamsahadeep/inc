import Image from "next/image";
import newsLogo from '../../../assets/news_logo.png';
export default function News() {
    return (
        <div className='container mx-auto p-12 w-full'>
            <div className='py-4'>
                <h1 className='text-primary text-lg font-semibold'> News </h1>
            </div>
            <div className="grid-cols-3 grid gap-4">
                <div className="border rounded-md p-4 border-gray-200">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                            <Image src={newsLogo} alt="News Logo" width={25} height={25} />
                            <div className="pl-4">HK Patil</div>
                        </div>
                        <Image src={newsLogo} alt="News Logo" width={25} height={25} />
                    </div>
                    <div className="py-4">ಗದಗಿನ ಪಂಡಿತ್‌ ಭೀಮಸೇನ ಜೋಶಿ ರಂಗಮಂದಿರದಲ್ಲಿ ನಮ್ಮ ರಾಜ್ಯ ಸರ್ಕಾರದ ಮಹತ್ವಾಕಾಂಕ್ಷಿ #ಗೃಹಜ್ಯೋತಿ ಯೋಜನೆಗೆ ಚಾಲನೆ ನೀಡಿ ಮಾತನಾಡಿದೆ.ಈ ಸಮಾರಂಭದಲ್ಲಿ ಜಿಲ್ಲಾಧಿಕಾರಿ ವೈಶಾಲಿ ಎಂ ಎಲ್‌, ಜಿಲ್ಲಾ ಪೊಲೀಸ್‌ ವರಿಷ್ಠಾಧಿಕಾರಿ ಬಿ ಎಸ್‌ ನೇಮಗೌಡ.</div>
                </div>

                <div className="border rounded-md p-4 border-gray-200">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                            <Image src={newsLogo} alt="News Logo" width={25} height={25} />
                            <div className="pl-4">HK Patil</div>
                        </div>
                        <Image src={newsLogo} alt="News Logo" width={25} height={25} />
                    </div>
                    <div className="py-4">ಗದಗಿನ ಪಂಡಿತ್‌ ಭೀಮಸೇನ ಜೋಶಿ ರಂಗಮಂದಿರದಲ್ಲಿ ನಮ್ಮ ರಾಜ್ಯ ಸರ್ಕಾರದ ಮಹತ್ವಾಕಾಂಕ್ಷಿ #ಗೃಹಜ್ಯೋತಿ ಯೋಜನೆಗೆ ಚಾಲನೆ ನೀಡಿ ಮಾತನಾಡಿದೆ.ಈ ಸಮಾರಂಭದಲ್ಲಿ ಜಿಲ್ಲಾಧಿಕಾರಿ ವೈಶಾಲಿ ಎಂ ಎಲ್‌, ಜಿಲ್ಲಾ ಪೊಲೀಸ್‌ ವರಿಷ್ಠಾಧಿಕಾರಿ ಬಿ ಎಸ್‌ ನೇಮಗೌಡ.</div>
                </div>

                <div className="border rounded-md p-4 border-gray-200">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row">
                            <Image src={newsLogo} alt="News Logo" width={25} height={25} />
                            <div className="pl-4">HK Patil</div>
                        </div>
                        <Image src={newsLogo} alt="News Logo" width={25} height={25} />
                    </div>
                    <div className="py-4">ಗದಗಿನ ಪಂಡಿತ್‌ ಭೀಮಸೇನ ಜೋಶಿ ರಂಗಮಂದಿರದಲ್ಲಿ ನಮ್ಮ ರಾಜ್ಯ ಸರ್ಕಾರದ ಮಹತ್ವಾಕಾಂಕ್ಷಿ #ಗೃಹಜ್ಯೋತಿ ಯೋಜನೆಗೆ ಚಾಲನೆ ನೀಡಿ ಮಾತನಾಡಿದೆ.ಈ ಸಮಾರಂಭದಲ್ಲಿ ಜಿಲ್ಲಾಧಿಕಾರಿ ವೈಶಾಲಿ ಎಂ ಎಲ್‌, ಜಿಲ್ಲಾ ಪೊಲೀಸ್‌ ವರಿಷ್ಠಾಧಿಕಾರಿ ಬಿ ಎಸ್‌ ನೇಮಗೌಡ.</div>
                </div>
            </div>
        </div>
    );
}