
export default {
    data() {
        return {
            navLinks: [
                { title: 'Home', path: '/' },
                { title: 'About Us', path: '/about' },
                { title: 'Contact Us', path: '/contact-us' }
            ],
            footerIcons: [
                { icon: 'mdi-facebook', path: 'https://www.facebook.com' },
                { icon: 'mdi-linkedin', path: 'https://linkedin.com/' },
                { icon: 'mdi-github', path: 'https://github.com/annadovlatyn' },
                { icon: 'mdi-twitter', path: 'https://www.twitter.com' }
            ]
        }
    },
    computed: {
        getYear() {
            return new Date().getFullYear()
        }
    }
}

