<template>
	<div class="Activity">
		<trend
			:data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 0, 0, 0, 9, 0, 10, 2, 2, 9, 5, 7, 0, 5, 0, 0, 5, 2, 2, 9, 5]"
			:gradient="['#5627e5', '#5631c6']"
			auto-draw
			smooth
			:width="600"
			:height="100"
			style="stroke-width: 2.2px">
		</trend>
	</div>
</template>
// <script>
// 	export default {
// 		data (){
// 			return {
// 				activity:[
// 					{
// 						time:1524194073 //Friday, April 20, 2018 3:14:33 AM
// 					},
// 					{
// 						time:1524208473 //Friday, April 20, 2018 7:14:33 AM
// 					},
// 					{
// 						time:1524216033 //Friday, April 20, 2018 9:20:33 AM
// 					},
// 					{
// 						time:1524223233 //Friday, April 20, 2018 11:20:33 AM
// 					},
// 					{
// 						time:1517995233 //Wednesday, February 7, 2018 9:20:33 AM
// 					},
// 					{
// 						time:1517966433 //Wednesday, February 7, 2018 1:20:33 AM
// 					},
// 					{
// 						time:1517982933 //Wednesday, February 7, 2018 5:55:33 AM
// 					},
// 					{
// 						time:1515736533 //Friday, January 12, 2018 5:55:33 AM
// 					},
// 					{
// 						time:1515747333 //Friday, January 12, 2018 8:55:33 AM
// 					},
// 					{
// 						time:1516683333 //Tuesday, January 23, 2018 4:55:33 AM
// 					},
// 					{
// 						time:1485366855 //Wednesday, January 25, 2017 5:54:15 PM
// 					},
// 					{
// 						time:1493489054 //Saturday, April 29, 2017 6:04:14 PM
// 					},
// 					{
// 						time:1493229854 //Wednesday, April 26, 2017 6:04:14 PM
// 					}
// 				]
// 			}
// 		},
// 		computed:{
// 			dayWeight: function(){
// 				var weights = [];
// 				var dist = [];
// 				for(var i=0; i<this.activity.length; i++){
// 					var activityDate = this.$moment.unix(this.activity[i].time).format("YYYY MM DD");
// 					var thisYear = this.$moment().format("YYYY MM DD");
// 					var lastYear = this.$moment().subtract(1, 'years').format("YYYY MM DD");
// 					var valid = this.$moment(activityDate).isBetween(thisYear, lastYear, 'year');

// 					if(lastYear < activityDate){
// 						weights.push({
// 							num: this.$moment(activityDate, "YYYY MM DD").dayOfYear(),
// 							weight: activityDate
// 						});
// 					}
// 				}
// 				console.log(weights)
// 				dist.push({day: weights[0].num});
// 				for(var i=1; i<weights.length; i++){
// 					if(dist[i].day == weights[i].num){
// 						dist[i].weight += 1;
// 					}
// 					else {
// 						dist.push({
// 							day: weights[i].num,
// 							weight: 1
// 						});
// 					}
// 				}
// 				return dist;
// 			},
// 			days: function(){
// 				var days = [];
// 				for(var x=0; x<=780; x+=15){
// 					for(var y=0; y<=90; y+=15){
// 						if((x == 780 && y >= 30) || (x == 0 && y == 0)) continue;
// 						days.push({
// 							x: x,
// 							y: y,
// 							number: days.length+1
// 						})
// 					}
// 				}
// 				return days;
// 			}
// 		},
// 		created () {
// 			console.log(this.dayWeight);
// 		}
// 	}
// </script>
<style scoped>
	/* .day {
		fill: #1b1b1b;
		stroke: #222;
		stroke-width: 3px;
		width: 15px;
		height: 15px;
	} */
</style>