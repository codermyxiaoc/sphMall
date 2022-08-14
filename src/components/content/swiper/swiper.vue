<template>
    <div class="swiper-container" id="mySwiper" ref="Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imglist" :key="item.id">
                <img :src="item.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'MyxcmallSwiper',

    data() {
        return {
            
        };
    },
    props: {
        imglist: {
            type: Array,
            default() {
                return []
            }
        }
    },

    mounted() {
        
    },

    methods: {
        
    },
    watch: {
        imglist: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    // eslint-disable-next-line no-unused-vars
                    var mySwiper = new Swiper(
                        this.$refs.Swiper,
                        {
                            loop: true, // 循环模式选项

                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true
                            },

                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        })
                })

            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>