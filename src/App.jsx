import TextField from '@mui/material/TextField'
import './App.css'
import { Stack, Button } from '@mui/material'
import { useState } from 'react'





function App() {
    /* js code */
  //states to store the data from input files
  const [principle,setprinciple] = useState(0)
  const [rate,setrate] = useState(0)
  const [year,setyear] = useState(0)
  const [interest,setInterest] = useState(0)

  const [IsPricipleInvalid,setIsprincipleInvalid] = useState(false)
  const [IsRateInvalid,setIsRateInvalid] = useState(false)
  const [IsYearInvalid,setIsYearInvalid] = useState(false)
   
  /* validation */

  // console.log(principle);

  const handleInputValidation = (tag)=>{
    const {name,value} = tag
    // console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    /* reg expression= /^[0-9]*$   */
    /* match()--to check the pattern matchs the value or else returns null */
    // console.log(value.match(/^[0-9]+$/));
    /* !! -> to covert into boolean */
    if (!!value.match(/^\d*.?\d+$/)) {
      if (name == "principle") {
        setprinciple (value)
        setIsprincipleInvalid(false)
      }
      if (name == "rate") {
        setrate (value)
        setIsRateInvalid(false)
      }
      if (name == "year") {
        setyear (value)
        setIsYearInvalid(false)
      }
      
    } else {
      if (name == "principle") {
        setprinciple (value)
        setIsprincipleInvalid(true)
      }
      if (name == "rate") {
        setrate (value)
        setIsRateInvalid(true)
      }
      if (name == "year") {
        setyear (value)
        setIsYearInvalid(true)
      }

      
    }


  }

  const handleReset =()=>{
    setprinciple(0)
    setrate(0)
    setyear(0)
    setInterest(0)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
    setIsprincipleInvalid(false)
  }

  const handleCal = (e) =>{
    e.preventDefault()
    console.log("Clicked");
    if (principle && rate && year) {
      setInterest((principle*rate*year)/100)
    } else {
      alert ("Please fill the form completely")
    }




    
  
  
  }


  return (
    <div style={{height:"100vh", width:"100%"}} className='bg-dark d-flex justify-content-center align-items-center'>

      <div style={{width:"600px"}} className='bg-light p-5 rounded'>
        <h3>Simple interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
          <div id='output' className='bg-warning w-100 d-flex justify-content-center align-items-center rounded p-3 shadow flex-column text-light' >
            <h2>₹ {interest}</h2>
            <p className='fw-bold'>Total Interest Earning</p>
          </div>
          <form className='mt-5'>
            <div className='mb-3'>
            <TextField name='principle' value={principle||""} onChange={e=>handleInputValidation(e.target)} fullWidth  id="principle" label="₹ Principle Amount" variant="outlined" />
            </div>
            {
              IsPricipleInvalid &&
              <div className="mb-3 text-danger"><small>Invalid Principle Amount!!!</small></div>
            }
            <div className='mb-3'>
            <TextField name='rate' value={rate||""} onChange={e=>handleInputValidation(e.target)} fullWidth  id="rate" label="Rate of interest (p.a) %" variant="outlined" />
            </div>
            {
              IsRateInvalid &&
              <div className="mb-3 text-danger"><small>Invalid Interest Rate!!!</small></div>
            }
            <div className='mb-3'>
            <TextField name='year' value={year||""} onChange={e=>handleInputValidation(e.target)} fullWidth  id="year" label="Time Period (yr)" variant="outlined" />
            </div>
            {
              IsYearInvalid &&
              <div className="mb-3 text-danger"><small>Invalid Year!!!</small></div>
            }
            <Stack direction="row" spacing= {2}>
              <Button disabled={IsPricipleInvalid || IsRateInvalid || IsYearInvalid} type='submit' style={{width:"50%", height:"70px"}} onClick={handleCal} className='bg-dark' variant="contained">Calculate</Button>
              <Button onClick={handleReset} style={{width:"50%", height:"70px"}} variant="outlined">Reset</Button>

            </Stack>

          </form>

      </div>
      



    </div>
  )
}

export default App
