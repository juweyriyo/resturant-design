function Header() {
    return (
      // Header-ka wuxuu leeyahay `z-index` ka sareeya `div`-ka huruudda ah si uu uga muuqdo korkiisa.
      <div className="flex justify-between items-center w-full h-14 px-5 rounded-t-3xl z-10">
        <h1 className="text-4xl text-[#FFDF39] font-bold">Juweyriyo👍</h1>
        <ul className="flex gap-20 text-white text-lg absolute right-16">
          <li className=" text-[#FFFFFF] border-b-2 font-bold">Home</li>
          <li className="text-[#131038] font-bold">Menu</li>
          <li className="text-[#131038] font-bold">About</li>
          <li className="text-[#131038] font-bold">Contact</li>
          <li className="text-[#131038] font-bold">Location</li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  