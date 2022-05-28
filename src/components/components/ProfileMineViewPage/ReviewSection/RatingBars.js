import { Stack } from 'react-bootstrap';
import styled from 'styled-components';

const Tag = styled.span`
  background: ${(props) => (props.filled ? '#EDD6FF' : '#FFFFFF')};
  border: ${(props) => (props.noBorder ? 'none' : '2px solid #edd6ff')};
  border-radius: 50px;
  color: ${(props) => (props.dark ? '#0e0d39' : '#C7C7C7')};
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  width: ${(props) => props.width || 'auto'};
  text-align: center;
`;

const Bar = styled.div`
  background: ${(props) => (props.muted ? '#C7C7C733' : '#FFC54333')};
  border-radius: 50px;
  height: 0.75rem;
  position: relative;
  flex-grow: 1;

  @media (max-width: 480px) {
    visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
  }

  @media (min-width: 480px) {
    display: ${(props) => (props.visible ? 'none' : 'block')};
  }
`;

const BarInner = styled.div`
  background: ${(props) => (props.muted ? '#C7C7C74d' : '#FFC543')};
  border-radius: 50px;
  height: 100%;
  width: ${(props) => props.width}%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RatingBars = () => {
  return (
    <Stack className="mt-4" gap={2}>
      <Row>
        <Tag filled dark width="5rem">
          5 Stars
        </Tag>
        <Bar hide>
          <BarInner width={70} />
        </Bar>
        <Tag dark noBorder width="5rem">
          (2303)
        </Tag>
      </Row>
      <Row>
        <Bar visible>
          <BarInner width={70} />
        </Bar>
      </Row>
      <Row className="align-items-center">
        <Tag dark noBorder width="5rem">
          4 Stars
        </Tag>
        <Bar hide>
          <BarInner width={40} />
        </Bar>
        <Tag dark noBorder width="5rem">
          (132)
        </Tag>
      </Row>
      <Row>
        <Bar visible>
          <BarInner width={40} />
        </Bar>
      </Row>
      <Row className="align-items-center">
        <Tag noBorder width="5rem">
          3 Stars
        </Tag>
        <Bar muted hide>
          <BarInner muted width={20} />
        </Bar>
        <Tag noBorder width="5rem">
          (0)
        </Tag>
      </Row>
      <Row>
        <Bar muted visible>
          <BarInner muted width={20} />
        </Bar>
      </Row>
      <Row className="align-items-center">
        <Tag noBorder width="5rem">
          2 Stars
        </Tag>
        <Bar muted hide>
          <BarInner muted width={20} />
        </Bar>
        <Tag noBorder width="5rem">
          (0)
        </Tag>
      </Row>
      <Row>
        <Bar muted visible>
          <BarInner muted width={20} />
        </Bar>
      </Row>
      <Row className="align-items-center">
        <Tag noBorder width="5rem">
          1 Stars
        </Tag>
        <Bar muted hide>
          <BarInner muted width={20} />
        </Bar>
        <Tag noBorder width="5rem">
          (0)
        </Tag>
      </Row>
      <Row>
        <Bar muted visible>
          <BarInner muted width={20} />
        </Bar>
      </Row>
    </Stack>
  );
};

export default RatingBars;
