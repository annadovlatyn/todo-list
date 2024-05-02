import TaskModal from '../TaskModal/TaskModal.vue'
import Task from '../Task/Task.vue'
import TaskApi from '../../utils/taskApi.js'


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
            console.log('editing task newValue', newValue);
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
            console.log('editedTask', editedTask)
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    console.log('updatedTask', updatedTask)
                    const taskIndex = this.tasks.findIndex((t) => t._id === updatedTask._id)
                    this.tasks[taskIndex] = updatedTask
                    this.isTaskModalOpen = false
                    this.$toast.success('The task has been updated successfully!')
                })
                .catch(this.handleError)
        },
        handleError(err) {
            this.$toast.error(err.message)
        },
        onTaskEdit(editingTask) {
            this.editingTask = editingTask;
        }
    }
}