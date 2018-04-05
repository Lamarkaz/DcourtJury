<template>
	<div>
		<v-container style="margin-top: 80px">
			<h3 class="headerText"><v-icon style="margin-top: -4px">whatshot</v-icon>Latest Cases</h3>
		  <v-data-table
		  	hide-actions
		    :headers="headers"
		    :items="items"
		    :loading="true"
		    class="elevation-1"
		  >
		    <v-progress-linear slot="progress" color="deep-purple darken-3" indeterminate></v-progress-linear>
		    <template slot="items" slot-scope="props">
		      <td>{{ props.item.caseTitle }}</td>
		      <td class="text-xs-right">{{ props.item.caseId }}</td>
		      <td class="text-xs-right">{{ props.item.clientContract }}</td>
		      <td class="text-xs-right">{{ props.item.caseVotes }}</td>
		      <td class="text-xs-right">{{ props.item.caseWeight }}</td>
		      <td class="text-xs-right">{{ props.item.caseDeadline }}</td>
		      <td class="text-xs-right">{{ props.item.caseStatus }}</td>
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
          { text: 'Votes', value: 'caseVotes', align: 'center', sortable: false },
          { text: 'Weight', value: 'caseWeight', align: 'center', sortable: true },
          { text: 'Next Phase', value: 'caseDeadline', align: 'center', sortable: false },
          { text: 'Status', value: 'caseStatus', align: 'center', sortable: true }
        ],
        items: [
          {
            caseTitle: 'Duber ride',
            caseId: 13,
            clientContract: 'Duber',
            caseVotes: 11,
            caseWeight: 17,
            caseDeadline: '1 block',
            caseStatus: 'Trial'
          },
          {
            caseTitle: 'Decentube video copyrights violation',
            caseId: 85,
            clientContract: 'Decentube',
            caseVotes: 24,
            caseWeight: 10,
            caseDeadline: '4 blocks',
            caseStatus: 'Voting'
          },
          {
            caseTitle: 'Dirbnb problem',
            caseId: 159,
            clientContract: 'Dirbnb',
            caseVotes: 50,
            caseWeight: 4.0,
            caseDeadline: '3 blocks',
            caseStatus: 'Trial'
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