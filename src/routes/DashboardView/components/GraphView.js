import React, { Component } from 'react';
import './styles.css';
import 'antd/dist/antd.min.css';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {
  GRAPH_TYPE_BAR,
  GRAPH_TYPE_INDICATOR,
  GRAPH_TYPE_PIE,
  GRAPH_TYPE_GROUP_BAR,
  GRAPH_TYPE_LINE,
  GRAPH_TYPE_AREA,
  GRAPH_TYPE_GROUP_LINE,
} from '../../../constants/dashboard';
import {
  white,
  colorGroup,
} from '../../../constants/colors';

/**
 * @name GraphView Component
 *
 * @param {Func}   editGraph
 * @param {Func}   deleteGraph
 * @param {Object}   literals
 *
 * @returns {JSX}
 */

class GraphView extends Component {
  state = {
    anchorEl: null,
  };

  componentDidMount() {
  }

  /**
   * @name handleClick
   * Open the option menu ( edit, delete )
   * @param {Object}   option menu button click event
   */
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  /**
   * @name handleClose
   * Closes the option menu ( edit, delete )
   */
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  tooltip = (x, y, z) => {
    if (z) {
      return `x: ${x}, y: ${z}`;
    }
    return `x: ${x}, y: ${y}`;
  };

  /**
   * @name makeTemplate
   * Makes the graph from data
   * @param {Obj} graph data
   */
  makeTemplate = (item) => {
    if (item.type === GRAPH_TYPE_INDICATOR) {
      const title = item.eeff[0].values[0].calcValue;
      const subtitle = item.name;
      const img = <img src={require(`assets/images/indicators/${item.image}`)} alt='test' width='50px' height='50px' />;
      return (
        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
          {img}
        </div>
      );
    }
    if (item.type === GRAPH_TYPE_PIE) {
      const title = item.name;
      const data = {
        charData: {
          labels: [],
          datasets: [
            {
              datalabels: {
                display: false,
              },
              data: [],
              backgroundColor: colorGroup,
            },
          ],
        },
        chartOptions: {
          tooltips: {
            displayColors: false,
            callbacks: {
              title: () => {
                return '';
              },
              label: (tooltipItem, t) => {
                let label = t.labels[tooltipItem.datasetIndex];
                label += ',';
                label += t.datasets[0].data[tooltipItem.datasetIndex];
                return label;
              },
            },
          },
        },
        legendOpts: {
          display: true,
          position: 'bottom',
          fullWidth: true,
          reverse: false,
        },
      };
      item.epigraph.forEach((p, i) => {
        data.charData.labels.push(p.name);
        data.charData.datasets[0].data.push(item.eeff[0].values[i].calcValue);
      });
      const hiddenData = JSON.parse(JSON.stringify(data));
      hiddenData.charData.datasets[0].datalabels = {
        display: true,
        backgroundColor: 'black',
        color: 'white',
        offset: 10,
        font: {
          size: '12',
        },
      };
      return (
        <div className='DashboardView--graph--item__container'>
          <h5 className='text-align-left'>{title}</h5>
          <Pie data={data.charData} options={data.chartOptions} legend={data.legendOpts} />
          <Pie id={item.graphId} data={hiddenData.charData} options={data.chartOptions} legend={data.legendOpts} />
        </div>
      );
    }
    if (item.type === GRAPH_TYPE_BAR) {
      const title = item.name;
      const data = {
        charData: {
          labels: [],
          datasets: [
            {
              fill: false,
              datalabels: {
                display: false,
              },
              backgroundColor: colorGroup[0],
              borderColor: colorGroup[0],
              borderWidth: 1,
              hoverBackgroundColor: colorGroup[0],
              hoverBorderColor: colorGroup[0],
              data: [],
            },
          ],
        },
        chartOptions: {
          scales: {
            yAxes: [
              {
                type: 'linear',
                scaleLabel: {
                  display: true,
                  labelString: item.epigraph[0].name,
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                type: 'category',
                padding: 10,
                ticks: {
                  autoSkip: false,
                },
              },
            ],
          },
          tooltips: {
            displayColors: false,
            callbacks: {
              title: () => {
                return '';
              },
              label: (tooltipItem) => {
                let label = tooltipItem.xLabel;
                label += ',';
                label += tooltipItem.yLabel;
                return label;
              },
            },
          },
        },
        legendOpts: {
          display: false,
        },
      };
      item.eeff.forEach((p) => {
        data.charData.labels.push(p.name);
        data.charData.datasets[0].data.push(p.values[0].calcValue);
      });
      const hiddenData = JSON.parse(JSON.stringify(data));
      hiddenData.charData.datasets[0].datalabels = {
        display: true,
        backgroundColor: 'black',
        color: 'white',
        offset: 10,
        font: {
          size: '12',
        },
      };
      return (
        <div className='DashboardView--graph--item__container'>
          <h5 className='text-align-left'>{title}</h5>
          <Bar data={data.charData} options={data.chartOptions} legend={data.legendOpts} />
          <Bar id={item.graphId} data={hiddenData.charData} options={data.chartOptions} legend={data.legendOpts} />
        </div>
      );
    }
    if (item.type === GRAPH_TYPE_GROUP_BAR) {
      const title = item.name;
      const data = {
        charData: {
          labels: [],
          datasets: [],
        },
        chartOptions: {
          scales: {
            yAxes: [
              {
                type: 'linear',
                scaleLabel: {
                  display: true,
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                type: 'category',
                padding: 10,
                ticks: {
                  autoSkip: false,
                },
              },
            ],
          },
          tooltips: {
            displayColors: false,
            callbacks: {
              title: () => {
                return '';
              },
              label: (tooltipItem) => {
                let label = tooltipItem.xLabel;
                label += ',';
                label += tooltipItem.yLabel;
                return label;
              },
            },
          },
        },
        legendOpts: {
          display: true,
          position: 'bottom',
          fullWidth: true,
          reverse: false,
        },
      };
      const colors = colorGroup;
      item.epigraph.forEach((p, i) => {
        const pi = {
          label: p.name,
          data: [],
          datalabels: {
            display: false,
          },
          backgroundColor: colors[i % colors.length],
          borderColor: colors[i % colors.length],
          borderWidth: 1,
          hoverBackgroundColor: colors[i % colors.length],
          hoverBorderColor: colors[i % colors.length],
        };
        item.eeff.forEach((val) => {
          pi.data.push(val.values[i].calcValue);
          if (data.charData.labels.indexOf(val.name) === -1) {
            data.charData.labels.push(val.name);
          }
        });
        data.charData.datasets.push(pi);
      });
      const hiddenData = JSON.parse(JSON.stringify(data));
      hiddenData.charData.datasets.forEach((e) => {
        e.datalabels = {
          display: true,
          backgroundColor: 'black',
          color: 'white',
          offset: 10,
          font: {
            size: '12',
          },
        };
      });
      return (
        <div className='DashboardView--graph--item__container'>
          <h5 className='text-align-left'>{title}</h5>
          <Bar data={data.charData} options={data.chartOptions} legend={data.legendOpts} />
          <Bar id={item.graphId} data={hiddenData.charData} options={data.chartOptions} legend={data.legendOpts} />
        </div>
      );
    }
    if (item.type === GRAPH_TYPE_GROUP_LINE) {
      const title = item.name;
      const data = {
        charData: {
          labels: [],
          datasets: [],
        },
        chartOptions: {
          scales: {
            yAxes: [
              {
                type: 'linear',
                scaleLabel: {
                  display: true,
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                type: 'category',
                padding: 10,
                ticks: {
                  autoSkip: false,
                },
              },
            ],
          },
          tooltips: {
            displayColors: false,
            callbacks: {
              title: () => {
                return '';
              },
              label: (tooltipItem) => {
                let label = tooltipItem.xLabel;
                label += ',';
                label += tooltipItem.yLabel;
                return label;
              },
            },
          },
        },
        legendOpts: {
          display: true,
          position: 'bottom',
          fullWidth: true,
          reverse: false,
        },
      };
      const colors = colorGroup;
      item.epigraph.forEach((p, i) => {
        const pi = {
          fill: false,
          label: p.name,
          data: [],
          datalabels: {
            display: false,
          },
          backgroundColor: colors[i % colors.length],
          borderColor: colors[i % colors.length],
          borderWidth: 1,
          hoverBackgroundColor: colors[i % colors.length],
          hoverBorderColor: colors[i % colors.length],
        };
        item.eeff.forEach((val) => {
          pi.data.push(val.values[i].calcValue);
          if (data.charData.labels.indexOf(val.name) === -1) {
            data.charData.labels.push(val.name);
          }
        });
        data.charData.datasets.push(pi);
      });
      const hiddenData = JSON.parse(JSON.stringify(data));
      hiddenData.charData.datasets.forEach((e) => {
        e.datalabels = {
          display: true,
          backgroundColor: 'black',
          color: 'white',
          offset: 10,
          font: {
            size: '12',
          },
        };
      });
      return (
        <div className='DashboardView--graph--item__container'>
          <h5 className='text-align-left'>{title}</h5>
          <Line data={data.charData} options={data.chartOptions} legend={data.legendOpts} />
          <Line id={item.graphId} data={hiddenData.charData} options={data.chartOptions} legend={data.legendOpts} />
        </div>
      );
    }
    if (item.type === GRAPH_TYPE_LINE) {
      const title = item.name;
      const data = {
        charData: {
          labels: [],
          datasets: [
            {
              fill: false,
              datalabels: {
                display: false,
              },
              lineTension: 0.1,
              borderColor: colorGroup[0],
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: colorGroup[0],
              pointBackgroundColor: white,
              pointBorderWidth: 1,
              pointHoverRadius: 6,
              pointRadius: 4,
              pointHoverBackgroundColor: colorGroup[0],
              pointHoverBorderColor: colorGroup[0],
              pointHoverBorderWidth: 2,
              pointHitRadius: 10,
              data: [],
            },
          ],
        },
        chartOptions: {
          scales: {
            yAxes: [
              {
                type: 'linear',
                scaleLabel: {
                  display: true,
                  labelString: item.epigraph[0].name,
                },
                gridLines: {
                  borderDashOffset: 2,
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                type: 'category',
                padding: 10,
                ticks: {
                  autoSkip: false,
                },
              },
            ],
          },
          tooltips: {
            displayColors: false,
            callbacks: {
              title: () => {
                return '';
              },
              label: (tooltipItem) => {
                let label = tooltipItem.xLabel;
                label += ',';
                label += tooltipItem.yLabel;
                return label;
              },
            },
          },
        },
        legendOpts: {
          display: false,
        },
      };
      item.eeff.forEach((p) => {
        data.charData.labels.push(p.name);
        data.charData.datasets[0].data.push(p.values[0].calcValue);
      });
      const hiddenData = JSON.parse(JSON.stringify(data));
      hiddenData.charData.datasets[0].datalabels = {
        display: true,
        backgroundColor: 'black',
        color: 'white',
        offset: 10,
        font: {
          size: '12',
        },
      };
      return (
        <div className='DashboardView--graph--item__container'>
          <h5 className='text-align-left'>{title}</h5>
          <Line data={data.charData} options={data.chartOptions} legend={data.legendOpts} />
          <Line id={item.graphId} data={hiddenData.charData} options={data.chartOptions} legend={data.legendOpts} />
        </div>
      );
    }
    if (item.type === GRAPH_TYPE_AREA) {
      const title = item.name;
      const data = {
        charData: {
          labels: [],
          datasets: [],
        },
        chartOptions: {
          scales: {
            yAxes: [
              {
                type: 'linear',
                scaleLabel: {
                  display: true,
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
                type: 'category',
                padding: 10,
                ticks: {
                  autoSkip: false,
                },
              },
            ],
          },
          tooltips: {
            displayColors: false,
            callbacks: {
              title: () => {
                return '';
              },
              label: (tooltipItem) => {
                let label = tooltipItem.xLabel;
                label += ',';
                label += tooltipItem.yLabel;
                return label;
              },
            },
          },
        },
        legendOpts: {
          display: true,
          position: 'bottom',
          fullWidth: true,
          reverse: false,
        },
      };
      const colors = colorGroup;
      item.epigraph.forEach((p, i) => {
        const pi = {
          label: p.name,
          data: [],
          fill: true,
          datalabels: {
            display: false,
          },
          backgroundColor: colors[i % colors.length],
          borderColor: colors[i % colors.length],
          borderWidth: 1,
          hoverBackgroundColor: colors[i % colors.length],
          hoverBorderColor: colors[i % colors.length],
          lineTension: 0.1,
          pointBorderColor: colors[i % colors.length],
          pointBackgroundColor: white,
          pointBorderWidth: 1,
          pointHoverRadius: 6,
          pointRadius: 4,
          pointHoverBackgroundColor: colors[i % colors.length],
          pointHoverBorderColor: colors[i % colors.length],
          pointHoverBorderWidth: 2,
          pointHitRadius: 10,
        };
        item.eeff.forEach((val) => {
          pi.data.push(val.values[i].calcValue);
          if (data.charData.labels.indexOf(val.name) === -1) {
            data.charData.labels.push(val.name);
          }
        });
        data.charData.datasets.push(pi);
      });
      const hiddenData = JSON.parse(JSON.stringify(data));
      hiddenData.charData.datasets.forEach((e) => {
        e.datalabels = {
          display: true,
          backgroundColor: 'black',
          color: 'white',
          offset: 10,
          font: {
            size: '12',
          },
        };
      });
      return (
        <div className='DashboardView--graph--item__container'>
          <h5 className='text-align-left'>{title}</h5>
          <Line data={data.charData} options={data.chartOptions} legend={data.legendOpts} />
          <Line id={item.graphId} data={hiddenData.charData} options={data.chartOptions} legend={data.legendOpts} />
        </div>
      );
    }
    return (
      <div>
        sdf
      </div>
    );
  };

  /**
   * @name editGraph
   * Edit the graph
   * @param {Obj} graph to edit
   */
  editGraph = (item) => {
    const p = this.props;
    this.setState({ anchorEl: null });
    p.editGraph(item);
  };

  /**
   * @name deleteGraph
   * Delete the graph
   * @param {Obj} graph to delete
   */

  deleteGraph = (item) => {
    const p = this.props;
    p.deleteGraph(item);
  };

  downloadGraph = (item, e) => {
    const canvas = document.getElementById(item.graphId);
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);
    let image = canvas.toDataURL();
    image = image.replace('image/png', 'image/octet-stream');
    e.target.href = image;
  };

  render() {
    const p = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const template = this.makeTemplate(p.item);
    return (
      <Paper className='DashboardView--graph--item'>
        <IconButton
          aria-haspopup='true'
          onClick={this.handleClick}
          color='inherit'
          className='DashboardView--graph--item--setting'
        >
          <Settings />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem><a onClick={this.editGraph.bind(this, p.item)}>{p.literals.editGraph}</a></MenuItem>
          <MenuItem><a onClick={this.deleteGraph.bind(this, p.item)}>{p.literals.deleteGraph}</a></MenuItem>
          {
            p.item.type !== GRAPH_TYPE_INDICATOR && <MenuItem><a onClick={this.downloadGraph.bind(this, p.item)} download='graph.png'>{p.literals.downloadGraph}</a></MenuItem>
          }
        </Menu>
        {template}
      </Paper>
    );
  }
}

export default GraphView;
