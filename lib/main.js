import * as d3 from 'd3';
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


const chart = d3.select('body')
 .append('svg')
 .attr('id', 'chart');

const req = new window.XMLHttpRequest();
req.addEventListener('load', mungeData);
req.open('GET', 'data/EU-referendum-result-data.csv');
req.send();

function mungeData() {
  const data = d3.csvParse(this.responseText);


  const regions = data.reduce((last, row) => {
    if (!last[row.Region])
      last[row.Region] = [];
    last[row.Region].push(row);
    return last;
  }, {});

  const regionsPctTurnout = d3.nest()
    .key(d => d.Region)
    .rollup(d => d3.mean(d, leaf => leaf.Pct_Turnout))
    .entries(data);
  // const regionsPctTurnout = Object.entries(regions)
  //   .map(([region, areas]) => ({
  //     region,
  //     meanPctTurnout: d3.mean(areas, d => d.Pct_Turnout),
  //   }));

  renderChart(regionsPctTurnout);
}

function renderChart(data) {
  chart.attr('width', window.innerWidth)
    .attr('height', window.innerHeight);
}
