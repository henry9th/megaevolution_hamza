import { useState } from 'react';
import styled from 'styled-components';
import {
  CartIcon,
  EyeIcon,
  UserIcon,
  LinkIcon,
} from '../../../ImageGallery/icons';
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
} from '../../../ImageGallery/icons';
import binanceCoinImage from '../../../../../assets/images/Binance-Coin.png';
import PackagesDropdown from '../../CreatorCard/PackagesDropdown';
import useOutsideAlerter from '../../../../../hooks/useOutsideAlerter';
import useRect from '../../../../../hooks/useRect';
import { useEffect } from 'react';
import { useCart } from '../../../../../contexts/CartContext';

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

const compactNumber = (number) => {
  const formatter = new Intl.NumberFormat('en-GB', {
    notation: 'compact',
  });
  return formatter.format(number);
};

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
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ outsideRight }) => outsideRight}px);
  width: min(80vw, 64rem);
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const Td = styled.td`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #edd6ff;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #0e0d39;
`;

const StatsCell = styled(Cell)`
  display: grid;
  grid-template-columns: 3rem 4rem 4rem;
  gap: 0.5rem;
  width: min-content;
`;

const LinkCell = styled(Cell)`
  text-decoration: none;
  cursor: pointer;
  gap: 0.5rem;

  &:hover {
    color: #0e0d39;
  }
`;

const TableRow = ({ data }) => {
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
  } = data;

  const { inCart, addToCart, removeFromCart } = useCart();
  const [selectedType, setSelectedType] = useState('Premium');
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

  return (
    <tr>
      <Td>
        <Cell>
          <AvatarWrapper>
            <Avatar src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <FlagIcon>
              <Flag size={0.3} className="flag-shadow" />
            </FlagIcon>
          </AvatarWrapper>
          <Name>{name}</Name>
        </Cell>
      </Td>
      <Td>
        <Cell>
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
          <span className="d-flex gap-2 ms-2 align-items-center">
            <img src={binanceCoinImage} alt="B" />
            {price}
          </span>
        </Cell>
      </Td>
      <Td>
        <StatsCell>
          <span className="d-flex gap-1 align-items-center ">
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
        </StatsCell>
      </Td>
      <Td>
        <LinkCell as="a">
          {platform} <LinkIcon size={0.9} />
        </LinkCell>
      </Td>
      <Td>
        <Cell>
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
        </Cell>
      </Td>
    </tr>
  );
};

export default TableRow;
