<template>
    <div class="pagination">
        <button :disabled="pagedata.pageNo == 1" @click="$emit('getPageON', pagedata.pageNo-1)">上一页</button>
        <button v-if="x.start > 1" @click="$emit('getPageON', 1)" :class="{ active: pagedata.pageNo ==1}">1</button>
        <button v-if="x.start > 2">···</button>

        <span v-for="index in x.end" :key="index"><button v-if="index >= x.start" @click="$emit('getPageON', index)"
                :class="{ active: pagedata.pageNo ==index}">{{ index }}</button></span>


        <button v-if="x.end <  sumpage - 1">···</button>
        <button v-if="x.end < sumpage" @click="$emit('getPageON', sumpage)"
            :class="{ active: pagedata.pageNo ==sumpage}">{{
            sumpage }}</button>
        <button :disabled="pagedata.pageNo == sumpage" @click="$emit('getPageON', pagedata.pageNo+1)">下一页</button>

        <button style="margin-left: 30px">共 {{pagedata.total}} 条</button>
    </div>
</template>
  
<script>
export default {
    name: "MyxcmallPagination",
    props: {
        pagedata:{}
    },
    computed: {
        sumpage() {
            return Math.ceil(this.pagedata.total / this.pagedata.pageSize)
        },
        x() {
            const { pageNo, continus } = this.pagedata
            let end = 0,start = 0
            if(continus > this.sumpage) {
                start = 1
                end = this.sumpage
            }else {
                start = pageNo - parseInt(continus / 2)
                end = pageNo + parseInt(continus / 2)
                if(start < 1) {
                    start = 1
                    end = continus
                }
                if (end > this.sumpage) {
                    end = this.sumpage
                    start = this.sumpage - continus + 1
                }
            }
            return { end, start }
        }

    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>

        .pagination {
            text-align: center;
            button {
                margin: 0 5px;
                background-color: #f4f4f5;
                color: #606266;
                outline: none;
                border-radius: 2px;
                padding: 0 4px;
                vertical-align: top;
                display: inline-block;
                font-size: 13px;
                min-width: 35.5px;
                height: 28px;
                line-height: 28px;
                cursor: pointer;
                box-sizing: border-box;
                text-align: center;
                border: 0;
    
                &[disabled] {
                    color: #c0c4cc;
                    cursor: not-allowed;
                }
    
                &.active {
                    cursor: not-allowed;
                    background-color: #409eff;
                    color: #fff;
                }
            }
        }
        .active {
            background-color: skyblue;
        }
</style>