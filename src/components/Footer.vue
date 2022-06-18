<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <footer class="py-12 w-full bg-[#D9D9D9]">
    <Container>
      <div class="footer-top | flex justify-between">
        <img src="/images/Logo.png" class="h-16">
        
        <!-- Socials -->
        <ul>
          <li>
          </li>
        </ul>
      </div>
      <hr class="footer-separator border-gray-400 my-6">
      <div class="footer-bottom flex justify-between">
        <nav class="footer-menu" >
          <ul class="flex gap-3">
            <li class="footer__menu-item">
              <router-link to="/">
                Discover
              </router-link>
            </li>
            <li class="footer__menu-item">
              <router-link to="/">
                How it Works
              </router-link>
            </li>
            <li class="footer__menu-item">
              <router-link to="/">
                About Us
              </router-link>
            </li>
          </ul>
        </nav>  
        <p class="copyright">
          Made with ❤️  © Kolektiva By PHP Cringe
        </p>
      </div>
    </Container>
  </footer>
</template>
<style>

.footer__menu-item a {
  @apply text-base hover:text-blue-600;
  color: black;
  font-weight: semibold;
}
</style>