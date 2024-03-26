import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    // `App` div waa waalidka oo leh `position: relative;` si uu u noqdo reference point z-index.
    <div className="relative bg-[#131038] ml-28 w-[1280px] h-[832px] rounded-3xl">
      <div className="absolute top-0 right-0 w-[550px] h-[830px] bg-[#FFDF39] rounded-3xl z-0 rounded-r-3"></div>
      <Header />
      <Body/>
      
    </div>
  );
}

export default App;
