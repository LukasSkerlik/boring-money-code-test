import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function Country({ country, countryCode }) {
  let low = "";
  //Get image url
  if (countryCode !== undefined) {
    low = `http://assets.ipapi.com/flags/${countryCode.toLowerCase()}.svg`;
  }
  //Add img before element
  //This is most not best practice, in react it is customary to add and conditionally render an element rather instead
  //It is done this way as I was asked to do it using :before specifically
  const useStyles = makeStyles((theme) => ({
    country: {
      "&::before": {
        content: "''",
        backgroundImage: `url(${low})`,
        backgroundSize: "100% 100%",
        display: "inline-block",
        height: "26.1px",
        width: "38.4px",
      },
    },
  }));
  const classes = useStyles();
  //content: `url(${low})`,
  return (
    <Grid className={classes.country} container item alignItems="center" >
      {country}
    </Grid>
  );
}

export default Country;
