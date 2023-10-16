import Star from "../assets/star.png";

function Card(props) {
  const card = props.card;
  let badgeText = "";

  if (card.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (card.openSpots > 0 && card.location === "Online") {
    badgeText = "Online";
  } else {
    badgeText = null;
  }

  return (
    <>
      <article id={"card " + card.id}>
        <div className="img-container">
          <img src={card.coverImg} alt={card.imgAlt} />
          {badgeText && (
            <p style={{ color: badgeText === "Sold Out" ? "red" : "green" }}>
              {badgeText}
            </p>
          )}
        </div>

        <div id="rating">
          <div className="rating-container">
            <img src={Star} aria-hidden="true" />
            <p id="stars">{card.stats.rating}</p>
          </div>
          <div className="rating-extra-container">
            <p>({card.stats.reviewCount}) ∙ {card.location}</p>
          </div>
        </div>
        <div className="details-container">
          <div id="description">
            <p>{card.title}</p>
          </div>
          <div id="pricing">
            <p>From ${card.price}</p>
            <p>/ person</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
