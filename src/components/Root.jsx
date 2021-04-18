import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ip from "./Ip";
import Country from "./Country";

const useStyles = makeStyles((theme) => ({
  widget: {
    backgroundColor: "#5692e8",
    width: "20%",
    height: "20%",
    padding: "10px",
    marginLeft: "40%",
    marginTop: "10%"
  },
}));

function Root() {
  const classes = useStyles();
  const [information, setInformation] = useState([]);

  const fetchInfo = async () => {
    const data = await fetch("https://ipapi.co/json/");
    const info = await data.json();
    setInformation(info);
    fetch("https://607b555167e6530017573037.mockapi.io/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((info) => {
        console.log("Success:", info);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className={classes.widget}>
      <Country
        country={information.country_name}
        countryCode={information.country_code}
      />
      <Ip ip={information.ip} />
    </div>
  );
}

export default Root;
