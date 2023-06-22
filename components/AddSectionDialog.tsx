import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import AddIcon from "@mui/icons-material/Add";
import { useData } from "@/store/useData";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type props = {
  index: number;
};

export default function AddSectionDialog({ index }: props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { add } = useData();

  const addSection = (sectionType: string, index: number) => {
    if (sectionType === "navbar") {
      add(
        {
          type: "navbar",
          props: {
            links: [
              { name: "home", link: "home" },
              { name: "about", link: "home" },
              { name: "market", link: "home" },
              { name: "contact", link: "home" },
            ],
            search: true,
            viewCart: true,
            viewLogoText: true,
            viewLogo: true,
            logoUrl:"https://th.bing.com/th/id/OIP.fOEu5v5LvP4urmTCGM5AfgHaD2?pid=ImgDet&rs=1",
            viewLinks: true,
            logoSize: 20,
          },
        },
        index
      );
    }
    if (sectionType === "hero") {
      add(
        {
          type: "hero",
          props: {
            h1: true,
            h1Text: "the best for the best",
            h3: "lorem",
            h3Text: "perferendis enim maxime, ipsum eos consequuntur distinctio ipsam tenetur saepe et laudantium esse eius vel?",
            image: true,
            imageUrl: "https://th.bing.com/th/id/R.835983e251d097bc25af6fb3b2155be7?rik=M%2fqrSDtR0zalDw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshoe-transparent-background%2fshoe-transparent-background-12.png&ehk=aBRlr3y8H6C6wFWasX1boX9%2batIB911%2b5HM0eh0kwTo%3d&risl=&pid=ImgRaw&r=0",
            btn:true,
            btnText:"Start Shopping"
          },
        },
        index
      );
    }
    if (sectionType === "productsViewer") {
      add(
        {
          type: "productsViewer",
          props:{}
        },
        index
      );
    }
    if (sectionType === "footer") {
      add(
        {
          type: "footer",
          props:{}
        },
        index
      );
    }
    handleClose();
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className=" px-2 h-full p-1 rounded-full bg-primer text-white text-sm flex items-center gap-1"
      >
        <AddIcon /> Add Section
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Choose section you want !"}</DialogTitle>
        <div className="grid grid-cols-2  w-[600px] p-4 bg-gray-100 gap-2">
          <div
            onClick={() => addSection("navbar", index)}
            className="h-28 cursor-pointer hover:border-blue-400 border-[2px] duration-300 w-full bg-white shadow-lg rounded-md flex items-center justify-center text-lg"
          >
            navbar
          </div>
          <div
            onClick={() => addSection("hero", index)}
            className="h-28 cursor-pointer hover:border-blue-400 border-[2px] duration-300 w-full bg-white shadow-lg rounded-md flex items-center justify-center text-lg"
          >
            hero section
          </div>
          <div
            onClick={() => addSection("productsViewer", index)}
            className="h-28 cursor-pointer hover:border-blue-400 border-[2px] duration-300 w-full bg-white shadow-lg rounded-md flex items-center justify-center text-lg"
          >
            products viewer
          </div>
          <div
            onClick={() => addSection("footer", index)}
            className="h-28 cursor-pointer hover:border-blue-400 border-[2px] duration-300 w-full bg-white shadow-lg rounded-md flex items-center justify-center text-lg"
          >
            footer
          </div>
        </div>
      </Dialog>
    </div>
  );
}
