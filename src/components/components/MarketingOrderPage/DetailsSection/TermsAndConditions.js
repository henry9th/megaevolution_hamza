import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 400px;
  padding: 2rem 1rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid #edd6ff;
  background: transparent;
  position: relative;

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

const Text = styled.div`
  width: 100%;
  height: 85%;
  border: none;
  background: transparent;
  padding: 0 0.5rem;
  overflow-y: scroll;
  color: #0e0d39;
  font-weight: 300;

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

  @media (max-width: 425px) {
    height: 80%;
  }
`;

const TermsAndConditions = ({ termsAndConditions, setTermsAndConditions }) => {
  return (
    <Card className="mt-4">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        quidem, quisquam maxime at quas praesentium laborum rem, magnam
        voluptate porro vel tempora possimus quia dolor fuga expedita pariatur.
        Repellendus aliquam itaque mollitia fugiat necessitatibus eum
        dignissimos, ab dolorem dolores possimus repudiandae non asperiores.
        Reprehenderit accusamus ullam recusandae nobis provident, architecto rem
        libero tempora perspiciatis nulla neque quia sit reiciendis nemo
        corporis autem aspernatur quidem. Illo reiciendis, esse odio
        exercitationem voluptas optio cumque impedit eos id, blanditiis atque
        aliquam velit facere repellendus veniam fuga eveniet qui eligendi. Dolor
        sequi voluptatibus, aperiam, facere non culpa eius dolore temporibus
        saepe at voluptatum enim.
      </Text>
      <div class="form-check text-primary-dark flex-row align-items-center gap-2 pt-1 mt-4">
        <input
          class="form-check-input m-0"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault" className="">
          I consent to MegaEvolution’s <strong>Terms & Conditions.</strong>
        </label>
      </div>
    </Card>
  );
};

export default TermsAndConditions;
