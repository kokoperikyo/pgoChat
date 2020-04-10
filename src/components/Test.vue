<template>
  <div>
    <div id="result"></div>
    <div style="height:100px; background:red;" class="box"></div>
  </div>
</template>

<script>
// import { db } from "@/plugins/firebase";
// import { iosAuthorizationOfNotification } from "@/plugins/firebase";
import "@firebase/firestore";
// import firebase from "@firebase/app";

export default {
  data() {
    return {
      info: null
    };
  },
  methods: {
    setSwipe(elem) {
      var t = document.querySelector(elem);
      var r = document.getElementById("result");
      var startX;
      var moveX;
      var dist = 30;
      t.addEventListener("touchstart", function(e) {
        e.preventDefault();
        startX = e.touches[0].pageX;
      });
      t.addEventListener("touchmove", function(e) {
        e.preventDefault();
        moveX = e.changedTouches[0].pageX;
      });
      t.addEventListener("touchend", function() {
        if (startX > moveX && startX > moveX + dist) {
          r.textContent = "右から左にスワイプ";
        } else if (startX < moveX && startX + dist < moveX) {
          r.textContent = "左から右にスワイプ";
        }
      });
    }
  },
  mounted() {
    this.setSwipe(".box");
  },
  computed: {},
  created() {},
  firestore() {}
};
</script>