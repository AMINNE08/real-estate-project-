import Slider from 'react-slick';
import './RecentProjects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import house1 from '../recent project/images/house1.png';
import house2 from '../recent project/images/house2.png';
import house3 from '../recent project/images/house3.png';

const projectData = [
  { title: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet.', rating: 4.83, image: house1 },
  { title: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet.', rating: 4.83, image: house2 },
  { title: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet.', rating: 4.83, image: house3 },
];

const RecentProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="recent-projects">
      <h2>Our Recent Projects</h2>
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>⭐ {project.rating}</span>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RecentProjects;
