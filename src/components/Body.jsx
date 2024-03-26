import image from "../image/image.png"
import iamge from "../image/dishes_scroll (1).png"

function Body() {
  return (
    <div className=" flex  justify-around mt-28  absolute right-42 ml-16 gap-24">
        <div className=" mt-28">
            <h1 className=" text-5xl text-[#FFFFFF] mt-5">Are you Hungry?</h1>
            <h1 className=" text-6xl text-[#FFFFFF] font-bold mt-10">Don’t Wait!</h1>
            <p className=" text-2xl text-[#FFDF39] mt-5">Let’s start order food now</p>
            <button className=" mt-8 ml-15 w-[291px] h-[40px] text-[#FFFFFF] border-[#FFFFFF] border-2 rounded-full">Check Menu</button>
        </div>
        <img className="" src={image} alt="" />
        <img className=" absolute  bottom-[-150px] " src={iamge} alt="" />
    </div>
  )
}

export default Body