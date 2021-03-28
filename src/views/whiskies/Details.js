import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link as RouterLink } from 'react-router-dom';

import WhiskyImg from '../../images/whisky.png';
import { getWhisky } from '../../helpers/api';

export const Details = (props) => {
  const [_whisky, setWhisky] = useState( { data: [], loading: true, error: false })

  useEffect(() => {
    getWhisky(props.match.params.id)
      .then(async (response) => {
        const resolved = await response;
        setWhisky( { data: resolved.data, loading: false, error: false })
      })
      .catch((error) => {
        console.log(error)
        setWhisky( { data: error, loading: false, error: false })
      })
  }, [])

  const renderWhisky = () => {
    return (
      <table summary="Information about selected whisky">
        <tbody>
          <tr>
            <th scope="row" width="100">Name</th>
            <td>{_whisky.data.name}</td>
          </tr>
          <tr>
            <th scope="row" width="100">Type</th>
            <td>{_whisky.data.type}</td>
          </tr>
          <tr>
            <th scope="row" width="100">Rating</th>
            <td>{_whisky.data.rating} / 100</td>
          </tr>
          <tr>
            <th scope="row" width="100">Price</th>
            <td>{_whisky.data.currency}{_whisky.data.price}</td>
          </tr>
          <tr>
            <th scope="row" width="100">Description</th>
            <td>{_whisky.data.description}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <React.Fragment>
      <div id="aside-container">
        <aside id="aside-content">
          <img src={WhiskyImg} alt="Glass of whisky" width="100%" />
          <Button 
            component={RouterLink}
            startIcon={<KeyboardBackspaceIcon />} 
            to="/whiskies"
            >
              Return to List
          </Button>        
        </aside>
      </div>
      <div id="main-container">
        <main id="main-content">
          <h1>Whiskies</h1>
          { _whisky.loading && <CircularProgress /> }
          
          { _whisky.loading == false && renderWhisky() }
        </main>
      </div>
    </React.Fragment>
  )
}

export default Details;