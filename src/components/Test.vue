<template>
  <div>
    <!-- 日本語入力中のEnterでもイベントが発火してしまう -->
    <input @keyup.enter="trigger" placeholder="keyup.enter" />
    <!-- 日本語入力中のEnterではイベント発火しない -->
    <v-btn @keydown.enter="trigger" placeholder="keydown.enter">aa</v-btn>
  </div>
</template>
<script>
export default {
  methods: {
    trigger: event => {
      // 日本語入力中のEnterキー操作は無効にする
      if (event.keyCode !== 13) return;

      // 実行したい処理
      // eslint-disable-next-line no-console
      console.log("aaaaa");
    }
  }
};
</script>
<style>
</style>