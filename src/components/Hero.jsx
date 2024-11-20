import david from "../assets/David.webp";
import { PROFILE } from "../constants/";
const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6">
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-title text-4xl uppercase lg:text-7xl">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <img
        src={david}
        alt=""
        width={400}
        height={400}
        className="hero-img rounded-3xl border border-purple-300/20 p-1"
      />
    </section>
  );
};

export default Hero;