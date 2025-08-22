<script>
import toaster from "@/components/mixins/toaster";

export default {
  mixins: [toaster],

  data() {
    return {
      password_policies: {},
    }
  },

  created() {
    this.axios.get(process.env.VUE_APP_BACKEND + "/config")
        .then(response => {
          if (response.data.password_policies) {
            this.password_policies = response.data.password_policies
          }
        })
        .catch(() => {
          this.$awn.alert(this.$t("landing.load_config.request_error"), this.toasterLabels)
        })
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
