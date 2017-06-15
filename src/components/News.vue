<template>
    <div class="news">
        <Tabs></Tabs>
        <router-view></router-view>
        <LoadMore></LoadMore>
    </div>
</template>
<script>
import Tabs from './Tabs.vue'
import LoadMore from './LoadMore.vue'

export default {
    components: {
        Tabs,LoadMore
    },
    mounted() {
      this.$store.state.showHeader = true;
    }
}
</script>
<style>
    .news {
        padding-top: 8em;
        padding-bottom: 8em;
        z-index: 1;
    }
</style>
