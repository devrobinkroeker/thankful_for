<template>
    <div>
        <v-app>
            <div class="posts">
                <v-card :style="border_color()" class="post" outlined v-for="post in posts" :key="post.id">
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

            posts: db.collection('posts').orderBy('createdAt', 'desc')
        }
    },
    filters: {

        date(value) {

            let current_date = new Date().getDate()
            let post_date = new Date(value * 1000).getDate()
            
            return post_date == current_date ? 'Heute' : 'Wann anders'
        }
    },
    methods: {
        
        border_color() {

            let colors = ['green', 'red', 'blue', 'rgb(236, 216, 30)', 'orange', 'purple', 'orange']
            let rand = Math.floor(Math.random() * 7)

            return 'border: 2px dashed ' + colors[rand]
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