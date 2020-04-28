<template>
    <div>
        <v-app>
            <div class="posts">
                <v-card class="post" outlined v-for="post in posts" :key="post.id">
                    <span class="content">{{ post.post }}</span><br>
                    <div class="additional-info">
                        <span>Today</span>
                        <span v-if="post.name">{{ post.name }}</span>
                    </div>
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
    }
}

</script>

<style>

.posts {

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.post {

    width: 25%;
    padding: 30px 30px 0 30px;
    margin: 10px;
}
.additional-info {

    font-size: 15px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
}
.content {

    font-size: 2em;
}

</style>