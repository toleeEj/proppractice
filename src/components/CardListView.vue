<template>
  <div class="card-list">
    <div v-for="card in cards" :key="card.id" class="card">
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
      <button @click="$emit('selectCard', card.id)">
        View Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, title: "Card 1", description: "This is card 1" },
        { id: 2, title: "Card 2", description: "This is card 2" },
        { id: 3, title: "Card 3", description: "This is card 3" },
      ],
    };
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>