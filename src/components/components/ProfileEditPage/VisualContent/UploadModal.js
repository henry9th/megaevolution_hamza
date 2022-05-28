import styled from 'styled-components';
import { Modal, Stack } from 'react-bootstrap';
import { FileIcon } from '../../ImageGallery/icons';
import Card from '../Card';
import { useRef, useEffect, useState } from 'react';

const Button = styled.button`
  padding: 0.75rem 3rem;
  border: none;
  background: #0e0d39;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
`;

const CloseButton = styled(IconButton)`
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0.5rem;
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  border: 3px solid #edd6ff;
  border-radius: 1rem;
  color: #0e0d39;
  padding-block: 0.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const InputFile = styled.input.attrs(() => ({
  type: 'file',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  &:file {
    cursor: pointer;
  }
`;

const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-right: 1rem;
  margin-left: auto;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding-right: 0;
  }
`;

const InputButton = styled.button`
  padding: 0.25rem 0.75rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: 'Space Grotesk';
  font-weight: 700;
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0.5rem;
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

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 1rem;
  background-color: #edd6ff4d;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Video = styled.video.attrs({
  muted: true,
  paused: true,
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageName = styled.div`
  padding: 1.5rem;
  margin-top: 1rem;
  background-color: #edd6ff4d;
  color: #0e0d39;
  font-weight: 700;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const ErrorText = styled.div`
  color: #ec595a;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.25rem 1rem;
`;

const ModalTitle = styled(Modal.Title)`
  width: 100%;
  font-weight: 700;
  text-align: center;
  background: #fcf6ff;
  padding: 2rem;
`;

// constants
const MAX_FILE_SIZE = 200000000;
const MAX_FILES = 7;
const FILE_FORMATS = ['image', 'video'];
const THUMBNAIL_FORMATS = ['image'];

const UploadModal = ({ show, handleClose }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState('');

  // drag to scroll
  const sliderRef = useRef();
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      let mouseDown = false;
      let startX, scrollLeft;

      let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      };
      let stopDragging = function (event) {
        mouseDown = false;
      };

      slider.addEventListener('mousemove', (e) => {
        e.preventDefault();
        if (!mouseDown) {
          return;
        }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
      });

      // Add the event listeners
      slider.addEventListener('mousedown', startDragging, false);
      slider.addEventListener('mouseup', stopDragging, false);
      slider.addEventListener('mouseleave', stopDragging, false);

      return () => {
        slider.removeEventListener('mousedown', startDragging, false);
        slider.removeEventListener('mouseup', stopDragging, false);
        slider.removeEventListener('mouseleave', stopDragging, false);
      };
    }
  }, [sliderRef.current]);

  const validate = (newFiles) => {
    if (newFiles.length + files.length > MAX_FILES) {
      setError(
        `You can order up to ${MAX_FILES} files. Please remove file(s) before uploading more.`
      );
      return [];
    }

    return newFiles.filter((file) => {
      if (file.size > MAX_FILE_SIZE) {
        setError('File is too large to open. Maximum file size is 200MB.');
        return false;
      }

      if (
        !FILE_FORMATS.map((format) => new RegExp(format)).some((regexp) =>
          regexp.test(file.type)
        )
      ) {
        setError('Invalid file format.');
        return false;
      }

      return true;
    });
  };

  const validateThumbnail = (newThumbnail) => {
    if (newThumbnail.size > MAX_FILE_SIZE) {
      setThumbnailError(
        'File is too large to open. Maximum file size is 200MB.'
      );
      return null;
    }

    if (
      !THUMBNAIL_FORMATS.map((format) => new RegExp(format)).some((regexp) =>
        regexp.test(newThumbnail.type)
      )
    ) {
      setThumbnailError('Invalid file format.');
      return null;
    }

    return newThumbnail;
  };

  return (
    <Modal centered show={show} onHide={handleClose} size="xl">
      <Modal.Header className="justify-content-center border-0 p-0">
        <ModalTitle className="">Upload Files</ModalTitle>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={3} direction="horizontal" className="mt-4">
          <h4 className="fs-6">
            Thumbnail image *
            <span className="text-muted ms-2 small">
              ({thumbnail ? 1 : 0}/1)
            </span>
          </h4>

          {thumbnailError && <ErrorText>{thumbnailError}</ErrorText>}
        </Stack>
        <div className="d-flex gap-3 flex-column flex-md-row">
          <Card
            maxWidth="14rem"
            minHeight="15rem"
            maxHeight="15rem"
            noPadding
            background="#FCF6FF"
            className="position-relative flex-shrink-0 text-primary-light d-flex flex-column justify-content-center align-items-center"
          >
            {thumbnail ? (
              <Image src={URL.createObjectURL(thumbnail)} alt="thumbnail" />
            ) : (
              <>
                <i class="fa fa-plus-circle fa-4x mt-5" aria-hidden="true"></i>
                <p className="text-primary-dark text-center fw-bold mt-1">
                  400 x 225
                  <br />
                  (16:9 Ratio)
                </p>
              </>
            )}
            <InputFile
              accept={THUMBNAIL_FORMATS.map((format) => format + '/*').join(
                ','
              )}
              onChange={(e) => {
                const newThumbnail = e.target.files[0];

                const validThumbnail = validateThumbnail(newThumbnail);

                setThumbnail(validThumbnail);
              }}
            />
          </Card>
          <Stack className="mt-4">
            <p className="small">
              * JPG, JPEG, PNG, MP4, AVI, WMV files are allowed.
            </p>
            <p className="small">
              * JPG, JPEG, PNG files are allowed for Thumbnail Images.
            </p>
            <p className="small">
              * By submitting, you are confirming that you have read, undersood
              and agree to MegaEvolution terms & conditions.
            </p>
            <p className="small">* Recommended width size is 400px</p>
          </Stack>
        </div>

        <Stack gap={3} direction="horizontal" className="mt-4">
          <h4 className="fs-6">
            Description contents
            <span className="text-muted ms-2 small">
              ({files.length}/{MAX_FILES})
            </span>
          </h4>

          {error && <ErrorText>{error}</ErrorText>}
        </Stack>

        <CardsContainer className="mt-2" ref={sliderRef}>
          {files.map((file, index) => {
            return (
              <Card
                key={index}
                maxWidth="14rem"
                gap="sm"
                background="#FCF6FF"
                className="position-relative flex-shrink-0"
              >
                <IconButton
                  className="position-absolute top-0 end-0 text-primary-dark"
                  onClick={() => {
                    setFiles((prevState) => [
                      ...prevState.filter(
                        (f) => f.name !== file.name || f.size !== file.size
                      ),
                    ]);
                    setError('');
                  }}
                >
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
                </IconButton>
                <div className="p-1">
                  <ImageContainer>
                    {/^image/.test(file.type) ? (
                      <Image src={URL.createObjectURL(file)} alt={file.name} />
                    ) : (
                      <Video src={URL.createObjectURL(file)} alt={file.name} />
                    )}
                  </ImageContainer>
                </div>
                <ImageName>{file.name}</ImageName>
              </Card>
            );
          })}
          <Card
            maxWidth="14rem"
            minHeight="15rem"
            gap="sm"
            background="#FCF6FF"
            className="position-relative flex-shrink-0 text-primary-light d-flex justify-content-center align-items-center"
          >
            <i class="fa fa-plus-circle fa-4x" aria-hidden="true"></i>
            <InputFile
              accept={FILE_FORMATS.map((format) => format + '/*').join(',')}
              multiple
              onChange={(e) => {
                const newFiles = [...e.target.files];

                const validFiles = validate(newFiles);

                setFiles((prevState) => [
                  ...prevState,
                  ...validFiles.filter(
                    (file) =>
                      !files.some(
                        (f) => f.name === file.name && f.size === file.size
                      )
                  ),
                ]);
              }}
            />
          </Card>
        </CardsContainer>
        <p>* Max size is 200MB for each file.</p>

        <div className="text-center w-100">
          <Button>Upload</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UploadModal;
