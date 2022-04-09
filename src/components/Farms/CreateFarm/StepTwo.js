import { useState } from 'react'
import { Box, Grid, Button } from '@material-ui/core';
import {
	FaLongArrowAltRight,
	FaLongArrowAltLeft,
} from 'react-icons/fa'

const StepTwo = ({setStepChild, dataChild, setDataChild}) => {
	const handleClickPrevious = () => {
		setStepChild(1); 
		setDataChild({...dataChild, farmType:""});
	}
	const handleClickNext = () => {
		setStepChild(3);
		setDataChild({...dataChild, stakingToken:input.stakingToken, rewardToken:"", rewardTokenAmount:input.rewardTokenAmount});
	}

	const [input, setInput] = useState({
		stakingToken: dataChild.stakingToken,
		rewardToken: dataChild.rewardToken,
		rewardTokenAmount: dataChild.rewardTokenAmount,
	})

	return(
		<>
			<Grid container spacing={4}>
				<Grid item md={4} sm={12} xs={12}>
					<Box
						sx={{
							background: '#2D3137',
							border: '1px solid #56606C',
							boxSizing: 'border-box',
							borderRadius: '12px',
							height: '270px',
							padding: '40px',
							cursor: 'pointer',
						}}
					>                    
						<Box
							sx={{
								fontWeight: 'bold',
								fontSize: '30px',
								lineHeight: '46px',
							}}
						>Staking token</Box>
						<input
							style={{
								outline: 'none',
								border: 'none',
								background: '#353B42',
								borderRadius: '6px',
								width: '100%',
								padding: '12px 20px',
								color: 'white',
								marginTop: '30px'
							}}
							value={input.stakingToken}
							onChange={(e)=>{setInput({...input, stakingToken: e.target.value})}}
							placeholder='0x...'
						/>
					</Box>
				</Grid>
				<Grid item md={8} sm={12} xs={12}>
					<Box
						sx={{
							background: '#2D3137',
							border: '1px solid #56606C',
							boxSizing: 'border-box',
							borderRadius: '12px',
							height: '270px',
							padding: '40px',
							cursor: 'pointer',
						}}
					>                    
						<Box
							sx={{
								fontWeight: 'bold',
								fontSize: '30px',
								lineHeight: '46px',
							}}
						>Reward token</Box>
						<Grid container spacing={5}>
							<Grid item md={6} sm={12} xs={12}>
								<input
									style={{
										outline: 'none',
										border: 'none',
										background: '#353B42',
										borderRadius: '6px',
										width: '100%',
										padding: '12px 20px',
										color: 'white',
										marginTop: '30px'
									}}
									value={input.rewardToken}
									onChange={(e)=>{setInput({...input, rewardToken: e.target.value})}}
									placeholder='0x...'
								/>
							</Grid>
							<Grid item md={6} sm={12} xs={12}>
								<Box
									sx={{
										fontWeight: 600,
										fontSize: '16px',
										lineHeight: '24px',
									}}
								>Reward token amount</Box>
								<input
									style={{
										outline: 'none',
										border: 'none',
										background: '#353B42',
										borderRadius: '6px',
										width: '100%',
										padding: '12px 20px',
										color: 'white',
										marginTop: '6px'
									}}
									value={input.rewardTokenAmount}
									onChange={(e)=>{setInput({...input, rewardTokenAmount: e.target.value})}}
									placeholder='0.00'
								/>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
			<Box display='flex' justifyContent="space-between" mt={15}>
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
					onClick={handleClickPrevious}
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

export default StepTwo;