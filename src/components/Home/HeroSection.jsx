import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-semibold text-center">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="mb-10 text-center text-neutral-400 max-w-4xl font-customFontKr lg:text-lg mb:text-sm">
        대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의
        소추를 받지 아니한다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한
        국회의 최초의 집회일 전일까지로 한다. 국가유공자·상이군경 및 전몰군경의
        유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.
        국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는
        이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한
        제한과 의무를 과할 수 있다.
      </p>

      <div className="flex gap-4">
        {heroLinks.map((itme, idx) => (
          <Link
            to={itme.to}
            key={idx}
            className={` font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 1 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {itme.text}
          </Link>
        ))}
      </div>
      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
