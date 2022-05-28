import { useState } from 'react';
import styled from 'styled-components';
import { useDate } from './DatesContext';
import DeliveryCalendar from './DeliveryCalendar';
import Giveaways from './Giveaways';
import Links from './Links';
import TermsAndConditions from './TermsAndConditions';
import TopBar from './TopBar';
import UploadFiles from './UploadFiles';

const Container = styled.div`
  background: #ffffff;
  border: 3px solid #edd6ff;
  border-radius: 1rem;
  padding: 3rem;
  margin-top: -2rem;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 425px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 2rem 1rem;
  }
`;

const Label = styled.label`
  color: #0e0d39;
  font-size: 1.375rem;
  font-weight: 700;
  font-family: 'Space Grotesk';
`;

const Input = styled.input`
  color: #0e0d39;
  border: 3px solid #edd6ff;
  border-radius: 1rem;
  background: #ffffff;
  padding: 0.75rem 1rem;
  width: 100%;
  min-width: 0;
  margin-top: 0.5rem;
  outline: none;
`;

const Card = styled.div`
  width: 100%;
  height: 700px;
  padding: 2rem 1rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid #edd6ff;
  background: ${(props) => props.background || '#ffffff'};
  position: relative;

  @media (max-width: 768px) {
    height: 600px;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 425px) {
    height: 500px;
    padding: 0.75rem 0.365rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 0.25rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  resize: none;
  padding: 0 0.5rem;
  overflow-y: scroll;
  color: #0e0d39;
  position: relative;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #cfcfd7;
    transition: all 0.3s ease-in-out;
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bfbfc7;
  }
`;

const TextAreaHelper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${(props) => (props.danger ? '#ff0000' : '#0e0d39')};
  font-size: 0.75rem;
  font-weight: 300;
  margin: 0.5rem 1rem;
`;

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 5000;

const DetailsSection = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState([
    {
      platform: '',
      url: '',
    },
  ]);
  const { setDeliveryDate, setGiveawayDate } = useDate();
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const clear = () => {
    setTitle('');
    setDescription('');
    setLinks([
      {
        platform: '',
        url: '',
      },
    ]);
    setDeliveryDate(null);
    setGiveawayDate(null);
  };

  return (
    <Container>
      <TopBar clear={clear} />

      <div className="mt-4">
        <Label htmlFor="title">Project Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value.substring(0, MAX_TITLE_LENGTH))
          }
        />
      </div>

      <div className="row ">
        <div className="col-12 col-lg-8 mt-4">
          <Label htmlFor="description">Description</Label>

          <Card className="mt-3">
            <TextArea
              id="description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value.substring(0, MAX_DESCRIPTION_LENGTH)
                )
              }
              placeholder={`    Please use this space to freely talk about you and/or your project.
            

    A good description in this space typically includes:
    General
        Greetings and brief self-introduction
        Area of interest regarding crypto/metaverse/NFT/etc.
                
    Creators
        Skills and capability as a creator
        Resume and experience
        Description of packages for clients`}
            />
            <TextAreaHelper
              danger={description?.length >= MAX_DESCRIPTION_LENGTH}
            >
              * Max {MAX_DESCRIPTION_LENGTH} Words
            </TextAreaHelper>
          </Card>
        </div>

        <div className="col-12 col-lg-4 mt-4">
          <Label>Links</Label>
          <Links links={links} setLinks={setLinks} />
        </div>
      </div>

      <div className="row ">
        <div className="col-12 col-lg-7 mt-5">
          <DeliveryCalendar />
        </div>
        <div className="col-12 col-lg-5 mt-5 d-flex flex-column">
          <UploadFiles />
        </div>
      </div>

      <Giveaways />

      <div className="mt-5 row">
        <div className="col-12 col-md-9 col-lg-5">
          <Label>Terms & Conditions</Label>
          <TermsAndConditions
            termsAndConditions={termsAndConditions}
            setTermsAndConditions={setTermsAndConditions}
          />
        </div>
      </div>
    </Container>
  );
};

export default DetailsSection;
