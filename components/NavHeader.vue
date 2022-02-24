<template>
    <div class="">
        <div class="menu fixed flex w-100" style="top: 0;left: 0;z-index: 10000; padding: calc(10px + 1vw);mix-blend-mode: difference;">
          <NuxtLink to="/" class="w-100 text-color-on-base text-decoration-none">/-/.SE</NuxtLink>
          <NuxtLink to="/archive" class="w-100 text-center text-color-on-base text-decoration-none">OBJECT</NuxtLink>
          <div class="menu-btn w-100 text-right text-color-on-base text-decoration-none relative" data-menu-control>
              <div class="menu-close-btn" data-menu data-menu-style="opacity: 1;" data-menu-time=".5s">MENU</div>
              <div class="" data-menu data-menu-style="opacity: 0;" data-menu-time=".5s">CLOSE</div>
          </div>
      </div>
      <div class="menu-background pt-3 fixed" data-menu data-menu-delay-out="1s" data-menu-delay-in="0s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-time="1s" data-menu-style="opacity: 0; z-index: -1;" style="--padding: calc(10px + .2vw);">
          <div class="bg-on-base w-100 h-100 menu-bg" data-menu data-menu-delay-out=".2s" data-menu-delay-in="0s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-time="1s" data-menu-style="height: 0!important;"></div>
          <div class="line border-top-1 mt-1" data-menu data-menu-delay=".1s" data-menu-time-out="1s" data-menu-time-in="2s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;"></div>
          <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".6s" data-menu-time-in=".8s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
              <NuxtLink to="/" class="h1 fw-500 text-color-base text-decoration-none w-100">home</NuxtLink>
              <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-in="1s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">HOME <br> SWEET HOME</div>
          </div>
          <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".5s" data-menu-time-in=".8s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
              <NuxtLink to="/about" class="h1 fw-500 text-color-base text-decoration-none w-100">my info</NuxtLink>
              <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-in="1.1s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">WHOS <br> WHERE <br> VALUE </div>
          </div>
          <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".4s" data-menu-time-in=".8s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
              <a href="./index.html" class="h1 fw-500 text-color-base text-decoration-none w-100">get in touch</a>
              <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-in="1.2s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">GITHUB <br> TWITTER <br> TWITCH <br> INSTAGRAM </div>
          </div>
          <div class="menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center" data-menu data-menu-delay=".3s" data-menu-time-in=".8s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-5vmax);opacity: 0;">
              <NuxtLink to="/archive" class="h1 fw-500 text-color-base text-decoration-none w-100">archive</NuxtLink>
              <div class="w-75 m:w-25 mt-2 m:mt-0" data-menu data-menu-delay=".6s" data-menu-time-in="1.3s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateX(-10vmax);opacity: 0;">Koakinaimarche Flower Pattern of Obsolete Uh...WHAT THE? fish pattern bags Motex Mask Design Competition ... </div>
          </div>
          <div class="bottom flex text-uppercase flex-ai-end px-2 mt-5 mb-2" data-menu data-menu-delay=".2s" data-menu-time-in="1.3s" data-menu-time-out=".5s" data-menu-cubic-bezier="cubic-bezier(1,0,.42,.99)" data-menu-style="transform: translateY(-10vmax);opacity: 0;">
              <div class="w-50 m:w-100">© 2022</div>
              <div class="w-100 text-center"><img class="w-100 m:w-50" src="https://developers.herc.se/new-profile/assets/FlatLittleHill.svg" alt=""></div>
              <div class="w-100 text-right">studio in taiwan.</div>
          </div>
      </div>
    </div>
</template>