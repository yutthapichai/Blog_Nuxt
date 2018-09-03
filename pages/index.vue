<template>
  <div class="home-page">
    <section class="intro">
      <h1>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h1>
    </section>
    <section class="featured-posts">
      <PostList :posts="loadedPosts"/>
    </section>
  </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: []
    }
  },
  asyncData(context, callback) {
      setTimeout(() => {
        callback(null,{
          loadedPosts: [
            {
              id: 1,
              title: 'My awesome Post 1',
              previewText: 'Super amazing, thanks for that',
              thumbnail:"https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
            },
            {
              id: 2,
              title: 'My awesome Post 2',
              previewText: 'Super amazing, thanks for that',
              thumbnail:"https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
            },
            {
              id: 3,
              title: 'My awesome Post 3',
              previewText: 'Super amazing, thanks for that',
              thumbnail:"https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
            }
          ]
        })
      }, 1500);
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 40%;
  font-size: 1.5rem;
  color: #ffffff;
  padding: 10px;
  text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
