<template >
  <header class="text-center">
    <img v-if="page.primaryImageOfPage" :src="page.primaryImageOfPage.url" :alt="page.primaryImageOfPage.caption">
  </header>
</template>

<script setup>
const page = useState('page')
</script>
