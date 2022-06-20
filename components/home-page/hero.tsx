import classes from './hero.module.css';

import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/abhishek.jpg"
          alt="Abhishek Saxena"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi! I&apos;m Abhishek Saxena</h1>
      <p>Developer. Works with Javascript based frameworks or libraries</p>
    </section>
  );
};

export default Hero;
