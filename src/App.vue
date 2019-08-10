<template>
    <div class="container">
      <div class="mail-box">
        <app-sidebar></app-sidebar>
      </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
export default {
  components: {
    appSidebar: Sidebar,
  }
}
</script>

