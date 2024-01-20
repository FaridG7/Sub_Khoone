const types={
  sideBar:"pt-8 pl-8  h-[100px] w-[200px] px-8 py-8",
  loginForm:""
}

function Logo({type}) {
  return (
    <div className={types[type]}>
      <img src="src\Logo\logo.png" className=""/>
    </div>
  );
}

export default Logo;
