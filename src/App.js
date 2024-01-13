import "./App.css";
import Content from "./components/content";
import NavBar from "./components/navBar";
import Recommend from "./components/recommend";
import SideNav from "./components/sideNav";

function App() {
  return (
    <div className="App overflow-hidden h-screen">
      <div className="sm:absolute sm:top-0 w-screen">
        <NavBar />
      </div>
      <div className="flex h-screen overflow-hidden pt-14">
        <div className="xl:basis-1/4 overflow-y-scroll hidden xl:block">
          <SideNav />
        </div>
        <div className="xl:basis-1/2 overflow-auto lg:basis-2/3 basis-full">
          <Content />
        </div>
        <div className="xl:basis-1/4 overflow-y-scroll md:basis-1/3 hidden lg:block">
          <Recommend />
        </div>
      </div>
    </div>
  );
}

export default App;
