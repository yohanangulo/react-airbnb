import expData from "../res/expData";
import star from "../res/img/star.svg";

function CardExp(props) {
  let badgeTex;

  if (props.openSpots === 0) {
    badgeTex = "SOLD OUT";
  }
  
  else if (props.location === "Online") {
    badgeTex = "Online";
  }

  return (
    <div className="flex-grow-0 flex-shrink-0 basis-auto relative">
      <img
        src={props.coverImg}
        className="rounded-[9px] w-[176px] h-[235px] object-fill"
        alt="experience-1"
      />
      <div className="text-[12px]">
        <div className="inline-flex items-center mt-[10px]">
          <img
            src={star}
            className="inline-block mr-1 translate-y-[-11%]"
            alt="star"
          />
          <p>{props.stats.rating}</p>
          <span className="text-[#918E9B] ml-1">
            ({props.stats.reviewCount})
          </span>
          <span className="text-[#918E9B] ml-1">• {props.location}</span>
        </div>
        <p className="text-[#222]">{props.title}</p>
        <p>
          <b className="font-semibold">From ${props.price}</b> / person
        </p>
      </div>
      {badgeTex && (
        <span className="text-[10.24px] bg-white rounded-sm absolute top-[6px] left-[6px] px-[6px] py-1">
          {badgeTex}
        </span>
      )}
    </div>
  );
}

function CardSection() {
  const experiences = expData.map((item) => {
    return <CardExp key={item.id} {...item} />;
  });

  return (
    <section className="flex gap-5 mt-7 container mx-auto mb-20 px-10 overflow-auto">
      {experiences}
    </section>
  );
}

export default CardSection;
