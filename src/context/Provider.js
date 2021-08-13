import React from 'react';
import MyContext from './context';

class Provider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Cars: {
        redCar: false,
        blueCar: false,
        yellowCar:false,
      }
    }
  }

  moveCar = (car, side) => {
    this.setState({
      Cars: {
        ...this.state.Cars,
        [car]: side,
      },
    })  
  };

  render(){
    const store = {
      ...this.state,
      moveCar: this.moveCar,
    }

    const { children } = this.props;
    return(
      <MyContext.Provider value={store}>
        {children}
      </MyContext.Provider>
    );
  }
}

export default Provider;