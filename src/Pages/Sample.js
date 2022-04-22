import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    width: "100%",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&.Mui-focused": {
      backgroundColor: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Div = styled("div")(({ theme }) => ({
  marginTop: "23px",
}));

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      featured: true,
    }
  ];
export default function Sample() {
  const [text1, setText1] = React.useState();
  const [text2, setText2] = React.useState();
  const [showImage, setShowImage] = React.useState(false);
  const handleChange = (event) => {
    setText1(event.target.value);
  };
  const handleChange1 = (event) => {
    setText2(event.target.value);
  };

  const handleClick = () => {
    console.log(text1, text2);
    setShowImage(true);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          marginTop: 5,
          height: 200,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} sx={{ height: 300 }}>
          <Grid item xs={6}>
            <RedditTextField
              label="Text 1"
              id="reddit-input"
              variant="filled"
              onChange={handleChange}
              style={{ marginTop: 11, width: "80%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <RedditTextField
              label="Text 2"
              id="reddit-input"
              variant="filled"
              onChange={handleChange1}
              style={{ marginTop: 11, width: "80%" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ "& button": { m: 1 } , height: 300 }}>
        <div>
          <Button variant="contained" size="large" onClick={handleClick}>
            Breed
          </Button>
        </div>
      </Box>
      {showImage && (
      <Box sx={{ "& button": { m: 1 } }}>
     
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
           
        );
      })}
    </Box>
      )}
      <br /> <br />
    </>
  );
}
