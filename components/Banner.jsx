import Image from 'next/image';
import BannerImg from '../public/banner.jpg';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px]    '>
      <Image src={BannerImg} layout='fill' objectFit='cover' />

      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg font-medium'>Not sure where to go?</p>

        <button className='text-purple-500 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl my-3 font-bold active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
