<template>

  <v-col cols="12" sm="4">
    <v-container>
      <v-checkbox label="Checkbox"></v-checkbox>
    </v-container>
    <v-card class="mx-auto my-8" elevation="16" max-width="344">
      <v-card-item>
        <v-card-title> {{ data.title }}</v-card-title>
      </v-card-item>
      <v-card-text>{{ data.description }} </v-card-text>
      <v-card-text> <span>Status: </span>{{ data.status }} </v-card-text>
      <v-card-text> <span>Created At: </span> {{ createdAt }} </v-card-text>
      <v-card-text> <span>Due Date: </span> {{ dueDate }} </v-card-text>
    </v-card>
  </v-col>


</template>

<script src="./task.js"></script>
