import { Box, Grid, Slider, Button } from '@material-ui/core';
import {
	FaLongArrowAltLeft,
} from 'react-icons/fa'

const StepFour = ({setStepChild, dataChild, setDataChild}) => {
	let min, max, step;
    if(dataChild.farmType === "Greenhouse") {
        min = 0;
        max = 100;
        step = 1;
    } else {
        min = 0;
        max = 5;
        step = 0.1
    }

    return(
        <>
            <Grid container style={{marginTop:'19px'}}>
                <Grid item md={2} sm={0} xs={0}></Grid>
                <Grid item md={8} sm={12} xs={12}>
                    <Box
											sx={{
												background: '#2D3137',
												border: '1px solid #56606C',
												boxSizing: 'border-box',
												borderRadius: '12px',
												padding: '35px',
												cursor: 'pointer',
												fontSize: '16px'
											}}
										>    
											<Grid container spacing={2}>
												<Grid item md={3} sm={3} xs={3} style={{fontWeight: '600', textAlign: 'left'}}>
														<Box>Type:</Box>
														<Box mt={2.5}>Staking token:</Box>
														<Box mt={2.5}>Reward token:</Box>
														<Box sx={{fontWeight:'normal', marginLeft:'32px'}}>- Amount:</Box>
														<Box mt={2.5}>From {dataChild.farmType === "Garden" ? "0x" : "0%"}</Box>
														<Box sx={{fontSize:'13px'}}>day 1</Box>
														<Box mt={5}>Activation date:</Box>
														<Box mt={2.5}>Access:</Box>
												</Grid>
												<Grid item md={9} sm={9} xs={9} style={{fontWeight: 'normal'}}>
														<Box>{dataChild.farmType}</Box>
														<Box mt={2.5}>UNT</Box>
														<Box mt={2.5}>GBW</Box>
														<Box sx={{fontWeight:'normal'}}>{dataChild.rewardTokenAmount}</Box>
														<Box mt={2.5} display="flex" justifyContent="space-between">
															<Slider 
																	value={dataChild.penalty} 
																	aria-labelledby="continuous-slider" 
																	style={{color:'#FF5E15', width:'80%', padding:'8px 0px'}} 
																	min={min}
																	max={max}
																	step={step}
															/> To {dataChild.farmType === "Garden" ? "5x" : "100%"}</Box>
														<Box sx={{fontSize:'13px', textAlign:'right'}}>day 100</Box>
														<Box mt={5}>{!dataChild.active ? "Immediately" : dataChild.activeDate}</Box>
														<Box mt={2.5}>Public</Box>
												</Grid>
											</Grid>
                    </Box>
                </Grid>
                <Grid item md={2} sm={0} xs={0}></Grid>
            </Grid>
            <Box display='flex' justifyContent="space-between" mt={3}>
				<Button
					sx={{
						border: '1px solid #56606C',
						backgroundColor: '#353B42',
						boxSizing: 'border-box',
						borderRadius: '6px',
						fontStyle: 'normal',
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '24px',
						padding: '13px 40px',
						textTransform: 'none',
					}}
					onClick={()=>setStepChild(3)}
				>
					<FaLongArrowAltLeft style={{marginRight: '20px'}}/>
					Previous
				</Button>
				<Button
					variant="contained"
					sx={{
						backgroundColor: '#FF5E15',
						borderRadius: '6px',
						fontStyle: 'normal',
						fontWeight: '600',
						fontSize: '16px',
						lineHeight: '24px',
						padding: '13px 51px',
						textTransform: 'none',
					}}
				>
					Deploy Farm
				</Button>
			</Box>
        </>
    )
}

export default StepFour