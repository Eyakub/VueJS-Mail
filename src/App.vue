<template>
    <div class="container">
      <div class="mail-box">
        <app-sidebar :messages="messages"></app-sidebar>
        <app-content :messages="messages"></app-content>
      </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import messages from './data/messages';

export default {
  data(){
    return {
      messages: messages,
    }
  },

  components: {
    appSidebar: Sidebar,
    appContent: Content,
  }
}
</script>

