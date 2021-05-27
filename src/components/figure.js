import { useRef } from "react";
import * as d3 from "d3";

function Figure(props) {
  const canvas = useRef();

  d3.json(props.url).then((data) => {
    const drawChart = () => {
      const width = 700;
      const height = 500;
      const margin = { top: 30, left: 65, bottom: 40, right: 10 };
      const iwidth = width - margin.left - margin.right;
      const iheight = height - margin.top - margin.bottom;

      const svg = d3
        .select(canvas.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleLinear().domain([0, 350]).range([0, iwidth]);

      const y = d3.scaleLinear().domain([0, 12]).range([iheight, 0]);

      const dots = g.selectAll("dots").data(data);

      dots
        .enter()
        .append("circle")
        .attr("class", "circle")
        .style("fill", "orange")
        .attr("r", 5)
        .attr("cx", (d) => x(d.episodes))
        .attr("cy", (d) => y(d.seasons));

      g.selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .style("font-size", "10px")
        .attr("class", "label")
        .attr("x", function (d) {
          return x(d.episodes) + 8;
        })
        .attr("y", function (d) {
          return y(d.seasons) - 4;
        })
        .attr("dy", ".75em")
        .text(function (d) {
          return d.name;
        });

      g.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .style("font-size", "12px")
        .attr("x", iwidth + 5)
        .attr("y", iheight + 30)
        .text(props.episodes);

      g.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .style("font-size", "12px")
        .attr("x", 3)
        .attr("y", -30)
        .attr("transform", "rotate(-90)")
        .text(props.seasons);

      g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);

      g.append("g").classed("y--axis", true).call(d3.axisLeft(y));
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    drawChart();
  });

  return <div ref={canvas}></div>;
}

export default Figure;
