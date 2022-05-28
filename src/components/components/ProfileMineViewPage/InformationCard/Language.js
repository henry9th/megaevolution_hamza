import styled from 'styled-components';
import { QuestionMarkIcon } from '../../ImageGallery/icons';
import Title from './Title';

const SelectedLanguageTag = styled.div`
  color: #0e0d39;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: 'Space Grotesk';
  margin-right: 1.75rem;
  margin-bottom: 0.5rem;
`;

const Language = () => {
  const selectedLanguages = ['Korean', 'English', 'Japanese'];

  return (
    <div className="mt-4">
      <div className="d-flex align-items-center gap-2 text-primary-dark">
        <Title>Language *</Title>
        <QuestionMarkIcon />
      </div>

      <div className="d-flex mt-3 flex-wrap align-items-center">
        {selectedLanguages.map((language) => (
          <SelectedLanguageTag>{language}</SelectedLanguageTag>
        ))}
      </div>
    </div>
  );
};

export default Language;
