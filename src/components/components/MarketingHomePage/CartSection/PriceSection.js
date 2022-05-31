import styled from 'styled-components';
import GoldButton from '../GoldButton';
import BUSDImage from '../../../../assets/images/BUSD 2.png';
import BNBImage from '../../../../assets/images/Binance-Coin.png';
import { KlayIcon } from '../../ImageGallery/icons';
import { useNavigate } from '@reach/router';

const Prices = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  border: ${({ dark }) =>
    dark ? '2.82px solid #675B4E' : '2.82px solid #F3BA2F'};
  background: ${({ dark }) => (dark ? '#F1F1F1' : '#FEF9ED')};
  color: ${({ dark }) => (dark ? '#675B4E' : '#F3BA2F')};
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0px 2.82456111907959px 11.29824447631836px 0px #00000033;
  margin-bottom: 1rem;
  margin-right: 3rem;

  @media (max-width: 768px) {
    margin-right: 2rem;
  }

  @media (max-width: 576px) {
    margin-right: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 2rem;
  height: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PriceSection = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-4 d-flex justify-content-md-between justify-content-center align-items-center flex-wrap">
      <div>
        <h6>* Total Price in Cart</h6>
        <Prices>
          <PriceDiv>
            <ImageContainer>
              <Image src={BNBImage} alt="BNB" />
            </ImageContainer>
            <span>Total</span>
            <span className="ms-2">3.99</span>
            <span>BNB</span>
          </PriceDiv>
          <PriceDiv>
            <ImageContainer>
              <Image src={BUSDImage} alt="BUSD" />
            </ImageContainer>
            <span>Total</span>
            <span className="ms-2">3.99</span>
            <span>BUSD</span>
          </PriceDiv>
          <PriceDiv dark>
            <KlayIcon />
            <span>Total</span>
            <span className="ms-2">3.99</span>
            <span>KLAY</span>
          </PriceDiv>
        </Prices>
      </div>

      <GoldButton minWidth="12rem" onClick={() => navigate('/order')}>
        Continue
      </GoldButton>
    </div>
  );
};

export default PriceSection;
