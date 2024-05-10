import TaskModal from '../../TaskModal/TaskModal.vue'
import Task from '../../Task/Task.vue'
import TaskApi from '../../../utils/taskApi.js'


const taskApi = new TaskApi()

export default {
    components: {
        TaskModal,
        Task
    },
    data() {
        return {
            isTaskModalOpen: false,
            tasks: [],
            editingTask: null,
        }
    },
    created() {
        this.getTasks()

    },
    watch: {
        editingTask(newValue) {
            if (newValue) {
                this.isTaskModalOpen = true
            }

        },
        isTaskModalOpen(isOpen) {
            if (!isOpen && this.editingTask) {
                this.editingTask = null
            }
        }
    },
    methods: {
        toggleTaskModal() {
            this.isTaskModalOpen = !this.isTaskModalOpen
        },
        getTasks() {
            taskApi
                .getTasks()
                .then((tasks) => {
                    this.tasks = tasks
                })
                .catch(this.handleError)
        },
        onTaskAdd(task) {
            taskApi
                .addNewTask(task)
                .then((newTask) => {
                    this.tasks.push(newTask)
                    this.toggleTaskModal()
                    this.$toast.success('The task has been created successfully!')
                })
                .catch(this.handleError)
        },
        onTaskSave(editedTask) {
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.findAndReplaceTask(updatedTask)
                    this.findAndReplaceTask(updatedTask)
                    this.isTaskModalOpen = false
                    this.$toast.success('The task has been updated successfully!')
                })
                .catch(this.handleError)
        },
        onTaskStatusChange(editedTask) {
            editedTask.status === 'active' ? editedTask.status = 'done' : editedTask.status = 'active';

            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.findAndReplaceTask(updatedTask)
                    this.findAndReplaceTask(updatedTask)
                    let message;
                    if (updatedTask.status === 'done') {
                        message = 'The task is Done successfully!'
                    }
                    else {
                        message = 'The task is restored successfully!'
                    }
                    this.$toast.success(message)
                })
                .catch(this.handleError)
        },
        findAndReplaceTask(updatedTask) {
            const index = this.tasks.findIndex((t) => t._id === updatedTask._id)
            this.tasks[index] = updatedTask
        },
        handleError(err) {
            this.$toast.error(err.message)
        },
        onTaskEdit(editingTask) {
            this.editingTask = editingTask;
        },

        onTaskDelete(taskId) {
            taskApi
                .deleteTask(taskId)
                .then(() => {
                    this.tasks = this.tasks.filter((t) => t._id !== taskId)
                    this.$toast.success('The task have been deleted successfully!')
                })
                .catch(this.handleError)
        }
    }
}
