import {useState} from 'react';

import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import css from "../styles/style.scss"

const styles = {
  positive: {
    color: 'blue',
  },
  negative: {
    color: 'red',
  }
};

const Counter = (props) => {
  
  let [counter, setCounter] = useState(0);
  
  let polarity = counter > 0 ? 'positive' : counter < 0 ? 'negative' : '';
  return (
     <>
       <Head title="Counter" />
       <Nav />
       <h2 style={styles[polarity]}>{counter}</h2>
       <button onClick={() => setCounter(counter - 1)}>-</button>
       <button onClick={() => setCounter(counter + 1)}>+</button>
     </>
  );
  
};

export default Counter;