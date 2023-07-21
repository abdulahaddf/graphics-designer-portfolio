import PictureSlider from "./PictureSlider";
//this will show a picture first and then if you click it, it will show a slider which will contain array of pictures
const project1 = [
   
  ];
                
const project2 = [
    'https://i.ibb.co/CVF408h/Brand-Identity-01.jpg',
    'https://i.ibb.co/nCHPkgX/Brand-Identity-02.jpg',
    'https://i.ibb.co/g3H33V9/Brand-Identity-04.jpg',
    'https://i.ibb.co/rtQVz1K/Brand-Identity-05.jpg',
    'https://i.ibb.co/DM7F0vK/Brand-Identity-06.jpg',
    'https://i.ibb.co/FhTY8rg/Brand-Identity-07.jpg',
    'https://i.ibb.co/Jx4WNZq/Brand-Identity-08.jpg',
    'https://i.ibb.co/2YhkrVP/Brand-Identity-09.jpg',
    'https://i.ibb.co/wWkVMXZ/Cover.jpg   '        ,   
    'https://i.ibb.co/4NnWJ00/Insta.jpg'
  ];
const project3 = [
   
  ];
const project4 = [
    
  ];


const Projects = () => {
    return (
        <div>
            <h1 className="heading">
                Projects
            </h1>
                <PictureSlider project1={project1} project2={project2} project3={project3} project4={project4}></PictureSlider>
        </div>
    );
};

export default Projects;