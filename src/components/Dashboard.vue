<template>
  <v-container style="margin-top:75px">
    <v-layout style="margin-left: -30px">
      <div class="mainWrapper">
        <v-gravatar :hash="gravatarHash" class="vGravatar"/>
        <div style="margin-right: auto; margin-left: auto">
          <a :href="jurorScan" target="_blank" style="text-decoration: none; color: rgba(0,0,0,0.8)">
            <h3 class="headlineJuror">{{ $root.jurorAddress }}</h3>
          </a>
        </div>
        <div class="text-xs-center" style="margin-top: 8px; margin-bottom: 5px">
          <v-chip label color="grey darken-2" text-color="white" disabled>
            <v-icon left style="margin-right: 6px; margin-left: 0px; font-size: 19px">gavel</v-icon>132 Cases
          </v-chip>

          <v-chip label color="purple darken-2" text-color="white" disabled>
            <v-icon left style="margin-right: 3px; font-size: 21px">money_off</v-icon>Voting Power: 133 DCT
          </v-chip>

          <v-chip label color="green darken-2" class="actionChip" text-color="white">
            <v-icon left style="margin-right: 2px; font-size: 21px">attach_money</v-icon>Balance: 133 DCT
            <v-btn class="chipBtn" color="green darken-4">Claim</v-btn>
          </v-chip>
        </div>
        <div id="activityGraph" class="activityGraph">
            <trend
              :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
              :gradient="['#5627e5', '#5631c6', '#4527a0']"
              auto-draw
              smooth
              width=600
              height=100
              style="stroke-width: 2.2px">
            </trend>
        </div>
        <div class="statusCont">
          <line-chart></line-chart>
        </div>
        <h3 class="headerText"><v-icon style="margin-top: -4px; margin-right: 4px; font-weight: 100; color: white; font-size: 19px">history</v-icon>Cases History</h3>
        <v-data-table
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
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import ActivityMonitor from '@/components/ActivityMonitor'
export default {
  components: { ActivityMonitor },
   data () {
      return {
        ClientAddress: '',
        ClientScan: '',
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
    color: white;
    font-size: 17px;
    margin-top: 40px;
  }
  .headlineJuror {
    font-size: 15px !important;
    font-weight: 500;
    margin-top: 15px;
    color: white;
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
		margin-top: 30px;
		min-width: 1200px;
		height: auto;
    padding-top: 15px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 80px;
		background-color: #222;
		margin-right: auto;
    margin-left: auto;
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
  .elevation-1 {
    color: white; 
    max-width: 80%; 
    margin-left: auto; 
    margin-right: auto;
    margin-top: 14px;
    background-color: rgba(255,255,255,0.04);
  }
  .statusCont {
    width: 80%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
  .activityGraph {
    margin-top: 20px;
    margin-left: auto; 
    margin-right: auto;
    width: auto;
    padding: 0px;
    max-width: 920px;
    }
  .chipBtn {
    margin-right: -12px;
    cursor: pointer;
    box-shadow: none;
    border-radius: 0px;
    height: 32px;
    font-size: 12px;
    font-weight: 700;
    text-transform: none;
  }
</style>
