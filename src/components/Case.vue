<template>
    <div>
        <CaseTrial v-if="caseState == 1"></CaseTrial>
        <CaseVote v-else-if="caseState == 2"></CaseVote>
        <CaseUnlock v-else-if="caseState == 3"></CaseUnlock>
        <CaseVerdict v-else-if="caseState == 4"></CaseVerdict>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        caseState: 3
      }
    }
  }
</script>
