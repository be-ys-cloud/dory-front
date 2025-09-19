<script>
export default {
  computed: {
    password_policies() {
      return this.$store.state.config.password_policies
    }
  },
}
</script>

<template>
  <div>
    <b-alert variant="info" show>
      <div v-html="$t('modal.respect_password_info')" v-if="password_policies.length === 0" />
      <details v-for="(policy, index) in password_policies" v-bind:key="index" v-bind:open="password_policies.length < 2" >
        <summary>{{ policy.name[$i18n.locale] }}</summary>
        <p class="policy">{{ policy.content[$i18n.locale] }}</p>
      </details>
    </b-alert>
  </div>
</template>

<style>
.policy {
  white-space: pre;
}
</style>
