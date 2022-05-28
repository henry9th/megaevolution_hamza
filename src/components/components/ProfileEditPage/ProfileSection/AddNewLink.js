import styled from 'styled-components';
import {
  WebsiteIcon,
  YoutubeGrayIcon,
  TwitterGrayIcon,
  InstagramGrayIcon,
  TikTokIcon,
  BlogIcon,
  TwitterIcon,
} from '../../ImageGallery/icons';
import Select from 'react-select';
import { useState } from 'react';

const OptionToIcon = {
  Website: WebsiteIcon,
  Youtube: YoutubeGrayIcon,
  Twitter: TwitterGrayIcon,
  Instagram: InstagramGrayIcon,
  Tiktok: TikTokIcon,
  Blog: BlogIcon,
};

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  border: 3px solid #edd6ff;
  border-radius: 1rem;
  color: #0e0d39;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem 1rem 1.5rem;
  background: transparent;
  border: none;
  min-width: 0;

  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const InputButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-right: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding-right: 0;
  }
`;

const InputButton = styled.button`
  padding: 0.25rem 0.75rem;
  border: none;
  background: #cbcaeb;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
`;

const WebsiteButtons = () => {
  return (
    <InputButtonsWrapper>
      <IconButton className="text-muted">
        <i className="fa fa-times-circle fa-lg" aria-hidden="true"></i>
      </IconButton>
    </InputButtonsWrapper>
  );
};

const TwitterButtons = () => {
  return (
    <InputButtonsWrapper>
      <InputButton>
        <TwitterIcon size={0.5} />
        Sign in with Twitter
      </InputButton>
      <IconButton className="text-muted">
        <i className="fa fa-times-circle fa-lg" aria-hidden="true"></i>
      </IconButton>
    </InputButtonsWrapper>
  );
};

const BlogButtons = () => {
  const [status, setStatus] = useState('non-verified');

  if (status === 'non-verified') {
    return (
      <InputButtonsWrapper>
        <InputButton
          onClick={() => {
            setStatus('verified');
          }}
        >
          Verify Google Blog
        </InputButton>
        <InputButton
          onClick={() => {
            setStatus('pending');
          }}
        >
          Verify Other Blog
        </InputButton>
      </InputButtonsWrapper>
    );
  }

  if (status === 'verified') {
    return (
      <InputButtonsWrapper>
        <IconButton className="text-primary">
          <i className="fa fa-check-circle fa-lg" aria-hidden="true"></i>
        </IconButton>
        <IconButton
          className="text-muted"
          onClick={() => {
            setStatus('non-verified');
          }}
        >
          <i className="fa fa-times-circle fa-lg" aria-hidden="true"></i>
        </IconButton>
      </InputButtonsWrapper>
    );
  }

  if (status === 'pending') {
    return (
      <InputButtonsWrapper>
        <InputButton
          onClick={() => {
            setStatus('verified');
          }}
        >
          pending
        </InputButton>
      </InputButtonsWrapper>
    );
  }
};

const types = [
  {
    label: 'Website',
    value: 'Website',
  },
  {
    label: 'Youtube',
    value: 'Youtube',
  },
  {
    label: 'Twitter',
    value: 'Twitter',
  },
  {
    label: 'Instagram',
    value: 'Instagram',
  },
  {
    label: 'Tiktok',
    value: 'Tiktok',
  },
  {
    label: 'Blog',
    value: 'Blog',
  },
];

const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: #0e0d39;
  font-weight: 700;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Option = ({ innerProps, isDisabled, data }) => {
  if (isDisabled) return null;

  const Icon = OptionToIcon[data.label];

  return (
    <OptionWrapper {...innerProps}>
      <Icon size={0.6} />
      <span>{data.label}</span>
    </OptionWrapper>
  );
};

const selectCustomStyles = {
  control: (base) => ({
    ...base,
    width: '100%',
    minWidth: '12rem',
    padding: '0.75rem',
    margin: '0',
    background: '#fff',
    border: '3px solid #edd6ff',
    borderRadius: '1rem',
    color: '#0e0d39',
    boxShadow: 'none',
    '&:hover': {
      border: '3px solid #edd6ff',
    },
  }),
  menu: (base) => ({
    ...base,
    border: '3px solid #edd6ff',
    borderRadius: '1rem',
    zIndex: 100,
  }),
};

const AddNewLink = () => {
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="d-flex gap-2 mr-2 flex-column flex-md-row">
      <Select
        styles={selectCustomStyles}
        options={types}
        components={{
          Option,
          IndicatorSeparator: () => null,
        }}
        onChange={(type) => {
          setSelectedType(type);
        }}
        value={selectedType}
      />

      <InputWrapper>
        <Input placeholder="Copy and Paste your link" />

        {selectedType.value === 'Website' ? (
          <WebsiteButtons />
        ) : selectedType.value === 'Twitter' ? (
          <TwitterButtons />
        ) : selectedType.value === 'Blog' ? (
          <BlogButtons />
        ) : (
          <InputButtonsWrapper>
            <InputButton>Add</InputButton>
          </InputButtonsWrapper>
        )}
      </InputWrapper>
    </div>
  );
};

export default AddNewLink;
