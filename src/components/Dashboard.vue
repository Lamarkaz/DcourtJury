<template>
  <v-layout style="margin-top: 60px; margin-left: 65px">
    <v-container style="margin-top: 40px; max-width: 1100px">
      <h3 class="headerText"><v-icon style="margin-top: 6px; margin-right: 4px; margin-bottom: 10px">history</v-icon>Cases History</h3>
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
          <td class="text-xs-center">{{ props.item.caseId }}</td>
          <td class="text-xs-center">{{ props.item.caseOpenedDate }}</td>
          <td class="text-xs-center">{{ props.item.caseClosedDate }}</td>
          <td class="text-xs-center">{{ props.item.caseVotes }}</td>
          <td class="text-xs-center">{{ props.item.Votes }}</td>
          <td class="text-xs-center">{{ props.item.caseStatus }}</td>
        </template>
      </v-data-table>
    </v-container>
    <div class="mainWrapper">
      <v-gravatar :hash="gravatarHash" class="vGravatar"/>
      <div style="margin-right: auto; margin-left: auto">
        <a :href="jurorScan" target="_blank" style="text-decoration: none; color: rgba(0,0,0,0.8)">
          <h3 class="headlineJuror">{{ $root.jurorAddress }}</h3>
        </a>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
   data () {
      return {
        ClientAddress: '',
        ClientScan: '',
        gravatarHash: '',
        headers: [
          {
            text: 'Case Title',
            align: 'center',
            sortable: false,
            value: 'caseTitle'
          },
          { text: 'Case ID', value: 'caseId', align: 'center', sortable: false },
          { text: 'Date Opened', value: 'caseOpenedDate', align: 'center', sortable: false },
          { text: 'Date Closed', value: 'caseClosedDate', align: 'center', sortable: false },
          { text: 'Votes', value: 'caseVotes', align: 'center', sortable: false },
          { text: 'Your Vote', value: 'Vote', align: 'center', sortable: false },
          { text: 'Status', value: 'caseStatus', align: 'center', sortable: true }
        ],
        items: [
          {
            caseTitle: 'Duber ride',
            caseId: 13,
            caseOpenedDate: '17 Apr, 2017',
            caseClosedDate: '21 Dec, 2017',
            caseStatus: 'Closed',
            caseVotes: 11,
            Votes: "Guilty",
          },
          {
            caseTitle: 'Decentube video copyrights violation',
            caseId: 85,
            caseOpenedDate: '20 Apr, 2017',
            caseClosedDate: '-',
            caseStatus: 'Open',
            caseVotes: 73,
            Votes: "Not Guilty",
          },
          {
            caseTitle: 'Dirbnb problem',
            caseId: 129,
            caseOpenedDate: '17 Apr, 2017',
            caseClosedDate: '-',
            caseStatus: 'Open',
            caseVotes: 118,
            Votes: "Not Guilty",
          }
        ]
      }
    },
    computed: {
        jurorScan: function(){
          return 'https://etherscan.io/address/' + this.$root.jurorAddress
        },
        gravatarHash: function(){
          return md5(this.$root.jurorAddress)
        }
    }
}
</script>


<style scoped>
  .headerText {
    color: #4527a0;
    font-size: 21px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .headlineJuror {
    font-size: 13px !important;
    font-weight: 500;
    margin-right: auto; 
    margin-left: auto;
  }
  .vGravatar {
    margin-top: 30px;
    border-radius: 5px;
  }
  .jurorCard {
    box-shadow: none !important;
  }
  .mainWrapper {
		margin-top: 60px;
		width: 450px;
		height: 450px;
		background-color: #222;
		margin-right: 20px;
    margin-left: 20px;
		border-radius: 4px;
		border-top: 4px solid #5E35B1;
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
</style>
