import React, { Component } from 'react';
import './styles.css';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DatePicker, Select } from 'antd';
import '../../../styles/components/antd.scss';
// import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

// const Search = Input.Search;
const Option = Select.Option;

/**
 * @name AddModalContent Component
 *
 * @param {Object}   literals
 * @param {Func}   filterModalClose
 *
 * @returns {JSX}
 */

class FilterModalContent extends Component {
  state = {
    initialDate: '',
    endDate: '',
    factory: '',
    regionId: '',
    age: '',
    gender: '',
    position: '',
  };

  factoryEl = React.createRef();

  positionEl = React.createRef();

  // fromDateEl = React.createRef();

  // toDateEl = React.createRef();

  componentDidMount() {
    const p = this.props;
    p.onRef(this);
  }

  /**
   * @name isValid
   * Check if all form data is not empty.
   *
   */
  isValid = () => {
    return false;
  };

  onChangeDate = (name, value) => {
    this.setState({ [name]: value });
  }

  onChangeRegion = (value) => {
    this.setState({ region: value });
  }

  onChange = (name, value) => {
    this.setState({ [name]: value });
  }

  onSearch = (value, event) => {
    console.log(`on search ${event}`);
    this.setState({ position: value });
  }

  onSearchFactory = (value, event) => {
    console.log(`on search factory ${event}`);
    this.setState({ factory: value });
  }

  onApply = () => {
    const p = this.props;
    p.closePopper();
    p.onApply(this.state);
  }

  clear = (id) => {
    console.log('id', id);
    this[`${id}El`].current.input.input.value = '';
    this.setState({ [id]: '' });
  }


  render() {
    const p = this.props;
    const disabled = this.isValid();

    return (
      <div className='DashboardView__FilterModal'>
        <p>
          { p.literals.modal.filterBy }
        </p>
        <div className='DashboardView__Grid__Wrapper' style={{ marginBottom: 40 }}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              { p.literals.modal.from }
              <br />
              <Grid container spacing={8}>
                <Grid item md={10} style={{ borderRight: 'none' }}>
                  <DatePicker style={{ width: '100%' }} placeholder={p.literals.modal.from} onChange={(name, value) => this.onChange('initialDate', value)} />
                </Grid>
                <Grid item md={2} className='Cross__Icon' style={{ borderRight: 'none' }}>
                  <Close />
                </Grid>
              </Grid>
              { p.literals.modal.to }
              <br />
              <Grid container spacing={8}>
                <Grid item md={10} style={{ borderRight: 'none' }}>
                  <DatePicker style={{ width: '100%' }} placeholder={p.literals.modal.to} onChange={(name, value) => this.onChange('endDate', value)} />
                </Grid>
                <Grid item md={2} className='Cross__Icon' style={{ borderRight: 'none' }}>
                  <Close />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              { p.literals.modal.factory }
              <br />
              {/* <Grid container spacing={8}>
                <Grid item md={10} style={{ borderRight: 'none' }}>
                  <Search ref={this.factoryEl} placeholder='Factory' onSearch={this.onSearchFactory} />
                </Grid>
                <Grid item md={2} className='Cross__Icon' style={{ borderRight: 'none' }}>
                  <Close onClick={() => this.clear('factory')} />
                </Grid>
              </Grid> */}
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder={p.literals.modal.factory}
                onChange={value => this.onChange('factory', value)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {
                  p.filters.factories.map((data) => {
                    return (
                      <Option value={data.name}>{data.name}</Option>
                    );
                  })
                }
              </Select>
              { p.literals.modal.region }
              <br />
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder={p.literals.modal.region}
                onChange={value => this.onChange('regionId', value)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {
                  p.filters.regions.map((data) => {
                    return (
                      <Option value={data.name}>{data.name}</Option>
                    );
                  })
                }
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={8}>
                <Grid item md={6} style={{ borderRight: 'none' }}>
                  { p.literals.modal.age }
                  <br />
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder={p.literals.modal.age}
                    onChange={value => this.onChange('age', value)}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    {
                      p.filters.age.map((data) => {
                        return (
                          <Option value={data.name}>{data.name}</Option>
                        );
                      })
                    }
                  </Select>
                </Grid>
                <Grid item md={6} style={{ borderRight: 'none' }}>
                  { p.literals.modal.gender }
                  <br />
                  <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder={p.literals.modal.gender}
                    onChange={value => this.onChange('gender', value)}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    {
                      p.filters.gender.map((data) => {
                        return (
                          <Option value={data.name}>{data.name}</Option>
                        );
                      })
                    }
                  </Select>
                </Grid>
              </Grid>
              { p.literals.modal.position }
              <br />
              {/* <Grid container spacing={8}>
                <Grid item md={10} style={{ borderRight: 'none' }}>
                  <Search
                    style={{ width: '100%' }}
                    placeholder='Position'
                    onSearch={this.onSearch}
                    ref={this.positionEl}
                  />
                </Grid>
                <Grid item md={2} className='Cross__Icon' style={{ borderRight: 'none' }}>
                  <Close onClick={() => this.clear('position')} />
                </Grid>
              </Grid> */}
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder={p.literals.modal.position}
                onChange={value => this.onChange('position', value)}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {
                  p.filters.position.map((data) => {
                    return (
                      <Option value={data.name}>{data.name}</Option>
                    );
                  })
                }
              </Select>
            </Grid>
          </Grid>
          <Button onClick={this.onApply} disabled={disabled}>
            { p.literals.modal.apply }
          </Button>
        </div>
      </div>
    );
  }
}

export default FilterModalContent;
