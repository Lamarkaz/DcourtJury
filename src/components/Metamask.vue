<template>
  <v-container style="margin-top: 15px">
    <img src="../assets/LogoInv.svg" width="240px" style="margin-top: 40px; margin-bottom: 40px"/>
    <v-flex xs12>
      <v-card class="black--text MMCard">
        <center>
          <img src="https://nogo10.gitbooks.io/ether-camp-live-studio-primer/content/metamask.png" width="40%"/>
        </center>
        <v-card-title primary-title>
          <div class="headline mmask">METAMASK IS MISSING!</div>
        </v-card-title>
        <div class="body">Dcourt Jury Interface is an Etheruem dApp, this means it's running on the ethereum blockchain. In order to be a juror install <a target="_blank" href="https://metamask.io" style="color:#FF8300">Metamask</a> browser extension.
        </div>
        <div class="what">What is MetaMask?</div>
        <div class="body">
        MetaMask is a bridge for your browser to be able to connect to the ethereum blockchain, it allows you to run Ethereum dApps like Dcourt right in your browser without running a full Ethereum node.
        <br />
        <br />
        Notice that Metamask is only availabe as an extension for chrome, this means that if you're using Safari or Firefox you need to download Chrome browser first.
        </div>
        <center class="video_wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6Gf_kRE4MJU?rel=0" frameborder="0" allowfullscreen></iframe>
          <v-btn color="deep-purple darken-3" class="mm-btn" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Install MetaMask</v-btn>
        </center>



      </v-card>
    </v-flex>
  </v-container>
</template>

<script>

</script>

<style scoped>
  .mmask {
    display: block;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    color: #FF8300;
    margin-top: -50px;
  }
  .black--text.MMCard.card {
    padding-top: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    background-color: #222;
    border-top: 4px solid #5E35B1;
  }
  .body {
    display: block !important;
    color: white;
    font-size: 15px;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: -5px;
    padding-bottom: 5px;
  }
  .what {
    font-size: 18px;
    color: #FF8300;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 500;
  }
  .video_wrapper {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
  }
  .mm-btn {
    display: block;
    position: relative;
    width: 170px;
    height: 50px;
    margin-top: 20px;
    background-color: #FF8300;
    color: white
  }
</style>