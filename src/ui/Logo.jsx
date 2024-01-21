const types={
  sideBar:"pb-6 w-auto px-6",
  loginForm:"w-12 h-12"
}

function Logo({type}) {
  return (
    <div className={types[type]}>
      <img src="src\Logo\logo.png"  alt=""/>
    </div>
  );
}

export default Logo;
