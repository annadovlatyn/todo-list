<template>
  <task-modal v-if="isEditModalOpen" :isOpen="isEditModalOpen" :editingTask="task" @close="toggleTaskModal"
    @taskSave="onSave" />

  <div class="mx-4">
    <v-card v-if="task" class="mx-auto my-8 ma-2 w-100 pa-4 pa-mob20" elevation="10" max-width="800">
      <v-card-item>
        <v-card-title class="text-wrap"> {{ task.title }}</v-card-title>
      </v-card-item>
      <v-card-text>{{ task.description }} </v-card-text>
      <v-card-text> <b>Status: </b>{{ task.status }} </v-card-text>
      <v-card-text> <b>Created At: </b> {{ createdAt }} </v-card-text>
      <v-card-text> <b>Due Date: </b> {{ dueDate }} </v-card-text>

      <v-card-actions>
          <v-btn :color="active ? 'success' : 'info'" variant="elevated" @click="statusChange">
          <v-icon v-if="active" icon="mdi-check-outline" />
          <v-icon v-else icon="mdi-reload" />
        </v-btn>
        <v-btn color="warning" variant="elevated" @click="toggleTaskModal">
          <v-icon icon="mdi-archive-edit-outline" />
        </v-btn>
        <v-btn color="error" variant="elevated" @click="onDelete">
          <v-icon icon="mdi-delete-outline" />
        </v-btn>
      </v-card-actions>
    </v-card>
    <h4 v-else>Task Not Found</h4>
  </div>




</template>

<script src="./singleTask.js"></script>

<style scoped>
@media only screen and (max-width: 600px) {
  .pa-mob20 {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
</style>
