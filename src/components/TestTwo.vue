<template>
  <div>
    <div id="file_upload">
      <div class="form-group uploadForm">
        <input type="file" class="form-control" @change="selectFile" />
        <button type="submit" class="btn btn-outline-success" v-on:click="upload">登録</button>
        <div id="errArea">{{ infoMsg }}</div>
      </div>
    </div>
  </div>
</template>
<script>
//このdamyは実際には使用しない、ここで呼んでおかないと
import damy from "@firebase/storage";
import firebase from "@firebase/app";
import "@firebase/firestore";
export default {
  data: () => ({
    uploadFile: null,
    infoMsg: null
  }),
  mounted() {
    // setTimeout(() => {
    // eslint-disable-next-line no-console
    console.log(
      firebase
        .storage()
        .ref()
        .child("tmp/IMG_1724.jpg")
    );
    // eslint-disable-next-line no-console
    console.log(damy.storage().ref());
    // }, 3000);
  },
  methods: {
    selectFile: function(e) {
      e.preventDefault();
      let files = e.target.files;
      this.uploadFile = files[0];
      // eslint-disable-next-line no-console
      console.log(this.uploadFile);
    },
    upload: function() {
      if (!this.uploadFile) {
        this.infoMsg = "選択してください";
        return;
      }
      var storageRef = firebase
        .storage()
        .ref()
        .child("tmp/" + this.uploadFile.name);
      storageRef.put(this.uploadFile).then(function(snapshot) {
        // eslint-disable-next-line no-console
        console.log(snapshot);
      });
    }
  }
  // methods: {
  //   a: function() {
  //     // eslint-disable-next-line no-console
  //     console.log(firebase.storage().ref().bucket);
  //     const storageRef = firebase.storage().ref();
  //     const imageRef = storageRef.child("uid");
  //     imageRef.put("IMG_1724.jpg");
  //   }
  // }
};
</script>