<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn density="default" color="info" @click="toggleTaskModal">Add New Task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" @close="toggleTaskModal" @taskSave="onTaskSave" />
</template>

<script src="./todolist.js"></script>
