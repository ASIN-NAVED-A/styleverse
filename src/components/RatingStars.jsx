const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, i) => <span key={i}>⭐</span>)}
      {halfStar && <span>⭐</span>}
    </div>
  );
};

export default RatingStars;