import projectOne from "../images/project one.png"
import projectTwo from "../images/project two.png"
import projectThree from "../images/project three.png"


const Portfolio = () => {
 
  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-xl text-headingcolor font-semibold mb-5">
            My Skills
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            My Expertise
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* one */}
        <div className="shadow-xl rounded-lg">
          <img src={projectOne} />
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-2 text-headingcolor">Zarrin Website</h3>
            <p className="text-body mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi earum unde pariatur voluptatum iure numquam illo obcaecati adipisci. Soluta, ut!</p>
            <a href="https://github.com/mohamed-adan" className="underline underline-offset-8">View In Github <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
          </div>
        </div>

      {/* two */}
        <div className="shadow-xl rounded-lg">
          <img src={projectTwo} />
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-2 text-headingcolor">E-commerce</h3>
            <p className="text-body mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi earum unde pariatur voluptatum iure numquam illo obcaecati adipisci. Soluta, ut!</p>
            <a href="https://github.com/mohamed-adan/E-commerce-React" className="underline underline-offset-8">View In Github <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
          </div>
        </div>

      {/* three */}
        <div className="shadow-xl rounded-lg">
          <img src={projectThree} />
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-2 text-headingcolor">AgriTech Website</h3>
            <p className="text-body mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi earum unde pariatur voluptatum iure numquam illo obcaecati adipisci. Soluta, ut!</p>
            <a href="https://github.com/mohamed-adan/AgriFarm-Web" className="underline underline-offset-8">View In Github <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
