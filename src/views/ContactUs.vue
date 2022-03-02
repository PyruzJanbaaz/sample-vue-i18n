<template>
  <CContainer :title="$t('title.contact')" :body="$t('content')" icon="ri-contacts-line"/>
</template>

<script>
import CContainer from "@/components/CContainer";

export default {
  name: "ContactUs",
  components: {CContainer}
}
</script>

