<template>
  <div>
    <v-dialog v-model="completeSavePartyDialog" class="mx-auto" max-width="320">
      <v-card>
        <div style="text-align:center;">保存完了</div>
        <v-row justify="center">
          <v-icon color="#8ac32b" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
        </v-row>
      </v-card>
    </v-dialog>
    <!-- パーティー名の編集 -->
    <v-dialog v-model="editPartyNameDialog" class="mx-auto" max-width="500">
      <v-card class="mx-auto" max-width="500" color="#FCE4EC">
        <v-container>
          <v-row>
            <v-textarea
              rows="1"
              clearable
              clear-icon="cancel"
              v-model="partyName"
              row-height="10"
              class="mx-5"
              color="#8ac32b"
              background-color="white"
            ></v-textarea>
            <v-btn
              @click="updatePartyName"
              class="mr-3 mt-3"
              small
              fab
              depressed
              dark
              color="#8ac32b"
            >
              <v-icon>mdi-autorenew</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- パーティ登録機能 -->
    <v-dialog v-model="partyDialog" max-width="320">
      <v-card max-height="420" color="#FCE4EC">
        <v-card color="#FCE4EC" flat class="pb-2 px-2">
          <!-- 1つ目 -->
          <v-card-subtitle>
            <div style="text-align:center; background:#DE4097; color:white; border-radius:20px;">
              <div v-if="partyName1 == ''">
                パーティ1
                <v-btn dark small icon class="mb-1" @click="editPartyName(1)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
              <div v-else>
                {{partyName1}}
                <v-btn dark small icon class="mb-1" @click="editPartyName(1)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-subtitle>
          <v-autocomplete
            v-model="partyValue1"
            :items="items"
            :disabled="isSixPatry1"
            item-text="name"
            item-value="index"
            prepend-icon="mdi-database-search"
            dense
            clearable
            label="ポケモンを検索"
            color="#8ac32b"
          ></v-autocomplete>
          <v-card class="mx-1 mb-3" height="180px" color="#8ac32b" flat>
            <v-row no-gutters>
              <v-col
                class="mt-5"
                align="center"
                cols="4"
                v-for="(item, index) in partyList1"
                :key="index"
              >
                <v-img class="pokemonImg" width="60" :src="getImg(item)"></v-img>
                <div v-if="isShadow(item)">
                  <v-avatar size="30" class="shadowIcon">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                    ></v-img>
                  </v-avatar>
                  <v-btn small icon fab @click="removeArray1(index)" class="closeBtnSub">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn small icon fab @click="removeArray1(index)" class="closeBtn">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-btn outlined rounded color="#004D40" class="ml-2 mb-3" @click="saveparty1">保存</v-btn>
          <!-- 2つ目 -->
          <v-card-subtitle class="mt-5">
            <div style="text-align:center; background:#DE4097; color:white; border-radius:20px;">
              <div v-if="partyName2 == ''">
                パーティ2
                <v-btn dark small icon class="mb-1" @click="editPartyName(2)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
              <div v-else>
                {{partyName2}}
                <v-btn dark small icon class="mb-1" @click="editPartyName(2)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-subtitle>
          <v-autocomplete
            v-model="partyValue2"
            :items="items"
            :disabled="isSixPatry2"
            item-text="name"
            item-value="index"
            prepend-icon="mdi-database-search"
            dense
            clearable
            label="ポケモンを検索"
            color="#8ac32b"
          ></v-autocomplete>
          <v-card class="mx-1 mb-3" height="180px" color="#8ac32b" flat>
            <v-row no-gutters>
              <v-col
                class="mt-5"
                align="center"
                cols="4"
                v-for="(item, index) in partyList2"
                :key="index"
              >
                <v-img class="pokemonImg" width="60" :src="getImg(item)"></v-img>
                <div v-if="isShadow(item)">
                  <v-avatar size="30" class="shadowIcon">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                    ></v-img>
                  </v-avatar>
                  <v-btn small icon fab @click="removeArray2(index)" class="closeBtnSub">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn small icon fab @click="removeArray2(index)" class="closeBtn">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-btn outlined rounded color="#004D40" class="ml-2 mb-3" @click="saveparty2">保存</v-btn>

          <!-- 3つ目 -->
          <v-card-subtitle class="mt-5">
            <div style="text-align:center; background:#DE4097; color:white; border-radius:20px;">
              <div v-if="partyName3 == ''">
                パーティ3
                <v-btn dark small icon class="mb-1" @click="editPartyName(3)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
              <div v-else>
                {{partyName3}}
                <v-btn dark small icon class="mb-1" @click="editPartyName(3)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-subtitle>
          <v-autocomplete
            v-model="partyValue3"
            :items="items"
            :disabled="isSixPatry3"
            item-text="name"
            item-value="index"
            prepend-icon="mdi-database-search"
            dense
            clearable
            label="ポケモンを検索"
            color="#8ac32b"
          ></v-autocomplete>
          <v-card class="mx-1 mb-3" height="180px" color="#8ac32b" flat>
            <v-row no-gutters>
              <v-col
                class="mt-5"
                align="center"
                cols="4"
                v-for="(item, index) in partyList3"
                :key="index"
              >
                <v-img class="pokemonImg" width="60" :src="getImg(item)"></v-img>
                <div v-if="isShadow(item)">
                  <v-avatar size="30" class="shadowIcon">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                    ></v-img>
                  </v-avatar>
                  <v-btn small icon fab @click="removeArray3(index)" class="closeBtnSub">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn small icon fab @click="removeArray3(index)" class="closeBtn">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-btn outlined rounded color="#004D40" class="ml-2 mb-3" @click="saveparty3">保存</v-btn>

          <!-- 4つ目 -->
          <v-card-subtitle class="mt-5">
            <div style="text-align:center; background:#DE4097; color:white; border-radius:20px;">
              <div v-if="partyName4 == ''">
                パーティ4
                <v-btn dark small icon class="mb-1" @click="editPartyName(4)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
              <div v-else>
                {{partyName4}}
                <v-btn dark small icon class="mb-1" @click="editPartyName(4)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-subtitle>
          <v-autocomplete
            v-model="partyValue4"
            :items="items"
            :disabled="isSixPatry4"
            item-text="name"
            item-value="index"
            prepend-icon="mdi-database-search"
            dense
            clearable
            label="ポケモンを検索"
            color="#8ac32b"
          ></v-autocomplete>
          <v-card class="mx-1 mb-3" height="180px" color="#8ac32b" flat>
            <v-row no-gutters>
              <v-col
                class="mt-5"
                align="center"
                cols="4"
                v-for="(item, index) in partyList4"
                :key="index"
              >
                <v-img class="pokemonImg" width="60" :src="getImg(item)"></v-img>
                <div v-if="isShadow(item)">
                  <v-avatar size="30" class="shadowIcon">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                    ></v-img>
                  </v-avatar>
                  <v-btn small icon fab @click="removeArray4(index)" class="closeBtnSub">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn small icon fab @click="removeArray4(index)" class="closeBtn">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-btn outlined rounded color="#004D40" class="ml-2 mb-3" @click="saveparty4">保存</v-btn>

          <!-- 5つ目 -->
          <v-card-subtitle class="mt-5">
            <div style="text-align:center; background:#DE4097; color:white; border-radius:20px;">
              <div v-if="partyName5 == ''">
                パーティ5
                <v-btn dark small icon class="mb-1" @click="editPartyName(5)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
              <div v-else>
                {{partyName5}}
                <v-btn dark small icon class="mb-1" @click="editPartyName(5)">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-subtitle>
          <v-autocomplete
            v-model="partyValue5"
            :items="items"
            :disabled="isSixPatry5"
            item-text="name"
            item-value="index"
            prepend-icon="mdi-database-search"
            dense
            clearable
            label="ポケモンを検索"
            color="#8ac32b"
          ></v-autocomplete>
          <v-card class="mx-1 mb-3" height="180px" color="#8ac32b" flat>
            <v-row no-gutters>
              <v-col
                class="mt-5"
                align="center"
                cols="4"
                v-for="(item, index) in partyList5"
                :key="index"
              >
                <v-img class="pokemonImg" width="60" :src="getImg(item)"></v-img>
                <div v-if="isShadow(item)">
                  <v-avatar size="30" class="shadowIcon">
                    <v-img
                      src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/icon%2FIMG_5832_2-removebg-preview.png?alt=media&token=047d6779-fa2a-4781-997b-f3b044861011"
                    ></v-img>
                  </v-avatar>
                  <v-btn small icon fab @click="removeArray5(index)" class="closeBtnSub">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
                <div v-else>
                  <v-btn small icon fab @click="removeArray5(index)" class="closeBtn">
                    <v-icon color="black">mdi-close-circle</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-btn outlined rounded color="#004D40" class="ml-2" @click="saveparty5">保存</v-btn>
        </v-card>
      </v-card>
    </v-dialog>
    <v-card tile flat class="mx-auto" color="#E3F2FD">
      <!-- フレンド許可 -->
      <v-dialog v-model="requestAcceptDialog" max-width="290">
        <v-card>
          <v-card-title class="pb-0">フレンドになりますか？</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="#004D40" dark @click="acceptFriendRequest(0)" class="mr-5">なる</v-btn>
            <v-btn rounded color="#004D40" outlined @click="requestAcceptDialog = false">閉じる</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- フレンド申請拒否 -->
      <v-dialog v-model="requestRejectDialog" max-width="290">
        <v-card>
          <v-card-title class="pb-0">お断りしますか？</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="#004D40" dark @click="rejectFriendRequest(1)" class="mr-5">断る</v-btn>
            <v-btn rounded color="#004D40" outlined @click="requestRejectDialog = false">閉じる</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="addNicknameModal" max-width="350">
        <v-card>
          <v-card-title class="headline">
            <div>ニックネームを入力</div>
            <v-text-field
              @keydown.enter="addNicknameByEnter"
              v-model="inputNickname"
              class="mr-5"
              clearable
              clear-icon="cancel"
              color="#8ac32b"
            ></v-text-field>
            <v-btn @click="addNickname()" small dark fab color="#8ac32b" depressed>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-dialog>
      <v-dialog v-model="editNicknameModal" max-width="350">
        <v-card>
          <v-card-title class="headline">
            <div>ニックネームを編集</div>
            <v-text-field
              @keydown.enter="editNicknameByEnter"
              v-model="inputEditNickname"
              class="mr-5"
              clearable
              clear-icon="cancel"
              color="#8ac32b"
            ></v-text-field>
            <v-btn @click="editNickname()" small dark fab color="#8ac32b" depressed>
              <v-icon>mdi-autorenew</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-dialog>
      <v-dialog v-model="acceptFriendRequestModal" max-width="350">
        <v-card>
          <v-card-title class="headline pb-0">フレンドになりました！</v-card-title>
          <v-row justify="center">
            <v-icon color="#8ac32b" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
          </v-row>
        </v-card>
      </v-dialog>
      <v-dialog v-model="rejectFriendRequestModal" max-width="350">
        <v-card>
          <v-card-title class="headline">フレンド申請を拒否しました</v-card-title>
          <v-row justify="center">
            <v-icon color="#FF3D00" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
          </v-row>
        </v-card>
      </v-dialog>
      <v-dialog v-model="sendFriendRequestModal" max-width="350">
        <v-card>
          <v-card-title class="headline">フレンド申請をしました</v-card-title>
          <v-row justify="center">
            <v-icon color="#8ac32b" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
          </v-row>
        </v-card>
      </v-dialog>
      <v-dialog v-model="cancelFriendRequestModal" max-width="400">
        <v-card>
          <v-card-title class="headline">フレンド申請を取り消しました</v-card-title>
          <v-row justify="center">
            <v-icon color="#FF3D00" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
          </v-row>
        </v-card>
      </v-dialog>
      <v-dialog v-model="headerSelectDialog" max-width="400">
        <v-card max-width="400" color="black" class="px-2 pt-2">
          <v-alert style="font-size:11px;" class="mb-1" color="red" type="info">
            申し訳ございません。
            <br />カメラロールからの選択が未実装のため以下からお選びください
          </v-alert>
          <v-row align="center" no-gutters>
            <v-col
              align="center"
              v-for="item in headerSmapleListItems"
              :key="item.index"
              class="my-1"
            >
              <v-img :src="item.img" @click="decideHeaderSample(item.img)"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
      <v-dialog v-model="avatarSelectDialog" max-width="400">
        <v-card max-width="400">
          <v-alert style="font-size:11px;" color="red" type="info">
            申し訳ございません。
            <br />カメラロールからの選択が未実装のため以下からお選びください
          </v-alert>
          <v-row align="center" no-gutters>
            <v-col
              align="center"
              cols="3"
              v-for="item in getPokemonItems"
              :key="item.index"
              style="background:#FCE4EC;"
            >
              <v-list class>
                <v-list-item-avatar>
                  <v-img class="ml-7" :src="item.img" @click="decideAvatar(item.img)"></v-img>
                </v-list-item-avatar>
              </v-list>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
      <!-- こっから本体 -->
      <v-card :height="getChatCardHeifht" flat>
        <div v-if="isEdit" class="headerImg">
          <div v-if="displayDemoHeaderImg">
            <v-img :src="displayDemoHeaderImg" :aspect-ratio="15/5"></v-img>
            <input class="headerInput" type="file" v-on:change="desplayImg" />
            <v-icon class="headerInputCameraIcon" size="40">mdi-camera</v-icon>
          </div>
          <!-- 編集押してすぐの時 -->
          <div v-else>
            <v-img
              v-if="isAndroid"
              :src="displayHeaderImg"
              style="opacity:0.6;"
              :aspect-ratio="15/5"
              class="headerImgAn"
            ></v-img>
            <v-img v-else :src="displayHeaderImg" style="opacity:0.6;" :aspect-ratio="15/5"></v-img>
            <div v-if="isAndroid" class="headerBtnForAn">
              <v-btn icon @click="headerSelectDialog = true">
                <v-icon size="40">mdi-camera</v-icon>
              </v-btn>
            </div>
            <input v-else class="headerInput" type="file" v-on:change="desplayImg" />
            <v-icon v-if="!isAndroid" class="headerInputCameraIcon" size="40">mdi-camera</v-icon>
          </div>
        </div>
        <div v-else>
          <v-row v-if="showHeaderLoader" align="center" justify="center" style="height: 220px;">
            <v-progress-circular indeterminate color="#8ac32b" :size="80" width="10"></v-progress-circular>
          </v-row>
          <div v-else>
            <v-img v-if="isMypage" :src="displayHeaderImg" :aspect-ratio="15/5"></v-img>
            <v-img v-else :src="displayFriendUserInfo.imageHeaderUrl" :aspect-ratio="15/5"></v-img>
          </div>
        </div>
        <v-list-item class="mt-5">
          <v-list-item-avatar class="ml-1 mr-5">
            <div v-if="isEdit" class="avatarImg">
              <v-avatar v-if="displayDemoAvatar" size="60">
                <v-img style="background-color:white;" :src="displayDemoAvatar"></v-img>
                <v-file-input accept="image/*" @change="desplayAvatar" class="avatarInput"></v-file-input>
                <v-icon class="displayCameraIconOnAvatarAfter" size="40">mdi-camera</v-icon>
              </v-avatar>
              <!-- 編集押してすぐの時 -->
              <div v-else>
                <v-avatar size="60">
                  <v-img
                    v-if="isAndroid"
                    class="avatarAn"
                    style="background-color:white; opacity:0.6;"
                    :src="displayAvatar"
                  ></v-img>
                  <v-img v-else style="background-color:white; opacity:0.6;" :src="displayAvatar"></v-img>
                </v-avatar>
                <v-btn
                  icon
                  v-if="isAndroid"
                  class="avatarBtnForAn"
                  @click="avatarSelectDialog = true"
                >
                  <v-icon size="40">mdi-camera</v-icon>
                </v-btn>
                <v-file-input v-else accept="image/*" @change="desplayAvatar" class="avatarInput"></v-file-input>
                <v-icon v-if="!isAndroid" class="displayCameraIconOnAvatar" size="40">mdi-camera</v-icon>
              </div>
            </div>
            <div v-else>
              <div v-if="showAvatarLoader">
                <v-progress-circular indeterminate color="#8ac32b" :size="40"></v-progress-circular>
              </div>
              <div v-else>
                <v-avatar size="60">
                  <v-img v-if="isMypage" :src="displayAvatar"></v-img>
                  <v-img v-else :src="displayFriendUserInfo.avatarUrl"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-list-item-avatar>
          <!-- 編集中 -->
          <v-list-item-content v-if="isEdit">
            <v-list-item-title class="headline">
              <v-text-field
                @keydown.enter="saveByEnter"
                placeholder="ポケGOのユーザー名を入力してください"
                v-model="displayUserName"
                :rules="rules"
                color="#8ac32b"
              ></v-text-field>
            </v-list-item-title>
          </v-list-item-content>
          <!-- 編集中ではない -->
          <v-list-item-content v-else>
            <div v-if="isMypage">
              <v-list-item-title v-if="$vuetify.breakpoint.smAndDown" v-text="displayUserName"></v-list-item-title>
              <v-list-item-title v-else style="font-size:24px;" v-text="displayUserName"></v-list-item-title>
            </div>
            <div v-else-if="isFriend">
              <v-list-item-title>
                {{displayFriendUserInfo.name}}
                <v-btn
                  v-if="!getNickname(displayFriendUserInfo.nicknameList)"
                  @click="addNicknameModalDis(displayFriendUserInfo.id)"
                  x-small
                  fab
                  depressed
                  dark
                  color="#8ac32b"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-title>
              <v-list-item-subtitle v-if="getNickname(displayFriendUserInfo.nicknameList)">
                {{getNickname(displayFriendUserInfo.nicknameList)}}
                <v-btn
                  @click="editNicknameModalDis(displayFriendUserInfo.id,getNickname(displayFriendUserInfo.nicknameList))"
                  x-small
                  fab
                  depressed
                  dark
                  color="#8ac32b"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-list-item-subtitle>
            </div>
            <div v-else>
              <v-list-item-title
                v-if="$vuetify.breakpoint.smAndDown"
                v-text="displayFriendUserInfo.name"
                style="font-size:20px;"
              ></v-list-item-title>
              <v-list-item-title v-else style="font-size:24px;" v-text="displayFriendUserInfo.name"></v-list-item-title>
            </div>
          </v-list-item-content>
          <!-- 相手ユーザーとのステータスの表示 -->
          <div v-if="!isMypage" class="mr-2 friendStatus">
            <div v-if="isFriend">友達</div>
            <div v-else-if="isRequest">申請が来ています</div>
            <div v-else-if="isSendRequest">申請中</div>
          </div>
          <div v-if="isMypage">
            <v-btn v-if="isEdit" @click="save" small fab dark color="#8ac32b" depressed>
              <v-icon>mdi-content-save-edit</v-icon>
            </v-btn>
            <v-btn v-else @click="edit" small fab dark color="#8ac32b" depressed>
              <v-icon>mdi-account-edit</v-icon>
            </v-btn>
          </div>
          <div v-else>
            <v-btn v-if="isFriend" @click="goChat()" depressed dark fab small color="#8ac32b">
              <v-icon>mdi-chat-processing</v-icon>
            </v-btn>
            <div v-else-if="isRequest">
              <v-btn
                class="mr-1"
                @click="requestAcceptDialog = true"
                depressed
                fab
                dark
                small
                color="#8ac32b"
              >
                <v-icon>mdi-handshake</v-icon>
              </v-btn>
              <v-btn @click="requestRejectDialog = true" depressed dark fab small color="#004D40">
                <v-icon>mdi-account-cancel</v-icon>
              </v-btn>
            </div>
            <v-btn
              v-else-if="isSendRequest"
              @click="cancelFriendRequest()"
              fab
              small
              color="#004D40"
              dark
              depressed
            >
              <v-icon>mdi-account-cancel</v-icon>
            </v-btn>
            <v-tooltip v-else left>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  @click="sendFriendRequest()"
                  fab
                  small
                  color="#004D40"
                  dark
                  depressed
                >
                  <v-icon>mdi-account-multiple-plus</v-icon>
                </v-btn>
              </template>
              <span>フレンド申請</span>
            </v-tooltip>
          </div>
        </v-list-item>
        <v-card-text v-if="isEdit">
          <v-textarea
            v-model="displaySelfIntroduction"
            clearable
            clear-icon="cancel"
            label="Text"
            value="This is clearable text."
            color="#8ac32b"
          ></v-textarea>
        </v-card-text>
        <div v-else class="mt-5">
          <!-- <v-btn @click="test"></v-btn> -->
          <v-card-text v-if="isMypage" style="white-space:pre-wrap; ">{{displaySelfIntroduction}}</v-card-text>
          <v-card-text
            v-else
            style="white-space:pre-wrap; "
          >{{displayFriendUserInfo.selfIntroduction}}</v-card-text>
        </div>
        <v-divider></v-divider>
        <v-row v-if="isMypage">
          <v-col cols="3" align="center">
            <v-btn text x-small @click="functionSt = 1">レートグラフ</v-btn>
          </v-col>
          <v-col cols="3" align="center">
            <v-btn text x-small @click="functionSt = 2">パーティ登録</v-btn>
          </v-col>
          <v-col cols="3" align="center">
            <!-- <v-btn text x-small @click="functionSt = 3">パーティ登録</v-btn> -->
          </v-col>
          <v-col cols="3" align="center">
            <!-- <v-btn text x-small @click="functionSt = 4">パーティ登録</v-btn> -->
          </v-col>
        </v-row>
        <v-card flat v-if="isMypage">
          <div v-if="functionSt == 1">グラフ</div>
          <div v-if="functionSt == 2" style="text-align:center;">
            <div style="font-size:12px; ">6-3対戦でよく使うパーティを登録しておくことができます</div>
            <v-btn
              dark
              color="#8ac32b"
              rounded
              depressed
              class="mt-3"
              @click="partyDialog = true"
            >パーティ登録</v-btn>
          </div>
        </v-card>
      </v-card>
    </v-card>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import { authorizationOfNotification } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
import "firebase/storage";
import { headerSmapleList } from "@/js/headerSmapleList";
import { pokemonList, shadowList } from "@/js/pokemonList";

export default {
  data() {
    return {
      items: pokemonList,
      rules: [
        value => !!value || "必須",
        value =>
          value.match(/[0-9A-Za-z]/g) ||
          "ポケモンGOのニックネームを入力してください"
      ],
      param: this.$route.params["uid"],
      isEdit: false,
      displayUserName: null,
      displaySelfIntroduction: null,
      headerFile: null,
      showHeaderLoader: false,
      avatarFile: null,
      showAvatarLoader: false,
      displayHeaderImg: "",
      displayDemoHeaderImg: "",
      displayAvatar: "",
      displayDemoAvatar: "",
      displayFriendUserInfo: null,
      friendIdList: [],
      sendFriendRequestNameList: [],
      acceptFriendRequestModal: false,
      rejectFriendRequestModal: false,
      cancelFriendRequestModal: false,
      sendFriendRequestModal: false,
      addNicknameModal: false,
      editNicknameModal: false,
      friendId: null,
      beforeNickname: null,
      inputEditNickname: null,
      requestAcceptDialog: false,
      requestRejectDialog: false,
      screenHeight: 0,
      avatarSelectDialog: false,
      headerSelectDialog: false,
      pokemonItems: pokemonList,
      headerSmapleListItems: headerSmapleList,
      avatarUlrForan: null,
      functionSt: 1,
      partyValue: null,
      partyValue1: null,
      partyValue2: null,
      partyValue3: null,
      partyValue4: null,
      partyValue5: null,
      partyList: [],
      partyList1: [],
      partyList2: [],
      partyList3: [],
      partyList4: [],
      partyList5: [],
      partyName1: null,
      partyName2: null,
      partyName3: null,
      partyName4: null,
      partyName5: null,
      reportDialog: false,
      partyDialog: false,
      partyListDb: null,
      completeSavePartyDialog: false,
      editPartyNameDialog: false,
      partyName: null,
      partyNumber: null
    };
  },
  mounted() {
    this.screenHeight = window.parent.screen.height;

    setTimeout(() => {
      for (let index = 1; index <= 5; index++) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("partyList")
          .doc(`partyList${index}`)
          .get()
          .then(doc => {
            if (index == 1) {
              this.partyList1 = doc.data().partyList;
              this.partyName1 = doc.data().partyName;
            } else if (index == 2) {
              this.partyList2 = doc.data().partyList;
              this.partyName2 = doc.data().partyName;
            } else if (index == 3) {
              this.partyList3 = doc.data().partyList;
              this.partyName3 = doc.data().partyName;
            } else if (index == 4) {
              this.partyList4 = doc.data().partyList;
              this.partyName4 = doc.data().partyName;
            } else if (index == 5) {
              this.partyList5 = doc.data().partyList;
              this.partyName5 = doc.data().partyName;
            }
          });
      }
    }, 4000);
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    //2秒くらい待たないとstoreが空になってしまう
    //と思ったがそんなこともないかも
    // ここのユーザーデータ取得はfirestore()に移したいが、フレンドプロフィールを表示するために"this.$route.params["uid"]"を呼んでいてユーザーのプロフィールの際にはfirestore()を呼べない
    // setTimeout(() => {
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .get()
      .then(doc => {
        this.user = doc.data();
        //登録後初回ログインはドキュメントを作成する
        if (doc.data() == undefined) {
          setTimeout(() => {
            //スマホログインの場合はid渡してtopicに登録
            var ua = navigator.userAgent;
            if (ua.indexOf("Android") > 0) {
              window.appJsInterface.subscribeUid(this.$store.getters.user.uid);
            } else if (window.innerWidth <= 1024) {
              window.webkit.messageHandlers.callbackHandler.postMessage(
                this.$store.getters.user.uid
              );
            }
          }, 3000);
          //chatの6-3のために必要
          //初期アバターのセット
          this.displayAvatar =
            "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/sampleAvatarImg%2Favatar-default-icon.png?alt=media&token=ba07e33a-c66a-4194-8aa2-c0ef3fe32dd0";
          this.displayHeaderImg =
            "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/headerSelectImg%2F%E3%83%95%E3%82%A7%E3%82%A2%E3%83%AA%E3%83%BC.jpg?alt=media&token=f0bc27d2-e8c5-44ac-b480-9c7439f83eae";
          this.displaySelfIntroduction = "はじめまして";
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .set({
              id: this.$store.getters.user.uid,
              lastLogin: firebase.firestore.Timestamp.fromDate(new Date()),
              selfIntroduction: "はじめまして",
              //リスト系は入れておかないとフレンド検索でエラー吐いちゃう
              friends: [],
              sendFriendRequestNameList: [],
              sendFriendRequestList: [],
              friendRequestList: [],
              friendIdList: [],
              nicknameList: [],
              blockList: [],
              blockListDis: [],
              myTimeLimitChat: "none",
              canLoginTimeLimitChat: false,
              //初期アバターのDB登録
              avatarUrl:
                "https://firebasestorage.googleapis.com/v0/b/devpgochat-e5d09.appspot.com/o/sampleAvatarImg%2Favatar-default-icon.png?alt=media&token=ba07e33a-c66a-4194-8aa2-c0ef3fe32dd0",
              imageHeaderUrl:
                "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/headerSelectImg%2F%E3%83%95%E3%82%A7%E3%82%A2%E3%83%AA%E3%83%BC.jpg?alt=media&token=f0bc27d2-e8c5-44ac-b480-9c7439f83eae"
            });
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("partyList")
            .doc("partyList1")
            .set({ partyList: [], partyName: "" });
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("partyList")
            .doc("partyList2")
            .set({ partyList: [], partyName: "" });
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("partyList")
            .doc("partyList3")
            .set({ partyList: [], partyName: "" });
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("partyList")
            .doc("partyList4")
            .set({ partyList: [], partyName: "" });
          db.collection("users")
            .doc(this.$store.getters.user.uid)
            .collection("partyList")
            .doc("partyList5")
            .set({ partyList: [], partyName: "" });
        } else {
          // ニックネームが半角英数字以外ならばから文字を入れる
          if (!doc.data().name.match(/[0-9A-Za-z]/g)) {
            this.displayUserName = "";
          } else {
            this.displayUserName = doc.data().name;
          }
          this.displaySelfIntroduction = doc.data().selfIntroduction;
          this.disId = doc.data().id;
          this.displayHeaderImg = doc.data().imageHeaderUrl;
          this.displayAvatar = doc.data().avatarUrl;
          this.friendIdList = doc.data().friendIdList;
          this.sendFriendRequestNameList = doc.data().sendFriendRequestNameList;
        }
      });
    // }, 3000);
  },
  methods: {
    sendAcceptFriendRequestNotification() {
      let argObj = {
        // 受信者のトークンIDと通知内容
        to: `/topics/${this.displayFriendUserInfo.id}`,
        priority: "high",
        content_available: true,
        notification: {
          title: `${this.displayUserName}とフレンドになりました`,
          badge: "1",
          sound: "default"
        }
      };
      let optionObj = {
        //送信者のサーバーキー
        headers: {
          "Content-Type": "application/json",
          Authorization: "key=" + `${authorizationOfNotification}`
        }
      };
      this.axios.post("https://fcm.googleapis.com/fcm/send", argObj, optionObj);
    },
    sendSendFriendRequestNotification() {
      let argObj = {
        // 受信者のトークンIDと通知内容
        to: `/topics/${this.displayFriendUserInfo.id}`,
        priority: "high",
        content_available: true,
        notification: {
          title: `${this.displayUserName}からフレンド申請がきています`,
          badge: "1",
          sound: "default"
        }
      };
      let optionObj = {
        //送信者のサーバーキー
        headers: {
          "Content-Type": "application/json",
          Authorization: "key=" + `${authorizationOfNotification}`
        }
      };
      this.axios.post("https://fcm.googleapis.com/fcm/send", argObj, optionObj);
    },
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
        this.showHeaderLoader = true;
        setTimeout(() => {
          this.showHeaderLoader = false;
        }, 10000);
        this.displayHeaderImg = "";
        this.headerFile = "";
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
        this.showAvatarLoader = true;
        setTimeout(() => {
          this.showAvatarLoader = false;
        }, 7000);
        this.displayAvatar = "";
        this.avatarFile = "";
      }
      if (this.headerUlrForan) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .update({
            imageHeaderUrl: this.headerUlrForan
          });
        this.showHeaderLoader = true;
        setTimeout(() => {
          this.showHeaderLoader = false;
        }, 10000);
        this.displayHeaderImg = "";
        this.headerUlrForan = "";
      }
      if (this.avatarUlrForan) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .update({
            avatarUrl: this.avatarUlrForan
          });
        this.showAvatarLoader = true;
        setTimeout(() => {
          this.showAvatarLoader = false;
        }, 7000);
        this.displayAvatar = "";
        this.avatarUlrForan = "";
      }

      this.isEdit = false;
      this.displayDemoHeaderImg = "";
      this.displayDemoAvatar = "";
    },
    saveByEnter() {
      // 日本語入力中のEnterキー操作は無効にする
      if (event.keyCode !== 13) return;

      this.save();
    },
    getNickname(nicknameList) {
      if (nicknameList.length != 0) {
        const target = nicknameList.find(items => {
          return items.ref === this.$store.getters.user.uid;
        });
        if (target != undefined) {
          return target.nickname;
        }
      }
    },
    addNicknameModalDis(friendId) {
      this.addNicknameModal = true;
      this.friendId = friendId;
    },
    editNicknameModalDis(friendId, beforeNickname) {
      this.editNicknameModal = true;
      this.friendId = friendId;
      this.beforeNickname = beforeNickname;
      this.inputEditNickname = beforeNickname;
    },
    addNickname() {
      if (
        this.inputNickname == null ||
        this.inputNickname == "" ||
        this.inputNickname == " "
      ) {
        this.addNicknameModal = false;
      } else {
        db.collection("users")
          .doc(this.friendId)
          .update({
            nicknameList: firebase.firestore.FieldValue.arrayUnion({
              nickname: this.inputNickname,
              ref: this.$store.getters.user.uid
            })
          });
        this.addNicknameModal = false;
      }
    },
    editNickname() {
      const user = db.collection("users").doc(this.friendId);
      if (
        this.inputEditNickname == null ||
        this.inputEditNickname == "" ||
        this.inputEditNickname == " "
      ) {
        user.update({
          nicknameList: firebase.firestore.FieldValue.arrayRemove({
            nickname: this.beforeNickname,
            ref: this.$store.getters.user.uid
          })
        });
      } else {
        user.update({
          nicknameList: firebase.firestore.FieldValue.arrayUnion({
            nickname: this.inputEditNickname,
            ref: this.$store.getters.user.uid
          })
        });
        if (this.inputEditNickname != this.beforeNickname) {
          user.update({
            nicknameList: firebase.firestore.FieldValue.arrayRemove({
              nickname: this.beforeNickname,
              ref: this.$store.getters.user.uid
            })
          });
        }
      }
      this.editNicknameModal = false;
    },
    goChat() {
      this.$router.push({
        name: "chat",
        params: { uid: this.$route.params["uid"] }
      });
    },
    acceptFriendRequest(status) {
      this.sendAcceptFriendRequestNotification();
      this.requestAcceptDialog = false;
      setTimeout(() => {
        //ログイン中のユーザーのDBにフレンド追加
        const users = db.collection("users");
        users.doc(this.$store.getters.user.uid).update({
          friends: firebase.firestore.FieldValue.arrayUnion(
            users.doc(this.displayFriendUserInfo.id)
          )
        });
        //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
        users.doc(this.$store.getters.user.uid).update({
          friendIdList: firebase.firestore.FieldValue.arrayUnion(
            this.displayFriendUserInfo.id
          )
        });
        //申請を投げていたユーザーのDBにフレンド追加
        users.doc(this.displayFriendUserInfo.id).update({
          friends: firebase.firestore.FieldValue.arrayUnion(
            users.doc(this.$store.getters.user.uid)
          )
        });
        //フレンドIDリスト（プロフィール画面でフレンドかどうかを判断するために必要）
        users.doc(this.displayFriendUserInfo.id).update({
          friendIdList: firebase.firestore.FieldValue.arrayUnion(
            this.$store.getters.user.uid
          )
        });
        //以下申請の削除
        this.rejectFriendRequest(status);
      }, 500);
    },
    rejectFriendRequest(status) {
      this.requestRejectDialog = false;
      //申請先側
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          friendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayFriendUserInfo.avatarUrl,
            id: this.displayFriendUserInfo.id,
            userName: this.displayFriendUserInfo.name
          })
        });
      //申請側
      db.collection("users")
        .doc(this.displayFriendUserInfo.id)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayAvatar,
            friendId: this.disId,
            friendName: this.displayUserName
          })
        });
      db.collection("users")
        .doc(this.displayFriendUserInfo.id)
        .update({
          sendFriendRequestNameList: firebase.firestore.FieldValue.arrayRemove(
            this.displayUserName
          )
        });
      if (status == 0) {
        this.acceptFriendRequestModal = true;
        setTimeout(() => {
          this.acceptFriendRequestModal = false;
        }, 1500);
        setTimeout(() => {
          this.$router.go({
            force: true
          });
        }, 2000);
      } else {
        this.rejectFriendRequestModal = true;
        setTimeout(() => {
          this.rejectFriendRequestModal = false;
        }, 1500);
        setTimeout(() => {
          this.$router.go({
            force: true
          });
        }, 2000);
      }
    },
    cancelFriendRequest() {
      //申請先側
      db.collection("users")
        .doc(this.displayFriendUserInfo.id)
        .update({
          friendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayAvatar,
            id: this.disId,
            userName: this.displayUserName
          })
        });
      //申請側
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          sendFriendRequestList: firebase.firestore.FieldValue.arrayRemove({
            avatarUrl: this.displayFriendUserInfo.avatarUrl,
            friendId: this.displayFriendUserInfo.id,
            friendName: this.displayFriendUserInfo.name
          })
        });
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .update({
          sendFriendRequestNameList: firebase.firestore.FieldValue.arrayRemove(
            this.displayFriendUserInfo.name
          )
        });
      this.cancelFriendRequestModal = true;
      setTimeout(() => {
        this.cancelFriendRequestModal = false;
      }, 1500);
      setTimeout(() => {
        this.$router.go({
          force: true
        });
      }, 2000);
    },
    sendFriendRequest() {
      this.sendSendFriendRequestNotification();
      //申請を申請相手のDBに保存する
      const users = db.collection("users");
      users.doc(this.displayFriendUserInfo.id).update({
        friendRequestList: firebase.firestore.FieldValue.arrayUnion({
          id: this.$store.getters.user.uid,
          userName: this.displayUserName,
          avatarUrl: this.displayAvatar
        })
      });
      //申請したユーザーのDBに保存する（申請中ユーザー表示のため）
      users.doc(this.$store.getters.user.uid).update({
        sendFriendRequestList: firebase.firestore.FieldValue.arrayUnion({
          friendId: this.displayFriendUserInfo.id,
          friendName: this.displayFriendUserInfo.name,
          avatarUrl: this.displayFriendUserInfo.avatarUrl
        })
      });
      //申請した相手のユーザー名を申請したユーザーのDBに保存する（検索から除外するため）
      users.doc(this.$store.getters.user.uid).update({
        sendFriendRequestNameList: firebase.firestore.FieldValue.arrayUnion(
          this.displayFriendUserInfo.name
        )
      });
      this.sendFriendRequestModal = true;
      setTimeout(() => {
        this.sendFriendRequestModal = false;
      }, 1500);
      setTimeout(() => {
        this.$router.go({
          force: true
        });
      }, 2000);
    },
    desplayImg(file) {
      let files = file.target.files;
      this.createImage(files[0]);
    },
    decideHeaderSample(imgUrl) {
      this.displayHeaderImg = imgUrl;
      this.headerUlrForan = imgUrl;
      this.headerSelectDialog = false;
    },
    decideAvatar(imgUrl) {
      this.displayDemoAvatar = imgUrl;
      this.avatarUlrForan = imgUrl;
      this.avatarSelectDialog = false;
    },
    // アップロードしたheader画像を表示
    createImage(file) {
      var blobUrl = window.URL.createObjectURL(file);
      this.displayDemoHeaderImg = blobUrl;
      this.headerFile = file;
    },
    // アップロードしたavatar画像を表示
    desplayAvatar(file) {
      var blobUrl = window.URL.createObjectURL(file);

      this.displayDemoAvatar = blobUrl;
      this.avatarFile = file;
      // eslint-disable-next-line no-console
      console.log(this.avatarFile);
    },
    //パーティ登録機能計
    editPartyName(partyNum) {
      this.partyNumber = partyNum;
      this.editPartyNameDialog = true;
    },
    isShadow(sendIndex) {
      return shadowList.some(v => v === sendIndex);
    },
    getImg(sendIndex) {
      const target = this.items.find(item => {
        return item.index === sendIndex;
      });
      return target.img;
    },
    removeArray1(index) {
      this.partyList1.splice(index, 1);
    },
    removeArray2(index) {
      this.partyList2.splice(index, 1);
    },
    removeArray3(index) {
      this.partyList3.splice(index, 1);
    },
    removeArray4(index) {
      this.partyList4.splice(index, 1);
    },
    removeArray5(index) {
      this.partyList5.splice(index, 1);
    },
    saveparty1() {
      this.completeSavePartyDialog = true;
      setTimeout(() => {
        this.completeSavePartyDialog = false;
      }, 2000);
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("partyList")
        .doc("partyList1")
        .update({
          partyList: this.partyList1
        });
    },
    saveparty2() {
      this.completeSavePartyDialog = true;
      setTimeout(() => {
        this.completeSavePartyDialog = false;
      }, 2000);
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("partyList")
        .doc("partyList2")
        .update({
          partyList: this.partyList2
        });
    },
    saveparty3() {
      this.completeSavePartyDialog = true;
      setTimeout(() => {
        this.completeSavePartyDialog = false;
      }, 2000);
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("partyList")
        .doc("partyList3")
        .update({
          partyList: this.partyList3
        });
    },
    saveparty4() {
      this.completeSavePartyDialog = true;
      setTimeout(() => {
        this.completeSavePartyDialog = false;
      }, 2000);
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("partyList")
        .doc("partyList4")
        .update({
          partyList: this.partyList4
        });
    },
    saveparty5() {
      this.completeSavePartyDialog = true;
      setTimeout(() => {
        this.completeSavePartyDialog = false;
      }, 2000);
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("partyList")
        .doc("partyList5")
        .update({
          partyList: this.partyList5
        });
    },
    updatePartyName() {
      this.editPartyNameDialog = false;
      if (this.partyNumber == 1) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("partyList")
          .doc("partyList1")
          .update({
            partyName: this.partyName
          });
        this.partyName1 = this.partyName;
      } else if (this.partyNumber == 2) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("partyList")
          .doc("partyList2")
          .update({
            partyName: this.partyName
          });
        this.partyName2 = this.partyName;
      } else if (this.partyNumber == 3) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("partyList")
          .doc("partyList3")
          .update({
            partyName: this.partyName
          });
        this.partyName3 = this.partyName;
      } else if (this.partyNumber == 4) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("partyList")
          .doc("partyList4")
          .update({
            partyName: this.partyName
          });
        this.partyName4 = this.partyName;
      } else if (this.partyNumber == 5) {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("partyList")
          .doc("partyList5")
          .update({
            partyName: this.partyName
          });
        this.partyName5 = this.partyName;
      }
      this.partyName = "";
    }
  },
  computed: {
    getChatCardHeifht() {
      //ヘッダー、フッター、タブバー、パディング
      var header = 40;
      var footer = 54;
      var padOfiphone = 20;
      var padOfLargeiphone = 78;
      var padOfTab = 40;
      var andMobBar = 60;
      // iphoneの時
      if (navigator.userAgent.indexOf("iPhone") >= 0) {
        // iphone8plus以下
        if (window.innerHeight <= 716) {
          return this.screenHeight - header - footer - padOfiphone;
          // iphoneX以上
        } else {
          return this.screenHeight - header - footer - padOfLargeiphone;
        }
      }
      //androidモバイルの時
      else if (
        navigator.userAgent.indexOf("Android") >= 0 &&
        navigator.userAgent.indexOf("Mobile") >= 0
      ) {
        return this.screenHeight - header - footer - andMobBar;
      }
      //androidタブレットの時
      else if (navigator.userAgent.indexOf("Android") >= 0) {
        return this.screenHeight - header - andMobBar;
      }
      //タブレット(ipad)の時
      else if (window.innerWidth > 700 && window.innerWidth <= 1024) {
        return this.screenHeight - header - padOfTab;
      } else {
        return this.screenHeight - header - 203;
      }
    },
    isMypage: function() {
      if (this.$route.params["uid"] == undefined) {
        return true;
      } else {
        return false;
      }
    },
    isFriend: function() {
      if (this.friendIdList.includes(this.$route.params["uid"])) {
        return true;
      } else {
        return false;
      }
    },
    isRequest: function() {
      //sendFriendRequestNameListのままだとincludsが使えない
      const arr = [];
      this.displayFriendUserInfo.sendFriendRequestNameList.forEach(items => {
        arr.push(items);
      });
      if (arr.includes(this.displayUserName)) {
        return true;
      } else {
        return false;
      }
    },
    isSendRequest: function() {
      if (
        this.sendFriendRequestNameList.includes(this.displayFriendUserInfo.name)
      ) {
        return true;
      } else {
        return false;
      }
    },
    isAndroid() {
      var ua = navigator.userAgent;
      if (ua.indexOf("Android") > 0) {
        return true;
      } else {
        return false;
      }
    },
    getPokemonItems() {
      var result = this.pokemonItems.filter(function(value) {
        //5よりも小さい数値だけを抽出
        return value.index < 20000;
      });
      return result;
    },
    // パーティ登録計
    isSixPatry1() {
      // return true;
      if (this.partyList1.length == 6) {
        return true;
      } else {
        return false;
      }
    },
    isSixPatry2() {
      // return true;
      if (this.partyList2.length == 6) {
        return true;
      } else {
        return false;
      }
    },
    isSixPatry3() {
      // return true;
      if (this.partyList3.length == 6) {
        return true;
      } else {
        return false;
      }
    },
    isSixPatry4() {
      // return true;
      if (this.partyList4.length == 6) {
        return true;
      } else {
        return false;
      }
    },
    isSixPatry5() {
      // return true;
      if (this.partyList5.length == 6) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    partyValue1() {
      if (this.partyValue1 != undefined) {
        this.partyList1.push(this.partyValue1);
      }
    },
    partyValue2() {
      if (this.partyValue2 != undefined) {
        this.partyList2.push(this.partyValue2);
      }
    },
    partyValue3() {
      if (this.partyValue3 != undefined) {
        this.partyList3.push(this.partyValue3);
      }
    },
    partyValue4() {
      if (this.partyValue4 != undefined) {
        this.partyList4.push(this.partyValue4);
      }
    },
    partyValue5() {
      if (this.partyValue5 != undefined) {
        this.partyList5.push(this.partyValue5);
      }
    }
  },
  firestore() {
    return {
      displayFriendUserInfo: db
        .collection("users")
        .doc(this.$route.params["uid"]),
      partyListDb: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("partyList")
    };
  }
};
</script>
<style>
.friendStatus {
  font-size: 10px;
  color: rgb(150, 150, 153);
  position: relative;
  bottom: 10px;
}
.headerImg {
  position: relative;
}

.headerInput {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 0px;
  opacity: 0;
  z-index: 2;
}

.headerInputCameraIcon {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 0px;
  z-index: 1;
}

.avatar {
  margin-left: 15px;
}

.avatarInput {
  position: absolute;
  left: 10px;
  bottom: 0px;
  opacity: 0;
  z-index: 2;
}

.avatarAn {
  position: absolute;
  top: 20px;
}

.headerBtnForAn {
  position: absolute;
  width: 100%;
  height: 100px;
  top: 30px;
  text-align: center;
  z-index: 1;
}

.avatarBtnForAn {
  position: relative;
  bottom: 30px;
  /* opacity: ; */
}

.displayCameraIconOnAvatar {
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 1;
}

.displayCameraIconOnAvatarAfter {
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: 1;
}
</style>