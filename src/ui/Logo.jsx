const types={
  sideBar:"pb-6 w-auto px-6",
  loginForm:" w-[500px] h-auto my-auto pb-10"
}

function Logo({type}) {
  return (
    <div className={types[type]}>
      <img src="src\Logo\logo.png"  alt=""/>
    </div>
  );
}

export default Logo;
