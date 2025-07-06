import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Menu from "./components/menu/menu";
import "./global.scss";

export default function App() {
  return (
    <div className="gradient">
      <div className="content">
        <Header />
        <Intro />
        <Menu/>
      </div>
    </div>
  );
}
