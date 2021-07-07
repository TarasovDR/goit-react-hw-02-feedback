import Title from 'components/Title/Title';
import { Wrapper } from './Section.styled';

const Section = ({ text, children }) => {
  return (
    <Wrapper>
      {text && <Title text={text} />}
      {children}
    </Wrapper>
  );
};

export default Section;
