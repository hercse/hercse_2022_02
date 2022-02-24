<template>
  <div class="pages-control  h4 ccg:2-4 my-4">
                <div class="line border-top-1 my-2"></div>
                <div class="control-penal flex pt-8 px-6">
                    <NuxtLink 
                    v-if="prev" :to="{ name: 'post-slug', params: { slug: prev.slug } }"
                    class="prev w-100 relative text-color-base text-decoration-none">
                    PREV <img class="absolute" style="top:-3vmax;left:-4vmax;width:12vmax;" src="https://developers.herc.se/new-profile/assets/BtnPrev.svg" alt="">
                    </NuxtLink>
                    <NuxtLink 
                    v-if="next" :to="{ name: 'post-slug', params: { slug: next.slug } }"
                    class="next w-100 text-right relative text-color-base text-decoration-none">
                    NEXT <img class="absolute" style="top:-1vmax;right:-4vmax;width:15vmax;" src="https://developers.herc.se/new-profile/assets/BtnNext.svg" alt="">
                    </NuxtLink>
                </div>
            </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>