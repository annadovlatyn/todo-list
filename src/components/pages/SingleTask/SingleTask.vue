<template>
  <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" :editingTask="editingTask" @close="toggleTaskModal"
    @taskSave="onTaskSave" />

  <v-card v-if="task" class="mx-auto my-8 w-100" elevation="10" max-width="344">
    <v-card-item class="pa-2 pl-4">
      <v-card-title> {{ task.title }}</v-card-title>
    </v-card-item>
    <v-card-text class="pa-2 pl-4">{{ task.description }} </v-card-text>
    <v-card-text class="pa-2 pl-4"> <b>Status: </b>{{ task.status }} </v-card-text>
    <v-card-text class="pa-2 pl-4"> <b>Created At: </b> {{ createdAt }} </v-card-text>
    <v-card-text class="pa-2 pl-4"> <b>Due Date: </b> {{ dueDate }} </v-card-text>

    <v-card-actions>
      <v-btn v-if="task.status === 'active'" color="success" variant="elevated" @click="statusChange">
        <v-icon icon="mdi-check-outline" />
      </v-btn>
      <v-btn v-else color="info" variant="elevated" @click="statusChange">
        <v-icon icon="mdi-reload" />
      </v-btn>
      <v-btn color="warning" variant="elevated" @click="onEdit(task)">
        <v-icon icon="mdi-archive-edit-outline" />
      </v-btn>
      <v-btn color="error" variant="elevated" @click="onDelete()">
        <v-icon icon="mdi-delete-outline" />
      </v-btn>
    </v-card-actions>
  </v-card>
  <h4 v-else>Task Not Found</h4>




</template>

<script src="./singleTask.js"></script>
