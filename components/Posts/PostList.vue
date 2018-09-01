<template>
  <section class="post-list">
      <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
      title="Hello one"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
      title="Hello two"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_thinkstock_664735184-100724414-large.jpg"
      title="Hello there"
      previewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
  </section>
</template>
<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
