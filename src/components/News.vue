<template>
    <div class="news">
        <Tabs></Tabs>
        <router-view></router-view>
    </div>
</template>
<script>
import Tabs from './Tabs.vue'

export default {
    components: {
        Tabs
    }
}
</script>
