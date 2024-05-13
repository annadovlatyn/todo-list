<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <h4 class="heading">This page is not found</h4>
                <img src="../../../assets/images/error_animation_404.gif" alt="Page not found" class="error-image">

            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="auto" class="ma-2">
                <RouterLink to="/"><v-btn color="success">
                        Go Back Home
                    </v-btn></RouterLink>
            </v-col>
        </v-row>
    </v-container>

</template>


<style scoped>
.error-image {
    max-width: 450px;
    margin: 0 auto;
}

.heading {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20px;
    ;
}
</style>