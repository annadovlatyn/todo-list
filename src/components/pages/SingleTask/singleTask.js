import TaskModal from '../../TaskModal/TaskModal.vue'
import TodoList from '../TodoList/TodoList.vue'
import TaskApi from '../../../utils/taskApi.js'

const taskApi = new TaskApi()

export default {
    components: {
        TaskModal,
        TodoList
    },
    data() {
        return {
            task: null,
            isTaskModalOpen: false,
            editingTask: null,
            taskId: this.$route.params.taskId
        }
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
    created() {
        this.getTask()
    },
    computed: {
        createdAt() {
            return this.task.created_at.slice(0, 10)
        },
        dueDate() {
            return this.task.date?.slice(0, 10) || "none"
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
            this.isTaskModalOpen = !this.isTaskModalOpen
        },
        onSave() {
            const task = {
                title: this.title.trim(),
                description: this.description
            }
            if (this.dueDate) {
                task.date = this.dueDate.toISOString().slice(0, 10)
            }
            else {
                task.date = ''
            }
            if (this.editingTask) {
                this.$emit('taskSave', {
                    ...this.editingTask,
                    ...task
                })
                return
            }
        },
        onTaskSave(editedTask) {
            taskApi
                .updateTask(editedTask)
                .then((updatedTask) => {
                    this.task = updatedTask
                    this.isTaskModalOpen = false
                    this.$toast.success('The task has been updated successfully!')
                })
                .catch(this.handleError)
        },
        onEdit(task) {
            this.editingTask = task;
            this.toggleTaskModal()
            return this.request('PUT', task._id, task)
        },
        onDelete() {
            taskApi
                .deleteTask(this.taskId)
                .then(() => {
                    this.$toast.success('The task have been deleted successfully!')
                })
                .catch(this.handleError)
        },
        statusChange() {
            this.$emit('taskStatus')
        },
        handleError(err) {
            this.$toast.error(err.message)
        },
    },
}
