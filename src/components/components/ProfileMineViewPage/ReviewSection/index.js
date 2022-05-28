import Card from '../Card';
import Head from './Head';
import RatingBars from './RatingBars';
import ReviewsList from './ReviewsList';

const ReviewSection = () => {
  return (
    <div className="mt-5 pt-4">
      <h3>Reviews</h3>

      <Card>
        <Head />
        <RatingBars />
        <ReviewsList />
      </Card>
    </div>
  );
};

export default ReviewSection;
