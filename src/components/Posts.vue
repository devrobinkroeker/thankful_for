<template>
    <v-app>
        <div class="posts">
            <v-card :style="border_color()" class="post" outlined v-for="post in posts" :key="post.id">
                <v-card-text>
                    <v-card-title class="content-wrapper">
                        <span class="content">{{ post.post }}</span>
                    </v-card-title>
                </v-card-text>
                <v-card-actions class="additional-info">
                    <span>{{ post.createdAt.toDate() | date}}</span>
                    <span v-if="post.name">{{ post.name }}</span>
                </v-card-actions>
            </v-card>
        </div>
    </v-app>
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

            let current_day = new Date().getDate()
            let current_month = new Date().getMonth()
            let current_year = new Date().getFullYear()

            let post_day = value.getDate()
            let post_month = value.getMonth()
            let post_year = value.getFullYear()
            
            if (current_day == post_day && current_month == post_month && current_year == post_year) {

                return 'Heute'
            }
            else {

                return 'Wann anders'
            }
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
    align-items: center;
}
.post {

    margin: 10px;
    width: 300px;
}
.content-wrapper {

    word-break: normal !important;
}
.content {

    text-align: center;
}
.additional-info {

    font-size: 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}
.divider {

    height: 20px;
}

</style>