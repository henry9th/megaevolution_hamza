import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    h3 {
        color: #0E0D39;
    }
    .files-card {
        width: 100%;
        height: 500px;
        border-radius: 1rem;
        border: 3px solid #EDD6FF;
        background: #FFFFFF;
        padding: 1rem 0.5rem;

        &__content {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            overflow-x: hidden;
            padding: 0 1rem;

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

            &__item {
                width: 100%;
                display: grid;
                grid-template-columns: 3fr 1fr;
                grid-gap: 1rem;
                margin-bottom: 0.5rem;

                h5 {
                    color: #0E0D39;
                    font-weight: 500;
                    margin-inline: 0.5rem;
                }

                &__file-name {
                    padding: 1rem 2rem;
                    border-radius: 1rem;
                    border: 3px solid #EDD6FF;

                    h5 {
                        color: #0E0D39;
                        margin: 0;
                    }
                }

                &__file-size {
                    padding: 1rem 0.5rem;
                    border-radius: 1rem;
                    border: 3px solid #EDD6FF;

                    h5 {
                        color: #0E0D39;
                        margin: 0;
                    }
                }
            }
        }
    }

    @media (max-width: 425px) {
        .files-card {
            padding: 0.75rem 0.365rem;

            &__content {
              padding: 0rem 0.75rem;
            
              &__item {
                grid-template-columns: 2fr 1fr;
                gap: 0.5rem;

                &__file-name {
                    padding: 0.75rem 1rem;
                  }

                &__file-size {
                    padding: 0.75rem 0.5rem;
                    text-align: center;
                  }
                }
              }
            }
        }
    }

    @media (max-width: 375px) {
        .files-card {
          padding: 0.75rem 0rem;
          
          &__content {
            &__item {
              &__file-size {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
      }
    }

`;

const files = [
  {
    name: 'NFT Example1.png',
    size: '2.41 mb',
  },
  {
    name: 'NFT Example1.png',
    size: '2.41 mb',
  },
  {
    name: 'NFT Example1.png',
    size: '2.41 mb',
  },
  {
    name: 'NFT Example1.png',
    size: '2.41 mb',
  },
  {
    name: 'NFT Example1.png',
    size: '2.41 mb',
  },
  {
    name: 'NFT Example1.png',
    size: '2.41 mb',
  },
  {
    name: 'NFT Example1.png',
    size: '2.41 mb',
  },
];

const FilesList = () => {
  return (
    <div className="col-12 col-lg-6 mt-5">
      <GlobalStyles />
      <h3>Files</h3>

      <div className="files-card">
        <div className="files-card__content">
          <div className="files-card__content__item">
            <h5>File Name</h5>
            <h5>File Size</h5>
          </div>
          {files.map((file, index) => {
            return <ListItem key={index} name={file.name} size={file.size} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ name, size }) => {
  return (
    <div className="files-card__content__item">
      <div className="files-card__content__item__file-name">
        <h5>{name}</h5>
      </div>
      <div className="files-card__content__item__file-size">
        <h5>{size}</h5>
      </div>
    </div>
  );
};

export default FilesList;
