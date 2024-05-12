import FormApi from '../../../utils/formApi.js'
import { mapMutations } from 'vuex'

const formApi = new FormApi()
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default {
    data: () => ({
        name: '',
        email: '',
        message: '',
        nameRules: [(v) => !!v || 'Name is required'],
        emailRules: [(v) => !!v || 'Email is required', (v) => emailRegex.test(v) || 'Invalid email']
    }),

    methods: {
        ...mapMutations(['toggleLoading']),
        async sendForm() {
            const isValid = await this.validate()
            console.log('isValid', isValid)
            if (!isValid) {
                return
            }
            const form = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            formApi.sendForm(form)
                .then(() => {
                    console.log('then --- Email was sent', form)
                    this.reset()
                    this.$toast.success('Your message has been sent!')
                })
                .catch(this.handleError)
                .finally(() => {
                    console.log('finally --- Email was sent', form)
                    this.toggleLoading()
                })
            // send form
            // formApi.sendForm(form)
            // if success this.reset()
            // show notification
        },
        async validate() {
            const { valid } = await this.$refs.form.validate()
            return valid
        },
        reset() {
            this.$refs.form.reset()
        },
        handleError(err) {
            this.$toast.error(err.message)
            console.log('catch --- Error')
        },
    }
}