import React,  { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data'
import {ConsM} from '../context';

 export default class ProductList extends Component {
   state={
       storeProducts : storeProducts
   };
    render(){
        return(
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                   <Title name="our" title="products"/>
                   <div className="row">
                   <ConsM>
                       { value => {
                          return value.storeProducts.map(product =>{
                             return <Product key={product.id} product=
                             {product} /> ;
                          });
                       }}
                   </ConsM>
                   </div>
                </div>
            </div> 
            </React.Fragment>
            //<Product/>
           
        );
    }
}

