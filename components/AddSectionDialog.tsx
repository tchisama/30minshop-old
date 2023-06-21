import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddIcon from '@mui/icons-material/Add';
import { useData } from '@/store/useData';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type props ={
    index:number
}


export default function AddSectionDialog({index}:props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {add}=useData()






  const addSection = (sectionType:"navbar"|"hero",index:number)=>{
    if(sectionType==="navbar"){
      add({
          type:"navbar",
          props:{
            links:[
              {name:"home",link:"home"},
              {name:"about",link:"home"},
              {name:"market",link:"home"},
              {name:"contact",link:"home"},
            ],
            search:true,
            viewCart:true,
            viewLogoText:true,
            viewLogo:false,
            logoSize:20
          }}
          ,index)
    }
    if(sectionType==="hero"){
      add({type:"hero",props:{h1:true,h1Text:"hello world",h3:false,h3Text:"---",image:false,imageUrl:""}},index)
    }
    handleClose()
  }





  return (
    <div>
      <button onClick={handleClickOpen} className=' px-2 h-full p-1 rounded-full bg-primer text-white text-sm flex items-center gap-1'><AddIcon/> Add Section</button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Choose section you want !"}</DialogTitle>
            <div className='grid grid-cols-2  w-[600px] p-4 bg-gray-100 gap-2'> 
                <div onClick={()=>addSection("navbar",index)} className='h-28 cursor-pointer hover:border-blue-400 border-[2px] duration-300 w-full bg-white shadow-lg rounded-md flex items-center justify-center text-lg'>navbar</div>
                <div onClick={()=>addSection("hero",index)} className='h-28 cursor-pointer hover:border-blue-400 border-[2px] duration-300 w-full bg-white shadow-lg rounded-md flex items-center justify-center text-lg'>hero section</div>
            </div>
      </Dialog>
    </div>
  );
}