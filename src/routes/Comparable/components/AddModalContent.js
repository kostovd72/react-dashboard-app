import React, { Component } from 'react';
import './styles.css';
import { Select, Input, Checkbox } from 'antd';
import Button from '@material-ui/core/Button';
import '../../../styles/components/antd.scss';

/**
 * @name AddModalContent Component
 *
 * @param {Object}   literals
 * @param {Array}   typeOptions
 * @param {Array}   countryOptions
 * @param {Array}   countryGroupOptions
 * @param {Array}   segmentOptions
 * @param {Array}   sectorOptions
 * @param {Array}   ratingOptions
 * @param {Func}   addModalClose
 * @param {Func}   save
 * @param {Func}   search
 *
 * @returns {JSX}
 */

const Dropdown = (props) => {
  const prop = props;
  const Option = Select.Option;
  return (
    <Select
      showSearch
      placeholder={prop.placeholder}
      optionFilterProp='children'
      onChange={(e) => { prop.onChange(e, prop.name); }}
      value={prop.value}
      className={prop.className}
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      <Option value='' key={-1}>Select</Option>
      {
        prop.options && prop.options.map((p, i) => {
          return (
            <Option value={p} key={i}>
              { p }
            </Option>
          );
        })
      }
    </Select>
  );
};

class AddModalContent extends Component {
  state = {
    name: '',
    code: '',
    codeLocal: '',
    segment: '',
    sector: '',
    rating: '',
    country: '',
    countryGroup: '',
    type: '',
    clients: [],
    manual: {
      name: '',
      code: '',
      codeLocal: '',
      segment: '',
      sector: '',
      rating: '',
      country: '',
      countryGroup: '',
      type: '',
    },
    view: {
      empty: false,
      advanced: false,
    },
  };

  componentDidMount() {
    const p = this.props;
    p.onRef(this);
    this.setData = this.setData.bind(this);
    this.setInputData = this.setInputData.bind(this);
    this.setManualData = this.setManualData.bind(this);
    this.setManualInputData = this.setManualInputData.bind(this);
    this.setToggleEmpty = this.setToggleEmpty.bind(this);
    this.setToggleAdvance = this.setToggleAdvance.bind(this);
    this.search = this.search.bind(this);
    this.save = this.save.bind(this);
  }
  /**
   * @name setData
   * Set state when change the select value
   * @param {String}  val
   * @param {String}  key
   */

  setData(val, key) {
    const ob = {};
    ob[key] = val;
    if (key === 'segment' && val !== 'FFEE') {
      ob.type = '';
    }
    this.setState(ob);
  }
  /**
   * @name setInputData
   * Set state when change the input value
   * @param {Obj}  e
   */

  setInputData(e) {
    const ob = {};
    ob[e.target.name] = e.target.value;
    this.setState(ob);
  }
  /**
   * @name setManualData
   * Set state when change the client select value
   * @param {String}  val
   * @param {String}  key
   */

  setManualData(val, key) {
    const st = this.state;
    const ob = st.manual;
    ob[key] = val;
    this.setState({
      manual: ob,
    });
  }
  /**
   * @name setManualInputData
   * Set state when change the client input value
   * @param {Obj}  e
   */

  setManualInputData(e) {
    const st = this.state;
    const ob = st.manual;
    ob[e.target.name] = e.target.value;
    this.setState({
      manual: ob,
    });
  }
  /**
   * @name setToggleEmpty
   * Toggle the manual input view
   */

  setToggleEmpty() {
    const st = this.state;
    const p = st.view.empty;
    this.setState({
      view: {
        empty: !p,
      },
    });
  }
  /**
   * @name setToggleAdvance
   * Toggle the advanced search view
   */

  setToggleAdvance() {
    const st = this.state;
    const p = st.view.advanced;
    this.setState({
      view: {
        advanced: !p,
      },
    });
  }
  /**
   * @name getSectorOptions
   * get sector options whenever change segment option
   * @param {Obj}  param
   */

  getSectorOptions(param) {
    const prop = this.props;
    let rlt = [];
    if (param) {
      for (let i = 0; i < prop.sectorOptions.length; i += 1) {
        if (prop.sectorOptions[i].segment === param) {
          rlt = prop.sectorOptions[i].sectors;
          break;
        }
      }
    }
    return rlt;
  }
  /**
   * @name getAdvancedOptions
   * get view part of advanced options
   */

  getAdvancedOptions() {
    const p = this.props;
    const state = this.state;
    return (
      <div className='ClientsView__AddModal--search'>
        <div className='small ClientsView__AddModal--search--formControl'>
          <span>{p.literals.modal.code}</span>
          <Input name='code' onChange={this.setInputData} placeholder={p.literals.modal.code} value={state.code} />
        </div>
        <div className='small ClientsView__AddModal--search--formControl'>
          <span>{p.literals.modal.codeLocal}</span>
          <Input name='codeLocal' onChange={this.setInputData} placeholder={p.literals.modal.codeLocal} value={state.codeLocal} />
        </div>
        <div className='small ClientsView__AddModal--search--formControl'>
          <span>{p.literals.modal.segment}</span>
          <Dropdown
            value={state.segment}
            placeholder={p.literals.modal.segment}
            options={p.segmentOptions}
            name='segment'
            onChange={this.setData}
          />
        </div>
        <div className='small ClientsView__AddModal--search--formControl'>
          <span>{p.literals.modal.sector}</span>
          <Dropdown
            value={state.sector}
            placeholder={p.literals.modal.segment}
            options={this.getSectorOptions(state.segment)}
            name='sector'
            onChange={this.setData}
          />
        </div>
        <div className='small ClientsView__AddModal--search--formControl'>
          <span>{p.literals.modal.rating}</span>
          <Dropdown name='rating' onChange={this.setData} value={state.rating} placeholder={p.literals.modal.rating} options={p.ratingOptions} />
        </div>
        {
          state.segment === 'FFEE' && (
            <div className='small ClientsView__AddModal--search--formControl'>
              <span>{p.literals.modal.type}</span>
              <Dropdown name='type' onChange={this.setData} value={state.type} placeholder={p.literals.modal.type} options={p.typeOptions} />
            </div>
          )
        }
        <div className='small ClientsView__AddModal--search--formControl'>
          <span>{p.literals.modal.countryGroup}</span>
          <Dropdown name='countryGroup' onChange={this.setData} value={state.countryGroup} placeholder={p.literals.modal.countryGroup} options={p.countryGroupOptions} />
        </div>
        <div className='small ClientsView__AddModal--search--formControl'>
          <span>{p.literals.modal.country}</span>
          <Dropdown name='country' onChange={this.setData} value={state.country} placeholder={p.literals.modal.country} options={p.countryOptions} />
        </div>
      </div>
    );
  }
  /**
   * @name getManualForm
   * get view part of manual client input
   */

  getManualForm() {
    const p = this.props;
    const state = this.state;
    return (
      <div className='ClientsView__AddModal--manual'>
        <div className='ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.name}</span>
          <Input name='name' onChange={this.setManualInputData} placeholder={p.literals.modal.name} value={state.manual.name} />
        </div>
        <div className='small ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.code}</span>
          <Input name='code' onChange={this.setManualInputData} placeholder={p.literals.modal.code} value={state.manual.code} />
        </div>
        <div className='small ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.codeLocal}</span>
          <Input name='codeLocal' onChange={this.setManualInputData} placeholder={p.literals.modal.codeLocal} value={state.manual.codeLocal} />
        </div>
        <div className='small ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.segment}</span>
          <Dropdown
            value={state.manual.segment}
            placeholder={p.literals.modal.segment}
            options={p.segmentOptions}
            name='segment'
            onChange={this.setManualData}
          />
        </div>
        <div className='small ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.sector}</span>
          <Dropdown
            value={state.manual.sector}
            placeholder={p.literals.modal.segment}
            options={this.getSectorOptions(state.manual.segment)}
            name='sector'
            onChange={this.setManualData}
          />
        </div>
        <div className='small ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.rating}</span>
          <Dropdown name='rating' onChange={this.setManualData} value={state.manual.rating} placeholder={p.literals.modal.rating} options={p.ratingOptions} />
        </div>
        {
          state.manual.segment === 'FFEE' && (
            <div className='small ClientsView__AddModal--manual--formControl'>
              <span>{p.literals.modal.type}</span>
              <Dropdown name='type' onChange={this.setManualData} value={state.manual.type} placeholder={p.literals.modal.type} options={p.typeOptions} />
            </div>
          )
        }
        <div className='small ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.countryGroup}</span>
          <Dropdown name='countryGroup' onChange={this.setManualData} value={state.manual.countryGroup} placeholder={p.literals.modal.countryGroup} options={p.countryGroupOptions} />
        </div>
        <div className='small ClientsView__AddModal--manual--formControl'>
          <span>{p.literals.modal.country}</span>
          <Dropdown name='country' onChange={this.setManualData} value={state.manual.country} placeholder={p.literals.modal.country} options={p.countryOptions} />
        </div>
      </div>
    );
  }
  /**
   * @name getClientList
   * get view part of searched client list
   */

  getClientList() {
    const state = this.state;
    const p = this.props;
    return (
      <div className='ClientsView__AddModal--clients'>
        {
          state.clients.length > 0 && (
            <ul>
              <li key={0}>
                <Checkbox checked={this.checkedAll()} onChange={(e) => { this.clientCheck(-1, e.target.checked); }}>{p.literals.modal.checkAll}</Checkbox>
              </li>
              {
                state.clients.map((item, i) => {
                  return (
                    <li key={i}>
                      <Checkbox checked={item.selected} onChange={(e) => { this.clientCheck(i, e.target.checked); }}>{item.name}</Checkbox>
                    </li>
                  );
                })
              }
            </ul>
          )
        }
      </div>
    );
  }
  /**
   * @name invalid
   * return invalid state of manual client input
   */

  invalid = () => {
    const state = this.state;
    const fields = ['name', 'code', 'codeLocal', 'segment', 'rating', 'sector', 'country', 'countryGroup'];
    for (let i = 0; i < fields.length; i += 1) {
      if (!state.manual[fields[i]] || state.manual[fields[i]] === '') {
        return true;
      }
    }
    if (state.manual.segment === 'FFEE' && state.manual.type === '') {
      return true;
    }
    return false;
  };
  /**
   * @name checkedAll
   * return checkedall state of clients
   */

  checkedAll() {
    const state = this.state;
    const unchecked = state.clients.filter((e) => {
      return !e.selected;
    });
    return unchecked.length === 0;
  }
  /**
   * @name clientCheck
   * set check state of selected client
   * @param {Number}  index
   * @param {Boolean}  val
   */

  clientCheck(index, val) {
    const st = this.state;
    const clients = st.clients;
    clients.forEach((e, i) => {
      if (index === i || index === -1) {
        e.selected = val;
      }
    });
    this.setState(clients);
  }
  /**
   * @name search
   * search the clients with advanced options
   */

  search() {
    const state = this.state;
    const prop = this.props;
    const data = {
      name: state.name || '',
      code: state.code || '',
      localCode: state.codeLocal || '',
      segment: state.segment || '',
      sector: state.sector || '',
      type: state.type || '',
      rating: state.rating || '',
      country: state.country || '',
      countryGroup: state.countryGroup || '',
    };
    prop.search(data, (res) => {
      this.setState({
        clients: res,
      });
    });
  }
  /**
   * @name save
   * save the clients with advanced options
   */

  save() {
    const st = this.state;
    const prop = this.props;
    if (st.view.empty) {
      const data = st.manual;
      data.eeff = [];
      prop.save({
        mode: 'manual',
        data,
      }, () => {
        prop.addModalClose();
      });
    } else {
      const rlt = [];
      st.clients.forEach((e) => {
        if (e.selected) {
          rlt.push(e.id);
        }
      });
      prop.save({
        mode: 'auto',
        ids: rlt,
      });
    }
  }
  /**
   * @name render
   * Render view.
   */

  render() {
    const p = this.props;
    const state = this.state;
    const Search = Input.Search;
    const disabled = this.invalid();
    return (
      <div className='ClientsView__AddModal'>
        <div>
          <p>{ p.literals.modal.searchNameLabel }</p>
          <Search
            name='name'
            placeholder={p.literals.modal.searchName}
            onChange={this.setInputData}
            onSearch={this.search}
            value={state.name}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <p onClick={this.setToggleAdvance} className='text-right'>{ p.literals.modal.advancedSearch }</p>
          {
            state.view.advanced && this.getAdvancedOptions()
          }
          <div className='clearfix' />
          <p onClick={this.setToggleEmpty}>{ p.literals.modal.noResult }</p>
          {
            state.view.empty && this.getManualForm()
          }
          <div className='clearfix' />
          {
            !state.view.empty && this.getClientList()
          }
          {
            state.clients.length === 0 && !state.view.empty && (
              <Button onClick={this.search}>
                { p.literals.modal.search }
              </Button>
            )
          }
          {
            state.clients.length > 0 && !state.view.empty && (
              <Button onClick={this.save}>
                { p.literals.modal.compare }
              </Button>
            )
          }
          {
            state.view.empty && (
              <Button onClick={this.save} disabled={disabled}>
                { p.literals.modal.createCompare }
              </Button>
            )
          }
          <Button onClick={p.addModalClose}>
            { p.literals.modal.cancel }
          </Button>
        </div>
      </div>
    );
  }
}

export default AddModalContent;
