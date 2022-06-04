<template>
  <HeaderComponent/>
  <router-view/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'

export default {
  components: { HeaderComponent }
}
</script>

<style>
@import "style.css";
</style>

