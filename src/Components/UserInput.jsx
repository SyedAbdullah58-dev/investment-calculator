import React, { useState } from 'react'

const UserInput = ({UserInput,handleInputChange}) => {



  return (
    <>
<section id='user-input'>
<div className='input-group'>
  <p>
<label>Initial Investment</label>
<input type='number' required
onChange={(event)=>handleInputChange('initialInvestment',event.target.value)}
value={UserInput.initialInvestment}
></input>
  </p>
  <p>
<label>Annual investment</label>
<input type='number' required
onChange={(event)=>handleInputChange('annualInvestment',event.target.value)}
value={UserInput.annualInvestment}
></input>
  </p>

</div>
<div className='input-group'>
  <p>
<label>Expected Return</label>
<input type='number' required
onChange={(event)=>handleInputChange('expectedReturn',event.target.value)}
value={UserInput.expectedReturn}
></input>
  </p>
  <p>
<label>Duration</label>
<input type='number' required
onChange={(event)=>handleInputChange('duration',event.target.value)}
value={UserInput.duration}></input>
  </p>

</div>
</section>

    </>
  )
}

export default UserInput