import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, Button, Link } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@material-ui/core/styles";

import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
const itemData = [
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0x0cbfc5242cf36ca11b816f58d3110b24bd203b83/womps/1649318450130-c03cb430-b3e4-4669-92ac-019989dbeb64.jpg",
    title: "MO Junseok Sculpture Park",
    author: "42 minutes ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0x87DdB931310238874437458Ab7D1BBA4d1C89525/womps/1649309328001-b1f3f97a-b976-49a7-8e52-7067c8022d75.jpg",
    title: "Burger",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0x87DdB931310238874437458Ab7D1BBA4d1C89525/womps/1649304866577-b721e70f-bd92-4fe7-bb77-cb1c7d0798e1.jpg",
    title: "Camera",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0x2d2f80ecb07f01532c044d1423bb930f9ba4f700/womps/1649298271083-02fa79e0-9d8e-4bab-b414-cda8b9d211af.jpg",
    title: "Coffee",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0xfa09af40d9fbf0e0206495200b42a03c7345540d/womps/1649297256264-efe52737-5b60-4e57-a74b-9bd760163acc.jpg",
    title: "Hats",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0xaa4007fbd7b9e5b6445769ca6bc13e86d850b2fb/womps/1649295678985-a743e965-d370-401b-afe4-2612c9ac8346.jpg",
    title: "Honey",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0x5a12ea5e06694b716a4d2516047a668224f149f1/womps/1649292209050-a6277266-b62d-4d93-b49f-622c759de649.jpg",
    title: "PepsiMicdrop",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0xd8afe3c91a8586bd263995dba8bf1f94dc85d8a6/womps/1649265921603-fe49c255-c2f3-446e-ac27-d91867dc0344.jpg",
    title: "AsiaVerse NFT",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0xF4A33c0cDD6F22e9A3cD28B2d4083F0C3110Ff0B/womps/1649277820164-d40b0678-dc76-4959-9b7e-ebceccb68e0d.jpg",
    title: "The C1 gallery",
    author: "1 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0xf1182c5e5bcd7c90b04eb14eb4f971c52f510d47/womps/1649264614731-71c78199-27be-4e96-926e-dd6d5ab4f78f.jpg",
    title: "Shanghal",
    author: "4 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0x87DdB931310238874437458Ab7D1BBA4d1C89525/womps/1649305932369-7fe1f899-114d-4fb6-ae3a-21e55f144993.jpg",
    title: "Flegz art gallery",
    author: "2 hours ago",
  },
  {
    img: "https://media-crvox.sfo2.digitaloceanspaces.com/0x20da165deb81dbb042fe4a9d4808399ef2477c5d/womps/1649267854844-7c41970f-ebdf-4900-b5b3-22262122a1e3.jpg",
    title: "3 Tondra Road",
    author: "4 hours ago",
  },
];
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#13172b" : "#13172b",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
  width: "100%",
}));

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "red",
  padding: theme.spacing(1),
  height: 20,
}));
const MainDiv = styled("div")(({ theme }) => ({
  backgroundColor: "#13172b",
  height: "100%",
}));

const SideDiv = styled("div")(({ theme }) => ({
  marginTop: "23px",
}));

const ODiv = styled("div")(({ theme }) => ({}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const social = [
  { name: "GitHub", icon: GitHubIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Facebook", icon: FacebookIcon },
];

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    color: '#fff'
  },
  sidebarLink: {
    marginLeft: theme.spacing(18),
    marginTop: theme.spacing(3),
    color: '#fff'
  },
}));

export default function Home() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <MainDiv>
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          <div class="v45_4816">
            <div class="v45_4881">
              <div class="v45_4882">
                <div class="v45_4883">
                  <span class="v45_4884">Play now</span>
                </div>
                <span class="v45_4885">in your browser or create a</span>
                <div class="v45_4886">
                  <span class="v45_4887">Free Space</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Container
          sx={{ backgroundColor: "#13172b", width: "100% !important" }}
        >
          <Grid container spacing={2} sx={{ height: 300 }}>
            <Grid item xs={8}>
              <Item>
                <div class="v45_4817">
                  <span class="v45_4818">
                    Product name - a user owned virtual world
                  </span>
                  <span class="v45_4819">
                    Product name is a virtual world and metaverse, powered by
                    the Ethereum blockchain. Players can buy land and build
                    stores and art galleries. Editing tools, avatars and text
                    chat are built in.
                  </span>
                </div>

                <Box sx={{ "& button": { m: 1 }, marginTop: "187px" }}>
                  <div>
                    <Button
                      variant="contained"
                      sx={{ fontSize: 16, fontWeight: 600 }}
                      size="large"
                      color="success"
                    >
                      Explore Map
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ fontSize: 16, fontWeight: 600 }}
                      size="large"
                      color="info"
                    >
                      Explore Marketplace
                    </Button>
                  </div>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <SideDiv>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.sidebarSection}
                >
                  Social
                </Typography>
                {social.map((network) => (
                  <Link display="block" variant="body1" href="#" className={classes.sidebarLink}>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <Grid item>
                        <network.icon />
                      </Grid>
                      <Grid item>{network.name}</Grid>
                    </Grid>
                  </Link>
                ))}
              </SideDiv>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Item>
                <Typography variant="h6" color="inherit">
                  Popular Parcels
                </Typography>
                <Typography variant="p" color="inherit">
                  Popular Parcels based on world visits
                </Typography>

                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Today" {...a11yProps(0)} />
                      <Tab label="Month" {...a11yProps(1)} />
                      <Tab label="All" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="RIvermenverse"
                          secondary={
                            <React.Fragment>{" — 1122 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="Inasdeasfe"
                          secondary={
                            <React.Fragment>{" — 32 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="Teschaljsdfae"
                          secondary={
                            <React.Fragment>{" — 122 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="RIvermenverse"
                          secondary={
                            <React.Fragment>{" — 1122 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="Inasdeasfe"
                          secondary={
                            <React.Fragment>{" — 32 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="Teschaljsdfae"
                          secondary={
                            <React.Fragment>{" — 122 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="RIvermenverse"
                          secondary={
                            <React.Fragment>{" — 1122 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="Inasdeasfe"
                          secondary={
                            <React.Fragment>{" — 32 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>🏠</ListItemAvatar>
                        <ListItemText
                          primary="Teschaljsdfae"
                          secondary={
                            <React.Fragment>{" — 122 visits"}</React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </TabPanel>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={7}>
              <Item>
                <Typography variant="h6" color="inherit">
                  Community events
                </Typography>
                <Typography variant="p" color="inherit">
                  User-created and hosted events. Click on an event for more
                  info!
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 200,
                      height: 200,
                    },
                  }}
                >
                  <Paper elevation={1}>
                    <Div>
                      {/* <p > */}
                      POEM = WORK OF ART...
                      {/* </p> */}
                    </Div>
                    <ODiv>
                      <Typography variant="p" gutterBottom>
                        POEM = WORK OF ART documents the early days of poetry on
                        the blockchain and explores how new technologies are
                        empowering language ...
                      </Typography>
                    </ODiv>
                    <ODiv>
                      <Typography variant="caption" gutterBottom>
                        <small>
                          Happening now (ends at 11:36 pm on Wednesday)
                        </small>
                        <small>1 player present.</small>
                      </Typography>
                    </ODiv>
                  </Paper>
                  <Paper elevation={2}>
                    <Div>
                      {/* <p > */}I think first floor
                      {/* </p> */}
                    </Div>
                    <ODiv>
                      <Typography variant="p" gutterBottom>
                        That way, when you're tired at work, you can come down
                        and have a cup of coffee
                      </Typography>
                    </ODiv>
                    <ODiv>
                      <Typography variant="caption" gutterBottom>
                        <small>
                          Happening now (ends at 11:36 pm on Wednesday)
                        </small>
                        <small>1 player present.</small>
                      </Typography>
                    </ODiv>
                  </Paper>
                  <Paper elevation={3}>
                    <Div sx={{ background: "blue" }}>
                      {/* <p > */}
                      Do you want gaint.
                      {/* </p> */}
                    </Div>
                    <ODiv>
                      <Typography variant="p" gutterBottom>
                        Everything is in the meta-universe, and that's the
                        beauty of the meta-universe
                      </Typography>
                    </ODiv>
                    <ODiv>
                      <Typography variant="caption" gutterBottom>
                        <small>
                          Happening now (ends at 11:36 pm on Wednesday)
                        </small>
                        <small>1 player present.</small>
                      </Typography>
                    </ODiv>
                  </Paper>
                </Box>
              </Item>

              <Item>
                <Typography variant="h6" gutterBottom component="div">
                  Recent Womps
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                  Screenshots taken by users in world. Click a womp to instantly
                  teleport to the location in your browser.
                </Typography>

                <ODiv sx={{ background: "#4c3456cf" }}>
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
                          sx={{ background: "#fff" }}
                          title={item.title}
                          subtitle={<span>{item.author}</span>}
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
      </MainDiv>
    </>
  );
}
