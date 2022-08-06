<template>
    <div>
        <type-nav :show="true"></type-nav>
        <list-container></list-container>
        <today-recommend></today-recommend>
        <rank></rank>
        <like></like>
        <floor></floor>
        <floor></floor>
        <brand></brand>
    </div>
</template>

<script>
import TypeNav from 'components/common/TypeNav/TypeNav.vue';
import ListContainer from 'components/common/ListContainer/ListContainer.vue';
import TodayRecommend from './childcomps/TodayRecommend/TodayRecommend.vue';
import Rank from './childcomps/Rank/Rank.vue';
import Like from './childcomps/Like/Like.vue';
import Floor from './childcomps/Floor/Floor.vue';
import Brand from './childcomps/Brand/Brand.vue';

export default {
    name: 'SphMallHome',

    data() {
        return {
            
        };
    },

    components: {
        TypeNav,
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand,


    },

    created() {
       
    },

    mounted() {
    },

    methods: {
        
    },

    computed: {
    }
};
</script>

<style lang="scss" scoped>

</style>