<template>
    <div>
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p v-if="!username">
                            <span>请</span>
                            <a @click="loginclick" href="javascript:;">登录</a>
                            <a @click="registerclick" href="javascript:;" class="register">免费注册</a>
                        </p>
                        <p v-else>
                            <a>{{ username }}</a>
                            <a class="register" @click="exitlogin">退出登入</a>
                        </p>
                    </div>
                    <div class="typeList">
                        <router-link to="/Center/myorder">我的订单</router-link>
                        <router-link to="/ShopCart">我的购物车</router-link>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <a class="logo" title="尚品汇" href="###" target="_blank">
                        <img src="./images/logo.png" alt="">
                    </a>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="searchvalue" />
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="searchclick">搜索</button>
                    </form>
                </div>
            </div>
        </header>
    </div>
</template>

<script>

export default {
    name: 'MyxcmallHeader',

    data() {
        return {
            searchvalue:'' 
        };
    },

    mounted() {
        this.$bus.$on('clear',() => {
            this.searchvalue = ''
        })
    },

    methods: {
        loginclick() {
            this.$router.push('/login')
        },
        registerclick() {
            this.$router.push('/register')
        },
        searchclick() {
            if (this.$route.query) {
                let location = {
                    name: 'search',
                    params: { keyword: this.searchvalue || undefined },
                };
                location.query = this.$route.query;
                this.$router.push(location);
            }
           /*  this.$router.push({ 
                name: 'search',
                params: { key: this.searchvalue }
            }) */
        },
        async exitlogin() {
            try {
                await this.$store.dispatch('getexitlogin')
                localStorage.removeItem('token')
                this.$router.push('/home')
            } catch (error) {
                alert(error.message)
            }
        }
    },
    computed: {
        username() {
            return this.$store.state.user.userinfo.name
        }
    }
};
</script>

<style lang="less" scoped>

.header {
    &>.top {
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;

        .container {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .loginList {
                float: left;

                p {
                    float: left;
                    margin-right: 10px;

                    .register {
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                }
            }

            .typeList {
                float: right;

                a {
                    padding: 0 10px;

                    &+a {
                        border-left: 1px solid #b3aeae;
                    }
                }

            }

        }
    }

    &>.bottom {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .logoArea {
            float: left;

            .logo {
                img {
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }

        .searchArea {
            float: right;
            margin-top: 35px;

            .searchForm {
                overflow: hidden;

                input {
                    box-sizing: border-box;
                    width: 490px;
                    height: 32px;
                    padding: 0px 4px;
                    border: 2px solid #ea4a36;
                    float: left;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    height: 32px;
                    width: 68px;
                    background-color: #ea4a36;
                    border: none;
                    color: #fff;
                    float: left;
                    cursor: pointer;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>