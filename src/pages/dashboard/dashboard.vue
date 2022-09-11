<script setup lang="ts">
const phone = ref({
  mobile: '',
  sms: '',
})
</script>

<template>
  <view style="padding: 20px;">
    <u-input border="bottom" placeholder="请输入用户名">
      <template #prefix>
        <u--text type="info" size="18" text="用户名" />
      </template>
    </u-input>
    <u-input border="bottom" placeholder="请输入验证码">
      <template #prefix>
        <u--text type="info" size="18" text="验证码" />
      </template>
      <template #suffix>
        <u-code
          ref="uCode"
          seconds="20"
          change-text="X秒重新获取哈哈哈"
          @change="codeChange"
        />
        <u-button
          text="获取验证码"
          type="success"
          @tap="getCode"
        />
      </template>
    </u-input>
  </view>
</template>
