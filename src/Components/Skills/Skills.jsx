import  { useEffect, useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';


import animationData from '../../../public/ani2.json';
import Lottie from 'react-lottie';

const Skills = () => {
  const progressData = [
    { label: 'Adobe Illustrator', percentage: 93, bgColor: '#8BC03C' },
    { label: 'Adobe Photoshop', percentage: 90, bgColor: '#FED403' },
    { label: 'Adobe Creative Cloud', percentage: 80, bgColor: '#FE7E10' },
    { label: 'Other supporting software', percentage: 85, bgColor: '#8E3CCC' },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [progressDataWithAnimation, setProgressDataWithAnimation] = useState(
    progressData.map((item) => ({ ...item, animatedPercentage: 0 }))
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the progress animation only when the section becomes visible
          const timer = setInterval(() => {
            setProgressDataWithAnimation((prevData) =>
              prevData.map((item) => ({
                ...item,
                animatedPercentage:
                  item.animatedPercentage < item.percentage
                    ? item.animatedPercentage + 1
                    : item.animatedPercentage,
              }))
            );
          }, 200);

          // Stop the timer when the animation is complete
          if (progressDataWithAnimation.every((item) => item.animatedPercentage >= item.percentage)) {
            clearInterval(timer);
          }
        }
      });
    }, observerOptions);

    // Observe the section element
    const sectionRef = document.getElementById('skills-section');
    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => {
      // Unobserve the section element when the component unmounts
      if (sectionRef) {
        observer.unobserve(sectionRef);
      }
    };
  }, [progressDataWithAnimation]);

  return (
    <div data-aos="fade-up" id="skills-section" className='w-11/12 grid md:grid-cols-2 gap-5 items-center justify-center mx-auto'>
      <div className=' mx-auto md:-ml-10'>
        <Lottie options={defaultOptions} />
      </div>
      <div className='space-y-8'>
        {progressDataWithAnimation.map((item) => (
          <div key={item.label}>
            <p className='text-2xl pb-2'>{item.label}</p>
            <ProgressBar
              completed={item.animatedPercentage}
              bgColor={item.bgColor}
              height="17px"
            />
       
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
