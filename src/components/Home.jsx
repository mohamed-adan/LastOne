import carab2 from "../images/carab2.jpg";



const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="md:w-1/2 w-full">
          <img src={carab2} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am Mohamed Omar</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I am <span className="text-primary">Full-stack developer</span> and Web Design
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
          I'm a web developer with extensive experience for over 1 years.My expertise is to create and website design, and many more..
          </p>
          <a href="https://drive.google.com/file/d/1V2tjyjRIPbtTqXfeZDEPcQ-n1BG0P7Rk/view?usp=sharing" className="btn-primary">Download my CV</a>
        </div>
        {/* rigth side */}
        
      </div>
    </div>
  );
};

export default Home;
