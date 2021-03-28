import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';

import './filters.scss';

export const Filters = (props) => {
  
  const [_ratings, setRatings] = useState([props.filterObj.ratings.min, props.filterObj.ratings.max])
  const [_type, setType] = useState(props.filterObj.type)

  const handleRatingsChange = (e, values) => {
    setRatings(values);
  }
  const handleType = (e) => {
    setType(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let [min, max] = _ratings;
    props.updateFilters({
      ratings: { min: min, max: max },
      type: _type
    })
  }

  return (
    <form className="filters-form">
      <div className="filter">
        <div className="filter-label">
          <InputLabel id="ratings-label">Rating Range</InputLabel>
        </div>
        <div className="filter-field">
          <Slider
            value={_ratings}
            min={85}
            max={100}
            step={1}
            marks={[ 
              { value: 85, label: 85 }, 
              { value: 90, label: 90 }, 
              { value: 95, label: 95 }, 
              { value: 100, label: 100 } 
            ]}
            onChange={handleRatingsChange}
            aria-labelledby="ratings-label"
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    
      <div className="filter">
        <div className="filter-label">
          <InputLabel id="types-label">Whisky Type</InputLabel>
        </div>
        <div className="filter-field">
          <Select
            labelId="types-label"
            id="types"
            value={_type}
            onChange={handleType}
            value={_type}
          >
            <MenuItem value={'*'}>All</MenuItem>
            <MenuItem value={'sms'}>Single Malt Scotch</MenuItem>
            <MenuItem value={'bsw'}>Blended Scotch Whisky</MenuItem>
            <MenuItem value={'bsmw'}>Blended Malt Scotch Whisky</MenuItem>
          </Select>
        </div>
      </div>    
      
      <div className="filter">
        <Button variant="contained" color="primary" onClick={ (e) => handleSubmit(e) }>Update Filters</Button>
      </div>
    </form>
  )
}

export default Filters;