<template>
  <div class="">
    <div class="img-aera text-center mt-3">
      <img class="img w-100" :src="article.img" style="height: 70vmin" alt="" />
    </div>
    <div class="title py-1">
      <h4 class="text-uppercase mb-1">{{ article.tag }}</h4>
      <h2>{{ article.title }}</h2>
    </div>

    <div class="post-aera m:px-3 ccg m:ccg-3 ccg-1">
      <div class="content mt-5 h4 ccg:2-4">
        <img class="img w-100" src="" alt="" />
        <div class="">
          <nuxt-content :document="article" />
          <!-- <pre> {{ article }} </pre> -->
        </div>
      </div>
      <!-- 123 -->
      <prev-next :prev="prev" :next="next" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
};
</script>
<style>
br {
  margin: 5vh 0;
}
.post-aera img {
  width: 100%;
  border-radius: 20px;
  margin: calc((10px + 1vw)/2) 0 !important;
}
.post-aera * {
  line-height: 100%;
}
.post-aera a {
  color: var(--base-color);
  /* text-decoration: none; */
}
.post-aera p {
  margin: calc(10px + 1vw) 0;
}
</style>