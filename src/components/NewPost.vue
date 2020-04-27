<template>
    <v-card class="card">
        <v-card-text>
            <h2 class="question">Wofür bist du heute dankbar?</h2>
            <v-form @submit.prevent="submit(post, name)">
                <v-container>
                    <v-row>
                        <v-textarea v-model="post" placeholder="Wir machen heute Lagerfeuer ..." class="inputs"></v-textarea>
                    </v-row>
                    <v-row class="name">
                        <v-text-field v-model="name" class="inputs" placeholder="Name (optional)"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-btn type="submit" class="submit">Veröffentlichen</v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { db } from '@/main'

export default {

    data() {
        return {

            posts: [],
            post: '',
            name: ''
        }
    },
    methods: {

        submit(post, name) {

            if (post) {

                this.$emit('show-posts')
                this.savePost(post, name)
            }
            else {

                // Error message
                this.$emit('snackbar', 'Bist du für nichts dankbar? Es gibt immer etwas!')
            }
        },
        savePost(post, name) {

            db.collection('posts').add({

                post: post,
                name: name,
                createdAt: new Date(),
                published: false
            })

            let date = new Date()
            let day_of_month = date.getDate()

            document.cookie = 'postedOn=' + day_of_month
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
.inputs {

    font-size: 2em;
}
.name {

    width: 50%;
}
.submit {

    position: relative;
    margin-right: 45%;
    margin-left: 35%;
}
.question {

    color: rgb(54, 54, 54)
}

</style>