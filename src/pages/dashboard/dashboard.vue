<script setup lang="ts">
const phone = ref('')
const sms = ref('')
</script>

<template>
  <van-cell-group inset class="pa-2">
    <van-field v-model="phone" label="手机号" placeholder="请输入联系电话" />

    <van-field v-model="sms" center clearable label="验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="primary">
          获取验证码
        </van-button>
      </template>
    </van-field>
  </van-cell-group>
</template>
