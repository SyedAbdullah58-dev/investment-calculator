import React, { useState } from 'react'

const UserInput = () => {
    const [UserInput, setUserInput] = useState({
initialInvestment: 1000,
annualInvestment: 1200,
expectedReturn:7,
duration:10,
    });

    function handleInputChange(inputIdentifier,newValue){
setUserInput(prevValue=>{
return {
    ...prevValue,
    [inputIdentifier]:newValue
}

})

    }
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
<input type='number' required></input>
  </p>
  <p>
<label>Duration</label>
<input type='number' required></input>
  </p>

</div>
</section>

    </>
  )
}

export default UserInput