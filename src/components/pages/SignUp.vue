<template>
  <v-app>
    <v-content>
      <v-container>
        <v-dialog v-model="eulaDialog" max-width="480">
          <v-card class="p-3">
            <h2>利用規約</h2>
            <p>この利用規約（以下，「本規約」といいます。）は，このウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
            <h4 class="pt-3">第1条（適用）</h4>
            <ol>
              <li>本規約は，ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。</li>
            </ol>
            <h4 class="pt-3">第2条（利用登録）</h4>
            <ol>
              <li>本サービスにおいては，登録希望者が本規約に同意の上，利用登録が完了するものとします。</li>
            </ol>
            <h4 class="pt-3">第3条（ユーザーIDおよびパスワードの管理）</h4>
            <ol>
              <li>ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします</li>
              <li>ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。本サービスは，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
              <li>ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，本サービスは一切の責任を負わないものとします。</li>
            </ol>
            <h4 class="pt-3">第4条（禁止事項）</h4>
            <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
            <ol>
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本サービスの他のユーザー，または第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正アクセスをし，またはこれを試みる行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>本サービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>本サービスの他のユーザーまたは第三者の知的財産権，肖像権，プライバシー，名誉その他の権利または利益を侵害する行為</li>
              <li>以下の表現を含み，または含むと判断される内容を本サービス上に投稿し，または送信する行為</li>
              <ol>
                <li>過度に暴力的な表現</li>
                <li>露骨な性的表現</li>
                <li>人種，国籍，信条，性別，社会的身分，門地等による差別につながる表現</li>
                <li>自殺，自傷行為，薬物乱用を誘引または助長する表現</li>
                <li>その他反社会的な内容を含み他人に不快感を与える表現</li>
              </ol>
              <li>以下を目的とし，または目的とすると当社が判断する行為</li>
              <ol>
                <li>性行為やわいせつな行為を目的とする行為</li>
                <li>面識のない異性との出会いや交際を目的とする行為</li>
                <li>他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為</li>
                <li>本サービスの他のユーザー，または第三者に不利益，損害または不快感を与えることを目的とする行為</li>
                <li>その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為</li>
              </ol>
              <li>宗教活動または宗教団体への勧誘行為</li>
              <li>その他，当社が不適切と判断する行為</li>
            </ol>
            <h4 class="pt-3">第5条（本サービスの提供の停止等）</h4>
            <li>当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</li>
            <ol>
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他，当社が本サービスの提供が困難と判断した場合</li>
            </ol>
            <li>本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。</li>
            <h4 class="pt-3">第6条（利用制限および登録抹消）</h4>
            <li>ユーザーが以下のいずれかに該当する場合には，事前の通知なく，投稿データを削除し，ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。</li>
            <ol>
              <li>本規約のいずれかの条項に違反した場合</li>
              <li>その他，本サービスの利用を適当でないと判断した場合</li>
            </ol>
            <li>本条に基づきが行った行為によりユーザーに生じた損害について，一切の責任を負いません。</li>

            <h4 class="pt-3">第7条（退会）</h4>
            <p>ユーザーは，サービス内の退会手続により，本サービスから退会できるものとします。</p>
            <h4 class="pt-3">第8条（サービス内容の変更等）</h4>
            <p>ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。</p>
            <h4 class="pt-3">第9条（利用規約の変更）</h4>
            <p>必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。</p>
            <h4 class="pt-3">第10条（個人情報の取扱い）</h4>
            <p>本サービスの利用によって取得する個人情報については，「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
            <v-btn color="#004D40" rounded depressed outlined @click="eulaDialog = false">閉じる</v-btn>
          </v-card>
        </v-dialog>
        <v-dialog v-model="alertDialog" max-width="290">
          <v-card>
            <v-card-title>既に使用されているメールアドレスです</v-card-title>
          </v-card>
        </v-dialog>
        <v-card color="#FCE4EC" class="mx-auto" max-width="400px">
          <v-list-item>
            <v-spacer></v-spacer>
            <div class="mt-3">
              <!-- <v-btn fab class="mr-2" color="error">
                <v-icon large color="white" class="fab fa-google-plus-square" @click="signUpGoogle"></v-icon>
              </v-btn>-->
              <v-btn fab color="primary" depressed>
                <v-icon large color="white" class="fab fa-twitter-square" @click="signUpTwitter"></v-icon>
              </v-btn>
            </div>
            <v-spacer></v-spacer>
          </v-list-item>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                prepend-inner-icon="mail"
                placeholder="メールアドレス"
                solo
                required
                color="#8ac32b"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                background-color="white"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                prepend-inner-icon="lock"
                placeholder="パスワード"
                solo
                required
                color="#8ac32b"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                background-color="white"
                clearable
              ></v-text-field>
            </v-form>
            <v-card-actions>
              <v-checkbox v-model="eula"></v-checkbox>
              <v-btn @click="eulaDialog = true" class="mb-1" color="primary" text>利用規約はこちら</v-btn>
              <v-spacer></v-spacer>
              <v-btn dark color="#8ac32b" @click="signUpEmail" :disabled="isError">登録</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, alphaNum, email } from "vuelidate/lib/validators";
import firebase from "@firebase/app";
import "@firebase/firestore";

export default {
  mixins: [validationMixin],

  validations: {
    password: {
      required,
      maxLength: minLength(6),
      alpha: alphaNum
    },
    email: { required, email }
  },

  data: () => ({
    email: "",
    password: "",
    alertDialog: false,
    eula: false,
    eulaDialog: false
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.alpha &&
        errors.push("アルファベットか数字を入力してください");
      !this.$v.password.maxLength && errors.push("パスワードは6文字以上です");
      !this.$v.password.required && errors.push("パスワードは必須です");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("メールアドレスを入力してください");
      !this.$v.email.required && errors.push("メールアドレスは必須です");
      return errors;
    },
    isError() {
      if (
        this.passwordErrors.length == 0 &&
        this.emailErrors.length == 0 &&
        this.eula
      ) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    signUpEmail() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
          this.alertDialog = true;
        });
    },
    signUpGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithRedirect(provider)
        .catch(error => alert(error.message));
      this.$router.push("loading");
    },
    signUpTwitter() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithRedirect(provider)
        .catch(error => alert(error.message));
      this.$router.push("loading");
    }
  }
};
</script>