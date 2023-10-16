import HeroImage from "../assets/photo-grid.png";

function HeroSection() {
  return (
    <>
      <div className="img-container">
        <img
          src={HeroImage}
          alt="A collection of photos about different experiences like swimming, singing, meditating, cooking, etc."
        />
      </div>
      <div className="text-content">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </>
  );
}

export default HeroSection;
