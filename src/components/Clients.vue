<template>
	<div>
		<v-container style="margin-top: 80px">
			<h3 class="headerText"><v-icon style="margin-top: -4px; margin-right: 4px">layers</v-icon>Client Contracts</h3>
		  <v-data-table
		  	hide-actions
		    :headers="headers"
		    :items="items"
		    :loading="true"
		    class="elevation-1"
		  >
		    <v-progress-linear slot="progress" color="deep-purple darken-3" indeterminate></v-progress-linear>
		    <template slot="items" slot-scope="props">
		      <td class="text-xs-left">{{ props.item.contractName }}</td>
		      <td class="text-xs-center">{{ props.item.contractAddress }}</td>
		      <td class="text-xs-center">{{ props.item.contractTotalCases }}</td>
		      <td class="text-xs-center">{{ props.item.contractOpenCases }}</td>
		    </template>
		  </v-data-table>
	  </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Client Contract Name',
            align: 'center',
            sortable: false,
            value: 'contractName'
          },
          { text: 'Address', value: 'contractAddress', align: 'center', sortable: false },
          { text: 'Total Cases', value: 'contractTotalCases', align: 'center', sortable: false },
          { text: 'Open Cases', value: 'contractOpenCases', align: 'center', sortable: true },
        ],
        items: [
          {
            contractName: 'Duber',
            contractAddress: '0x9AaFA5638415c7B5ca3e36c8888a040672eF2EE9',
            contractTotalCases: 123,
            contractOpenCases: 11,
          },
          {
            contractName: 'Decentube',
            contractAddress: '0x50095F5183D4FE81D306E4F8E5495B692D8247F6',
            contractTotalCases: 230,
            contractOpenCases: 18,
          },
          {
            contractName: 'Dirbnb',
            contractAddress: '0xA3C7B9DC91F2B2A7D04C4E5A9C05286899BCE410',
            contractTotalCases: 184,
            contractOpenCases: 59,
          }
        ]
      }
    }
  }
</script>

<style scoped>
	.headerText {
		color: #4527a0;
		font-size: 21px;
		margin-top: 10px;
		margin-bottom: 30px;
	}
</style>