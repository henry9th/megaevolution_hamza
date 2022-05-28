import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 700px;
  padding: 2rem 1rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid #edd6ff;
  background: ${(props) => props.background || '#ffffff'};
  position: relative;

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.365rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 0.25rem;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  height: 95%;
  border: none;
  background: transparent;
  padding: 0 0.5rem 0 0;
  overflow-y: scroll;

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

const LinkRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  margin-bottom: 0.5rem;
`;

const LinkTitle = styled.h5`
  font-weight: 300;
  text-align: center;
`;

const LinkInput = styled.input`
  color: #aaaaaa;
  border-radius: 0.5rem;
  background: #fcf6ff;
  padding: 0.5rem 0.75rem;
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

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

const Links = ({ links, setLinks }) => {
  return (
    <Card className="mt-3">
      <LinkRow>
        <LinkTitle>Platform</LinkTitle>
        <LinkTitle>URL</LinkTitle>
      </LinkRow>
      <LinksContainer>
        {links.map((link, index) => (
          <LinkRow key={index}>
            <LinkInput placeholder="W          <LinkRow>
ple.com" />
            <IconButton
              className="position-absolute end-0"
              onClick={() => {
                setLinks((prevLinks) => [
                  ...prevLinks.slice(0, index),
                  ...prevLinks.slice(index + 1),
                ]);
              }}
            >
              <i
                className="fa fa-times-circle fa-lg me-1"
                aria-hidden="true"
              ></i>
            </IconButton>
          </LinkRow>
        ))}
        <div className="text-center py-2">
          <IconButton
            onClick={() => {
              setLinks((prevLinks) => [
                ...prevLinks,
                {
                  platform: '',
                  url: '',
                },
              ]);
            }}
          >
            <i className="fa fa-plus-circle fa-2x text-primary-light" />
          </IconButton>
        </div>
      </LinksContainer>
    </Card>
  );
};

export default Links;
