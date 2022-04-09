import { Box, Grid } from '@material-ui/core';

const StepOne = ({setStepChild, dataChild, setDataChild}) => {

	const handleClickGreenhouse = () => {
		setStepChild(2);
    setDataChild({...dataChild, farmType:"Greenhouse"})
	}

	const handleClickGarden = () => {
		setStepChild(2);
    setDataChild({...dataChild, farmType:"Garden"})
	}

    return(
        <>
            <Grid container spacing={4}>
              <Grid item md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    background: '#2D3137',
                    border: '1px solid #56606C',
                    boxSizing: 'border-box',
                    borderRadius: '12px',
                    height: '270px',
                    padding: '40px',
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'linear-gradient(274.43deg, #353B42 2.37%, #434855 112.04%)',
                      div: {
                        'div:nth-of-type(1)': {
                          background: '#FF5E15'
                        }
                      }
                    }
                  }}
									onClick={handleClickGreenhouse}
                >
                  <Box display="flex" alignItems="center">
                    <Box sx={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '10px',
                      border: '2px solid #56606C',
                      marginRight: '20px',
                      cursor: 'pointer',
                    }}></Box>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        lineHeight: '46px',
                      }}
                    >Greenhouse</Box>
                  </Box>
                  <Box mt={4} sx={{fontSize: '18px', lineHeight: '27px'}}>
                    Greenhouse is a non-competitive Farm meaning that already earned rewards are not affected by other Users. Users earn rewards every second on their share of the Greenhouse.
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    background: '#2D3137',
                    border: '1px solid #56606C',
                    boxSizing: 'border-box',
                    borderRadius: '12px',
                    height: '270px',
                    padding: '40px',
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'linear-gradient(274.43deg, #353B42 2.37%, #434855 112.04%)',
                      div: {
                        'div:nth-of-type(1)': {
                          background: '#FF5E15'
                        }
                      }
                    }
                  }}
									onClick={handleClickGarden}
                >
                  <Box display="flex" alignItems="center">
                    <Box sx={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '10px',
                      border: '2px solid #56606C',
                      marginRight: '20px',
                    }}></Box>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '30px',
                        lineHeight: '46px',
                      }}
                    >Garden</Box>
                  </Box>
                  <Box mt={4} sx={{fontSize: '18px', lineHeight: '27px'}}>
                    Garden is a competitive Farm meaning that the end User reward is affected by other Users using CML multipliers while unstaking.
                  </Box>
                </Box>
              </Grid>
            </Grid>
        </>
    )
}

export default StepOne;