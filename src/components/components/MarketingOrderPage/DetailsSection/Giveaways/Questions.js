import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
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

const Questions = ({ questions, setQuestions, maxQuestions }) => {
  return (
    <div className="mt-2">
      {questions.map((question, index) => {
        return (
          <>
            {index !== 0 &&
              questions.length < maxQuestions &&
              index === questions.length - 1 && <Divider />}

            <Row key={index}>
              <Input
                type="text"
                placeholder="ex. Enter your Twitter ID / Enter your Metamask wallet address / Enter your Discord Handle "
                value={question}
                onChange={(e) => {
                  setQuestions(
                    questions.map((q, i) => {
                      if (i === index) {
                        return e.target.value;
                      }
                      return q;
                    })
                  );
                }}
                show={question.length > 0}
              />
              {questions.length > 1 &&
                (questions.length >= maxQuestions ||
                  index !== questions.length - 1) && (
                  <IconButton
                    className="position-absolute end-0"
                    onClick={() => {
                      questions.splice(index, 1);
                      setQuestions([...questions]);
                    }}
                  >
                    <i
                      className="fa fa-times-circle fa-lg me-1"
                      aria-hidden="true"
                    ></i>
                  </IconButton>
                )}
            </Row>
          </>
        );
      })}

      {questions.length < maxQuestions && (
        <div className="text-center mt-2">
          <IconButton
            onClick={() => {
              if (questions.length < maxQuestions) {
                setQuestions([...questions, '']);
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

export default Questions;
