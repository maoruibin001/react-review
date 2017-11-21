/**
 * Created by lenovo on 2017/11/13.
 */
import React, { Component } from 'react';

const API_BASE = 'http://47.94.77.75/api/v3';

class CityMap extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  componentWillReceiveProps() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return <div className="loading">loading...</div>;
    }

    const map = `${API_BASE}/google/maps/staticmap?maptype=roadmap&size=400x200&center=${this.props.city}&zoom=12`;
    return (
      <div>
        <img src={map} alt="" width={400} height={200} />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: 'London',
    };
  }

  selectCity(e) {
    const newValue = e.target.value;
    this.setState((state) => {
      if (state.city === newValue) {
        return null;
      }

      return { city: newValue };
    });
  }

  render() {
    return (
      <div>
        <button value="London" onClick={this.selectCity.bind(this)}>
          London
        </button>
        <button value="New York" onClick={this.selectCity.bind(this)}>
          New York
        </button>
        <CityMap city={this.state.city} />
      </div>
    );
  }
}

export default App;