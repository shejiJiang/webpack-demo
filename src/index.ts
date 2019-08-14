import './style.css';
import * as d3 from 'd3';

function main() {

  let svg = d3.select("#chart")
    .append("svg:svg")
    .attr("width", 100)
    .attr("height", 100);
}

main();

