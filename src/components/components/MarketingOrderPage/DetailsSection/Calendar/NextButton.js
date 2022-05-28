import { ChevronRightIcon } from '../../../ImageGallery/icons';
import { useCalendar } from './Context';

const NextButton = ({ children, ...props }) => {
  const { next } = useCalendar();

  return (
    <button onClick={next} {...props}>
      {children ? (
        children
      ) : (
        <>
          <ChevronRightIcon />
        </>
      )}
    </button>
  );
};

export default NextButton;
