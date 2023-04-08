<template>
    <div class="container">
        <div class="post" v-if="!post[0].code">
            <router-link to="/">
               <button class="back-button">Geri</button> 
            </router-link>
            <h1 class="post-title">
                {{ post[0].title }}
            </h1>
            <span class="post-sender">{{ post[0].sender }}</span>
            <p class="post-text">
                {{ post[0].description }}
            </p>
            <span class="post-date">
                {{ post[0].date }}
            </span>
        </div>
        <div v-else-if="post[0].code == 'error'">Bir hata oluştu!</div>
        <div v-else>Gönderi bulunamadı!</div>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: "PostDetail",
    data: () => ({
        post: [],
    }),
    created() {
        axios.post("http://localhost:3000/post-detail", {
            slug: this.$route.params.slug,
        }).then(response => {
            if (response.data.code === "error") {
                this.post = [{ code: response.data.code }];
            }
            else if (response.data.code === "not_found_post") {
                this.post = [{ code: response.data.code }];
            }
            else {
                this.post = response.data;
            }
        });
    },
    components: { RouterLink }
}

</script>
<style scoped>
.post-title {
    font-family: 'Lobster';
}

.post-sender {
    font-size: 12px;
    color: #333;
    font-family: 'Calibri';
}

.post-text {
    font-size: 16px;
    line-height: 26px;
}

.post-date {
    color: #ccc;
    float: right;
}

.back-button {
    float: right;
    font-size: 15px;
    color: darkslategray;
    text-decoration: none;
    background: lightblue;
    border-radius: 10%;
    font-weight: bold;
}
</style>