import React from "react";


import { Card,Chart,CountryPicker} from "./component";
import Styles from "./App.module.css";
import { fetchData } from '../src/api';
import CoronaImage from './images/covid.png';

import Header from "./component/navBar/Header";
import Footer from "./component/footer/footer";

class App extends React.Component{
  state ={
    data:{},
    country:'',
  }

    async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData});
  }

  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
  
    this.setState({data:fetchedData ,country:country });
  }


  render(){
    const{data,country}=this.state;

  return (
    <div className={Styles.container}>
      <Header/>

      <img className={Styles.image} src={CoronaImage} alt="COVID-19"/>
      <Card data={data}/>
     
      

    <CountryPicker handleCountryChange={this.handleCountryChange}/>
    <Chart data={data} country={country}/>

    <Footer/>

    </div>
  );
}
}

export default App;
