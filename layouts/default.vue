<template>
<div>
<NavHeader />
    <div data-scroll-container>
          <Nuxt />
        <footer class="mt-1">
            <div class="line border-top-1 my-2"></div>
            <div class="desc ccg ccg-1 m:ccg-4 p-3" style="--grid-gap-x: 10vw;">
                <div class="m:mb-0 mb-4">
                    <div class="title fw-600 mb-2">
                        The Other Sites
                    </div>
                    <div class="footer-links">
                        <!-- <div class=""><a class="text-color-base text-decoration-none" href="">Swiss Max</a><br><br></div>
                        <div class=""><a class="text-color-base text-decoration-none" href="">Swiss Max</a><br><br></div>
                        <div class=""><a class="text-color-base text-decoration-none" href="">Swiss Max</a><br><br></div> -->
                    </div>
                </div>
                <div class="m:mb-0 mb-4">
                    <div class="title fw-600 mb-2">
                        Address
                    </div>
                    <div class="">No. 1, Nantai Street, Yongkang District, Tainan City 71005</div>
                </div>
                <div class="m:mb-0 mb-4">
                    <!-- none -->
                </div>
                <div class="mb-2">Hi @herc.se
                    <br><br> hercsart @github.com
                    <br><br> HERC_SE @Twitter.com
                    <br><br> Herculins @Twitch.com
                    <br><br> HERC.SE @Instagram.com</div>
            </div>
            <div class="bottom flex text-uppercase flex-ai-end">
                <div class="w-50 m:w-100">© 2022</div>
                <div class="w-100 text-center"><img class="w-100 m:w-50" src="https://developers.herc.se/new-profile/assets/FlatLittleHill.svg" alt=""></div>
                <div class="w-100 text-right">studio in taiwan.</div>
            </div>
        </footer>
    </div>
</div>
</template>


<script>
export default {
  transition: {
    afterLeave(el) {
      console.log('afterLeave', el)
    }
  }
}
</script>