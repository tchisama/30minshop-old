import Navbar from "@/EditSection/Navbar";

export type navbarProps= {
    links:{
        name:string;
        link:string;
      }[];
    search:boolean;
    viewLogo:boolean;
    viewLogoText:boolean;
    viewCart:boolean;
}

export const navbarSchema={
  
}




export type navbarType={
  type:"navbar";
  props:any;
}

/////////////////////////////////////////////////////////


export type heroProps= {
    h1:boolean;
    h1Text:String;
    h3:boolean;
    h3Text:String;
    image:boolean;
    imageUrl:string;
}


export type heroType={
  type:"hero";
  props:any;
}





export type section = navbarType | heroType




