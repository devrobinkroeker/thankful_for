<template>
    <v-app>
        <v-card class="card" v-if="$store.state.new_post">
            <NewPost></NewPost>
        </v-card>
        <Posts v-else></Posts>
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

        }
    },
    methods: {

    },
    created() {

        if (document.cookie) {

            let day = document.cookie.split('=')[1]
            let date = new Date()
            let current_day = date.getDate()
            if (day == current_day) {

                this.$store.state.new_post = false
            }
        }
    }
}

</script>

<style>

.card {

    position: relative;
    margin-right: 20%;
    margin-left: 20%;
}

</style>