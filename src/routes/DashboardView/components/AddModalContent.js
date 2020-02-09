import React, { Component } from 'react';
import './styles.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Radio, TreeSelect, Checkbox } from 'antd';
import '../../../styles/components/antd.scss';
import {
  GRAPH_TYPE_BAR,
  GRAPH_TYPE_LINE,
  GRAPH_TYPE_INDICATOR,
  INDICATOR_IMAGES,
  GRAPH_TYPE_PIE,
} from '../../../constants/dashboard';

/**
 * @name AddModalContent Component
 *
 * @param {Object}   dashboard
 * @param {Object}   literals
 * @param {Object}   selectedTable
 * @param {Array}   typeOptions
 * @param {Array}   tableOptions
 * @param {Func}   addModalClose
 * @param {Func}   saveModal
 * @param {Func}   dashboardChange
 *
 * @returns {JSX}
 */

const Dropdown = (props) => {
  const prop = props;
  return (
    <Select
      value={prop.value}
      onChange={prop.onChange}
      inputProps={{
        name: prop.name,
      }}
    >
      {
        prop.options && prop.options.map((p, i) => {
          return (
            <MenuItem value={p.value} key={i}>
              { p.label }
            </MenuItem>
          );
        })
      }
    </Select>
  );
};

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class AddModalContent extends Component {
  state = {
    dashboard: '',
    type: '',
    images: [],
    tree: [],
    selectedImg: '',
    eeff: [],
    width: 0,
    height: 0,
    name: '',
    graphId: 0,
  };

  componentDidMount() {
    const p = this.props;
    p.onRef(this);
    this.setState({ images: INDICATOR_IMAGES });
  }

  /**
   * @name typeChange
   * Set state when change the graph type
   * @param {Object}  event
   */
  typeChange = (event) => {
    const val = event.target.value;
    this.setState({ [event.target.name]: val });
    if (val === GRAPH_TYPE_INDICATOR) {
      this.setState({ width: 3, height: 3, eeff: '' });
    } else {
      this.setState({
        width: 4,
        height: 4,
        selectedImg: '',
        eeff: [],
      });
    }
  };

  /**
   * @name dashboardChange
   * Set state when change the Dashboard
   * @param {Object}  event
   */
  dashboardChange = (event) => {
    const id = event.target.value;
    const prop = this.props;
    this.setState({ [event.target.name]: id });
    prop.dashboardChange(id);
  };

  /**
   * @name imgClicked
   * Set state when change the Image
   * @param {Integer} Image Index
   */
  imgClicked = (key) => {
    const state = this.state;
    const src = state.images[key].src;
    this.setState({ selectedImg: src });
  };

  /**
   * @name treeChange
   * Set state when change the Tree Select
   * @param {Array} Value of Tree select
   */
  treeChange = (value) => {
    this.setState({ tree: value });
  };

  /**
   * @name handleChangeEeff
   * Set state when change the Eeff
   * @param {Obj} event
   */
  handleChangeEeff = (e) => {
    const value = e.target.value;
    this.setState({ eeff: value });
  };

  /**
   * @name handleChangeEeffCheckbox
   * Set state when change the Eeff
   * @param {Array} Value of Eeff
   */
  handleChangeEeffCheckbox = (checkedVal) => {
    this.setState({ eeff: checkedVal });
  };

  /**
   * @name handleChangeEeff
   * Set state when change the name
   * @param {Obj} event
   */
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  /**
   * @name makeTree
   * Make Tree data from graph data
   * @param {Obj} graph data
   */
  makeTree = (data) => {
    if (!data) {
      return [];
    }
    const rlt = [];
    data.forEach((p) => {
      if (p.items && p.items.length > 0) {
        rlt.push({
          title: p.name,
          value: p.alias,
          disabled: p.type.itemType === 'empty',
          children: this.makeTree(p.items),
        });
      } else {
        rlt.push({
          title: p.name,
          value: p.alias,
        });
      }
    });
    return rlt;
  };

  /**
   * @name successSave
   * Callback after save the graph
   *
   */
  successSave = () => {
    const p = this.props;
    p.addModalClose();
  };

  /**
   * @name editGraph
   * Sets the form data when edit graph
   * @param {Obj} graph to edit
   */
  editGraph = (item) => {
    let eeff = item.eeff.map((p) => {
      return p.alias;
    });
    if (item.type === GRAPH_TYPE_INDICATOR) {
      eeff = eeff.join(',');
    }
    const imgArray = item.image ? item.image.match(/ind_([^.]+)/) : null;
    this.setState({
      name: item.name,
      dashboard: item.sourceView,
      type: item.type,
      tree: item.epigraph.map((p) => {
        return p.alias;
      }),
      eeff,
      graphId: item.graphId,
      selectedImg: imgArray ? imgArray[1] : '',
    });
  };

  /**
   * @name graphSave
   * Saves the graph with state data
   *
   */
  graphSave = () => {
    const state = this.state;
    let eeff = [];
    if (typeof state.eeff === 'string') {
      eeff = [{
        alias: state.eeff,
      }];
    } else {
      eeff = state.eeff.map((e) => {
        return {
          alias: e,
        };
      });
    }
    let epigraph = [];
    if (typeof state.tree === 'string') {
      epigraph = [{
        alias: state.tree,
      }];
    } else {
      epigraph = state.tree.map((e) => {
        return {
          alias: e,
        };
      });
    }
    const p = this.props;
    const data = {
      type: state.type,
      sourceView: parseInt(state.dashboard, 10),
      viewId: p.dashboard.viewId,
      epigraph,
      graphId: state.graphId,
      image: state.selectedImg,
      eeff,
      width: state.width,
      height: state.height,
      name: state.name,
      position_x: '',
      position_y: '',
    };
    p.saveModal(data, this.successSave);
  };

  /**
   * @name isValid
   * Check if all form data is not empty.
   *
   */
  isValid = () => {
    const state = this.state;
    const fields = ['dashboard', 'type', 'eeff', 'tree'];
    for (let i = 0; i < fields.length; i += 1) {
      if (state[fields[i]] === '' || state[fields[i]].length === 0) {
        return true;
      }
    }
    if (state.type === GRAPH_TYPE_INDICATOR && state.selectedImg === '') {
      return true;
    }
    return false;
  };

  render() {
    const p = this.props;
    const state = this.state;
    const img = state.type === GRAPH_TYPE_INDICATOR ? 'DashboardView__AddModal--ImageContainer' : 'DashboardView__AddModal--ImageContainer hidden';
    const treeData = this.makeTree(p.selectedTable.epigraph);
    const tProps = {
      treeData,
      value: state.tree,
      onChange: this.treeChange,
      className: 'DashboardView__AddModal--formControl',
      multiple: state.type !== GRAPH_TYPE_INDICATOR,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: p.literals.treePlaceholder,
    };
    const RadioGroup = Radio.Group;
    const CheckboxGroup = Checkbox.Group;
    const eeff = p.selectedTable.eeff && p.selectedTable.eeff.map((item) => {
      return {
        label: item.name,
        value: item.alias,
      };
    });
    let checkbox = '';
    if (state.type === GRAPH_TYPE_INDICATOR || ((state.type === GRAPH_TYPE_BAR || state.type === GRAPH_TYPE_PIE || state.type === GRAPH_TYPE_LINE) && state.tree.length > 1)) {
      checkbox = <RadioGroup onChange={this.handleChangeEeff} value={state.eeff} options={eeff} />;
    } else {
      checkbox = <CheckboxGroup onChange={this.handleChangeEeffCheckbox} value={state.eeff} options={eeff} />;
    }
    const disabled = this.isValid();
    return (
      <div className='DashboardView__AddModal'>
        <form>
          <FormControl className='DashboardView__AddModal--formControl'>
            <InputLabel>{ p.literals.modal.name }</InputLabel>
            <Input onChange={this.changeName} value={state.name} />
          </FormControl>
          <FormControl className='DashboardView__AddModal--formControl'>
            <InputLabel>{ p.literals.modal.dashboard }</InputLabel>
            <Dropdown options={p.tableOptions} value={state.dashboard} onChange={this.dashboardChange} name='dashboard' />
          </FormControl>
          <FormControl className='DashboardView__AddModal--formControl'>
            <InputLabel>{ p.literals.modal.type }</InputLabel>
            <Dropdown options={p.typeOptions} value={state.type} onChange={this.typeChange} name='type' />
          </FormControl>
          <FormControl className='DashboardView__AddModal--formControl'>
            <p>{ p.literals.modal.epigraph }</p>
            <TreeSelect {...tProps} />
          </FormControl>
          <FormControl className='DashboardView__AddModal--formControl'>
            <p>{ p.literals.modal.eeff }</p>
            { checkbox }
          </FormControl>
          {
            <div className={img}>
              { state.images.map((item, i) => {
                const active = item.src === state.selectedImg ? 'active' : '';
                return (
                  <img src={require(`../../../assets/images/indicators/img_ind_${item.src}.png`)} alt='test' onClick={this.imgClicked.bind(this, i)} className={active} width='50px' height='50px' key={i} />
                );
              })
              }
            </div>
          }
          <Button onClick={this.graphSave} disabled={disabled}>
            { p.literals.modal.ok }
          </Button>
          <Button onClick={p.addModalClose}>
            { p.literals.modal.cancel }
          </Button>
        </form>
      </div>
    );
  }
}

export default AddModalContent;
