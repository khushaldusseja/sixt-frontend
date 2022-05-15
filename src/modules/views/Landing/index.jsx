import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Grid, makeStyles } from "@material-ui/core";

import { getOffers } from "../../../network/core/api/getOffers";
import fallBackImage from "../../../assets/images/fallback.png";
import { setOffers } from "../../../actions/offerList.js";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    backgroundColor: "#ff5f00"
  },
  productGrid: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "25vw",
    height: "25vh"
  },
  productHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    color: "#ff5f00",
    backgroundColor: "#000000",
    padding: "4px 0"
  },
  productName: {
    paddingLeft: "10px"
  },
  productPrice: {
    paddingRight: "10px"
  }
}));

const Landing = props => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const [offerList, setOfferList] = useState([]);

  useEffect(() => {
    getOffers()
      .then(res => {
        if (res.status === 200) {
          //local state peersistance
          setOfferList(res?.data?.offers);

          //redux store persistance
          dispatch(setOffers(res?.data?.offers));
        }
      })
      .catch(err => {});
  }, [props, dispatch]);

  const displayOffers = () => {
    return offerList.map((item, index) => {
      const {
        prices: {
          basePrice: {
            amount: { currency, display }
          }
        },
        carGroupInfo: {
          modelExample: { name }
        },
        splashImages
      } = item;

      return (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          className={classes.productGrid}
        >
          <Box>
            <Box className={classes.productHeader}>
              <span className={classes.productName}>{name}</span>
              <span className={classes.productPrice}>
                {currency === "EUR" ? <i className="fa fa-euro-sign"></i> : ""}
                {display}
              </span>
            </Box>
            <img
              src={splashImages?.[0]?.url || fallBackImage}
              alt={name}
              width="100%"
            />
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Grid container className={classes.gridContainer}>
      {displayOffers()}
    </Grid>
  );
};

export default Landing;
