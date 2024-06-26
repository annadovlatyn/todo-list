import TaskModal from '../../TaskModal/TaskModal.vue'
import TaskApi from '../../../utils/taskApi.js'
import { mapMutations } from 'vuex'

const taskApi = new TaskApi()

export default {
    components: {
        TaskModal,
    },
    data() {
        return {
            task: null,
            isEditModalOpen: false,
            taskId: this.$route.params.taskId,
            pageError: false,
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
        ...mapMutations(['toggleLoading']),
        getTask() {
            this.toggleLoading()
            taskApi
                .getSingleTask(this.taskId)
                .then((task) => {
                    this.task = task
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading()
                })
        },
        toggleTaskModal() {
            this.isEditModalOpen = !this.isEditModalOpen
        },
        onSave(updatedTask) {
            this.toggleLoading()
            taskApi
                .updateTask(updatedTask)
                .then(() => {
                    this.task = updatedTask
                    this.isEditModalOpen = false
                    this.$toast.success('The task has been updated successfully!')
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading()
                })
        },

        onDelete() {
            this.toggleLoading()
            taskApi
                .deleteTask(this.taskId)
                .then(() => {
                    this.$router.push('/')
                    this.$toast.success('The task has been deleted successfully!')
                })
                .catch(this.handleError)
                .finally(() => {
                    this.toggleLoading()
                })
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
