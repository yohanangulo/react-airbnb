import img1 from "../res/img/card-1.png";
import star from "../res/img/star.svg";

function CardExp() {
  return (
    <div>
      <img src={img1} className="rounded-[9px] w-[176px]" alt="experience-1" />
      <div className="text-[12px]">
        <div className="inline-flex items-center mt-[10px]">
          <img
            src={star}
            className="inline-block mr-1 translate-y-[-11%]"
            alt="star"
          />
          <p>5.0</p>
          <span className="text-[#918E9B] ml-1">(6)</span>
          <span className="text-[#918E9B] ml-1">• USA</span>
        </div>
        <p className="text-[#222]">Life lessons with Katie Zaferes</p>
        <p>
          <b className="font-semibold">From $136</b> / person
        </p>
      </div>
    </div>
  );
}

function CardSection() {
  return (
    <section className="py-12 px-9 container ">
      <CardExp />
    </section>
  );
}

export default CardSection;
