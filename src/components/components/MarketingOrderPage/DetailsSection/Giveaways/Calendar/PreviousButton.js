import { useCalendar } from './Context';
import { ChevronLeftIcon } from '../../../../ImageGallery/icons';

const PreviousButton = ({ children, ...props }) => {
  const { prev } = useCalendar();

  return (
    <button {...props} onClick={prev}>
      {children ? children : <ChevronLeftIcon />}
    </button>
  );
};

export default PreviousButton;
