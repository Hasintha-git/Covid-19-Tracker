import React,{useState,useEffect} from 'react'
import { NativeSelect,FormControl } from '@material-ui/core';
import Styles from "./CountryPicke.module.css";
import {fetchCountrie} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [FetchedCountries,setFetchCountries]=useState([]);
    useEffect(()=>{
        const FetchAPI=async ()=>{
            setFetchCountries(await fetchCountrie());
        }
        FetchAPI();
    },[setFetchCountries]);

    return (
        
            <FormControl className={Styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {FetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
       
    )
}

export default CountryPicker
