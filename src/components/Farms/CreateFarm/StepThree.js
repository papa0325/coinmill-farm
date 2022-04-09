import React, { useState } from 'react'
import { Box, Grid, Slider, Button, Switch, Checkbox, Tooltip, IconButton  } from '@material-ui/core';
import {
	FaLongArrowAltRight,
	FaLongArrowAltLeft,
} from 'react-icons/fa'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const StepThree = ({setStepChild, dataChild, setDataChild}) => {
    const [input, setInput] = useState({
        penalty: dataChild.penalty,
        lifetime: dataChild.lifetime,
        active: dataChild.active,
        activeDate: '',
        private: dataChild.private,
        privateAddress: dataChild.privateAddress,
    });

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

    const handleSliderChange = (event, newValue) => {
        setInput({...input, penalty:newValue})
    };

    const formatDate = (date) => {
        
        var d = new Date(date === "" ? new Date() : date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <Button onClick={onClick} ref={ref}
            style={{
                backgroundColor: '#353B42',
                borderRadius: '6px',
                padding: '8px 14px',
                color: '#FFFFFF',
                textTransform: 'none'
            }}
        >
          {value === "" ? "Choose Date" : value}
        </Button>
    ));
    const handleClickNext = () => {
        setDataChild({...dataChild, penalty:input.penalty, lifetime:input.lifetime, active: input.active, activeDate: formatDate(input.activeDate), private:input.private, privateAddress: input.privateAddress})
        setStepChild(4);
    }
    return(
        <>
            <Box
                sx={{
                    textAlign: 'center',
                }}
            >Incentivize users to stake longer</Box>
            <Grid container style={{marginTop:'19px'}}>
                <Grid item md={2} sm={2} xs={2}></Grid>
                <Grid item md={8} sm={8} xs={8}>
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
                        <Box
							sx={{
								fontWeight: 'normal',
								fontSize: '24px',
								lineHeight: '37px',
							}}
						>{dataChild.farmType === "Garden" ? "Stake time user reward multiplier" : "User Reward Vesting"}</Box>
                        <Box mt={2.5}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    From {dataChild.farmType === "Garden" ? "0x" : "0%"}
                                </Grid>
                                <Grid item xs>
                                     <Slider 
                                        aria-labelledby="continuous-slider" 
                                        style={{color:'#FF5E15'}} 
                                        value={typeof input.penalty === 'number' ? input.penalty : min}
                                        onChange={handleSliderChange}
                                        valueLabelDisplay="auto"
                                        min={min}
                                        max={max}
                                        step={step}
                                     />
                                </Grid>
                                <Grid item>
                                    To {dataChild.farmType === "Garden" ? "5x" : "100%"}
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mt={2.5} display="flex" alignItems="center">
                            <Box mr={2.5}>{dataChild.farmType} lifetime:</Box>
                            <input
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    background: '#353B42',
                                    borderRadius: '6px',
                                    padding: '12px 10px',
                                    color: 'white',
                                    width:'45px',
                                    textAlign: 'center'
                                }}
                                onChange={(e)=>{setInput({...input, rewardToken: e.target.value})}}
                                placeholder='0'
                            />
                            <Box
                                sx={{
                                    padding: '8px 14px',
                                    color: '#FFFFFF',
                                }}
                            >
                                days
                            </Box>
                        </Box>
                        <Box mt={2.5}>{ dataChild.farmType === "Garden" ? 
                            "Multiplier builds up linearly from to 3x during 100 days. l.e. If user staked for 20 days the multiplier will be 3.4x" : 
                            "User's rewards will be unlocked linearly from 60% to 100%  over 100 days. l.e. If User unstakes after 20 days their rewards are unlocked at 68%"}</Box>
                        <Box mt={2.5} display="flex" alignItems="center">
                            <Tooltip title={!input.active ? "Immediately" : "Later"} placement="top" followCursor>
                                <IconButton>
                                    <img src="/static/icons/infoIcon.svg" alt="info" style={{zoom:'0.8', marginRight:'5px'}} />
                                </IconButton>
                            </Tooltip>
                            <Box mr={4}>Active:</Box>
                            <Box mr={2}>Immediately</Box>
                            <Switch
                                checked={input.active}
                                onChange={()=>{setInput({...input, active: !input.active})}}
                                style={{
                                    color:'#FF5E15',
                                    marginRight: '15px'
                                }}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Box mr={2.5}>Later</Box>
                            {input.active && <DatePicker 
                                selected={input.activeDate}
                                onChange={(date) => setInput({...input, activeDate:date})}
                                customInput={<ExampleCustomInput />}
                            />}

                        </Box>
                        <Box mt={2.5} display="flex" alignItems="center">
                            {!input.private && <Tooltip title={"Make the " + dataChild.farmType+ " if you want it to be visible only to certain wallets"} placement="top" followCursor>
                                <IconButton>
                                    <img src="/static/icons/infoIcon.svg" alt="info" style={{zoom:'0.8', marginRight:'5px'}} />
                                </IconButton>
                            </Tooltip> }
                            <Box mr={3}>Private:</Box>
                            <Checkbox
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                style={{ color: '#FF5E15'}}
                                checked={input.private}
                                onChange={()=>{setInput({...input, private: !input.private})}}
                            />
                            {input.private && <input
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    background: '#353B42',
                                    borderRadius: '6px',
                                    width: '100%',
                                    padding: '12px 20px',
                                    color: 'white',
                                }}
                                value={input.privateAddress}
                                onChange={(e)=>{setInput({...input, privateAddress: e.target.value})}}
                                placeholder='Please input the addresses of the wallets'
                            />}
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2} sm={2} xs={2}></Grid>
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
					onClick={()=>setStepChild(2)}
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
					onClick={handleClickNext}
				>
					Next
					<FaLongArrowAltRight style={{marginLeft: '20px'}}/>
				</Button>
			</Box>
        </>
    )
}

export default StepThree;