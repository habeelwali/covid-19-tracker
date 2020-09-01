import React from 'react';
import  { useState, useEffect } from 'react';
import logo from './clogo.png';

import  styles from './NaveBar.module.css';

import { FormControl, NativeSelect } from '@material-ui/core';
import {fetchcountries} from '../../Api/Api'
import { NavLink } from 'react-router-dom';



export default function SearchAppBar({handleCountryChange}) {
  const [fetchCountries, setfetchCountries]=useState([]);
  useEffect(() => {
    const fetchApi = async () =>{
    setfetchCountries(await fetchcountries());

    }
    fetchApi();
  },[setfetchCountries]);
  

  return (
   
          <nav className={styles.container}>
          <div>
            <img className={styles.logo} src={logo} alt=""/>
          </div>

          <li className={styles.li}>
            <NavLink className={styles.btn} to="/" >
              Home
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink className={styles.btn} to="/cases">
              Cases
            </NavLink>
          </li>
         <div className={styles.abc}>
          <FormControl className={styles.icon}>
          
            <NativeSelect  defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)} >
            
              <option className={styles.search} value="">
                
                Global
                
              </option>
   {fetchCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
              
            </NativeSelect>
            
          </FormControl>
          </div>
        
          </nav>
     
  
  );
}
