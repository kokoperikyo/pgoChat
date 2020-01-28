<template>
  <v-card max-width="1000" class="mx-auto">
    <div v-if="isEdit">
      <v-img :src="displayDamyHeaderImg" :aspect-ratio="4"></v-img>
      <v-file-input
        accept="image/*"
        show-size
        label="ヘッダー画像ファイルをアップロードしてください"
        prepend-icon="mdi-image"
        @change="desplayImg"
      ></v-file-input>
    </div>
    <v-img v-else :src="displayHeaderImg" :aspect-ratio="4"></v-img>
    <v-list-item>
      <v-list-item-avatar size="80">
        <div v-if="isEdit">
          <v-img :src="displayDemoAvatar"></v-img>
          <v-file-input
            accept="image/*"
            show-size
            label="アイコン画像ファイルをアップロードしてください"
            prepend-icon="mdi-image"
            @change="desplayAvatar"
          ></v-file-input>
        </div>
        <v-img v-else :src="displayAvatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content v-if="isEdit">
        <v-list-item-title class="headline">
          <v-text-field placeholder="ポケGOのユーザー名を入力してください" v-model="displayUserName" :rules="rules"></v-text-field>
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-content v-else>
        <v-list-item-title class="headline">{{displayUserName}}</v-list-item-title>
      </v-list-item-content>
      <v-spacer></v-spacer>
      <v-btn v-if="isEdit" @click="save">保存</v-btn>
      <v-btn v-else @click="edit">編集</v-btn>
    </v-list-item>

    <v-card-text v-if="isEdit">
      <v-textarea
        v-model="displaySelfIntroduction"
        clearable
        clear-icon="cancel"
        label="Text"
        value="This is clearable text."
      ></v-textarea>
    </v-card-text>

    <v-card-text v-else style="white-space:pre-wrap; ">{{displaySelfIntroduction}}</v-card-text>

    <v-card-actions>
      <v-row>
        <v-col align="center">
          <v-btn text color="deep-purple accent-4" @click="status = 1">対戦情報</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-btn text color="deep-purple accent-4" @click="status = 2">対戦成績</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-btn text color="deep-purple accent-4" @click="status = 3">あああ</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-text>
      <span v-if="status === 1">対戦情報</span>
      <span v-if="status === 2">
        対戦成績
        <v-list v-for="item in items" v-bind:key="item">{{item}}</v-list>
      </span>
      <span v-if="status === 3">あああ</span>
    </v-card-text>
  </v-card>
</template>
<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";

export default {
  data() {
    return {
      status: 1,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11],
      rules: [
        value => !!value || "必須",
        value =>
          value.match(/[0-9A-Za-z]/g) ||
          "ポケモンGOのニックネームを入力してください"
      ],
      isEdit: false,
      displayUserName: null,
      editUserName: null,
      displaySelfIntroduction: null,
      headerFile: null,
      avatarFile: null,
      displayHeaderImg: "",
      displayDamyHeaderImg: "",
      displayAvatar: "",
      displayDemoAvatar: ""
    };
  },
  mounted() {
    //2秒くらい待たないとstoreが空になってしまう
    //と思ったがそんなこともないかも
    // setTimeout(() => {
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .get()
      .then(doc => {
        this.user = doc.data();

        //登録後初回ログインはドキュメントを作成する
        if (doc.data() == undefined) {
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .set({
              id: this.$store.getters.user.uid
            });
        } else {
          // ニックネームが半角英数字以外ならばから文字を入れる
          if (!doc.data().name.match(/[0-9A-Za-z]/g)) {
            this.displayUserName = "";
          } else {
            this.displayUserName = doc.data().name;
          }
          this.displaySelfIntroduction = doc.data().selfIntroduction;
          this.displayHeaderImg = doc.data().imageHeaderUrl;
          this.displayAvatar = doc.data().avatarUrl;

          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .update({
              lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
            });
        }
      });
    // }, 3000);
  },
  methods: {
    edit() {
      this.isEdit = true;
    },
    save() {
      const doc = db.collection("users").doc(this.$store.getters.user.uid);
      doc.update({
        name: this.displayUserName,
        selfIntroduction: this.displaySelfIntroduction
      });
      const storageRef = firebase.storage().ref();
      if (this.headerFile) {
        const imageRef = storageRef.child(
          `headerImg/${this.$store.getters.user.uid}`
        );
        imageRef.delete();
        imageRef.put(this.headerFile).then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            this.displayHeaderImg = downloadURL;
            db.collection("users")
              .doc(this.$store.getters.user.uid)
              .update({
                imageHeaderUrl: downloadURL
              });
          });
        });
      }
      if (this.avatarFile) {
        const imageRef = storageRef.child(
          `avatarImg/${this.$store.getters.user.uid}`
        );
        imageRef.delete();
        imageRef.put(this.avatarFile).then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            this.displayAvatar = downloadURL;
            db.collection("users")
              .doc(this.$store.getters.user.uid)
              .update({
                avatarUrl: downloadURL
              });
          });
        });
      }
      this.isEdit = false;
    },
    //編集中にアップした画像を一時的に表示
    desplayImg(file) {
      var blobUrl = window.URL.createObjectURL(file);

      this.displayDamyHeaderImg = blobUrl;
      this.headerFile = file;
    },
    desplayAvatar(file) {
      var blobUrl = window.URL.createObjectURL(file);

      this.displayDemoAvatar = blobUrl;
      this.avatarFile = file;
    }
  }
};
</script>