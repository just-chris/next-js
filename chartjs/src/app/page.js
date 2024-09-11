import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Doughnut from "./components/Doughnut";
import PolarArea from "./components/PolarArea";
import Radar from "./components/Radar";
import Line from "./components/Line";
import Scatter from "./components/Scatter";

export default function Home() {
  return (
<>
  <h3>Chart JS</h3>
  <div className="container" >
    <Pie />
    <Doughnut />
    <PolarArea />
    <Radar />
    <Line />
    <Scatter />
    <Bar />
  </div>
  </>
  );
}
