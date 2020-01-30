<template>
  <v-container id="dropdown-example">
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      label="Overflow Btn"
      target="#dropdown-example"
    ></v-overflow-btn>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"],
    dropdown_icon: [
      // eslint-disable-next-line no-console
      { text: "list", callback: () => console.log("list") },
      // eslint-disable-next-line no-console
      { text: "favorite", callback: () => console.log("favorite") },
      // eslint-disable-next-line no-console
      { text: "delete", callback: () => console.log("delete") }
    ],
    dropdown_edit: [
      { text: "100%" },
      { text: "75%" },
      { text: "50%" },
      { text: "25%" },
      { text: "0%" }
    ]
  })
};
</script>