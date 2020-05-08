<template>
    <div class="wrapper">
        <h2 class="question">Wofür bist du heute dankbar?</h2>
        <v-form @submit.prevent="submit(post, name)">
            <v-container>
                <v-row>
                    <v-textarea v-model="post" placeholder="Wir machen heute Lagerfeuer ..." class="inputs"></v-textarea>
                </v-row>
                <v-row class="name-wrapper">
                    <v-text-field v-model="name" class="inputs" placeholder="Name (optional)"></v-text-field>
                </v-row>
                <v-row class="submit-wrapper">
                    <v-btn type="submit">Veröffentlichen</v-btn>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
// import { db } from '@/main'
import { functions } from '@/main'

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

                this.$store.state.new_post = false
                this.$emit('hide-dialog')
                this.savePost(post, name)
                this.post = ''
                this.name = ''
            }
            else {

                // Error message
                this.$store.state.snackbarMessage = 'Bist du für nichts dankbar? Es gibt immer etwas!'
                this.$store.state.showSnackbar = true
            }
        },
        savePost(post, name) {

            functions.httpsCallable('addPost')({post: post, name: name}).then(() => {

                console.log('Added the post')
            })


            // let date = new Date()
            // let day_of_month = date.getDate()

            // document.cookie = 'postedOn=' + day_of_month
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
.name-wrapper {

    max-width: 300px;
}
.submit-wrapper {

    display: flex;
    justify-content: center;
}
.question {

    color: rgb(54, 54, 54)
}
.wrapper {

    padding: 30px;
    background-color: white;
}

</style>