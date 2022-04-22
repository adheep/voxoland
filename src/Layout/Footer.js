import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@mui/material/Container"
import Tooltip from "@mui/material/Tooltip"

const useStyles = makeStyles(theme => ({
  ul: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    color: '#fff'
  },
  
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    color: theme.palette.secondary.contrastText,
    "&$main": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&$light": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&$dark": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  main: {},
  dark: {},
  light: {},
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    background: '#13172b',
    color: '#fff',
    width: '100% !important'
  },
}))

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
]

export default function Footer() {
  const classes = useStyles()

  return (
     <>
      {/* Footer */}
      {/* <Container  component="footer" sx={{width: '100%'}} className={classes.footer}> */}
        <Grid container spacing={1} justify="space-evenly" className={classes.footer}>
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
             
                <Typography variant="h6" color="white" gutterBottom>
                  {footer.title}
                </Typography>
              <ul className={classes.ul}>
                {footer.description.map(item => (
                  <li key={item}>
                    
                      <Link href="#" variant="subtitle1" >
                        {item}
                      </Link>
                   
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      {/* </Container> */}
      {/* End footer */}
      </>
  )
}