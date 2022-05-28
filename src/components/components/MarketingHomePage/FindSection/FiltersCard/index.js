import { useState } from 'react';
import styled from 'styled-components';
import ContentLanguage from './ContentLanguage';
import KeywordsFilter from './KeywordsFilter';
import LanguageFilter from './LanguageFilter';
import PaymentFilter from './PaymentFilter';
import SubscribersFilter from './SubscribersFilter';
import ViewsFilter from './ViewsFilter';

const Card = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: -3px 4px 20px 0px #ccc8c8;
  padding: 2.5rem;
  margin-top: 1.5rem;
`;

const FiltersCard = () => {
  const [selectedContentLanguage, setSelectedContentLanguage] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedPayments, setSelectedPayments] = useState([]);
  const [selectedSubscribers, setSelectedSubscribers] = useState([]);
  const [selectedViews, setSelectedViews] = useState([]);

  return (
    <Card>
      <ContentLanguage
        selected={selectedContentLanguage}
        setSelected={setSelectedContentLanguage}
      />
      <LanguageFilter
        selected={selectedLanguages}
        setSelected={setSelectedLanguages}
      />
      <KeywordsFilter
        selected={selectedKeywords}
        setSelected={setSelectedKeywords}
      />
      <PaymentFilter
        selected={selectedPayments}
        setSelected={setSelectedPayments}
      />
      <SubscribersFilter
        selected={selectedSubscribers}
        setSelected={setSelectedSubscribers}
      />
      <ViewsFilter selected={selectedViews} setSelected={setSelectedViews} />
    </Card>
  );
};

export default FiltersCard;
