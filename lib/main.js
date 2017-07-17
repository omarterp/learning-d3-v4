import * as d3 from 'd3';
import '../styles/index.css';
import tableFactory from './table-factory';
// import chartFactory from './common/index';
// import './chapter3/index';
// import '../styles/index.css';
// import sankeyChart from './chapter9/index.ts';
//
// sankeyChart();

// import './chapter4/index';
// import westerosChart from './chapter6/index';
// import westerosChart from './chapter7/index';

// westerosChart.init('tree', 'data/GoT-lineages-screentimes.json');
// westerosChart.init('cluster', 'data/GoT-lineages-screentimes.json');
// westerosChart.init('treemap', 'data/GoT-lineages-screentimes.json');
// westerosChart.init('partition', 'data/GoT-lineages-screentimes.json');
// westerosChart.init('radialPartition', 'data/GoT-lineages-screentimes.json');
// westerosChart.init('pack', 'data/GoT-lineages-screentimes.json');

// westerosChart.init('pie', 'data/GoT-lineages-screentimes.json');
// westerosChart.init('histogram', 'data/GoT-deaths-by-season.json');
// westerosChart.init('chord', 'data/stormofswords.csv');
// westerosChart.init('force', 'data/stormofswords.csv');
// westerosChart.init('stack', 'data/GoT-deaths-by-season.json', false);
// westerosChart.init('stack', 'data/GoT-deaths-by-season.json', true);

// import './chapter3/index';

window.d3 = d3;
window.tableFactory = tableFactory;

/*
const chart = d3.select('body')
  .append('svg')
  .attr('id', 'chart');


function renderChart(data) {
  chart.attr('width', window.innerWidth)
    .attr('height', window.innerHeight);

  const x = d3.scaleBand()
    .domain(data.map(d => d.region))
    .rangeRound([50, window.innerWidth - 50])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.meanPctTurnout)])
    .range([window.innerHeight - 50, 0]);

  const xAxis = d3.axisBottom().scale(x);
  const yAxis = d3.axisLeft().scale(y);

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${window.innerHeight - 50})`)
    .call(xAxis);

  chart.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(50, 0)')
    .call(yAxis);

  chart.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.region))
    .attr('y', window.innerHeight - 50)
    .attr('width', x.bandwidth())
    .attr('height', 0)
      .transition()
      .delay((d, i) => i * 20)
      .duration(800)
      .attr('y', d => y(d.meanPctTurnout))
      .attr('height', d => (window.innerHeight - 50) - y(d.meanPctTurnout));
}


function mungeData() {
  const data = d3.csvParse(this.responseText);


  const regions = data.reduce((last, row) => {
    if (!last[row.Region]) last[row.Region] = [];
    last[row.Region].push(row);
    return last;
  }, {});

  const regionsPctTurnout = Object.entries(regions)
    .map(([region, areas]) => ({
      region,
      meanPctTurnout: d3.mean(areas, d => d.Pct_Turnout),
    }));

  renderChart(regionsPctTurnout);
}


const req = new window.XMLHttpRequest();
req.addEventListener('load', mungeData);
req.open('GET', 'data/EU-referendum-result-data.csv');
req.send();


const header = ['one', 'two', 'three', 'four', 'five', 'six'];
const rows = [
  header,
  ['q', 'w', 'e', 'r', 't', 'y'],
];

const table = tableFactory(rows);
*/
