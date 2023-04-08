<template>
    <div class="posts">

        <div class="post" v-for="post in posts" :key="post.id">
            <h1 class="post-title" @click="post_detail(post.slug)">
                {{post.title}}
            </h1>
            <span class="post-sender">{{post.sender}}</span>
            <p class="post-text">
                {{post.description.length > 270 ? post.description.slice(0,270)+ '...' : post.description}}
            </p>
            <span class="post-date">
                {{post.date}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Posts',
    props: ["posts"],
    methods:{
        post_detail(slug){
            this.$router.push('/post/' +slug)
        }
    }
}
</script>
<style scoped>
.post-title {
    font-family: 'Lobster';
    color: darkmagenta;
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
</style>
