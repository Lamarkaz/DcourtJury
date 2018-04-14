<template>
	<div>
	<img src="../assets/LogoInv.svg" width="240px" style="margin-top: 100px"/>
	<div class="mainWrapper">
		<h3 class="welcomeText">Almost Done, Just on more step to begin.</h3>
		<h3 class="welcomeTextSec">Now you can register as a Juror or surf the Case Explorer</h3>
		<div class="viewWrapper">
			<div class="choice">
				<v-icon class="choiceIcon">gavel</v-icon>
				<h3 class="choiceTitle">Become A Juror</h3>
			</div>
			<div class="choice">
				<v-icon class="choiceIcon">account_balance</v-icon>
				<h3 class="choiceTitle">Surf Case Explorer</h3>
			</div>
		</div>
	</div>
	</div>
</template>

<style scoped>
	.mainWrapper {
		margin-top: 50px;
		width: 800px;
		height: 450px;
		background-color: #222;
		margin-left: auto;
		margin-right: auto;
		border-radius: 4px;
		border-top: 4px solid #5E35B1;
		box-shadow: 0px 6px 30px #666666;
	}
	.welcomeText {
		color: white;
		margin-top: 45px;
		font-size: 22px;
	}
	.welcomeTextSec {
		color: rgba(255,255,255,0.3);
		margin-top: 2px;
		font-size: 14px;
	}
	.viewWrapper {
		margin-top: 50px;
		height: 260px;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
	}
	.choice {
		height: 100%;
		width: 50%;
		display: inline-block;
		float: left;
		cursor: pointer;
		-webkit-transition: background-color 0.5s ease-in-out;
	    -moz-transition: background-color 0.5s ease-in-out;
	    -o-transition: background-color 0.5s ease-in-out;
	    transition: background-color 0.5s ease-in-out;
	}
	.choice:hover {
		background-color: rgba(255,255,255,0.05);
	}
	.choiceIcon {
		color: white;
		font-size: 80px;
		margin-top: 25%;
	}
	.choiceTitle {
		color: white;
		margin-top: 30px;
		font-size: 21px;
	}
</style>