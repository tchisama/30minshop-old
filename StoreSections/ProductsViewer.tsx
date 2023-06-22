import React from "react";
import Card from "./Components/Card";

const ProductsViewer = ({ conf }: any) => {
  return (
    <div className="w-full mt-2 py-4">
      <div className="container mx-auto ">
        <h1 className="text-3xl p-4 text-gray-700 font-semibold">Best Products</h1>
        <div className="p-4 py-8 grid grid-cols-4 ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  );
};

export default ProductsViewer;
