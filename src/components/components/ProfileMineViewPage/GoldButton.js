import styled from 'styled-components';

const GoldButton = styled.button`
  background: radial-gradient(
        63.11% 63.11% at 31.97% 19.67%,
        rgba(255, 255, 255, 0.7) 0%,
        rgba(255, 255, 255, 0) 69.79%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(0deg, #ffc543, #ffc543);
  border: none;
  border-radius: 1.25rem;
  color: #0e0d39;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export default GoldButton;
