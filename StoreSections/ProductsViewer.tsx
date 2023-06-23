import Card from "./Components/Card";
import {useEffect, useState} from "react"
import { getDocs} from "firebase/firestore"
import {productsRef} from "@/firebase"


type productType ={
  image:string
  price:number
  title:string
  description:string
  avilable:boolean
  id:any
}

const ProductsViewer = ({ conf }: any) => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    getDocs(productsRef)
    .then((snapshot)=>{
      let prds:any=[];
      snapshot.docs.forEach(doc => {
        prds.push({...doc.data(),id:doc.id})
      });
      setProducts(prds);
      console.log(prds);
    })
  }, [])
  return (
    <div className="w-full bg-gray-50  py-4">
      <div className="container mx-auto ">
        <h1 className="text-3xl p-4 text-gray-700 font-semibold">Best Products</h1>
        <div className="p-8 grid grid-cols-5 gap-5">
          {

            products.map((product:productType)=>(
              <Card 
                img={product.image}
                price={product.price}
                description={product.description}
                title={product.title}
                id={product.id}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsViewer;
