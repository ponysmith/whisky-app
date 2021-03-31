import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Filters from '../../components/whiskies/Filters';
import WhiskyImg from '../../images/whisky.png';

import { getWhiskies } from '../../helpers/api';

export const List = ( props ) => {
  const [_whiskies, setWhiskies] = useState( { data: [], loading: true, error: false })
  const [_filterObj, setFilterObj] = useState({ 
    ratings: { min: 95, max: 100 },
    type: 'sms'
  })
  const handleUpdateFilters = (filterObj) => {
    setFilterObj(filterObj);
  } 

  useEffect(() => {
    getWhiskies(_filterObj)
    .then(async (response) => {
      const resolved = await response;
      setWhiskies( { data: resolved.data, loading: false, error: false })
    })
    .catch((error) => {
      console.log(error)
      setWhiskies( { data: error, loading: false, error: false })
    })
  }, [_filterObj])

  const renderWhiskyList = () => {
    return _whiskies.data.map( (whisky, i) => {
      return (
        <div key={`whisky-${i}`}>
          <Link to={`/whiskies/${whisky.id}`}>{whisky.name}</Link>
        </div>
      )
    })
  }

  return (
    <React.Fragment>
      <div id="aside-container">
        <aside id="aside-content">
          <img src={WhiskyImg} alt="Glass of whisky" width="100%" />
          <Filters filterObj={_filterObj} updateFilters={handleUpdateFilters} />
        </aside>
      </div>
      <div id="main-container">
        <main id="main-content">
          <h1>Whiskies</h1>

          { _whiskies.loading && <CircularProgress /> }
        
          { _whiskies.data.length > 99 &&
            <p>Your search returned too many results. Only showing the first 100.</p>
          }
          
          { _whiskies.data.length > 0 && renderWhiskyList() }
        </main>
      </div>
    </React.Fragment>
  )
}

export default List;