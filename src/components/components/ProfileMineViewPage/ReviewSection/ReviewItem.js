import styled from 'styled-components';
import {
  ThumbsDownIcon,
  ThumbsUpIcon,
  YoutubeIcon,
} from '../../ImageGallery/icons';

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  grid-gap: 1rem;
  align-items: start;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfilePicWrapper = styled.div`
  overflow: hidden;
  width: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #cbcaeb;
  flex-shrink: 0;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
`;

const Button = styled.button`
  border: 1px solid #edd6ff;
  border-radius: 0.25rem;
  background-color: #ffffff;
  color: #0e0d39;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ReviewItem = () => {
  return (
    <Wrapper>
      <span className="d-none d-md-inline">
        <ProfilePicWrapper>
          <ProfilePic />
        </ProfilePicWrapper>
      </span>
      <Content>
        <div className="d-flex align-items-center gap-2 gap-sm-3">
          <span className="d-inline d-md-none">
            <ProfilePicWrapper>
              <ProfilePic />
            </ProfilePicWrapper>
          </span>
          <h5 className="m-0">Client Profile Name</h5>

          <IconButton className="d-none d-sm-inline">
            <i className="fa fa-star text-gold fa-lg" aria-hidden="true"></i>
          </IconButton>
          <h5 className="m-0 d-none d-sm-inline">5</h5>
        </div>
        <div className="d-flex align-items-center ms-5 ps-3 ms-md-0 ps-md-0">
          <span className="d-inline d-sm-none">
            <IconButton className="d-inline">
              <i className="fa fa-star text-gold fa-lg" aria-hidden="true"></i>
            </IconButton>
            <h5 className="m-0 d-inline ms-2">5</h5>
          </span>
          <IconButton className="ms-2">
            <YoutubeIcon size={0.7} />
          </IconButton>
        </div>
        <p className="text-primary-dark mt-3">
          Dignissim pellentesque laoreet sodales tortor pharetra. Tristique
          fermentum adipiscing dignissim sed amet, lectus. Lorem tortor quam sit
          rhoncus, potenti malesuada suspendisse. Libero urna elit bibendum
          dictum. Urna et nulla morbi neque, imperdiet egestas convallis. Vitae
          non, accumsan, scelerisque feugiat vitae. Nisl, ut fusce rhoncus,
          lacus, purus faucibus massa. Nulla magna consectetur erat dignissim
          at. Amet nec tortor ullamcorper arcu amet, pellentesque nunc. Vitae.
        </p>

        <p>Published 2m ago</p>

        <div className="d-flex mt-3 align-items-center gap-2">
          <Button>
            <ThumbsUpIcon />
            Helpful
          </Button>
          <Button>
            <ThumbsDownIcon />
            Not Helpful
          </Button>
        </div>
      </Content>
    </Wrapper>
  );
};

export default ReviewItem;
