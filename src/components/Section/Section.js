import Title from "components/Title/Title";
import s from "./Section.module.css";

const Section = ({ text, children }) => {
  return (
    <section className={s.section}>
      {text && <Title text={text} />}
      {children}
    </section>
  );
};

export default Section;
