

export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            dialog: false,
            title: '',
            description: '',
            dueDate: '',
        }
    },
    methods: {
        onClose() {
            this.$emit('close')
        },
        onSave() {
            const newTask = {
                title: this.title,
                description: this.description,
                dueDate: this.dueDate
            }
            this.$emit('taskSave', newTask)
        }
    }
}
