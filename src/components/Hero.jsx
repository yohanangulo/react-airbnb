import heroImg from "../res/img/hero-img.png";

function Hero() {
  return (
    <section className="px-10">
      <div className="px-10">
        <img className="m-auto py-10" src={heroImg} alt="" />
      </div>

      {/* text */}
      <div className="container m-auto">
        <h1 className="text-4xl font-semibold">Online Experiences</h1>

        {/* paragraph */}
        <p className="max-w-xs text-[#222] leading-[110%] mt-4">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
