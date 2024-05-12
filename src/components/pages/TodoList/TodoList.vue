<template>
  <v-container>
    <task-modal v-if="isTaskModalOpen" :isOpen="isTaskModalOpen" :editingTask="editingTask" @close="toggleTaskModal"
      @taskSave="onTaskSave" @taskAdd="onTaskAdd" />

    <confirm-dialog :isOpen="isDeleteDialogOpen" title="Attention!" :text="confirmDialogText"
      @close="toggleDeleteDialog" @confirm="onSelectedTasksDelete" />

    <v-row align="center" justify="center" class="mt-3">
      <v-col cols="auto">
        <v-btn color="info" @click="toggleTaskModal">Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row>
      <v-col cols="12" xl="3" lg="4" sm="6" xs="2" v-for="taskData in tasks" :key="taskData._id">
        <task :data="taskData" @taskEdit="onTaskEdit(taskData)" @taskDelete="onTaskDelete(taskData._id)"
          @taskStatus="onTaskStatusChange(taskData)" @taskSelect="toggleTaskId(taskData._id)" />
      </v-col>
    </v-row>
  </v-container>

  <v-btn :disabled="isDeleteSelectedBtnDisabled" class="delete-selected-btn" color="error" variant="elevated"
    @click="toggleDeleteDialog">
    <v-icon icon="mdi-delete-outline" /> Delete selected
  </v-btn>
</template>

<script src="./todolist.js"></script>

<style scoped>
.delete-selected-btn {
  position: fixed;
  right: -140px;
  bottom: 40px;
  z-index: 200;
}

.delete-selected-btn:hover {
  animation-name: btn-animation;
  animation-duration: 0.8s;
  right: 10px;
}

@keyframes btn-animation {
  from {
    right: -140px;
  }

  to {
    right: 20px;
  }
}
</style>