<template>
  <div>
    <v-toolbar absolute dark flat color="deep-purple darken-3" height="65">
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
      <v-btn icon v-on:click="$router.push('/Latest')">
        <v-icon>whatshot</v-icon>
      </v-btn>
      <v-btn icon @click.stop="notifDrawer = !notifDrawer">
       <v-badge overlap>
        <span slot="badge" class="badge-not"></span>
        <v-avatar>
          <v-icon color="white">notifications</v-icon>
        </v-avatar>
       </v-badge>
      </v-btn>
    </v-toolbar>
    <div class="notifBar">
      <v-navigation-drawer
        color="deep-purple darken-3"
        temporary
        v-model="notifDrawer"
        dark
        absolute
        right
        hide-overlay
        width= 600
        style="margin-top: 65px; background-color: #333; padding-right: 5px; padding-left: 5px"
      >
        <v-list class="pa-1">
          <v-list-tile>
            <h3 style="margin-right: auto; margin-left: auto; margin-top: 20px"><v-icon style="margin-right: 4px; margin-top: -5px">notifications</v-icon>Notifications</h3>
          </v-list-tile>
          <div style="margin-top: 20px"></div>
          <v-list-tile v-for="item in items" :key="item.title" @click="" style="border-radius: 99px">
            <v-list-tile-content>
              <v-list-tile-title><v-icon style="margin-right: 9px; margin-top: -5px; font-size: 17px">{{ item.icon }}</v-icon>{{ item.title }}<strong style="margin-left: 4px">{{ item.case }}</strong>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="sideBar">
      <v-navigation-drawer dark absolute v-model="siderBarDrawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar style="margin-left: -6px">
              <img src="../assets/Avatar.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
               <v-tooltip bottom>
                <v-list-tile-title class="addressHolder" slot="activator">0x9AaFA5638415c7B5ca3e36c8888a040672eF2EE9</v-list-tile-title>
                <span>Copy this Address</span>
              </v-tooltip>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile @click="$router.push('/Dashboard')">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="font-size: 14px">Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>account_balance</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="font-size: 14px">Cases Explorer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="$router.push('/Clients')">
            <v-list-tile-action>
              <v-icon>layers</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title style="font-size: 14px">Client Contracts</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <div class="sideBarItem">
      </div>
    </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
   data () {
      return {
        siderBarDrawer: true,
        notifDrawer: false,
        items: [
          { title: 'New Evidence', case: 'Duber ride case #13', icon: 'track_changes' },
          { title: 'New Verdict', case: 'Decentube video copyrights violation case #85', icon: 'gavel' },
          { title: 'New Reward', case: 'Decentube video copyrights violation case #85', icon: 'attach_money' },
          { title: 'New Unlock', case: 'Decentube video copyrights violation case #85', icon: 'lock_open' },
          { title: 'New Vote', case: 'Dirbnb problem case #159', icon: 'trending_up' }
          ],
        mini: true
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style v>
  .badge-not {
    top: 30px !important;
    right: 16px !important;
    background-color: #F44336;
    color: white;
    width: 15px;
    height: 15px;
    border-radius: 99px;
    border: 3px solid #4527a0;
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
  .sideBar {
    min-height:100%;
    position: absolute;
    top: 65px;
    background-color: #333;
    left: 0px;
    width: 65px;
    -webkit-transition: width 0.5s ease-in-out;
    -moz-transition: width 0.5s ease-in-out;
    -o-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
    z-index: 999;
  }
  .sideBar:hover {
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
    font-size: 14px;
  }
  .sideBarItem {
    margin-top: 160px;
    height: 50%;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
  }
</style>