import styled from 'styled-components/macro';

export const SectionCenter = styled.section`
  padding: 5rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 40rem;
  margin-top: 5rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  color: var(--clr-primary-1);
`;

export const LoremForm = styled.form`
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  color: var(--clr-primary-1);
`;

export const Input = styled.input`
  padding: 0.25rem 0.5rem;
  width: 4rem;
  border-radius: var(--radius);
  border: none;
  margin: 0 0.5rem;
  font-size: 1.25rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  padding: 0.375rem 0.75rem;
  letter-spacing: 1px;
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-primary-5);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  background: var(--clr-primary-10);

  &:hover {
    color: var(--clr-primary-5);
    background: var(--clr-primary-8);
    border-color: var(--clr-primary-8);
  }
`;

export const Article = styled.article``;

export const Paragraph = styled.p``;
