import Airbnb from "../assets/airbnb.svg";

function Header() {
  return (
    <>
      <header>
        <div className="logo-img-container">
          <img src={Airbnb} alt="Airbnb Logo" />
        </div>
      </header>
    </>
  );
}

export default Header;
