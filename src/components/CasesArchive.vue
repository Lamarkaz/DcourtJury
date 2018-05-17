<template>
	<div>
		<v-container style="margin-top: 80px; max-width: 1100px">
			<h3 class="headerText"><v-icon style="margin-top: -4px; margin-right: 4px">account_balance</v-icon>Cases Archive</h3>
		  <v-data-table
		  	hide-actions
		    :headers="headers"
		    :items="items"
		    :loading="true"
		    class="elevation-1"
		  >
		    <v-progress-linear slot="progress" color="deep-purple darken-3" indeterminate></v-progress-linear>
		    <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.caseTitle }}</td>
          <td class="text-xs-center">{{ props.item.caseId }}</td>
          <td class="text-xs-center">{{ props.item.clientContract }}</td>
          <td class="text-xs-center">{{ props.item.caseOpenedDate }}</td>
          <td class="text-xs-center">{{ props.item.caseClosedDate }}</td>
          <td class="text-xs-center">{{ props.item.caseVotes }}</td>
          <td class="text-xs-center">{{ props.item.caseStatus }}</td>
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
            text: 'Case Title',
            align: 'center',
            sortable: false,
            value: 'caseTitle'
          },
          { text: 'Case ID', value: 'caseId', align: 'center', sortable: false },
          { text: 'Client Contract', value: 'clientContract', align: 'center', sortable: false },
          { text: 'Date Opened', value: 'caseOpenedDate', align: 'center', sortable: false },
          { text: 'Date Closed', value: 'caseClosedDate', align: 'center', sortable: false },
          { text: 'Votes', value: 'caseVotes', align: 'center', sortable: false },
          { text: 'Status', value: 'caseStatus', align: 'center', sortable: true }
        ],
        items: [
          {
            caseTitle: 'Duber ride',
            caseId: 13,
            clientContract: 'Duber',
            caseOpenedDate: '17 Apr, 2017',
            caseClosedDate: '21 Dec, 2017',
            caseStatus: 'Closed',
            caseVotes: 11,
          },
          {
            caseTitle: 'Decentube video copyrights violation',
            caseId: 85,
            clientContract: 'Ducentube',
            caseOpenedDate: '20 Apr, 2017',
            caseClosedDate: '-',
            caseStatus: 'Open',
            caseVotes: 73,
          },
          {
            caseTitle: 'Dirbnb problem',
            caseId: 129,
            clientContract: 'Duber',
            caseOpenedDate: '17 Apr, 2017',
            caseClosedDate: '-',
            caseStatus: 'Open',
            caseVotes: 118,
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