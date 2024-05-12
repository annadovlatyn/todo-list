import TaskModal from '../../TaskModal/TaskModal.vue'
import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
    components: {
        TaskModal
    },
    data() {
        return {
            task: null,
            isEditModalOpen: false,
            taskId: this.$route.params.taskId
        }
    },

    created() {
        this.getTask()
    },
    computed: {
        createdAt() {
            return this.task.created_at.slice(0, 10)
        },
        dueDate() {
            return this.task.date?.slice(0, 10) || "none"
        },
        active() {
            return this.task.status === 'active'
        }
    },

    methods: {
        getTask() {
            taskApi
                .getSingleTask(this.taskId)
                .then((task) => {
                    this.task = task
                })
                .catch(this.handleError)
        },
        toggleTaskModal() {
            this.isEditModalOpen = !this.isEditModalOpen
        },
        onSave(editedTask) {
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.task = updatedTask
                    this.isEditModalOpen = false
                    this.$toast.success('The task has been updated successfully!')
                })
                .catch(this.handleError)
        },

        onDelete() {
            taskApi
                .deleteTask(this.taskId)
                .then(() => {
                    this.$router.push('/')
                    this.$toast.success('The task has been deleted successfully!')
                })
                .catch(this.handleError)
        },

        statusChange() {
            const editedTask = {
                ...this.task,
                status: this.active ? 'done' : 'active'
            }
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.task = updatedTask
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
        handleError(err) {
            this.$toast.error(err.message)
        },
    },
}
