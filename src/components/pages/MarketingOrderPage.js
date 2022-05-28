import { createGlobalStyle } from 'styled-components';
import CheckoutSection from '../components/MarketingOrderPage/CheckoutSection';
import DetailsSection from '../components/MarketingOrderPage/DetailsSection';
import { DateProvider } from '../components/MarketingOrderPage/DetailsSection/DatesContext';
import OverviewSection from '../components/MarketingOrderPage/OverviewSection';

const GlobalStyles = createGlobalStyle`
header#myHeader.navbar.white {
    background: #212428;
}
header#myHeader .logo .d-none{
    display: block !important;
}

*, h1, h2, h3, h4, h5, h6, input {
    font-family: 'Space Grotesk';
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #0E0D39;
}

h1 {
    font-size: 4rem;
}
@media (max-width: 768px) {
    h1 {
        font-size: 3rem;
    }
}
@media (max-width: 576px) {
    h1 {
        font-size: 2.5rem;
    }
  } 

.badge-secondary {
    background-color: #EDD6FF;
    color: #0E0D39;
    padding: 0.5rem 1rem;
}

.text-primary-dark {
  color: #0E0D39;
}
.bg-primary-dark {
  background: #0E0D39;
}

.text-primary-muted {
    color: #C7C7C7;
}

.text-primary-light {
    color: #EDD6FF
}

.text-gold {
  color:  #FFC543
}

.modal-content {
  border-radius: 1rem;
}

.flag-shadow {
  box-shadow: 0px 2px 4px 0px #00000055;
  border-radius: 50%;
}

/* .squaredThree */
.squaredThree {
  position: relative;
  float:left;
}

.squaredThree label {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background: #D7B1D7;
  border-radius: 4px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.4);
}

.form-check {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.form-check-input {
  float: none !important;
  margin-left: 0 !important;
}

.form-check-input:checked {
  background-color: #0E0D39;
  border-color: #0E0D39;
}

.form-check-input:focus {
  border-color: #0E0D3944;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #0E0D3930;
}

.form-check-label {
  font-size: 0.85rem;
}

`;

const MarketingOrderPage = () => {
  return (
    <section>
      <GlobalStyles />

      <DateProvider>
        <div className="container">
          <OverviewSection />
          <DetailsSection />
          <CheckoutSection />
        </div>
      </DateProvider>
    </section>
  );
};

export default MarketingOrderPage;
