import logo from "../res/img/logo.svg";

function Navbar() {
  return (
    <nav className="h-[70px] px-10 shadow-md flex items-center">
      <div className=" container m-auto">
        <Logo widthImg={"82px"} />
      </div>
    </nav>
  );
}

function Logo(props) {
  return (
    <img
      width={props.widthImg}
      height={props.heightImg}
      src={logo}
      alt="logo"
    />
  );
}

export default Navbar;
