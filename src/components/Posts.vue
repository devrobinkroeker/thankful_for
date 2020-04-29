<template>
    <div>
        <v-app>
            <div class="posts">
                <v-card class="post" outlined v-for="post in posts" :key="post.id">
                    <v-card-text>
                        <v-card-title class="content">
                            {{ post.post }}
                        </v-card-title>
                    </v-card-text>
                    <v-card-actions class="additional-info">
                        <span>{{ post.createdAt | date }}</span>
                        <span v-if="post.name">{{ post.name }}</span>
                    </v-card-actions>
                </v-card>
            </div>
        </v-app>
    </div>
</template>

<script>
import { db } from '@/main'

export default {

    data() {
        return {

            posts: []
        }
    },
    firestore() {
        return {

            posts: db.collection('posts')
        }
    },
    filters: {

        date(value) {

            let current_date = new Date().getDate()
            let post_date = new Date(value * 1000).getDate()
            return current_date == post_date ? 'Heute' : 'Früher'
        }
    }
}

</script>

<style>

.posts {

    display: flex;
    flex-basis: 25%;
    flex-wrap: wrap;
    justify-content: space-around;
}
.post {

    /* width: 20em; */
    margin: 10px;
}
.content {

    width: auto;
}
.additional-info {

    font-size: 15px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    /* margin-bottom: -20px; */
}
.divider {

    height: 20px;
}

</style>