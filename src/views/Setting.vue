<template>
    <s-header :name="'账号管理'"></s-header>
    <div class="seting-box">

        <div class="input-item">
            <van-field v-model="nickName" label="昵称" />
            <van-field v-model="introduceSign" label="个性签名" />
            <van-field v-model="password" type='password' label="修改密码" />
        </div>
        <van-button round class="save-btn" color="#1baeae" type="primary" @click="save" block>保存</van-button>
        <van-button round class="save-btn" color="#1baeae" type="primary" @click="handleLogout" block>退出登录</van-button>
    </div>
</template>
<script setup>
import { reactive, onMounted, toRefs } from 'vue'
import sHeader from "../components/SimpleHeader.vue"
import { getUserInfo, logout } from '@/service/user';
import { setLocal } from '@/common/js/utils';
import { Toast } from 'vant';

const state = reactive({
    nickName: '',
    introduceSign: '',
    password: ''
})

let {
    nickName,
    introduceSign,
    password
} = toRefs(state)

onMounted(async () => {
    const { data } = await getUserInfo()
    state.nickName = data.nickName
    state.introduceSign = data.introduceSign
})

// 退出登录
const handleLogout = async () => {
    const { resultCode } = await logout()
    if (resultCode == 200) {
        setLocal('token', '')
        window.location.href = '/home'
    }
}

</script>
<style lang="less" scoped>
.seting-box {
    margin-top: 50px;

    .save-btn {
        width: 80%;
        margin: 20px auto;
    }
}
</style>