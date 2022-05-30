<template>
  <v-app>
    <Header />
    <Content />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Header from "@/components/Layout/Header.vue"; // @ is an alias to /src
import Content from "@/components/Layout/Content.vue";
import Footer from "@/components/Layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>
