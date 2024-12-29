<script setup>
import TheTableOfContents from '@/components/TheTableOfContents.vue'
import PageTitle from '@/components/PageTitle.vue'
</script>

<template>
  <main class="page">
    <PageTitle>About peferb/fun-utils</PageTitle>
    <p>
      This is a Vue/"Github Pages" implementation of
      <a href="https://github.com/peferb/fun-utils">github.com/peferb/fun-utils</a>.
    </p>
    <p>
      If you are only here for the code, I would suggest taking a look at
      <a href="https://github.com/peferb/utils">github.com/peferb/utils</a> instead, which is mostly
      the same functionality but implemented only using vanilla JS and HTML. Without the Vue clutter.
    </p>

    <TheTableOfContents />
  </main>
</template>
