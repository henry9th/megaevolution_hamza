import { useCalendar } from './Context';

const Current = ({ format = 'MMMM YYYY', children, ...props }) => {
  const { current } = useCalendar();

  return (
    <div {...props}>
      {children
        ? typeof children === 'function'
          ? children(current.toDate())
          : children
        : current.format(format)}
    </div>
  );
};

export default Current;
