import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";

import { Container, Grid, Paper, TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import ListItem from "@mui/material/ListItem";

import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { styled } from "@mui/material/styles";
const itemData = [
    {
      img: "https://wearables-10769.kxcdn.com/a8088aae-7bc8-4171-a719-7e1e0a92b5f5-pastel-not-a-ballgag.gif",
      title: "MO Junseok Sculpture Park",
      author: "42 minutes ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/138b912c-8643-4265-8778-669f85a6cac6-coach-stormy-debut.gif",
      title: "Burger",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/01aa44c7-da50-4b5b-ba77-89cecffced4c-black-collar-shirt.gif",
      title: "Camera",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/b5f1b09e-6838-4cdf-8fc5-7aa7d9892028-not-a-ballgag.gif",
      title: "Coffee",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/934008a3-1761-43ee-ab3d-a01a731f94bb-collar-choker-necklace.gif",
      title: "Hats",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/45eee5d8-5f27-4629-a5f1-b1ca90675c17-collar-necklace-collar.gif",
      title: "Honey",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/6d7011cc-5935-41a5-9b43-a9cac2d12fbd-kawaii-alien-head.gif",
      title: "PepsiMicdrop",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/cf2b20bf-2ce4-4111-b7c9-04422f38ddab-alien-sunshine-hoodie.gif",
      title: "AsiaVerse NFT",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/0af39175-777d-42f1-8b80-afd9ef92177b-pabllovittar-head.gif",
      title: "The C1 gallery",
      author: "1 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/e3402123-ad3d-43bd-97f4-e8a8a6acdcae-dj-amazing-villa.gif",
      title: "Shanghal",
      author: "4 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/998bc51d-252e-41fa-ad98-4ca09d3f6ebd-raphaeldumaresq-arm-left.gif",
      title: "Flegz art gallery",
      author: "2 hours ago",
    },
    {
      img: "https://wearables-10769.kxcdn.com/30b89d3b-d04f-4310-95ba-b869df0212ff-raphaeldumaresq-arm-right.gif",
      title: "3 Tondra Road",
      author: "4 hours ago",
    },
  ];

const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
  }));
  
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "red",
    padding: theme.spacing(1),
    height: 20,
  }));
  
  const ODiv = styled("div")(({ theme }) => ({}));
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
export default function MarketPlace() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: 500, width: "100%" }}>
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Typography variant="h6" gutterBottom component="div">
          MarketPlace
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="All" value="1" key="1" />
            <Tab label="Collectibles" value="2" key="2" />
            <Tab label="Collections" value="3" key="3" />
            <Tab label="Parcels" value="4" key="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Item>
                  <Typography variant="h6" color="inherit">
                  Collections


                  </Typography>
                  <Typography variant="subtitle1" color="inherit">
                  List of collections
                  </Typography> 
                  <TextField id="outlined-basic" label="Search" variant="outlined" />
                  <Box sx={{ width: "100%" }}>
                

                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="https://www.cryptovoxels.com/api/collections/43.png" />
                          </ListItemAvatar>
                          <ListItemText
                            primary="Interesting Digital Stuffs "
                            secondary={
                              <React.Fragment>
                                <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="subtitle2"
                          color="#ddd"
                        >
                          A collection of interesting digital stuffs
                        </Typography>
                              </React.Fragment>
                            }
                          />
                         
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar><Avatar alt="Remy Sharp" src="https://media-crvox.sfo2.digitaloceanspaces.com/0x08cf1208e638a5a3623be58d600e35c6199baa9c/1642730827852-aa528851-22ef-4e9f-a794-3c6fbb5f7dd0.png" /></ListItemAvatar>
                          <ListItemText
                            primary=" The Patternbase V2 - Genesis Collection "
                            secondary={
                              <React.Fragment>
                                <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="subtitle2"
                          color="#ddd"
                        >
                          Unique, trend-driven wearables, textiles, and art objects. Designed by @patternbase.
                        
                        </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar><Avatar alt="Remy Sharp" src="https://www.cryptovoxels.com/api/collections/45.png" /></ListItemAvatar>
                          <ListItemText
                            primary="CryptoConservatory"
                            secondary={
                              <React.Fragment>
                                <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="subtitle2"
                          color="#ddd"
                        >
                          A collection of plants, animals, objects, and textures.
                        </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      </List>
                   
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={7}>
               
                <Item>
                <TextField id="outlined-basic" label="Search" variant="outlined" />
                  <ODiv >
                    <ImageList cols={3}>
                      {itemData.map((item) => (
                        <ImageListItem key={item.img} sx={{ padding: "12px" }}>
                          <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            sx={{ background: "#fff", color: '#a152b3' }}
                            title={item.title}
                            position="below"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </ODiv>
                </Item>
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value="2">
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12}>
               
               <Item>
               <TextField id="outlined-basic" label="Search" variant="outlined" />
                 <ODiv >
                   <ImageList cols={4}>
                     {itemData.map((item) => (
                       <ImageListItem key={item.img} sx={{ padding: "12px" }}>
                         <img
                           src={`${item.img}?w=248&fit=crop&auto=format`}
                           srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                           alt={item.title}
                           loading="lazy"
                         />
                         <ImageListItemBar
                           sx={{ background: "#fff", color: '#a152b3' }}
                           title={item.title}
                           position="below"
                         />
                       </ImageListItem>
                     ))}
                   </ImageList>
                 </ODiv>
               </Item>
             </Grid>
           </Grid>
         </Container>
        </TabPanel>
        <TabPanel value="3">Comming Soon</TabPanel>
        <TabPanel value="4">Comming Soon</TabPanel>
      </TabContext>
    </Box>
    </Box>
  );
}
