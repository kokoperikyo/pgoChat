<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-group no-action value="true">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item>aa</v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    admins: [
      ["Management", "people_outline"],
      ["Settings", "settings"]
    ]
  })
};
</script>