<template>
  <div>
    <v-toolbar absolute dark color="deep-purple darken-3" height="65">
      <v-toolbar-title class="white--text" v-on:click="$router.push('/')">
        <img src="../assets/Logo.svg" width="100px" style="margin-left: 15px; cursor: pointer; margin-top: 7px"></img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field 
      append-icon="account_balance" 
      color="white" 
      hide-details 
      single-line 
      placeholder="Case ID"
      class="searchBar input-group--focused"></v-text-field>
      <v-btn icon>
        <v-icon>whatshot</v-icon>
      </v-btn>
      <v-btn icon>
       <v-badge overlap>
        <span slot="badge" class="badge-not">4</span>
        <v-avatar>
          <v-icon color="white">notifications</v-icon>
        </v-avatar>
       </v-badge>
      </v-btn>
    </v-toolbar>
    <div class="Sidebar">
      <v-navigation-drawer dark absolute v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../assets/Avatar.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="addressHolder">0x9AaFA5638415c7B5ca3e36c8888a040672eF2EE9</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
    </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
   data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: true
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style v>
  .badge-not {
    top: 30px !important;
    right: 10px !important;
    background-color: #F44336;
    color: white;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: 900;
    border-radius: 99px;
    position: absolute;
    padding: 1px;
  }
  .avatar .icon, .avatar img {
    width: 25px;
    height: 25px;
  }
  .searchBar { 
    max-width: 120px;
    margin-right: 14px
  }
  .Sidebar {
    min-height:100%;
    position: absolute;
    top: 65px;
    background-color: rgba(0,0,0,0.8);
    right: 0px;
    width: 72px;
    -webkit-transition: width 0.5s ease-in-out;
    -moz-transition: width 0.5s ease-in-out;
    -o-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
  }
  .Sidebar:hover {
    width: 270px;
  }
  .toolbar__content, .toolbar__extension {
    max-width: 90% !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
    .addressHolder {
    padding-right: 10px;
    text-overflow: ellipsis;
    overflow: hidden; 
    width: 160px; 
    height: 1.2em; 
    white-space: nowrap;
  }
</style>
