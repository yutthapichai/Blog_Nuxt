<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( { // resolve is after 3 second
          loadedPosts:[
            {
              id: 1,
              title: 'My awesome Post ',
              previewText: 'Super amazing, thanks for that',
              thumbnail:"https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
              }
          ]
      })
    }, 3000)
    })
    .then(data => {
      console.log(data)
      return data
      })  // open value bok from promise
    .catch(e => console.log(new Error(e)))
  }
}
</script>
<style>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
