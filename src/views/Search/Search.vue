<template>
    <div>
        <type-nav :isshow="true"></type-nav>
        我是搜索页
    </div>
</template>

<script>
import TypeNav from '@/components/common/TypeNav/TypeNav.vue';
export default {
  components: { TypeNav },
    name: 'SphMallSearch',

    data() {
        return {
            
        };
    },

    mounted() {
        console.log(this.$route.query.value);
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>