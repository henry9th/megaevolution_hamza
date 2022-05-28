import styled from 'styled-components';
import BUSDImage from '../../../assets/images/BUSD 2-lg.png';
import BNBImage from '../../../assets/images/Binance-Coin-BNB-lg.png';
import { KlayIcon } from '../ImageGallery/icons';

const Prices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PriceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  border-radius: 3rem;
  border: ${({ dark }) =>
    dark ? '2.82px solid #675B4E' : '2.82px solid #F3BA2F'};
  background: ${({ dark }) => (dark ? '#F1F1F1' : '#FEF9ED')};
  color: ${({ dark }) => (dark ? '#675B4E' : '#F3BA2F')};
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0px 5px 20px 0px #00000033;
  margin: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 8px 8px 30px 0px #000000;
  }

  @media (max-width: 992px) {
    margin: 1rem;
  }

  @media (max-width: 576px) {
    margin: 0.5rem;
  }

  & p {
    margin: 0;
    text-align: left;
  }

  & > div > p {
    margin: 0.5rem 0;
  }

  & small {
    font-size: 0.75rem;
  }
`;

const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #0e0d39;
  border: 1px solid #0e0d39;
  border-radius: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0px 5px 20px 0px #00000033;
  margin: 1.5rem;
  transition: all 0.3s ease-in-out;
  padding: 3.5rem 2.5rem;

  &:hover {
    box-shadow: 8px 8px 30px 0px #000000;
  }

  @media (max-width: 992px) {
    margin: 1rem;
  }

  @media (max-width: 576px) {
    margin: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;

  @media (max-width: 1024px) {
    width: 6rem;
    height: 6rem;
  }

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CheckoutSection = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center">Check out</h3>
      <div className="mt-4 d-flex justify-content-center align-items-center flex-wrap">
        <Prices>
          <PriceButton>
            <ImageContainer>
              <Image src={BNBImage} alt="BNB" />
            </ImageContainer>
            <div className="text-left">
              <p>Check Out</p>
              <p>Total</p>
              <div className="d-flex gap-3">
                <div>
                  <p>1.99</p>
                  <small>+ 0.0597 BNB</small>
                </div>
                <div>
                  <p>BNB</p>
                  <small>Service Fee</small>
                </div>
              </div>
            </div>
          </PriceButton>
          <PriceButton dark>
            <KlayIcon size={4} />
            <div>
              <p>Check Out</p>
              <p>Total</p>
              <div className="d-flex gap-3">
                <div>
                  <p>1.99</p>
                  <small>+ 0.0597 KLAY</small>
                </div>
                <div>
                  <p>KLAY</p>
                  <small>Service Fee</small>
                </div>
              </div>
            </div>
          </PriceButton>
          <PriceButton>
            <ImageContainer>
              <Image src={BUSDImage} alt="BUSD" />
            </ImageContainer>
            <div>
              <p>Check Out</p>
              <p>Total</p>
              <div className="d-flex gap-3">
                <div>
                  <p>1.99</p>
                  <small>+ 0.0597 BUSD</small>
                </div>
                <div>
                  <p>BUSD</p>
                  <small>Service Fee</small>
                </div>
              </div>
            </div>
          </PriceButton>

          <ComingSoon>Coming Soon</ComingSoon>
        </Prices>
      </div>
    </div>
  );
};

export default CheckoutSection;
