import { QuestionMarkIcon } from '../../ImageGallery/icons';
import Title from './Title';

const ContentLanguage = () => {
  return (
    <div>
      <div className="d-flex align-items-center gap-2 text-primary-dark">
        <Title>Content Language *</Title>
        <QuestionMarkIcon />
      </div>

      <div className="d-flex mt-2 justify-content-start">
        <h4>Korean</h4>
      </div>
    </div>
  );
};

export default ContentLanguage;
