import React from "react";
import Card from "./Components/Card";

const ProductsViewer = ({ conf }: any) => {
  return (
    <div className="w-full mt-2 py-4">
      <div className="container mx-auto ">
        <h1 className="text-3xl p-4 text-gray-700 font-semibold">Best Products</h1>
        <div className="p-8 grid grid-cols-5 gap-5">
            <Card img={"https://th.bing.com/th/id/OIP.atuKUlRXAFT9D8w5N2KJgAHaD4?pid=ImgDet&w=1200&h=628&rs=1"}/>
            <Card img={"https://th.bing.com/th/id/OIP.bH1SP5YcAmIEq0-yZc0TvwHaHa?pid=ImgDet&w=800&h=800&rs=1"}/>
            <Card img={"https://th.bing.com/th/id/OIP.ZE0rah1zQt85lsWOIzMGTgHaEK?pid=ImgDet&rs=1"}/>
            <Card img={"https://www.liveoutdoorsy.com/wp-content/uploads/2016/10/Nike-Flyright.jpg"}/>
            <Card img={"https://th.bing.com/th/id/OIP.atuKUlRXAFT9D8w5N2KJgAHaD4?pid=ImgDet&w=1200&h=628&rs=1"}/>
            <Card img={"https://th.bing.com/th/id/OIP.bH1SP5YcAmIEq0-yZc0TvwHaHa?pid=ImgDet&w=800&h=800&rs=1"}/>
            <Card img={"https://th.bing.com/th/id/OIP.ZE0rah1zQt85lsWOIzMGTgHaEK?pid=ImgDet&rs=1"}/>
            <Card img={"https://www.febbuy.com/media/x490/Nike_Other_Basketball_Shoes/Nike_Paul_George_PG1/Nike_Zoom_PG_1_EP_Paul_George_Blue_Women_Basketball_Shoes_878628-417_P3.jpg"}/>
            <Card img={"https://th.bing.com/th/id/OIP.ZE0rah1zQt85lsWOIzMGTgHaEK?pid=ImgDet&rs=1"}/>
            <Card img={"https://www.liveoutdoorsy.com/wp-content/uploads/2016/10/Nike-Flyright.jpg"}/>
        </div>
      </div>
    </div>
  );
};

export default ProductsViewer;
