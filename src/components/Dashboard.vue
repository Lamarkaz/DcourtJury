<template>
  <v-toolbar dark color="deep-purple darken-3" height="65">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Dcourt Jury</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>explore</v-icon>
    </v-btn>
    <v-btn icon>
     <v-badge overlap>
      <span slot="badge" class="badge-not">3</span>
      <v-avatar>
        <v-icon color="white">notifications</v-icon>
      </v-avatar>
     </v-badge>
    </v-btn>
    <v-btn icon>
      <v-avatar>
        <img src="../assets/Avatar.png" class="avatarId">
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
