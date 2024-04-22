
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
        ex4: "",

    },
    computed: {
        createdAt() {
            return this.data.created_at.slice(0, 10)
        },
        dueDate() {
            return this.data.date.slice(0, 10)
        }
    }
}
