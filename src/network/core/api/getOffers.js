import axios from "axios";

import { HEADERS } from './headers';

/**
 * API method to fetch order data
 * @param {Object} data - An object containing the request body
 * @param {string} urlprefix - url prefix used for SSR
 * @return {Promise}
 */

const getOffers = () => axios
  .get(`https://cdn.sixt.io/codingtask/offers.json`, {}, {
    headers: HEADERS
  })

export {
  getOffers,
};
