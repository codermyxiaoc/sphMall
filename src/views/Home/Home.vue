<template>
    <div>
        <type-nav :show="true"></type-nav>
        <list-container></list-container>
        <today-recommend></today-recommend>
        <rank></rank>
        <like></like>
        <floor v-for="item in floor" :key="item.id" :flooritem="item"></floor>
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
import { mapState } from 'vuex';
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
        this.$store.dispatch('reqGetFoorLisr')
        try {
            this.$store.dispatch('getuserinfo')
        } catch (error) {
            alert(error.message)
        }
    },

    methods: {
        
    },

    computed: {
        ...mapState({ floor: state => state.home.floorList })
    },

};
</script>

<style lang="scss" scoped>

</style>