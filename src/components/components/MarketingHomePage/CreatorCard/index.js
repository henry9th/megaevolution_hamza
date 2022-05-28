import { useState } from 'react';
import styled from 'styled-components';
import {
  CartIcon,
  EyeIcon,
  UserIcon,
  YoutubeIcon,
  TwitterIcon,
  BlogIcon,
} from '../../ImageGallery/icons';
import {
  KoreaFlag,
  JapanFlag,
  ChinaFlag,
  ThailandFlag,
  VietnamFlag,
  IndiaFlag,
  FranceFlag,
  PolandFlag,
  UAEFlag,
  SpainFlag,
} from '../../ImageGallery/icons';
import binanceCoinImage from '../../../../assets/images/Binance-Coin.png';
import PackagesDropdown from './PackagesDropdown';
import useOutsideAlerter from '../../../../hooks/useOutsideAlerter';
import useRect from '../../../../hooks/useRect';
import { useEffect } from 'react';
import { useCart } from '../../../../contexts/CartContext';

const flag = {
  Korea: KoreaFlag,
  Japan: JapanFlag,
  China: ChinaFlag,
  Thailand: ThailandFlag,
  Vietnam: VietnamFlag,
  India: IndiaFlag,
  France: FranceFlag,
  Poland: PolandFlag,
  UAE: UAEFlag,
  Spain: SpainFlag,
};

const platformIcon = {
  Youtube: YoutubeIcon,
  Twitter: TwitterIcon,
  Blog: BlogIcon,
};

const compactNumber = (number) => {
  const formatter = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
  });
  return formatter.format(number);
};

const Card = styled.button`
  width: 100%;
  border-radius: 1rem;
  border: 3px solid #edd6ff;
  background: #fcf6ff;
  padding: 1rem 0;
  // max-width: 20rem;
  position: relative;
  color: #0e0d39;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.selected ? '10px 15px 20px 0px #C9A8E3' : 'none'};
  transform: ${(props) => (props.selected ? 'translateY(-5%)' : '')};

  &:disabled {
    cursor: default;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-inline: 1.5rem;
`;

const AvatarWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ffc7c3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  object-fit: cover;
`;

const FlagIcon = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(20%, 30%);
  border-radius: 50%;
  padding: 0;
`;

const Name = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  font-size: 1rem;
  margin: 0;
  text-align: left;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

const AddButton = styled.button`
  background: ${(props) => (props.selected ? '#0E0D39' : '#FFFFFF')};
  border: 2px solid #0e0d39;
  color: ${(props) => (props.selected ? '#FFFFFF' : '#0E0D39')};
  border-radius: 0.75rem;
  padding: 0.125rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 1rem;
  background-color: #edd6ff4d;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 3.312675952911377px 16.563379287719727px 0px #edd6ff;
  border: 2px solid #edd6ff;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding-inline: 1.5rem;
  margin-top: 1rem;
`;

const BodyText = styled.p`
  font-weight: 500;
  font-size: 1rem;
  text-align: left;
`;

const CardInfo = styled.div`
  background: #ffffff;
  padding: 0.75rem 1.5rem;
  border-block: 2px solid #edd6ff;
`;

const SelectContainer = styled.div`
  position: relative;
`;

const SelectButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;

  &:disabled {
    pointer-events: none;
    opacity: 1;
    color: #0e0d39;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  transform: translateX(${({ outsideRight }) => outsideRight}px);
  width: min(80vw, 64rem);
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const LanguageTitle = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
`;

const Language = styled.span`
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`;

const CreatorCard = ({
  clickable,
  removable,
  data,
  toggleItemSelection,
  isSelected,
}) => {
  const {
    id,
    name,
    avatar,
    language,
    image,
    description,
    platform,
    rating,
    followers,
    viewers,
    price,
    type,
  } = data;

  const { inCart, addToCart, removeFromCart } = useCart();
  const [selectedType, setSelectedType] = useState(type || 'Premium');
  const [showDropdown, setShowDropdown, ref] = useOutsideAlerter(false);
  const dropdownRect = useRect(ref);

  const [pixelsOutsideRight, setPixelsOutsideRight] = useState(0);
  const [pixelsOutsideLeft, setPixelsOutsideLeft] = useState(0);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    if (dropdownRect.right > window.innerWidth) {
      setPixelsOutsideRight(window.innerWidth - dropdownRect.right);
    }
    if (dropdownRect.left < 0) {
      setPixelsOutsideLeft(dropdownRect.left);
    }
  }, [dropdownRect]);

  useEffect(() => {
    if (pixelsOutsideRight < 0) {
      setTranslate(pixelsOutsideRight - 100);
    }
  }, [pixelsOutsideRight]);

  useEffect(() => {
    if (pixelsOutsideLeft > 0) {
      setTranslate(pixelsOutsideLeft + 100);
    }
  }, [pixelsOutsideLeft]);

  const Flag = flag[language];
  const PlatformIcon = platformIcon[platform];
  return (
    <Card
      onClick={clickable ? () => toggleItemSelection(id) : () => {}}
      selected={isSelected}
      disabled={!clickable}
    >
      <CardHeader>
        <AvatarWrapper>
          <Avatar src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          <FlagIcon>
            <Flag size={0.3} className="flag-shadow" />
          </FlagIcon>
        </AvatarWrapper>
        <Name>{name}</Name>
        {removable ? (
          <IconButton
            onClick={() => {
              removeFromCart(id);
              toggleItemSelection(id);
            }}
          >
            <i className="fa fa-times-circle fa-lg" />
          </IconButton>
        ) : (
          <AddButton
            selected={inCart(id)}
            onClick={() => {
              if (inCart(id)) {
                removeFromCart(id);
              } else {
                addToCart({ ...data, type: selectedType });
              }
            }}
          >
            {inCart(id) ? (
              'Added'
            ) : (
              <>
                <CartIcon size={0.8} />
                <span>Add</span>
              </>
            )}
          </AddButton>
        )}
      </CardHeader>
      <CardBody>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </ImageContainer>
        <BodyText className="mt-1">{description}</BodyText>
      </CardBody>
      <CardInfo>
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <PlatformIcon size={platform === 'Blog' ? 0.4 : 0.6} />
          <span className="d-flex gap-1 align-items-center">
            <i className="fa fa-star" />
            <span>{rating}</span>
          </span>
          <span className="d-flex gap-1 align-items-center">
            <UserIcon size={0.8} />
            <span>{compactNumber(followers)}</span>
          </span>
          <span className="d-flex gap-1 align-items-center">
            <EyeIcon size={0.8} />
            <span>{compactNumber(viewers)}</span>
          </span>
        </div>
        <div className="d-flex mt-2 gap-3 flex-wrap align-items-center">
          <SelectContainer>
            <SelectButton onClick={() => setShowDropdown(!showDropdown)}>
              {selectedType} <i className="fa fa-chevron-down"></i>
            </SelectButton>

            <Dropdown ref={ref} outsideRight={translate} open={showDropdown}>
              <PackagesDropdown
                selectedType={selectedType}
                setSelectedType={(type) => {
                  setSelectedType(type);
                  addToCart({ ...data, type });
                }}
              />
            </Dropdown>
          </SelectContainer>
          <span className="d-flex gap-2 align-items-center">
            <img src={binanceCoinImage} alt="B" />
            {price}
          </span>
        </div>
        <div className="d-flex gap-3 mt-2">
          <LanguageTitle>Language</LanguageTitle>
          <div className="d-flex flex-wrap">
            <Language>Korean</Language>
            <Language>Japanese</Language>
            <Language>Indonesian</Language>
            <Language>Spanish</Language>
          </div>
        </div>
      </CardInfo>
    </Card>
  );
};

export default CreatorCard;
