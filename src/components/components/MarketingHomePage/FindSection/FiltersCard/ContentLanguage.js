import { useState } from 'react';
import styled from 'styled-components';
import {
  GlobalFlagIcon,
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
import Title from './Title';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 0.7px solid #d4d4d4;
  padding-bottom: 1rem;
`;

const FlagsCarousalWrapper = styled.div`
  overflow-x: hidden;
  padding: 0.5rem 0;
  flex: 1;
  transition: transform 0.5s ease-in-out;
`;

const FlagsCarousalContainer = styled.div`
  display: flex;
  gap: 3rem;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${({ currentIndex }) => currentIndex * 100}px);
`;

const FlagIconButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ selected }) =>
    selected ? 'translateY(-0.5rem)' : 'translateY(0)'};
  box-shadow: ${({ selected }) =>
    selected ? '0px 10px 10px 0px #EDD6FF' : '0px 3px 5px 0px #00000055'};
`;

const CarousalButton = styled.button`
  border: none;
  background: #edd6ff;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const options = [
  { label: 'Global', value: 'Global', icon: GlobalFlagIcon },
  { label: 'Korea', value: 'Korea', icon: KoreaFlag },
  { label: 'Japan', value: 'Japan', icon: JapanFlag },
  { label: 'China', value: 'China', icon: ChinaFlag },
  { label: 'Thailand', value: 'Thailand', icon: ThailandFlag },
  { label: 'Vietnam', value: 'Vietnam', icon: VietnamFlag },
  { label: 'India', value: 'India', icon: IndiaFlag },
  { label: 'France', value: 'France', icon: FranceFlag },
  { label: 'Poland', value: 'Poland', icon: PolandFlag },
  {
    label: 'United Arab Emirates',
    value: 'United Arab Emirates',
    icon: UAEFlag,
  },
  { label: 'Spain', value: 'Spain', icon: SpainFlag },
];

const ContentLanguage = ({ selected, setSelected }) => {
  const [carousalIndex, setCarousalIndex] = useState(0);

  return (
    <Wrapper>
      <Title>Content Language</Title>
      {carousalIndex > 0 && (
        <CarousalButton onClick={() => setCarousalIndex(carousalIndex - 1)}>
          <i className="fa fa-chevron-left"></i>
        </CarousalButton>
      )}
      <FlagsCarousalWrapper>
        <FlagsCarousalContainer currentIndex={carousalIndex}>
          {options.map((option) => (
            <FlagIconButton
              key={option.value}
              onClick={() => setSelected(option.value)}
              selected={selected === option.value}
            >
              <option.icon />
            </FlagIconButton>
          ))}
        </FlagsCarousalContainer>
      </FlagsCarousalWrapper>
      {carousalIndex < options.length - 1 && (
        <CarousalButton onClick={() => setCarousalIndex(carousalIndex + 1)}>
          <i className="fa fa-chevron-right"></i>
        </CarousalButton>
      )}
    </Wrapper>
  );
};

export default ContentLanguage;
