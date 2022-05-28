import styled from 'styled-components';
import { KlayIcon } from '../../ImageGallery/icons';

const PackageColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr 1.5fr 1.5fr 1.5fr 1.5fr;
  border-right: ${(props) => (props.primary ? '2px solid #edd6ff' : 'none')};
  min-width: 14rem;
  background: ${(props) => (props.selected ? '#EDD6FF80' : '#ffffff')};
  border: none;
  padding: 0;
  margin: 0;

  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  border-right: ${(props) => (props.primary ? '2px solid #edd6ff' : 'none')};
  border-bottom: 2px solid #edd6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1rem;
  background: #ffffff;
`;

const Title = styled.h4`
  color: #0e0d39;
  font-size: 1.125rem;
  margin: 0;
`;

const Cell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid #edd6ff;
  border-right: 1px solid #edd6ff;

  &:last-child {
    border-bottom: none;
  }
`;

const TextDiv = styled.div`
  width: 100%;
  flex: 1;
  //   height: 100%;
  align-self: ${(props) => (props.vertical === 'top' ? 'start' : 'center')};
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #0e0d39;
  font-family: 'Space Grotesk', FontAwesome;
  text-align: ${(props) => props.align || 'left'};
`;

const TextAreaDiv = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #0e0d39;
  font-family: 'Space Grotesk', FontAwesome;
  resize: none;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: left;

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

  &:focus {
    outline: none;
  }
`;

const EmptyColumnDiv = styled.div`
  grid-row: 2 / span 6;
  background: #edd6ff4d;
  color: #edd6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #edd6ff;
  font-size: 6rem;
`;

const PackageForm = ({ data, type, selected, setSelected }) => {
  return (
    <PackageColumn
      disabled={!data}
      selected={selected === type}
      onClick={() => setSelected(type)}
    >
      <Header>
        <Title>{data?.title}</Title>
      </Header>
      {!data ? (
        <EmptyColumnDiv></EmptyColumnDiv>
      ) : (
        <>
          <Cell>
            <TextAreaDiv>{data.description}</TextAreaDiv>
          </Cell>
          <Cell className="p-3">
            <KlayIcon size={0.8} />
            <TextDiv align="right">{data.price}</TextDiv>
            <h6 className="m-0">Klay</h6>
          </Cell>
          <Cell className="p-3">
            <TextDiv align="right">{data.deliveryTime}</TextDiv>
            <h6 className="m-0">Days</h6>
          </Cell>
          <Cell className="p-3">
            <TextDiv align="right">{data.revisions}</TextDiv>
            <h6 className="m-0">Revisions</h6>
          </Cell>
          <Cell>
            <TextAreaDiv>{data.contentLength}</TextAreaDiv>
          </Cell>
        </>
      )}
    </PackageColumn>
  );
};

export default PackageForm;
