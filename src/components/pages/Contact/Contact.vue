<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <h1 align="center" class="text-h3">Contact us</h1>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-sheet class="mx-auto pb-6 w-100" max-width="500">
                    <v-form ref="form">
                        <v-text-field v-model.trim="name" :rules="nameRules" label="Name" required></v-text-field>
                        <v-text-field v-model="email" :rules="emailRules" label="Email" required
                            type="email"></v-text-field>
                        <v-textarea label="Message" v-model.trim="message"></v-textarea>

                        <div class="btn-outer-container">
                            <div class="d-flex flex-column">
                                <v-btn class="mt-4" color="success" block @click="sendForm"> Send </v-btn>
                                <v-btn class="mt-4" color="error" block @click="reset"> Reset Form </v-btn>
                            </div>
                        </div>

                    </v-form>
                </v-sheet>
            </v-col>
        </v-row>

        <v-row v-if="emailSent" align="center" justify="center">
            <v-col cols="12" lg="12">
                <v-card class="mx-auto my-8 w-100 pa-3" elevation="10" max-width="500">
                    <v-card-item class="pa-2 pl-4">
                        <v-card-title>Your email has been sent!</v-card-title>
                    </v-card-item>
                    <v-card-text class="pa-2 pl-4"> <b>Name: </b>{{ this.messageSent.name }} </v-card-text>
                    <v-card-text class="pa-2 pl-4"> <b>Email: </b> {{ this.messageSent.email }} </v-card-text>
                    <v-card-text class="pa-2 pl-4"> <b>Message: </b></v-card-text>
                    <v-card-text class="pa-2 pl-4 mb-4"> {{ this.messageSent.message }}</v-card-text>
                    <v-card-text class="pa-2 pl-4" align="center" justify="center">
                        <RouterLink to="/"><v-btn color="success" @click="toggleMessage">
                                Well Done! Back to home
                            </v-btn>
                        </RouterLink>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="./contact.js"></script>

<style scoped>
.btn-outer-container {
    max-width: 240px !important;
    margin: 0 auto;
}

.heading {
    font-size: 37px;
    font-weight: bold;
}

.message {
    width: 100%;
    max-width: 600px;
}

.message h4 {
    text-align: center;
    font-size: 26px;
    margin: 15px;
}

.message h6 {
    font-size: 17px;
    margin: 10px 0;
}

.message p {
    font-size: 17px;
}
</style>