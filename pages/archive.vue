<template>
  <div>
<div class="title ccg ccg-1 m:ccg-10 text-uppercase mb-5">
            <h1 class="mt-3">archive<img src="https://developers.herc.se/new-profile/assets/Waa.svg" class="Waa ml-1" alt="" data-scroll data-scroll-speed="-0.5"> <br> @2021</h1>
            <img src="https://developers.herc.se/new-profile/assets/LovelyFace.svg" alt="" class="LovelyFace_works m:mb-0" data-scroll data-scroll-speed="1.4" data-scroll-delay="0.5">
</div>
        <div class="line border-top-1 my-2"></div>
        <div class="feather">
            <div class="blocks ccg m:ccg-3 ccg-1" style="--margin: calc(5px + .2vw);--grid-gap-x: calc(10px + 1vw);--grid-gap-y: calc(10px + 1vw);">
                <NuxtLink
                v-for="article of articles" :key="article.slug"
                :to="{ name: 'post-slug', params: { slug: article.slug } }"
                class="block text-color-base text-decoration-none mb-5">
                    <img :src="article.img" class="w-100 img" style="height: 40vmax;" alt="">
                    <p class="mt-4 text-uppercase">{{ article.tag }}</p>
                    <h4 class="my-1">{{ article.title }}</h4>
                </NuxtLink>
            </div>
            <!-- <div class="more text-center my-7 relative">
                <h4>
                    <a href="#" class="text-color-base text-decoration-none">+ MORE +</a>
                    <img src="https://developers.herc.se/new-profile/assets/BtnCell.svg" class="BtnCell" alt="" data-scroll data-scroll-speed="0.5" data-scroll-delay="0.05">
                </h4>
            </div> -->
        </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
        const articles = await $content('articles')
          // .only(['title', 'description', 'img', 'slug', 'author'])
          .sortBy('createdAt', 'asc')
          .fetch()

        return {
          articles
        }
      }
}
</script>