import { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Box, Grid } from '@material-ui/core';

import StepOne from '../../components/Farms/CreateFarm/StepOne';
import StepTwo from '../../components/Farms/CreateFarm/StepTwo';
import StepThree from '../../components/Farms/CreateFarm/StepThree';
import StepFour from '../../components/Farms/CreateFarm/StepFour';

let stepArray = [1, 2, 3, 4];
let stepTypeText = ['Farm type', 'Input token addresses', 'Reward distribution settings', 'Review']

const CreateFarm = () => {

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    farmType: '',
    stakingToken: '',
    rewardToken: '',
    rewardTokenAmount: 0,
    penalty: 0,
    lifeTime: 0,
    active: false,
    activeDate: '',
    private: false,
    privateAddress: ''
  });

  return(
    <>
      <Helmet>
        <title>CoinFarms | Create Farm</title>
      </Helmet>
      <Box
        sx={{
          height: '100%',
          minHeight: '100%',
          padding: '30px 45px'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgb(45, 49, 55, 0.8)',
            borderRadius: '12px',
            opacity: '1',
            minHeight: '100%',
            color: 'white',
            padding: '30px 50px'
          }}
        >
          <Box
            sx={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '44px',
              lineHeight: '67px',
            }}
          >
            Farm Creation {data.farmType !== "" && '('+data.farmType+')'}
          </Box>

          <Box pt={8}>
            <Box display="flex" justifyContent="space-between">
              <Grid container sx={{padding: '0px 30px'}}>
                  {
                    stepArray.map((item, index) => (
                      item < 4 && <Grid xs={4} item key={index}>
                      <Box
                        sx={{
                          borderRadius: '8px',
                          backgroundColor: '#414652',
                          height: '6px',
                          ...(step > item && {
                            backgroundColor: '#FF5E15',
                          })
                        }}
                      >
                      </Box>
                      </Grid>
                    ))
                  }

              </Grid>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{marginTop: "-34px"}}>
              {
                stepArray.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width:'60px',
                      height:'60px',
                      borderRadius: '30px',
                      backgroundColor: '#414652',
                      border: '8px solid #292D32',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      ...(step > item ? {
                        width: '40px',
                        height: '40px',
                        border: 'none',
                        backgroundColor: '#FF5E15',
                        marginTop: '10px'
                      } : step === item ? {
                        backgroundColor: '#FF5E15',
                      } : {}),
                  }}>{'0' + item}</Box>                  
                ))
              }
            </Box>
          </Box>

          <Box
            sx={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '38px',
              lineHeight: '58px',
              marginTop: '22px'
            }}
          >
            {stepTypeText[step-1]}
            {step === 1 && <img src="/static/icons/infoIcon.svg" alt="info" style={{marginLeft:'15px'}} />}
          </Box>

          <Box mt={step !== 3 ? 5 : 1}>
            {step === 1 && <StepOne setStepChild={setStep} dataChild={data} setDataChild={setData}/>}
            {step === 2 && <StepTwo setStepChild={setStep} dataChild={data} setDataChild={setData}/>}
            {step === 3 && <StepThree setStepChild={setStep} dataChild={data} setDataChild={setData}/>}
            {step === 4 && <StepFour setStepChild={setStep} dataChild={data} setDataChild={setData}/>}
          </Box>
        </Box>
      </Box>
    </>
  )
};

export default CreateFarm;
