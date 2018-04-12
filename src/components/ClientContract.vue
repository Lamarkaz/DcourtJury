<template>
  <v-layout style="margin-top: 150px; margin-left: 65px">
    <v-flex xs12 sm10 offset-sm1>
      <v-card class="jurorCard">
        <v-gravatar :hash="gravatarhash" class="vGravatar"/>
        <v-card-title primary-title>
          <div style="margin-right: auto; margin-left: auto">
            <h3 class="headlineJuror" style="color: black; margin-bottom: 4px"><v-icon style="font-size: 21px; margin-right: 2px; margin-top: -4px; color: black">layers</v-icon>Decentube</h3>
            <a :href="ClientScan" style="text-decoration: none; color: rgba(0,0,0,0.7)" target="_blank">
              <h3 class="headlineJuror"><v-icon style="font-size: 19px; margin-right: 2px; margin-top: -4px">fingerprint</v-icon>{{ ClientAddress }}</h3>
            </a>
          </div>
        </v-card-title>
        <v-container style="margin-top: 40px; max-width: 1100px">
		  <h3 class="headerText"><v-icon style="margin-top: 6px; margin-right: 4px; margin-bottom: 10px">history</v-icon>Contract Cases History</h3>
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
          <td class="text-xs-center">{{ props.item.caseStatus }}</td>
        </template>
      </v-data-table>
    </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
import * as md5 from '../js/md5.min.js'
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
          },
          {
            caseTitle: 'Decentube video copyrights violation',
            caseId: 85,
            caseOpenedDate: '20 Apr, 2017',
            caseClosedDate: '-',
            caseStatus: 'Open',
            caseVotes: 73,
          },
          {
            caseTitle: 'Dirbnb problem',
            caseId: 129,
            caseOpenedDate: '17 Apr, 2017',
            caseClosedDate: '-',
            caseStatus: 'Open',
            caseVotes: 118,
          }
        ]
      }
    },
    created (){
        this.ClientAddress = '0x85be36FA32D11BA6070F60A0119F1Fc5b0d25D1D';
        this.ClientScan =  'https://etherscan.io/address/' + this.ClientAddress;

        this.gravatarhash = md5.md5(this.ClientAddress);
    }
}
</script>


<style scoped>
  .headlineJuror {
    font-size: 15px !important;
    font-weight: 500;
    margin-right: auto; 
    margin-left: auto;
  }
  .vGravatar {
    margin-top: 30px;
    border-radius: 999px;
  }
  .headerText {
	color: #4527a0;
	font-size: 15px;
	margin-bottom: 7px;
   }
</style>
