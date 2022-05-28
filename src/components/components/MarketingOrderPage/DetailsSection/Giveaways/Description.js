import styled from 'styled-components';

const TextAreaContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  overflow: hidden;
  border: none;
  background: #edd6ff4d;
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

const Description = ({
  id,
  placeholder,
  description,
  setDescription,
  maxLength,
}) => {
  return (
    <TextAreaContainer>
      <TextArea
        id={id}
        placeholder={placeholder}
        value={description}
        onChange={(e) => setDescription(e.target.value.substring(0, maxLength))}
      />
      <TextAreaHelper danger={description?.length >= maxLength}>
        * Max {maxLength} Words
      </TextAreaHelper>
    </TextAreaContainer>
  );
};

export default Description;
