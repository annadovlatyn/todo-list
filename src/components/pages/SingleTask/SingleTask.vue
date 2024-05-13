<template>
  <task-modal v-if="isEditModalOpen" :isOpen="isEditModalOpen" :editingTask="task" @close="toggleTaskModal"
    @taskSave="onSave" />

  <div class="mx-4">
    <v-card v-if="task" class="mx-auto my-10 ma-4 w-100 pa-10 pa-mob20 text-center" elevation="10" max-width="800">
      <v-card-item>
        <v-card-title class="text-wrap text-center text-h5 text-md-h4"> {{ task.title }}</v-card-title>
      </v-card-item>
      <v-card-text class="text-center font-weight-medium mt-4">{{ task.description }} </v-card-text>

      <div class="info-box">
        <v-card-text> <b>Status: </b>{{ task.status }} </v-card-text>
        <v-card-text> <b>Created At: </b> {{ createdAt }} </v-card-text>
        <v-card-text> <b>Due Date: </b> {{ dueDate }} </v-card-text>
      </div>


      <v-card-action class="w-100" max-width="800">
        <div class="d-flex flex-wrap ga-3 w-100 text-center justify-center">
          <div class="d-flex">
            <v-btn :color="active ? 'success' : 'info'" variant="elevated" @click="statusChange">
              <v-icon v-if="active" icon="mdi-check-outline" />
              <v-icon v-else icon="mdi-reload" />
            </v-btn>
          </div>
          <div class="d-flex">
            <v-btn color="warning" variant="elevated" @click="toggleTaskModal">
              <v-icon icon="mdi-archive-edit-outline" />
            </v-btn>
          </div>
          <div class="d-flex">
            <v-btn color="error" variant="elevated" @click="onDelete">
              <v-icon icon="mdi-delete-outline" />
            </v-btn>
          </div>
        </div>
      </v-card-action>

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
    <div v-else>
      <p class="text-center text-h5">Task not found</p>
    </div>
  </div>




</template>

<script src="./singleTask.js"></script>

<style scoped>
.info-box {
  width: 100%;
  margin: 20px auto;
  max-width: 220px;
  display: inline-block;
  text-align: center
}

.info-box .v-card-text {
  padding: 5px 15px !important;

}

@media only screen and (max-width: 600px) {
  .pa-mob20 {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .slow-transition {
    transition-delay: 1s;
  }


}
</style>
