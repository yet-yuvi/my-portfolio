import Image from './Image';
import Bio from './Bio';
import Social from './Social';

function Hero() {
  return (
    <div className="flex items-center gap-6">
      <Image />
      <div className="flex flex-col gap-6">
        <Bio />
        <Social />
      </div>
    </div>
  );
}

export default Hero;
