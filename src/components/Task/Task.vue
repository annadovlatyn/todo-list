<template>
  <v-card class="mx-auto my-8 w-100" elevation="10" max-width="344">
    <v-card-item class="pa-2 pl-4">
      <v-checkbox @click="onSelect" :checked="isSelected" class="mb-n6 mx-n1"></v-checkbox>
      <v-card-title class="text-h5"> {{ data.title }}</v-card-title>
    </v-card-item>
    <v-card-text class="pa-2 pl-4 description text-body-1">{{ data.description }} </v-card-text>
    <v-card-text class="pa-2 pl-4"> <b>Status: </b>{{ data.status }} </v-card-text>
    <v-card-text class="pa-2 pl-4"> <b>Created At: </b> {{ createdAt }} </v-card-text>
    <v-card-text class="pa-2 pl-4"> <b>Due Date: </b> {{ dueDate }} </v-card-text>
    <v-card-text class="pa-2 pl-4">
      <RouterLink :to="`/task/${data._id}`">Show More ...</RouterLink>
    </v-card-text>

    <v-card-actions>
      <v-btn :color="active ? 'success' : 'info'" variant="elevated" @click="statusChange">
        <v-icon v-if="active" icon="mdi-check-outline" />
        <v-icon v-else icon="mdi-reload" />
      </v-btn>
      <v-btn color="warning" variant="elevated" @click="onEdit">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click="onDelete">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./task.js"></script>

<style scoped>
.description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
