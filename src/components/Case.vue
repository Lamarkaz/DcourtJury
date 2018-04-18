<template>
  <v-layout style="margin-top: 70px">
    <div class="mainWrapper">
        <div class="upperWrapper">
            <v-breadcrumbs style="color: white; margin-left: 20px; margin-top: -56px">
                <v-icon slot="divider">chevron_right</v-icon>
                <v-breadcrumbs-item
                >
                    Decentube
                </v-breadcrumbs-item>
                <v-breadcrumbs-item
                    disabled=disabled
                >
                    [Claim of Ownership] I've the copyrights for this video!
                </v-breadcrumbs-item>
            </v-breadcrumbs>
            <div style="margin-top: -48px; margin-left: 67%;  margin-bottom: 20px">
                <v-chip color="grey darken-4" text-color="white">
                    <v-icon style="font-size: 16px; margin-right: 6px">account_balance</v-icon>
                    Case ID 14
                </v-chip>
                <v-chip color="grey darken-4" text-color="white">
                    <v-icon style="font-size: 16px; margin-right: 6px">gavel</v-icon>
                    183 Votes
                </v-chip>
                <v-chip color="grey darken-4" text-color="white">
                    <v-icon style="font-size: 16px; margin-right: 6px">timer</v-icon>
                    4 Days
                </v-chip>
            </div>

            <div class="caseBody">
                <div class="oppWrapper" style="border-right: 1px solid grey">
                    <v-gravatar :hash="gravatarHashAcc" class="vGravatar"/>
                    <div style="margin-right: auto; margin-left: auto">
                        <v-chip label text-color="white" style="margin-top:15px; background-color: #5E35B1">
                            Accuser
                        </v-chip>
                        <a :href="jurorScan" target="_blank" style="text-decoration: none; color: rgba(0,0,0,0.8)">
                        <h3 class="headlineJuror">0xFb386606BAd35e2432d3E0315cfbf79eCA60b018</h3>
                        </a>
                    </div>
                    <div class="StateBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius. Curabitur pharetra erat at ex ornare, eget convallis sapien eleifend. Aenean a sem velit. Donec posuere vitae turpis vel gravida. Sed convallis tellus libero, nec ultrices diam egestas ut. Pellentesque mi felis, ultrices vel mauris eget, vulputate pulvinar est. Donec et tempus lorem, id volutpat orci. Donec interdum, lectus quis placerat feugiat, mi lectus euismod sem, ut tincidunt felis arcu vel turpis. Aliquam erat volutpat. Integer at convallis massa. Fusce sit amet enim convallis, scelerisque dolor in, pretium neque.</div>
                    <div class="StateBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius. Curabitur pharetra erat at ex ornare, eget convallis sapien eleifend. Aenean a sem velit. Donec posuere vitae turpis vel gravida. Sed convallis tellus libero, nec ultrices diam egestas ut. Pellentesque mi felis, ultrices vel mauris eget, vulputate pulvinar est. Donec et tempus lorem, id volutpat orci. Donec interdum, lectus quis placerat feugiat, mi lectus euismod sem, ut tincidunt felis arcu vel turpis. Aliquam erat volutpat. Integer at convallis massa. Fusce sit amet enim convallis, scelerisque dolor in, pretium neque.</div>
                    <div class="StateBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius. Curabitur pharetra erat at ex ornare, eget convallis sapien eleifend. Aenean a sem velit. Donec posuere vitae turpis vel gravida. Sed convallis tellus libero, nec ultrices diam egestas ut. Pellentesque mi felis, ultrices vel mauris eget, vulputate pulvinar est. Donec et tempus lorem, id volutpat orci. Donec interdum, lectus quis placerat feugiat, mi lectus euismod sem, ut tincidunt felis arcu vel turpis. Aliquam erat volutpat. Integer at convallis massa. Fusce sit amet enim convallis, scelerisque dolor in, pretium neque.</div>
                    <div class="StateBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius. Curabitur pharetra erat at ex ornare, eget convallis sapien eleifend. Aenean a sem velit. Donec posuere vitae turpis vel gravida. Sed convallis tellus libero, nec ultrices diam egestas ut. Pellentesque mi felis, ultrices vel mauris eget, vulputate pulvinar est. Donec et tempus lorem, id volutpat orci. Donec interdum, lectus quis placerat feugiat, mi lectus euismod sem, ut tincidunt felis arcu vel turpis. Aliquam erat volutpat. Integer at convallis massa. Fusce sit amet enim convallis, scelerisque dolor in, pretium neque.</div>
                </div>
                <div class="oppWrapper">
                    <v-gravatar :hash="gravatarHashDef" class="vGravatar"/>
                    <div style="margin-right: auto; margin-left: auto">
                        <v-chip label text-color="white" style="margin-top:15px; background-color: #5E35B1">
                            Defender
                        </v-chip>
                        <a :href="jurorScan" target="_blank" style="text-decoration: none; color: rgba(0,0,0,0.8)">
                        <h3 class="headlineJuror">0x6CaCE0528324A8afC2b157CebA3cDd2a27c4E21f</h3>
                        </a>
                    </div>
                    <div class="StateBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius. Curabitur pharetra erat at ex ornare, eget convallis sapien eleifend. Aenean a sem velit. Donec posuere vitae turpis vel gravida. Sed convallis tellus libero, nec ultrices diam egestas ut. Pellentesque mi felis, ultrices vel mauris eget, vulputate pulvinar est. Donec et tempus lorem, id volutpat orci. Donec interdum, lectus quis placerat feugiat, mi lectus euismod sem, ut tincidunt felis arcu vel turpis. Aliquam erat volutpat. Integer at convallis massa. Fusce sit amet enim convallis, scelerisque dolor in, pretium neque.</div>
                    <div class="StateBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius. Curabitur pharetra erat at ex ornare, eget convallis sapien eleifend. Aenean a sem velit. Donec posuere vitae turpis vel gravida. Sed convallis tellus libero, nec ultrices diam egestas ut. Pellentesque mi felis, ultrices vel mauris eget, vulputate pulvinar est. Donec et tempus lorem, id volutpat orci. Donec interdum, lectus quis placerat feugiat, mi lectus euismod sem, ut tincidunt felis arcu vel turpis. Aliquam erat volutpat. Integer at convallis massa. Fusce sit amet enim convallis, scelerisque dolor in, pretium neque.</div>
                    <div class="StateBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius. Curabitur pharetra erat at ex ornare, eget convallis sapien eleifend. Aenean a sem velit. Donec posuere vitae turpis vel gravida. Sed convallis tellus libero, nec ultrices diam egestas ut. Pellentesque mi felis, ultrices vel mauris eget, vulputate pulvinar est. Donec et tempus lorem, id volutpat orci. Donec interdum, lectus quis placerat feugiat, mi lectus euismod sem, ut tincidunt felis arcu vel turpis. Aliquam erat volutpat. Integer at convallis massa. Fusce sit amet enim convallis, scelerisque dolor in, pretium neque.</div>
                </div>
            </div>
        </div>
        <div class="askWrapper">
            <v-icon class="askTitle">gavel</v-icon>
            <v-card style="box-shadow: none">
                <v-card-text>
                <p class="text-xs-center askBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis feugiat varius.</p>
                </v-card-text>
            </v-card>
            <v-btn class="actionBtn" color="green" style="left: 0px">Not Guilty</v-btn>
            <v-btn class="actionBtn" color="red" style="right: 0px">Guilty</v-btn>
        </div>
    </div>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            text: 'Duber',
            disabled: false
          },
          {
            text: "Driver didn't arrive",
            disabled: false
          }
        ]
      }
    },
    computed: {
        gravatarHashAcc: function(){
          return md5('0xFb386606BAd35e2432d3E0315cfbf79eCA60b018')
        },
        gravatarHashDef: function(){
          return md5('0x6CaCE0528324A8afC2b157CebA3cDd2a27c4E21f')
        }
    }
  }
</script>


<style scoped>
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
		margin-top: 30px;
        padding-bottom: 350px;
        margin-bottom: 30px;
		width: 1150px;
		height: auto;
		background-color: #222;
		margin-left: auto;
		margin-right: auto;
		border-radius: 4px;
		border-top: 60px solid #5E35B1;
		box-shadow: 0px 6px 30px #666666;
    }
    .caseDivider {
        border-color: rgba(255,255,255,0.2);
        border-radius: 1px;
        border-top: 1px;
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }
    .askWrapper {
        margin-right: auto;
        margin-left: auto;
        margin-top: 115px;
        margin-bottom: 40px;
        width: 340px;
        height: 240px;
        border-radius: 3px;
        background-color: rgba(255,255,255,0.05);
        opacity: 1;
        position: relative;
    }
    .actionBtn {
        width: 50%;
        height: 45px;
        border-radius: 0px;
        box-shadow: none;
        color: white;
        position: absolute;
        font-weight: 600;
        font-size: 12px;
        margin: 0px;
        bottom: 0px;
    }
    .askBody {
        color: white;
        font-size: 14px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    .caseBody {
        width: 90%;
        margin-right: auto;
        margin-left: auto;
        height: 500px;
    }
    .oppWrapper {
        width: 50%;
        float: left;
        -webkit-transition: all 0.5s ease-in;
        -moz-transition: all 0.5s ease-in;
        -o-transition: all 0.5s ease-in;
        transition: all 0.5s ease-in;
    }
    .vGravatar {
        margin-top: 30px;
        border-radius: 5px;
    }
    .headlineJuror {
        color: white;
        margin-top: 15px;
    }
    .askTitle {
        height: 70px;
        width: 70px;
        color: white;
        font-size: 30px;
        top: -10px;
        margin-top: -35px;
        background-color: #2D2D2D;
        border-radius: 99px;

    }
    .StateBody {
        width: 80%;
        margin-top: 10px;
        margin-right: auto;
        margin-left: auto;
        color: white;
        background-color: rgba(255,255,255,0.2);
        padding: 23px;
        border-radius: 5px;
        margin-bottom: px;
    }
    .upperWrapper {
        position: relative;
        height: 100%;
    }
    
</style>
