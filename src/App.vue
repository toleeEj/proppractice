<template>
  <div class="container">
    <CardListView @selectCard="selectCard"/>
    <CardDetailView v-if="selectedCardId" :id="selectedCardId"/>
  </div>
</template>

<script>
import CardListView from './components/CardListView.vue';
import CardDetailView from './components/CardDetailView.vue';

export default {
  components: {
    CardListView,
    CardDetailView
  },
  data() {
    return {
      selectedCardId: null
    };
  },
  methods: {
    selectCard(id) {
      this.selectedCardId = id;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>