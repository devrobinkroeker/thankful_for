<template>
    <v-app>
        <NewPost v-if="new_post" @show-posts="new_post=false" @snackbar="error"></NewPost>
        <Posts v-else></Posts>

        <v-snackbar v-model="snackbar">
            {{ msg }}
            <v-btn @click="snackbar=false">Schließen</v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
import NewPost from '@/components/NewPost'
import Posts from '@/components/Posts'

export default {

    components: {

        NewPost,
        Posts
    },
    data() {
        return {

            snackbar: false,
            new_post: true,
            msg: ''
        }
    },
    methods: {

        error(msg) {

            this.msg = msg
            this.snackbar = true
        }
    },
    created() {

        if (document.cookie) {

            let day = document.cookie.split('=')[1]
            let date = new Date()
            let current_day = date.getDate()
            if (day == current_day) {

                this.new_post = false
            }
        }
    }
}

</script>