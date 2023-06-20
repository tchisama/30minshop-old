
export type navbar= {
  links:{
      name:string;
      link:string;
    }[];
  search:boolean;
  viewLogo:boolean;
  viewCart:boolean;
}

export interface section {
  type:"navbar";
  props:navbar;
}