import { Stack, Row, Col } from 'react-bootstrap';
import GoldButton from './GoldButton';
import bannerImage from '../../../assets/images/MegaEvolution Illustration 2.png';

const BannerSection = () => {
  return (
    <div className="mt-5 pt-5">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <Stack gap={3} className="text-center text-md-start">
            <h1 className="mb-2">MEGA Marketing</h1>
            <p className="">
              Your NFT collection needs more love and attention driven by
              metaverse. Let alone thousands of interactions and big channels we
              own in Twitter & Telegram, we have global Youtube and Blog
              partners fully focused on blockchain & NFTs.
            </p>
            <p className="text-primary-dark fw-bold ">
              Believe in the power of TOGETHER and find the ultra-cost-efficient
              result you won’t find elsewhere!
            </p>

            <div>
              <GoldButton className="mt-2">Register as a Creator</GoldButton>
            </div>
          </Stack>
        </Col>
        <Col xs={12} md={6}>
          <img
            src={bannerImage}
            alt="banner"
            className="img-fluid mt-4 mt-md-0"
          />
        </Col>
      </Row>
    </div>
  );
};

export default BannerSection;
