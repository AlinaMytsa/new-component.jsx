import React from "react";
import PropTypes from 'prop-types';

const Filler = (props) =>{
  const {value} = props;

  return(
    <div className="list-group">{
      value.map((item)=>{
        return(
          <button type="button" className="list-group-item list-group-item-action">{item}</button>
        )
      })
    }
    </div>
  )
}

Filler.propTypes = {
  value: PropTypes.array.isRequired
}

export default Filler;
