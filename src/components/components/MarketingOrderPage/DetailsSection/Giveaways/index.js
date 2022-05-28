import { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon, QuestionMarkIcon } from '../../../ImageGallery/icons';
import Description from './Description';
import GiveawayCalendar from './GiveawayCalendar';
import PrizeDetails from './PrizeDetails';
import { useDate } from '../DatesContext';
import useOutsideAlerter from '../../../../../hooks/useOutsideAlerter';
import Actions from './Actions';
import Questions from './Questions';

const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  border: 1.96px solid #aaaaaa;
  background: ${(props) => props.background || '#ffffff'};
  position: relative;
  color: #0e0d39;
  transition: all 0.2s ease-in-out;
`;

const CardTop = styled.div`
  padding: 1rem;
  background: #9115cb;
  border-bottom: 1.96px solid #aaaaaa;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

const CardBody = styled.div`
  width: 100%;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (min-width: 425px) {
    padding: 1.5rem 0.5rem;
  }
`;

const Label = styled.label`
  color: #aaaaaa;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Space Grotesk';
`;

const TitleInput = styled.input`
  width: 100%;
  color: #0e0d39;
  border: none;
  border-bottom: 3px solid #c456e9;
  outline: none;
  background: transparent;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1;
  padding: 0.5rem 0;

  &::placeholder {
    color: #aaaaaa;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`;

const CalendarButton = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  background: #edd6ff4d;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LimitNumber = styled.span`
  color: ${(props) => (props.limit ? '#ff0000' : 'inherit')};
  font-weight: ${(props) => (props.limit ? '700' : 'inherit')};
`;

const MAX_DESCRIPTION_LENGTH = 300;
const MAX_PRIZES = 5;
const MAX_ACTIONS = 10;
const MAX_QUESTIONS = 10;

const Giveaways = () => {
  const [isCalendarOpen, setIsCalendarOpen, ref] = useOutsideAlerter(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prizes, setPrizes] = useState([
    {
      name: '',
      amount: '',
    },
  ]);
  const [actions, setActions] = useState([
    {
      type: '',
      url: '',
    },
  ]);
  const [questions, setQuestions] = useState(['']);

  const { giveawayDate } = useDate();

  return (
    <div className="w-100 mt-5">
      <div className="d-flex align-items-center gap-4">
        <div className="d-flex align-items-center gap-2">
          <h4 className="m-0">Giveaways</h4>
          <QuestionMarkIcon />
        </div>
        <div className="form-check text-primary-dark flex-row align-items-center gap-2 pt-1">
          <input
            className="form-check-input m-0"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label text-uppercase"
            htmlFor="flexCheckDefault"
          >
            No Giveaways
          </label>
        </div>
      </div>

      <Card className="mt-2">
        <CardTop />
        <CardBody>
          <div>
            <Label htmlFor="giveaway-title">Title</Label>
            <TitleInput
              id="giveaway-title"
              placeholder="ex. MegaEvolution NFT’s AIRDROP EVENT"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <Label htmlFor="giveaway-description">Giveaway Description </Label>
            <Description
              id="giveaway-description"
              placeholder="Describe your project here."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={MAX_DESCRIPTION_LENGTH}
            />
          </div>
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <Label htmlFor="giveaway-prize-name">
                Prize Details *{' '}
                <LimitNumber limit={prizes.length >= MAX_PRIZES}>
                  {prizes.length}
                </LimitNumber>
                /{MAX_PRIZES}{' '}
              </Label>
              <PrizeDetails
                prizes={prizes}
                setPrizes={setPrizes}
                maxPrizes={MAX_PRIZES}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-4">
              <Label htmlFor="giveaway-date">
                Giveaway Event End Date * <QuestionMarkIcon />
              </Label>

              <CalendarButton
                className="mt-2"
                onClick={() => setIsCalendarOpen(true)}
              >
                <span>
                  {giveawayDate
                    ? giveawayDate.format('DD-MMMM-YYYY')
                    : 'DD-MMMM-YYYY'}
                </span>
                <span className="fa-rotate-270">
                  <ChevronLeftIcon />
                </span>
              </CalendarButton>

              <div
                ref={ref}
                className="mt-3 position-relative"
                style={{
                  zIndex: isCalendarOpen ? '1' : '-1',
                }}
              >
                {isCalendarOpen && <GiveawayCalendar />}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="giveaway-actions">
              How to Enter (Action){' '}
              <LimitNumber limit={actions.length >= MAX_ACTIONS}>
                {actions.length}
              </LimitNumber>
              /{MAX_ACTIONS}
            </Label>
            <Actions
              actions={actions}
              setActions={setActions}
              maxActions={MAX_ACTIONS}
            />
          </div>
          <div className="mt-5">
            <Label htmlFor="giveaway-questions">
              How to Enter (Question){' '}
              <LimitNumber limit={questions.length >= MAX_QUESTIONS}>
                {questions.length}
              </LimitNumber>
              /{MAX_QUESTIONS}
            </Label>
            <Questions
              questions={questions}
              setQuestions={setQuestions}
              maxQuestions={MAX_QUESTIONS}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Giveaways;
