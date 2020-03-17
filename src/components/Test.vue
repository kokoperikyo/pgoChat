<template>
  <v-card max-width="350" min-height="250">
    <v-card-title class="headline pb-0">フレンドになりました！</v-card-title>
    <v-row justify="center">
      <v-icon color="green" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        icon: "folder",
        iconClass: "grey lighten-1 white--text",
        title: "Photos",
        subtitle: "Jan 9, 2014"
      },
      {
        icon: "folder",
        iconClass: "grey lighten-1 white--text",
        title: "Recipes",
        subtitle: "Jan 17, 2014"
      },
      {
        icon: "folder",
        iconClass: "grey lighten-1 white--text",
        title: "Work",
        subtitle: "Jan 28, 2014"
      }
    ],
    items2: [
      {
        icon: "assignment",
        iconClass: "blue white--text",
        title: "Vacation itinerary",
        subtitle: "Jan 20, 2014"
      },
      {
        icon: "call_to_action",
        iconClass: "amber white--text",
        title: "Kitchen remodel",
        subtitle: "Jan 10, 2014"
      }
    ]
  })
};
</script>
<style>
</style>