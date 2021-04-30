import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let maxValue = 0;
  for (const dataPoint of props.dataPoints) {
    if (dataPoint.value > maxValue) {
      maxValue = dataPoint.value;
    }
  }

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
