<!-- src/components/CardDetailView.vue -->
<template>
  <div v-if="card">
    <h2>{{ card.title }}</h2>
    <p>{{ card.description }}</p>
    <!-- You can add more details about the card here -->
  </div>
</template>

<script>
export default {
  props: ["id"], // Receiving the card's ID as a prop
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Card 1",
          description: "In Vue, components need to be imported and registered in the components object so that they can be used in the template.",
        },
        {
          id: 2,
          title: "Card 2",
          description: "Detailed description for card 2",
        },
        {
          id: 3,
          title: "Card 3",
          description: "Detailed description for card 3",
        },
      ],
    };
  },
  computed: {
    card() {
      // Find the card with the matching ID passed as a prop
      return this.cards.find((card) => card.id === parseInt(this.id));
    },
  },
};
</script>
