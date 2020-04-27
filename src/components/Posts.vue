<template>
    <div>
        <v-app>
            {{ posts }}
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