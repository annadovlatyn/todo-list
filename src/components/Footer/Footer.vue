<template>
  <v-layout class="footerContainer">
    <v-footer class="bg-grey-lighten-2 d-flex flex-column">
      <v-row justify="center" no-gutters class="py-3 mb-2">
        <v-btn class="py-1" v-for="navLink in navLinks" :key="navLink.title" variant="text">
          <RouterLink :to="navLink.path" class="text-decoration-none active-link footer-nav">{{ navLink.title }}
          </RouterLink>
        </v-btn>
      </v-row>

      <v-row justify="center" no-gutters>
        <v-btn class="py-1" v-for="footerIcon in footerIcons" :key="footerIcon" variant="plain">
          <a class="active-link" :href="footerIcon.path" target="_blank">
            <v-icon>{{ footerIcon.icon }}</v-icon>
          </a>
        </v-btn>
      </v-row>

      <v-row justify="center" class="footer-padding">
        <v-divider class="footer-padding"></v-divider>
        <div>{{ new Date().getFullYear() }} — <strong>ToDo List</strong></div>
      </v-row>
    </v-footer>
  </v-layout>
</template>

<script src="./footer.js"></script>
<style scoped>
.footer-padding {
  width: 100%;
  margin: 12px auto;
}

.footerContainer .v-btn .v-icon {
  --v-icon-size-multiplier: 1.8 !important;
  color: #000;
}

.footer-nav {
  color: #000;
  font-size: 18px;
  font-weight: bold;
}

.v-layout {
  flex: 0 0 auto;
}

@media only screen and (max-width: 600px) {
  .footerContainer .v-btn .v-icon {
    --v-icon-size-multiplier: 1.3 !important;
  }
}
</style>