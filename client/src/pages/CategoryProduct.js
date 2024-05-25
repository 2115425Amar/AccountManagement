import React ,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const CategoryProduct = () => {
    const params=useParams()
    const [products, setProducts]=useState([])
    const [category, setCategory]=useState([])

    const getProductByCat = async()=>{
        try{
            const {data} =await axios.get(`/api/v1/product/product-category/${params.slug}`);
            setProducts(data?.products);
            
        }catch(error){
            console.log(error)
        }
    }
  return (
    <Layout>
      <div className="container">
      <h1>category Name</h1>
      </div>
    </Layout>
  )
}

export default CategoryProduct;
