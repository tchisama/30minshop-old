
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

export type navbarType={
  type:"navbar";
  props:navbarProps
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
  props:heroProps
}





export interface section {
  type:navbarType|heroType
}



