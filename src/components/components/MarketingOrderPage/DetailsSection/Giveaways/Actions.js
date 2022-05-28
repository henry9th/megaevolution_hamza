import styled from 'styled-components';
import Select from 'react-select';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  gap: 1rem;
  position: relative;
  margin-bottom: 0.5rem;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const LinkInput = styled.input`
  color: #0e0d39;
  border-radius: 0.75rem;
  background: #edd6ff4d;
  padding: 0.75rem 1.75rem;
  width: 100%;
  min-width: 0;
  outline: none;
  border: 2px solid #fcf6ff;
  transition: all 0.3s ease-in-out;
  padding-right: ${(props) => (props.show ? '2.5rem' : '0.75rem')};

  &:focus {
    border: 2px solid #edd6ff;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #edd6ff;
  margin: 1rem 0;
  border: none;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

// select
const types = [
  {
    label: 'Custom',
    value: 'Custom',
  },
  {
    label: 'Follow on Twitter',
    value: 'Twitter',
  },
  {
    label: 'Join Discord Server',
    value: 'Discord',
  },
  {
    label: 'Join Telegram',
    value: 'Telegram',
  },
  {
    label: 'Join on Kakao',
    value: 'Kakao',
  },
  {
    label: 'Join on LINE',
    value: 'LINE',
  },
  {
    label: 'Join on WeChat',
    value: 'WeChat',
  },
  {
    label: 'Visit YouTube Channel',
    value: 'YouTube',
  },
];

const OptionWrapper = styled.div`
  text-align: start;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: ${(props) => (props.isDisabled ? '#ccc' : '#0e0d39')};
  font-weight: 700;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Option = ({ innerProps, isDisabled, data }) => {
  if (isDisabled) return null;

  return (
    <OptionWrapper {...innerProps} isDisabled={isDisabled}>
      <span>{data.label}</span>
    </OptionWrapper>
  );
};

const selectCustomStyles = {
  container: (base) => ({
    ...base,
    minWidth: '8rem',
  }),
  control: (base) => ({
    ...base,
    width: '100%',
    margin: '0',
    padding: '0.5rem',
    border: 'none',
    color: '#0e0d39',
    background: '#EDD6FF4d',
    boxShadow: 'none',
    borderRadius: '0.75rem',
  }),
  valueContainer: (base) => ({
    ...base,
    fontSize: '1rem',
    padding: '0 1rem',
    fontWeight: '600',
    fontFamily: 'Space Grotesk',
  }),
  menu: (base) => ({
    ...base,
    border: '3px solid #edd6ff',
    borderRadius: '1rem',
    zIndex: 100,
    width: '14rem',
    right: '0',
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '18rem',
    overflow: 'auto',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#0e0d39',

    '&:hover': {
      color: '#0e0d39',
      cursor: 'pointer',
    },
  }),
};

const Actions = ({ actions, setActions, maxActions }) => {
  return (
    <div className="mt-2">
      {actions.map((action, index) => {
        return (
          <>
            {index !== 0 &&
              actions.length < maxActions &&
              index === actions.length - 1 && <Divider />}
            <Row>
              <Select
                styles={selectCustomStyles}
                options={types}
                components={{
                  Option,
                  IndicatorSeparator: () => null,
                }}
                onChange={(type) => {
                  setActions([
                    ...actions.slice(0, index),
                    { ...action, type: type.value },
                    ...actions.slice(index + 1),
                  ]);
                }}
                value={types.find((type) => type.value === action.type)}
                show={actions.length < maxActions}
              />
              <LinkInput
                type="text"
                placeholder="Copy and paste link"
                value={action.link}
                onChange={(e) => {
                  setActions([
                    ...actions.slice(0, index),
                    { ...action, link: e.target.value },
                    ...actions.slice(index + 1),
                  ]);
                }}
              />
              {actions.length > 1 &&
                (actions.length >= maxActions ||
                  index !== actions.length - 1) && (
                  <IconButton
                    className="position-absolute end-0"
                    onClick={() => {
                      actions.splice(index, 1);
                      setActions([...actions]);
                    }}
                  >
                    <i
                      className="fa fa-times-circle fa-lg me-1"
                      aria-hidden="true"
                    ></i>
                  </IconButton>
                )}
            </Row>{' '}
          </>
        );
      })}

      {actions.length < maxActions && (
        <div className="text-center mt-2">
          <IconButton
            onClick={() => {
              if (actions.length < maxActions) {
                setActions([...actions, { type: '', link: '' }]);
              }
            }}
          >
            <i className="fa fa-plus-circle fa-3x text-primary-light" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Actions;
