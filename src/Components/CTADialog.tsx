import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  SxProps,
  TextField,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import logo from "../assets/vite.svg";

interface CTAProps {
  sx?: SxProps;
}

interface ContactProps {
  name: string;
  email: string;
  message: string;
  website?: boolean;
  seo?: boolean;
  webApp?: boolean;
  mvp?: boolean;
}

export const CTADialog = ({ sx }: CTAProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState<ContactProps>();
  const sendContactInformations = async () => {
    setContact({
      name,
      email,
      message: "Hallo! Ich habe Interesse an Ihrer Dienstleistung",
    });
    await addDoc(collection(db, "contacts"), contact);
    setOpen(false);
  };
  return (
    <>
      <Box sx={sx}>
        <Button sx={{ color: "black" }} onClick={() => setOpen(!open)}>
          get in touch
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>
            <DialogContent>
              <Avatar src={logo}></Avatar>
              <Box sx={{ m: 1 }}>
                <TextField
                  required
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box sx={{ m: 1 }}>
                <TextField
                  required
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
            </DialogContent>
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Abbrechen</Button>
            <Button onClick={sendContactInformations}>Senden</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};
