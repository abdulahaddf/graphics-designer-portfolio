
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
    return (
      
<div className='w-11/12 grid md:grid-cols-2 gap-5 items-center justify-center mx-auto'>
<div className=' mx-auto md:-ml-10'>
                <Lottie options={defaultOptions} />
                </div>

        <div>
         {progressData.map((item) => (
        <div key={item.label}>
          <p>{item.label}</p>
          <ProgressBar completed={item.percentage} bgColor={item.bgColor} height="25px" />
        </div>
      ))}
      </div>
      </div>
    );
};

export default Skills;