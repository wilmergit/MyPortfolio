import Body from "./components/body/body";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import "./global.scss";

export default function App() {
  return (
    <div className="gradient">
      <div className="content">
        <Header />
        <Intro />
        <Body />
      </div>
    </div>
  );
}
