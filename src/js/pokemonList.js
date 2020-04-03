const pokemonList = [{
    name: "フシギダネ（ふしぎだね）",
    index: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0001.PNG?alt=media&token=ae131dbd-c5a9-4240-85e6-dbd4dcc72943"
  },
  {
    name: "【シャドウ】フシギダネ（しゃどうふしぎだね）",
    index: 20001,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0001.PNG?alt=media&token=ae131dbd-c5a9-4240-85e6-dbd4dcc72943"
  },
  {
    name: "フシギソウ（ふしぎそう）",
    index: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0002.PNG?alt=media&token=c65bda4c-9212-4fe1-a1b2-5ac939637601"
  },
  {
    name: "【シャドウ】フシギソウ（しゃどうふしぎそう）",
    index: 20002,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0002.PNG?alt=media&token=c65bda4c-9212-4fe1-a1b2-5ac939637601"
  },
  {
    name: "フシギバナ（ふしぎばな）",
    index: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0003.PNG?alt=media&token=1404d4f5-077c-4847-9273-804e883b85b7"
  },
  {
    name: "【シャドウ】フシギバナ（しゃどうふしぎばな）",
    index: 20003,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0003.PNG?alt=media&token=1404d4f5-077c-4847-9273-804e883b85b7"
  },
  {
    name: "ヒトカゲ（ひとかげ）",
    index: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0004.PNG?alt=media&token=89f3665b-61f8-47cd-924b-3acb5732bc0a"
  },
  {
    name: "【シャドウ】ヒトカゲ（しゃどうひとかげ）",
    index: 20004,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0004.PNG?alt=media&token=89f3665b-61f8-47cd-924b-3acb5732bc0a"
  },
  {
    name: "リザード（りざーど）",
    index: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0005.PNG?alt=media&token=991a4c18-4028-42eb-841a-ff13a85cf6a6"
  },
  {
    name: "【シャドウ】リザード（しゃどうりざーど）",
    index: 20005,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0005.PNG?alt=media&token=991a4c18-4028-42eb-841a-ff13a85cf6a6"
  },
  {
    name: "リザードン（りざーどん）",
    index: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0006.PNG?alt=media&token=7e4bfd6e-2e2b-4e8d-ae78-747d27c13489"
  },
  {
    name: "【シャドウ】リザードン（しゃどうりざーどん）",
    index: 20006,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0006.PNG?alt=media&token=7e4bfd6e-2e2b-4e8d-ae78-747d27c13489"
  },
  {
    name: "ゼニガメ（ぜにがめ）",
    index: 7,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0007.PNG?alt=media&token=9eac4c8f-7f1e-4baf-9df8-5c75f6f627b6"
  },
  {
    name: "【シャドウ】ゼニガメ（しゃどうぜにがめ）",
    index: 20007,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0007.PNG?alt=media&token=9eac4c8f-7f1e-4baf-9df8-5c75f6f627b6"
  },
  {
    name: "カメール（かめーる）",
    index: 8,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0008.PNG?alt=media&token=31cfd20d-edfb-482b-b8f1-5267591a900b"
  },
  {
    name: "【シャドウ】カメール（しゃどうかめーる）",
    index: 20008,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0008.PNG?alt=media&token=31cfd20d-edfb-482b-b8f1-5267591a900b"
  },
  {
    name: "カメックス（かめっくす）",
    index: 9,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0009.PNG?alt=media&token=207629e3-4801-4ae0-8a05-4c6c8ecfcd91"
  },
  {
    name: "【シャドウ】カメックス（しゃどうかめっくす）",
    index: 20009,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0009.PNG?alt=media&token=207629e3-4801-4ae0-8a05-4c6c8ecfcd91"
  },
  {
    name: "キャタピー（きゃたぴー）",
    index: 10,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0010.PNG?alt=media&token=34ae03b4-fe1e-4dce-9436-ab81234fe876"
  },
  {
    name: "トランセル（とらんせる）",
    index: 11,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0011.PNG?alt=media&token=20537c81-19d5-4184-b661-4c3545eccbd8"
  },
  {
    name: "バタフリー（ばたふりー）",
    index: 12,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0012.PNG?alt=media&token=d81c09fa-b594-4236-abe7-a09ceef3ddab"
  },
  {
    name: "ビードル（びーどる）",
    index: 13,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0013.PNG?alt=media&token=1fc3231c-64d0-41d3-8bcc-b7184bcd3863"
  },
  {
    name: "【シャドウ】ビードル（しゃどうびーどる）",
    index: 20013,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0013.PNG?alt=media&token=1fc3231c-64d0-41d3-8bcc-b7184bcd3863"
  },
  {
    name: "コクーン（こくーん）",
    index: 14,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0014.PNG?alt=media&token=b6bb3d21-2acd-441f-ac6b-74559c2c421f"
  },
  {
    name: "【シャドウ】コクーン（しゃどうこくーん）",
    index: 20014,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0014.PNG?alt=media&token=b6bb3d21-2acd-441f-ac6b-74559c2c421f"
  },
  {
    name: "スピアー（すぴあー）",
    index: 15,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0015.PNG?alt=media&token=9641f1ba-19fb-4f05-940d-8bbfd8c07839"
  },
  {
    name: "【シャドウ】スピアー（しゃどうすぴあー）",
    index: 20015,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0015.PNG?alt=media&token=9641f1ba-19fb-4f05-940d-8bbfd8c07839"
  },
  {
    name: "ポッポ（ぽっぽ）",
    index: 16,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0016.PNG?alt=media&token=a496c64b-074e-425d-b006-e4d0875e8a44"
  },
  {
    name: "ピジョン（ぴじょん）",
    index: 17,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0017.PNG?alt=media&token=2d8fd091-abc2-4f1a-8b8c-8f926bc84c68"
  },
  {
    name: "ピジョット（ぴじょっと）",
    index: 18,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0018.PNG?alt=media&token=c69b75cd-24cb-4122-8174-b0590951f98b"
  },
  {
    name: "コラッタ（こらった）",
    index: 19,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0019.PNG?alt=media&token=6d3652c3-970c-4f3b-ab3e-ecf3f2c6b7af"
  },
  {
    name: "【シャドウ】コラッタ（しゃどうこらった）",
    index: 20019,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0019.PNG?alt=media&token=6d3652c3-970c-4f3b-ab3e-ecf3f2c6b7af"
  },
  {
    name: "ラッタ（らった）",
    index: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0020.PNG?alt=media&token=26d21181-1caf-4d57-9547-fb0d12e81516"
  },
  {
    name: "【シャドウ】ラッタ（らしゃどうった）",
    index: 20020,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0020.PNG?alt=media&token=26d21181-1caf-4d57-9547-fb0d12e81516"
  },
  {
    name: "オニスズメ（おにすずめ）",
    index: 21,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0021.PNG?alt=media&token=d3135ea6-ea99-462c-bf70-2a5bc0b34b67"
  },
  {
    name: "オニドリル（オニドリル）",
    index: 22,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0022.PNG?alt=media&token=c9c3a25e-083f-4b98-ad02-3aed78f6089a"
  },
  {
    name: "アーボ（あーぼ）",
    index: 23,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0023PNG.PNG?alt=media&token=4f86d8c6-97d7-4519-9218-db85098b153e"
  },
  {
    name: "アーボック（あーぼっく）",
    index: 24,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0024.PNG?alt=media&token=9000bcb0-301c-4951-bbaf-b658534acca3"
  },
  {
    name: "ピカチュウ（ぴかちゅう）",
    index: 25,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0025.PNG?alt=media&token=593c5085-7cb5-40a5-b714-e525ca3e78af"
  },
  {
    name: "ライチュウ（らいちゅう）",
    index: 26,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0026.PNG?alt=media&token=e1b9f806-8522-48d9-8a18-73a7d282a493"
  },
  {
    name: "サンド（さんど）",
    index: 27,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0027.PNG?alt=media&token=67f2a7f7-cf27-4a4b-a64c-151dfc1c732c"
  },
  {
    name: "【シャドウ】サンド（しゃどうさんど）",
    index: 20027,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0027.PNG?alt=media&token=67f2a7f7-cf27-4a4b-a64c-151dfc1c732c"
  },
  {
    name: "サンドパン（さんどぱん）",
    index: 28,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0028.PNG?alt=media&token=962f7fd1-1990-45f8-ac44-13db7d8e9b91"
  },
  {
    name: "【シャドウ】サンドパン（しゃどうさんどぱん）",
    index: 20028,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0028.PNG?alt=media&token=962f7fd1-1990-45f8-ac44-13db7d8e9b91"
  },
  {
    name: "ニドラン♀（にどらん）",
    index: 29,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0029.PNG?alt=media&token=c7cbd68c-4c9b-4312-9a05-7a06bf124b79"
  },
  {
    name: "ニドリーナ（にどりーな）",
    index: 30,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0030.PNG?alt=media&token=06b1a700-929f-4aab-a88b-5dd389b1042f"
  },
  {
    name: "ニドクイン（にどくいん）",
    index: 31,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0031.PNG?alt=media&token=6864eaa4-dea7-4e03-bd94-447426cc94c4"
  },
  {
    name: "ニドラン♂（にどらん）",
    index: 32,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0032.PNG?alt=media&token=60da34ba-bf82-48d5-b2e9-884c36fb2d50"
  },
  {
    name: "ニドリーナ（にどりーな）",
    index: 33,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0033.PNG?alt=media&token=bfb1b6e6-f150-45ba-8eae-95f2598c05d2"
  },
  {
    name: "ニドキング（にどきんぐ）",
    index: 34,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0034.PNG?alt=media&token=d360fcad-040c-459a-a64e-6e28fa64ec8c"
  },
  {
    name: "ピッピ（ぴっぴ）",
    index: 35,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0035.PNG?alt=media&token=e3e18f16-99e5-431f-ac2d-65bc3a0ccc3b"
  },
  {
    name: "ピクシー（ぴくしー）",
    index: 36,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0036.PNG?alt=media&token=1b15d178-30b0-4490-bcb5-60beb0a4e8ac"
  },
  {
    name: "ロコン（ろこん）",
    index: 37,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0037.PNG?alt=media&token=5fa09aae-4e6d-4457-b594-c51579c2ee6d"
  },
  {
    name: "【シャドウ】ロコン（しゃどうろこん）",
    index: 20037,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0037.PNG?alt=media&token=5fa09aae-4e6d-4457-b594-c51579c2ee6d"
  },
  {
    name: "キュウコン（きゅうこん）",
    index: 38,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0038.PNG?alt=media&token=b5ff24a5-2290-47b6-874a-c64725ea3c26"
  },
  {
    name: "【シャドウ】キュウコン（しゃどうきゅうこん）",
    index: 20038,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0038.PNG?alt=media&token=b5ff24a5-2290-47b6-874a-c64725ea3c26"
  },
  {
    name: "プリン（ぷりん）",
    index: 39,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0039.PNG?alt=media&token=5bd1a913-5e29-46c8-8c01-c5a2c602f887"
  },
  {
    name: "プクリン（ぷくりん）",
    index: 40,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0040.PNG?alt=media&token=97baf552-fc02-4aba-beb4-397e81af93e0"
  },
  {
    name: "ズバット（ずばっと）",
    index: 41,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0041.PNG?alt=media&token=21370000-e9c2-4d1b-a864-79891e872bd5"
  },
  {
    name: "【シャドウ】ズバット（しゃどうずばっと）",
    index: 20041,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0041.PNG?alt=media&token=21370000-e9c2-4d1b-a864-79891e872bd5"
  },
  {
    name: "ゴルバット（ごるばっと）",
    index: 42,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0042.PNG?alt=media&token=b05e473c-dd34-4f9e-a414-281f96b5e299"
  },
  {
    name: "【シャドウ】ゴルバット（しゃどうごるばっと）",
    index: 20042,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0042.PNG?alt=media&token=b05e473c-dd34-4f9e-a414-281f96b5e299"
  },
  {
    name: "ナゾノクサ（なぞのくさ）",
    index: 43,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0043.PNG?alt=media&token=87853b0e-b311-4850-a2e0-2ee9e8df80e4"
  },
  {
    name: "【シャドウ】ナゾノクサ（しゃどうなぞのくさ）",
    index: 20043,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0043.PNG?alt=media&token=87853b0e-b311-4850-a2e0-2ee9e8df80e4"
  },
  {
    name: "クサイハナ（くさいはな）",
    index: 44,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0044.PNG?alt=media&token=1dd22994-faaf-491a-a6fe-2f74cc9c09fd"
  },
  {
    name: "【シャドウ】クサイハナ（しゃどうくさいはな）",
    index: 20044,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0044.PNG?alt=media&token=1dd22994-faaf-491a-a6fe-2f74cc9c09fd"
  },
  {
    name: "ラフレシア（らふれしあ）",
    index: 45,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0045.PNG?alt=media&token=ea0a9313-c327-4a7b-9bfe-bdfe4faeab85"
  },
  {
    name: "【シャドウ】ラフレシア（しゃどうらふれしあ）",
    index: 20045,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0045.PNG?alt=media&token=ea0a9313-c327-4a7b-9bfe-bdfe4faeab85"
  },
  {
    name: "パラス（ぱらす）",
    index: 46,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0046.PNG?alt=media&token=4f176093-bf3f-49e4-b6a4-0c3f1827f422"
  },
  {
    name: "パラセクト（ぱらせくと）",
    index: 47,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0047.PNG?alt=media&token=e393f2ad-dce7-40fe-b9f1-ece9b5d76610"
  },
  {
    name: "コンパン（こんぱん）",
    index: 48,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0048.PNG?alt=media&token=6ab3513e-ec82-44bd-93b3-a2039238ae5b"
  },
  {
    name: "【シャドウ】コンパン（しゃどうこんぱん）",
    index: 20048,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0048.PNG?alt=media&token=6ab3513e-ec82-44bd-93b3-a2039238ae5b"
  },
  {
    name: "モルフォン（もるふぉん）",
    index: 49,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0049.PNG?alt=media&token=ad2ceb5d-2906-4c76-90c4-69f6ebc46cbc"
  },
  {
    name: "【シャドウ】モルフォン（しゃどうもるふぉん）",
    index: 20049,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0049.PNG?alt=media&token=ad2ceb5d-2906-4c76-90c4-69f6ebc46cbc"
  },
  {
    name: "ディグダ（でぃぐだ）",
    index: 50,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0050.PNG?alt=media&token=bede2318-9f51-4a84-aaab-1da7bb5eff6b"
  },
  {
    name: "ダグトリオ（だぐとりお）",
    index: 51,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0051.PNG?alt=media&token=8545fadc-5e39-4813-a48b-4d4a5d92b2ab"
  },
  {
    name: "ニャース（にゃーす）",
    index: 52,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0052.PNG?alt=media&token=faca6fd6-06e3-4ae4-9099-7c9be58b7dfa"
  },
  {
    name: "【シャドウ】ニャース（しゃどうにゃーす）",
    index: 20052,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0052.PNG?alt=media&token=faca6fd6-06e3-4ae4-9099-7c9be58b7dfa"
  },
  {
    name: "ペルシアン（ぺるしあん）",
    index: 53,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0053.PNG?alt=media&token=eb239248-a271-4387-b45d-f25e90d79128"
  },
  {
    name: "【シャドウ】ペルシアン（しゃどうぺるしあん）",
    index: 20053,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0053.PNG?alt=media&token=eb239248-a271-4387-b45d-f25e90d79128"
  },
  {
    name: "コダック（こだっく）",
    index: 54,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0054.PNG?alt=media&token=e70a51c2-8fe6-4f6e-a572-3e1d68e201c1"
  },
  {
    name: "【シャドウ】コダック（しゃどうこだっく）",
    index: 20054,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0054.PNG?alt=media&token=e70a51c2-8fe6-4f6e-a572-3e1d68e201c1"
  },
  {
    name: "ゴルダック（ごるだっく）",
    index: 55,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0055.PNG?alt=media&token=333cce56-9ad2-40ca-9fbf-8c887cd79368"
  },
  {
    name: "【シャドウ】ゴルダック（しゃどうごるだっく）",
    index: 20055,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0055.PNG?alt=media&token=333cce56-9ad2-40ca-9fbf-8c887cd79368"
  },
  {
    name: "マンキー（まんきー）",
    index: 56,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0056.PNG?alt=media&token=e6fa04c7-c1a3-490e-a981-26f2d5a4ddcd"
  },
  {
    name: "オコリザル（おこりざる）",
    index: 57,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0057.PNG?alt=media&token=f4280d1c-7787-4ea8-bb81-43cc31b9a49d"
  },
  {
    name: "ガーディ（がーでぃ）",
    index: 58,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0058.PNG?alt=media&token=d8ef3f4b-d1c0-410c-890b-de24db862b22"
  },
  {
    name: "【シャドウ】ガーディ（しゃどうがーでぃ）",
    index: 20058,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0058.PNG?alt=media&token=d8ef3f4b-d1c0-410c-890b-de24db862b22"
  },
  {
    name: "ウインディ（ういんでぃ）",
    index: 59,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0059.PNG?alt=media&token=db1f055b-3bf8-4c3f-80ac-1638af23445d"
  },
  {
    name: "【シャドウ】ウインディ（しゃどうういんでぃ）",
    index: 20059,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0059.PNG?alt=media&token=db1f055b-3bf8-4c3f-80ac-1638af23445d"
  },
  {
    name: "ニョロモ（にょろも）",
    index: 60,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0060.PNG?alt=media&token=ccb1f887-6b6f-459a-b5de-d8505391f914"
  },
  {
    name: "【シャドウ】ニョロモ（しゃどうにょろも）",
    index: 20060,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0060.PNG?alt=media&token=ccb1f887-6b6f-459a-b5de-d8505391f914"
  },
  {
    name: "ニョロゾ（にょろぞ）",
    index: 61,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0061.PNG?alt=media&token=da033150-552c-469e-b0c6-d8dc34bbc96e"
  },
  {
    name: "【シャドウ】ニョロゾ（しゃどうにょろぞ）",
    index: 20061,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0061.PNG?alt=media&token=da033150-552c-469e-b0c6-d8dc34bbc96e"
  },
  {
    name: "ニョロボン（にょろぼん）",
    index: 62,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0062.PNG?alt=media&token=fe3731a3-9e31-4912-8c03-f14b9cba213a"
  },
  {
    name: "【シャドウ】ニョロボン（しゃどうにょろぼん）",
    index: 20062,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0062.PNG?alt=media&token=fe3731a3-9e31-4912-8c03-f14b9cba213a"
  },
  {
    name: "ケーシィ（けーしぃ）",
    index: 63,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0063.PNG?alt=media&token=31430c62-295b-45b2-bea6-d04613798c32"
  },
  {
    name: "【シャドウ】ケーシィ（しゃどうけーしぃ）",
    index: 20063,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0063.PNG?alt=media&token=31430c62-295b-45b2-bea6-d04613798c32"
  },
  {
    name: "ユンゲラー（ゆんげらー）",
    index: 64,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0064.PNG?alt=media&token=f5db8fc6-0017-4262-b9bc-b73c79d317b2"
  },
  {
    name: "【シャドウ】ユンゲラー（しゃどうゆんげらー）",
    index: 20064,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0064.PNG?alt=media&token=f5db8fc6-0017-4262-b9bc-b73c79d317b2"
  },
  {
    name: "フーディン（ふーでぃん）",
    index: 65,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0065.PNG?alt=media&token=40755988-7147-41a4-98bd-ae1f7d3cdb90"
  },
  {
    name: "【シャドウ】フーディン（しゃどうふーでぃん）",
    index: 20065,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0065.PNG?alt=media&token=40755988-7147-41a4-98bd-ae1f7d3cdb90"
  },
  {
    name: "ワンリキー（わんりきー）",
    index: 66,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0066.PNG?alt=media&token=85e757f3-9cf1-4ba6-8418-d15bffd8c865"
  },
  {
    name: "ゴーリキー（ごーりきー）",
    index: 67,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0067.PNG?alt=media&token=e841a41d-0049-4789-b9af-22dd22c3fdff"
  },
  {
    name: "カイリキー（かいりきー）",
    index: 68,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0068.PNG?alt=media&token=9ac34168-0c31-4147-b904-2fd030482d8e"
  },
  {
    name: "マダツボミ（まだつぼみ）",
    index: 69,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0069.PNG?alt=media&token=f30bdc9a-a613-411b-959c-b6ac62fcc6ed"
  },
  {
    name: "【シャドウ】マダツボミ（しゃどうまだつぼみ）",
    index: 20069,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0069.PNG?alt=media&token=f30bdc9a-a613-411b-959c-b6ac62fcc6ed"
  },
  {
    name: "ウツドン（うつどん）",
    index: 70,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0070.PNG?alt=media&token=0ca9f176-ae6b-49d3-971e-527ed0a115dc"
  },
  {
    name: "【シャドウ】ウツドン（しゃどううつどん）",
    index: 20070,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0070.PNG?alt=media&token=0ca9f176-ae6b-49d3-971e-527ed0a115dc"
  },
  {
    name: "ウツボット（うつぼっと）",
    index: 71,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0071.PNG?alt=media&token=bc85b7db-960b-45f6-be3a-2c692f9e117e"
  },
  {
    name: "【シャドウ】ウツボット（しゃどううつぼっと）",
    index: 20071,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0071.PNG?alt=media&token=bc85b7db-960b-45f6-be3a-2c692f9e117e"
  },
  {
    name: "メノクラゲ（めのくらげ）",
    index: 72,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0072.PNG?alt=media&token=55b5ef73-46fc-4972-94c4-ca94d1615add"
  },
  {
    name: "ドククラゲ（どくくらげ）",
    index: 73,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0073.PNG?alt=media&token=45c0fb4c-d7a3-49d8-8aba-095f3176f298"
  },
  {
    name: "イシツブテ（いしつぶて）",
    index: 74,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0074.PNG?alt=media&token=fd94b6b8-e32e-4c63-b92c-af5ec39fe59a"
  },
  {
    name: "ゴローン（ごろーん）",
    index: 75,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0075.PNG?alt=media&token=405205f4-4f0f-4505-baa6-bd590c871bd7"
  },
  {
    name: "ゴローニャ（ごろーにゃ）",
    index: 76,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0076.PNG?alt=media&token=1c8bfd0d-a0c6-453e-b3fd-5478378f2c00"
  },
  {
    name: "ポニータ（ぽにーた）",
    index: 77,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0077.PNG?alt=media&token=25f2e2a0-edd0-4e9a-bb7f-f2859bf17a45"
  },
  {
    name: "ギャロップ（ぎゃろっぷ）",
    index: 78,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0078.PNG?alt=media&token=64ea2c47-c2ca-426f-92f2-ad1bf2f11e57"
  },
  {
    name: "ヤドン（やどん）",
    index: 79,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0079.PNG?alt=media&token=71a6debf-2166-4329-8e58-6e341315ce8c"
  },
  {
    name: "ヤドラン（やどらん）",
    index: 80,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0080.PNG?alt=media&token=4e21a2b5-eac4-479f-877f-58d033316142"
  },
  {
    name: "コイル（こいる）",
    index: 81,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0081.PNG?alt=media&token=d86a2903-d237-4904-8d98-1b8e5cd9522d"
  },
  {
    name: "【シャドウ】コイル（しゃどうこいる）",
    index: 20081,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0081.PNG?alt=media&token=d86a2903-d237-4904-8d98-1b8e5cd9522d"
  },
  {
    name: "レアコイル（れあこいる）",
    index: 82,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0082.PNG?alt=media&token=54820473-34bb-4f99-8b79-0c0a86a22be6"
  },
  {
    name: "【シャドウ】レアコイル（しゃどうれあこいる）",
    index: 20082,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0082.PNG?alt=media&token=54820473-34bb-4f99-8b79-0c0a86a22be6"
  },
  {
    name: "カモネギ（かもねぎ）",
    index: 83,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0083.PNG?alt=media&token=978c3c2e-1b94-4d44-8c38-949d61ac30fc"
  },
  {
    name: "ドードー（どーどー）",
    index: 84,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0084.PNG?alt=media&token=cd5a7c15-5481-4ff6-bd55-73c74d872b84"
  },
  {
    name: "ドードリオ（どーどりお）",
    index: 85,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0085.PNG?alt=media&token=35054268-4537-4d47-a7ce-2e0e69f30393"
  },
  {
    name: "パウワウ（ぱうわう）",
    index: 86,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0086.PNG?alt=media&token=56aad4f1-8f09-4a00-819b-bc82f390a344"
  },
  {
    name: "ジュゴン（じゅごん）",
    index: 87,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0087.PNG?alt=media&token=2d90be88-c457-477f-b3ab-1ec9c075271a"
  },
  {
    name: "ベトベター（べとべたー）",
    index: 88,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0088.PNG?alt=media&token=dade0eb0-bb6f-4922-81b0-fe81689812c8"
  },
  {
    name: "【シャドウ】ベトベター（しゃどうべとべたー）",
    index: 20088,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0088.PNG?alt=media&token=dade0eb0-bb6f-4922-81b0-fe81689812c8"
  },
  {
    name: "ベトベトン（べとべとん）",
    index: 89,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0089.PNG?alt=media&token=14dce11a-af81-4f92-a9a3-b27cf480b322"
  },
  {
    name: "【シャドウ】ベトベトン（しゃどうべとべとん）",
    index: 20089,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0089.PNG?alt=media&token=14dce11a-af81-4f92-a9a3-b27cf480b322"
  },
  {
    name: "シェルダー（しぇるだー）",
    index: 90,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0090.PNG?alt=media&token=b42c83f4-bc05-4708-85e1-da4461a14641"
  },
  {
    name: "パルシェン（ぱるしぇん）",
    index: 91,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0091.PNG?alt=media&token=f1bf08de-4ed4-4e7f-a3ee-0dc195ab46a7"
  },
  {
    name: "ゴース（ごーす）",
    index: 92,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0092.PNG?alt=media&token=7fd6dd1f-1954-4225-ad81-e66c070b0969"
  },
  {
    name: "ゴースト（ごーすと）",
    index: 93,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0093.PNG?alt=media&token=1acb2389-2e0e-4775-b9cd-5cb1b21dbed1"
  },
  {
    name: "ゲンガー（げんがー）",
    index: 94,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0094.PNG?alt=media&token=3ed51394-4274-4c27-b6e8-875f2bcd9808"
  },
  {
    name: "イワーク（いわーく）",
    index: 95,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0095.PNG?alt=media&token=18f31e92-6ab5-47d7-ad7b-15f65e01f442"
  },
  {
    name: "スリープ（すりーぷ）",
    index: 96,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0096.PNG?alt=media&token=7bd7d423-61cb-46fa-a180-3af9cfed4e97"
  },
  {
    name: "【シャドウ】スリープ（しゃどうすりーぷ）",
    index: 20096,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0096.PNG?alt=media&token=7bd7d423-61cb-46fa-a180-3af9cfed4e97"
  },
  {
    name: "スリーパー（すりーぱー）",
    index: 97,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0097.PNG?alt=media&token=2c671b56-d447-4e10-a794-dacc5b5fa809"
  },
  {
    name: "【シャドウ】スリーパー（しゃどうすりーぱー）",
    index: 20097,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0097.PNG?alt=media&token=2c671b56-d447-4e10-a794-dacc5b5fa809"
  },
  {
    name: "クラブ（くらぶ）",
    index: 98,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0098.PNG?alt=media&token=5447b8d6-f847-465a-837f-4fffce61b1d0"
  },
  {
    name: "キングラー（きんぐらー）",
    index: 99,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0099.PNG?alt=media&token=455a64b2-aefb-4b41-8829-5e3aa135e426"
  },
  {
    name: "ビリリダマ（びりりだま）",
    index: 100,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0100.PNG?alt=media&token=d3d52ad7-d940-4946-bd10-9082bb123339"
  },
  {
    name: "マルマイン（まるまいん）",
    index: 101,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0101.PNG?alt=media&token=dec63987-6ab4-452e-8083-58972f482dd4"
  },
  {
    name: "タマタマ（たまたま）",
    index: 102,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0102.PNG?alt=media&token=82e95758-5bd9-46c3-bcdf-ee7e431c9541"
  },
  {
    name: "【シャドウ】タマタマ（しゃどうたまたま）",
    index: 20102,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0102.PNG?alt=media&token=82e95758-5bd9-46c3-bcdf-ee7e431c9541"
  },
  {
    name: "ナッシー（なっしー）",
    index: 103,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0103.PNG?alt=media&token=2a8fd137-1e3e-4c72-b963-e5ac76b6fa0b"
  },
  {
    name: "【シャドウ】ナッシー（しゃどうなっしー）",
    index: 20103,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0103.PNG?alt=media&token=2a8fd137-1e3e-4c72-b963-e5ac76b6fa0b"
  },
  {
    name: "カラカラ（からから）",
    index: 104,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0104.PNG?alt=media&token=a42edf87-9bf6-40c3-a0d2-e182f942de73"
  },
  {
    name: "【シャドウ】カラカラ（しゃどうからから）",
    index: 20104,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0104.PNG?alt=media&token=a42edf87-9bf6-40c3-a0d2-e182f942de73"
  },
  {
    name: "ガラガラ（がらがら）",
    index: 105,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0105.PNG?alt=media&token=6d19569e-2ed4-44d1-a564-30264eed32ef"
  },
  {
    name: "【シャドウ】ガラガラ（しゃどうがらがら）",
    index: 20105,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0105.PNG?alt=media&token=6d19569e-2ed4-44d1-a564-30264eed32ef"
  },
  {
    name: "サワムラー（さわむらー）",
    index: 106,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0106.PNG?alt=media&token=4236b420-9a1c-48ba-b25a-f4309bf4aee1"
  },
  {
    name: "【シャドウ】サワムラー（しゃどうさわむらー）",
    index: 20106,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0106.PNG?alt=media&token=4236b420-9a1c-48ba-b25a-f4309bf4aee1"
  },
  {
    name: "エビワラー（えびわらー）",
    index: 107,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0107.PNG?alt=media&token=2cf01cad-26b5-4687-b3b3-52f25b904319"
  },
  {
    name: "【シャドウ】エビワラー（しゃどうえびわらー）",
    index: 20107,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0107.PNG?alt=media&token=2cf01cad-26b5-4687-b3b3-52f25b904319"
  },
  {
    name: "ベロリンガ（べろりんが）",
    index: 108,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0108.PNG?alt=media&token=78eac348-0f5e-4d4e-8e9b-435163a27c76"
  },
  {
    name: "ドガース（どがーす）",
    index: 109,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0109.PNG?alt=media&token=d4b579eb-c4b4-449b-b2d4-534de4784c0b"
  },
  {
    name: "マタドガス（またどがす）",
    index: 110,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0110.PNG?alt=media&token=fa1a7873-def7-4609-946e-11d6ed913e37"
  },
  {
    name: "サイホーン（さいほーん）",
    index: 111,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0111.PNG?alt=media&token=8f85e127-f280-43ef-99db-4d076bbc7c0d"
  },
  {
    name: "サイドン（さいどん）",
    index: 112,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0112.PNG?alt=media&token=ab2548ab-ee83-4530-b651-d4390304f867"
  },
  {
    name: "ラッキー（らっきー）",
    index: 113,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0113.PNG?alt=media&token=74ad0d61-4169-46c0-91ef-e540cfdd90b6"
  },
  {
    name: "モンジャラ（もんじゃら）",
    index: 114,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0114.PNG?alt=media&token=ba473077-aa4e-411a-ba45-68f8716924f1"
  },
  {
    name: "ガルーラ（がるーら）",
    index: 115,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0115.PNG?alt=media&token=f245bf7e-579c-4c8d-b8e5-d80e2f023af0"
  },
  {
    name: "タッツー（たっつー）",
    index: 116,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0116.PNG?alt=media&token=25c82c1c-dc18-41c7-a22a-b282ca89f35a"
  },
  {
    name: "シードラ（しーどら）",
    index: 117,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0117.PNG?alt=media&token=ed17f9dd-b63b-411a-a586-00d0f5e97cb6"
  },
  {
    name: "トサキント（とさきんと）",
    index: 118,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0118.PNG?alt=media&token=472014e4-6de5-492f-8184-3116ce2fd1e9"
  },
  {
    name: "アズマオウ（あずまおう）",
    index: 119,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0119.PNG?alt=media&token=0d5d2deb-e51a-462c-82c1-3bc6314c0829"
  },
  {
    name: "ヒトデマン（ひとでまん）",
    index: 120,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0120.PNG?alt=media&token=aa26c31e-1da3-4121-a20b-9b0775d9f086"
  },
  {
    name: "スターミー（すたーみー）",
    index: 121,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0121.PNG?alt=media&token=ac308431-c9c2-43cd-90ae-e05eae20be6f"
  },
  {
    name: "バリヤード（ばりやーど）",
    index: 122,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0122.PNG?alt=media&token=6eb2b74d-892d-43a7-8039-832376a430b1"
  },
  {
    name: "ストライク（すとらいく）",
    index: 123,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0123.PNG?alt=media&token=b3cd2de5-2ce1-48fe-8528-00929418a936"
  },
  {
    name: "【シャドウ】ストライク（しゃどうすとらいく）",
    index: 20123,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0123.PNG?alt=media&token=b3cd2de5-2ce1-48fe-8528-00929418a936"
  },
  {
    name: "ルージュラ（るーじゅら）",
    index: 124,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0124.PNG?alt=media&token=f2cf3bb8-01a1-4228-8024-d6c8e76d2341"
  },
  {
    name: "エレブー（えれぶー）",
    index: 125,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0125.PNG?alt=media&token=df620418-ac5f-43ec-93d1-ec59e053adb0"
  },
  {
    name: "【シャドウ】エレブー（しゃどうえれぶー）",
    index: 20125,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0125.PNG?alt=media&token=df620418-ac5f-43ec-93d1-ec59e053adb0"
  },
  {
    name: "ブーバー（ぶーばー）",
    index: 126,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0126.PNG?alt=media&token=d467ac7c-5fc9-4daa-a548-6231cddcf21b"
  },
  {
    name: "【シャドウ】ブーバー（しゃどうぶーばー）",
    index: 20126,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0126.PNG?alt=media&token=d467ac7c-5fc9-4daa-a548-6231cddcf21b"
  },
  {
    name: "カイロス（かいろす）",
    index: 127,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0127.PNG?alt=media&token=27d4b76a-5746-43c6-96e5-c3b21623831b"
  },
  {
    name: "【シャドウ】カイロス（しゃどうかいろす）",
    index: 20127,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0127.PNG?alt=media&token=27d4b76a-5746-43c6-96e5-c3b21623831b"
  },
  {
    name: "ケンタロス（けんたろす）",
    index: 128,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0128.PNG?alt=media&token=161f3293-d168-4ac4-9626-3a57c4ff3c89"
  },
  {
    name: "コイキング（こいきんぐ）",
    index: 129,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0129.PNG?alt=media&token=de4557af-6b6a-48ac-937a-444b9900850e"
  },
  {
    name: "【シャドウ】コイキング（しゃどうこいきんぐ）",
    index: 20129,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0129.PNG?alt=media&token=de4557af-6b6a-48ac-937a-444b9900850e"
  },
  {
    name: "ギャラドス（ぎゃらどす）",
    index: 130,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0130.PNG?alt=media&token=bade1618-42a4-4945-829a-7fcda8d73a12"
  },
  {
    name: "【シャドウ】ギャラドス（しゃどうぎゃらどす）",
    index: 20130,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0130.PNG?alt=media&token=bade1618-42a4-4945-829a-7fcda8d73a12"
  },
  {
    name: "ラプラス（らぷらす）",
    index: 131,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0131.PNG?alt=media&token=be1f1f84-299e-4c53-bcd4-be68d04871a1"
  },
  {
    name: "【シャドウ】ラプラス（しゃどうらぷらす）",
    index: 20131,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0131.PNG?alt=media&token=be1f1f84-299e-4c53-bcd4-be68d04871a1"
  },
  {
    name: "メタモン（めたもん）",
    index: 132,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0132.PNG?alt=media&token=8efede42-b842-4a95-ae3f-05cbe3c61b20"
  },
  {
    name: "イーブイ（いーぶい）",
    index: 133,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0133.PNG?alt=media&token=7939f187-b351-4874-9b6f-12a8439c019e"
  },
  {
    name: "シャワーズ（しゃわーず）",
    index: 134,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0134.PNG?alt=media&token=3ce02e45-019a-4949-b1e3-53c779ad6ea8"
  },
  {
    name: "サンダース（さんだーす）",
    index: 135,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0135.PNG?alt=media&token=a9d91081-799e-4b1f-ba38-25ccb05b4fda"
  },
  {
    name: "ブースター（ぶーすたー）",
    index: 136,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0136.PNG?alt=media&token=90b5c818-681a-4db3-8fda-8c3fbe8c6e7d"
  },
  {
    name: "ポリゴン（ぽりごん）",
    index: 137,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0137.PNG?alt=media&token=7e738c58-3d20-4169-9256-223a5b4329bb"
  },
  {
    name: "【シャドウ】ポリゴン（しゃどうぽりごん）",
    index: 20137,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0137.PNG?alt=media&token=7e738c58-3d20-4169-9256-223a5b4329bb"
  },
  {
    name: "オムナイト（おむないと）",
    index: 138,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0138.PNG?alt=media&token=b704d181-7cc8-4a49-84bf-f29fe08f6257"
  },
  {
    name: "【シャドウ】オムナイト（しゃどうおむないと）",
    index: 20138,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0138.PNG?alt=media&token=b704d181-7cc8-4a49-84bf-f29fe08f6257"
  },
  {
    name: "オムスター（おむすたー）",
    index: 139,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0139.PNG?alt=media&token=be5a47a2-b940-4194-bf4f-25c167d51335"
  },
  {
    name: "【シャドウ】オムスター（しゃどうおむすたー）",
    index: 20139,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0139.PNG?alt=media&token=be5a47a2-b940-4194-bf4f-25c167d51335"
  },
  {
    name: "カブト（かぶと）",
    index: 140,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0140.PNG?alt=media&token=e67e1533-6425-42e2-98b7-bbe99453df56"
  },
  {
    name: "カブトプス（かぶとぷす）",
    index: 141,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0141.PNG?alt=media&token=883364b8-8798-4583-a5e2-74d65b0af74e"
  },
  {
    name: "プテラ（ぷてら）",
    index: 142,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0142.PNG?alt=media&token=e11139f4-e754-498a-971b-1ee314f206b6"
  },
  {
    name: "カビゴン（かびごん）",
    index: 143,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0143.PNG?alt=media&token=fa86d39d-3925-46be-88e4-4af4e9f0f498"
  },
  {
    name: "【シャドウ】カビゴン（しゃどうかびごん）",
    index: 20143,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0143.PNG?alt=media&token=fa86d39d-3925-46be-88e4-4af4e9f0f498"
  },
  {
    name: "フリーザー（ふりーざー）",
    index: 144,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0144.PNG?alt=media&token=a0aa69b0-72de-4911-8dff-4016c5960163"
  },
  {
    name: "【シャドウ】フリーザー（しゃどうふりーざー）",
    index: 20144,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0144.PNG?alt=media&token=a0aa69b0-72de-4911-8dff-4016c5960163"
  },
  {
    name: "サンダー（さんだー）",
    index: 145,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0145.PNG?alt=media&token=4bed0da7-dadd-44de-8664-39c04f8b1c31"
  },
  {
    name: "【シャドウ】サンダー（しゃどうさんだー）",
    index: 20145,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0145.PNG?alt=media&token=4bed0da7-dadd-44de-8664-39c04f8b1c31"
  },
  {
    name: "ファイヤー（ふぁいやー）",
    index: 146,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0146.PNG?alt=media&token=9d892786-f65c-4b47-9ea5-e08a058d1bc1"
  },
  {
    name: "【シャドウ】ファイヤー（しゃどうふぁいやー）",
    index: 20146,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0146.PNG?alt=media&token=9d892786-f65c-4b47-9ea5-e08a058d1bc1"
  },
  {
    name: "ミニリュウ（みにりゅう）",
    index: 147,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0147.PNG?alt=media&token=0a52bb70-ebb4-49ef-a163-e1039579f7f5"
  },
  {
    name: "【シャドウ】ミニリュウ（しゃどうみにりゅう）",
    index: 20147,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0147.PNG?alt=media&token=0a52bb70-ebb4-49ef-a163-e1039579f7f5"
  },
  {
    name: "ハクリュー（はくりゅー）",
    index: 148,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0148.PNG?alt=media&token=dfe111e7-5ff0-409a-83b8-d8f5bb766f3b"
  },
  {
    name: "【シャドウ】ハクリュー（しゃどうはくりゅー）",
    index: 20148,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0148.PNG?alt=media&token=dfe111e7-5ff0-409a-83b8-d8f5bb766f3b"
  },
  {
    name: "カイリュー（かいりゅー）",
    index: 149,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0149.PNG?alt=media&token=d3cc3639-35e4-4dcd-bb06-fe33e589ab62"
  },
  {
    name: "【シャドウ】カイリュー（しゃどうかいりゅー）",
    index: 20149,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0149.PNG?alt=media&token=d3cc3639-35e4-4dcd-bb06-fe33e589ab62"
  },
  {
    name: "ミュウツー（みゅうつー）",
    index: 150,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0150.PNG?alt=media&token=d879393d-a725-4c1d-a4c3-c3878d53aa49"
  },
  {
    name: "ミュウ（みゅう）",
    index: 151,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0151.PNG?alt=media&token=d8cb2a7c-403f-4ab7-ba84-b3194e206ea3"
  },
  {
    name: "チコリータ（ちこりーた）",
    index: 152,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0152.PNG?alt=media&token=3feecb71-e65c-4b02-b3c6-132b45020cfa"
  },
  {
    name: "ベイリーフ（べいりーふ）",
    index: 153,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0153.PNG?alt=media&token=8555e935-1405-436c-b416-2f16d4bf433d"
  },
  {
    name: "メガニウム（めがにうむ）",
    index: 154,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0154.PNG?alt=media&token=6d43a92d-4018-403c-b338-f1eb8331585e"
  },
  {
    name: "ヒノアラシ（ひのあらし）",
    index: 155,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0155.PNG?alt=media&token=ea1a6935-1ce7-4c66-8cea-6ae8a673f111"
  },
  {
    name: "マグマラシ（まぐまらし）",
    index: 156,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0156.PNG?alt=media&token=cb460136-02ae-4ed4-9c52-008b6b11ac7a"
  },
  {
    name: "バクフーン（ばくふーん）",
    index: 157,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0157.PNG?alt=media&token=3628b950-5783-4a36-9a08-1ff3a5fa3f7f"
  },
  {
    name: "ワニノコ（わにのこ）",
    index: 158,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0158.PNG?alt=media&token=a35c9eae-cbaf-4be3-9be2-579285dc783c"
  },
  {
    name: "アリゲイツ（ありげいつ）",
    index: 159,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0159.PNG?alt=media&token=978fc4e3-6c71-44c6-a468-29a8e0f97ea7"
  },
  {
    name: "オーダイル（おーだいる）",
    index: 160,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0160.PNG?alt=media&token=b93bea4a-d93b-42a2-96dc-eecfe7b45d32"
  },
  {
    name: "オタチ（おたち）",
    index: 161,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0161.PNG?alt=media&token=4387ce2a-476c-49b1-a094-43e406a18e50"
  },
  {
    name: "オオタチ（おおたち）",
    index: 162,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0162.PNG?alt=media&token=91c26194-95d0-4b17-ab71-9bae31b2ea4c"
  },
  {
    name: "ホーホー（ほーほー）",
    index: 163,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0163.PNG?alt=media&token=b5b48b7f-1a70-4c85-b946-315efd9fd479"
  },
  {
    name: "ヨルノズク（よるのずく）",
    index: 164,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0164.PNG?alt=media&token=8d82cedd-9dc6-4b44-8e83-de066973b4f2"
  },
  {
    name: "レディバ（れでぃば）",
    index: 165,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0165.PNG?alt=media&token=64bbf6a6-7312-41d9-87dd-708c45a2ed58"
  },
  {
    name: "レディアン（れでぃあん）",
    index: 166,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0166.PNG?alt=media&token=880a5b30-0284-424e-b05f-522470850eef"
  },
  {
    name: "イトマル（いとまる）",
    index: 167,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0167.PNG?alt=media&token=cea43dbc-feec-417e-b5db-a4639ca61a82"
  },
  {
    name: "アリアドス（ありあどす）",
    index: 168,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0168.PNG?alt=media&token=bcbcd28f-3b72-48ef-b4b6-c4271d9a0b80"
  },
  {
    name: "クロバット（くろばっと）",
    index: 169,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0169.PNG?alt=media&token=53f990ff-a4ba-4fa3-977f-efe9827ed6f5"
  },
  {
    name: "【シャドウ】クロバット（しゃどうくろばっと）",
    index: 20169,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0169.PNG?alt=media&token=53f990ff-a4ba-4fa3-977f-efe9827ed6f5"
  },
  {
    name: "チョンチー（ちょんちー）",
    index: 170,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0170.PNG?alt=media&token=8e4d4804-35e6-4f13-8a03-02cab98cc052"
  },
  {
    name: "ランターン（らんたーん）",
    index: 171,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0171.PNG?alt=media&token=9e2e4fa1-8e5f-4c2e-b7c9-4583002c4a1f"
  },
  {
    name: "ピチュー（ぴちゅー）",
    index: 172,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0172.PNG?alt=media&token=11069c08-ce77-4a05-b644-57b6bebf0724"
  },
  {
    name: "ピィ（ぴぃ）",
    index: 173,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0173.PNG?alt=media&token=7b12ba35-9e8e-4071-81c9-de2550f69728"
  },
  {
    name: "ププリン（ぷぷりん）",
    index: 174,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0174.PNG?alt=media&token=26d26915-7a06-4474-b7bf-1f2178a8eea3"
  },
  {
    name: "トゲピー（とげぴー）",
    index: 175,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0175.PNG?alt=media&token=5c6712ae-c15d-4ffb-ad50-333a189254c0"
  },
  {
    name: "トゲチック（とげちっく）",
    index: 176,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0176.PNG?alt=media&token=3e6e4b7f-5054-4b84-a500-5d983cf55487"
  },
  {
    name: "ネイティ（ねいてぃ）",
    index: 177,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0177.PNG?alt=media&token=60fdfceb-6ab2-422a-bce3-5c57990fbc27"
  },
  {
    name: "ネイティオ（ねいてぃお）",
    index: 178,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0178.PNG?alt=media&token=2da0470e-aceb-466f-967e-ae944dc69789"
  },
  {
    name: "メリープ（めりーぷ）",
    index: 179,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0179.PNG?alt=media&token=3e3d1f9a-d430-4eb5-9a2c-9ebd124aa1a6"
  },
  {
    name: "【シャドウ】メリープ（しゃどうめりーぷ）",
    index: 20179,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0179.PNG?alt=media&token=3e3d1f9a-d430-4eb5-9a2c-9ebd124aa1a6"
  },
  {
    name: "モココ（もここ）",
    index: 180,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0180.PNG?alt=media&token=1245d340-63eb-4003-a4cb-ddbb9c6a68d2"
  },
  {
    name: "【シャドウ】モココ（しゃどうもここ）",
    index: 20180,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0180.PNG?alt=media&token=1245d340-63eb-4003-a4cb-ddbb9c6a68d2"
  },
  {
    name: "デンリュウ（でんりゅう）",
    index: 181,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0181.PNG?alt=media&token=1bdf163c-941a-43b3-919a-d6f496160070"
  },
  {
    name: "【シャドウ】デンリュウ（しゃどうでんりゅう）",
    index: 20181,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0181.PNG?alt=media&token=1bdf163c-941a-43b3-919a-d6f496160070"
  },
  {
    name: "キレイハナ（きれいはな）",
    index: 182,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0182.PNG?alt=media&token=fc414834-deb2-4298-aa87-ec8ac29d3a25"
  },
  {
    name: "【シャドウ】キレイハナ（しゃどうきれいはな）",
    index: 20182,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0182.PNG?alt=media&token=fc414834-deb2-4298-aa87-ec8ac29d3a25"
  },
  {
    name: "マリル（まりる）",
    index: 183,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0183.PNG?alt=media&token=aacb6a5e-fbbc-4dcd-bc48-712d4fde8bf0"
  },
  {
    name: "マリルリ（まりるり）",
    index: 184,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0184.PNG?alt=media&token=ffcb54fd-348c-490d-9df2-cba7529e720a"
  },
  {
    name: "ウソッキー（うそっきー）",
    index: 185,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0185.PNG?alt=media&token=5cb5067a-108e-47e0-b0d0-79a3351eed08"
  },
  {
    name: "ニョロトノ（にょろとの）",
    index: 186,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0186.PNG?alt=media&token=baf8ecb4-6865-4d09-99c4-159b63971e51"
  },
  {
    name: "【シャドウ】ニョロトノ（しゃどうにょろとの）",
    index: 20186,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0186.PNG?alt=media&token=baf8ecb4-6865-4d09-99c4-159b63971e51"
  },
  {
    name: "ハネッコ（はねっこ）",
    index: 187,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0187.PNG?alt=media&token=211adf30-444a-47a7-8dc6-c4de7d121242"
  },
  {
    name: "ポポッコ（ぽぽっこ）",
    index: 188,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0188.PNG?alt=media&token=52b8fc38-aa15-46de-b200-c377b01eae8c"
  },
  {
    name: "ワタッコ（わたっこ）",
    index: 189,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0189.PNG?alt=media&token=8bd3ddf0-2fa7-4651-9e50-d30887b00caa"
  },
  {
    name: "エイパム（えいぱむ）",
    index: 190,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0190.PNG?alt=media&token=2137ad7a-ee87-45f0-bc9d-5df777dfd034"
  },
  {
    name: "ヒマナッツ（ひまなっつ）",
    index: 191,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0191.PNG?alt=media&token=91fed48d-2f16-421e-a97b-6a06501106c1"
  },
  {
    name: "キマワリ（きまわり）",
    index: 192,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0192.PNG?alt=media&token=15a40a31-fc7e-4212-9e66-7b6481c7a95b"
  },
  {
    name: "ヤンヤンマ（やんやんま）",
    index: 193,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0193.PNG?alt=media&token=b3f5dc9c-7123-46a6-9026-04a16084f426"
  },
  {
    name: "ウパー（うぱー）",
    index: 194,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0194.PNG?alt=media&token=26d4d3cb-7562-4e87-95de-596d5ec35f89"
  },
  {
    name: "ヌオー（ぬおー）",
    index: 195,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0195.PNG?alt=media&token=f6c069ff-c0c7-4826-9af1-465b8421d51f"
  },
  {
    name: "エーフィ（えーふぃ）",
    index: 196,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0196.PNG?alt=media&token=b835b677-b7ba-4d22-8f9f-4d55928df81a"
  },
  {
    name: "ブラッキー（ぶらっきー）",
    index: 197,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0197.PNG?alt=media&token=a1ee370a-f85f-4660-8d3a-cebba661cc2a"
  },
  {
    name: "ヤミカラス（やみからす）",
    index: 198,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0198.PNG?alt=media&token=0bd505a0-9c80-47cb-be17-e30bb1a36bef"
  },
  {
    name: "ヤドキング（やどきんぐ）",
    index: 199,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0199.PNG?alt=media&token=b0b1431f-6c37-4e49-84c2-d8ee17f76cbb"
  },
  {
    name: "ムウマ（むうま）",
    index: 200,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0200.PNG?alt=media&token=2dc4757d-c8f2-4c9d-baec-1a196953ce36"
  },
  {
    name: "【シャドウ】ムウマ（しゃどうむうま）",
    index: 20200,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0200.PNG?alt=media&token=2dc4757d-c8f2-4c9d-baec-1a196953ce36"
  },
  {
    name: "アンノーン（あんのーん）",
    index: 201,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0201.PNG?alt=media&token=80fd05f6-d2fb-4b4b-8e47-144dfa0cec11"
  },
  {
    name: "ソーナンス（そーなんす）",
    index: 202,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0202.PNG?alt=media&token=6029f427-820f-4fcb-9db0-5472f61ee231"
  },
  {
    name: "【シャドウ】ソーナンス（しゃどうそーなんす）",
    index: 20202,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0202.PNG?alt=media&token=6029f427-820f-4fcb-9db0-5472f61ee231"
  },
  {
    name: "キリンリキ（きりんりき）",
    index: 203,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0203.PNG?alt=media&token=c9ed9e09-21c6-4d1e-950a-9337f0f85341"
  },
  {
    name: "クヌギダマ（くぬぎだま）",
    index: 204,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0204.PNG?alt=media&token=8033f204-d3e0-4fc4-b710-431976693fd6"
  },
  {
    name: "フォレトス（ふぉれとす）",
    index: 205,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0205.PNG?alt=media&token=598a92f7-f51a-4abf-82ed-000114c2f9c4"
  },
  {
    name: "ノコッチ（のこっち）",
    index: 206,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0206.PNG?alt=media&token=a37a2872-2ff3-4b2b-80c3-53c7a36c6c2f"
  },
  {
    name: "グライガー（ぐらいがー）",
    index: 207,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0207.PNG?alt=media&token=4f299ea8-6e76-4043-9cde-d359c1479a06"
  },
  {
    name: "ハガネール（はがねーる）",
    index: 208,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0208.PNG?alt=media&token=f28d704d-2554-4701-9937-ac6520c518a9"
  },
  {
    name: "ブルー（ぶるー）",
    index: 209,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0209.PNG?alt=media&token=c349f902-def1-4c57-b208-129f13b299ce"
  },
  {
    name: "グランブル（ぐらんぶる）",
    index: 210,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0210.PNG?alt=media&token=46ecd0f1-c8c4-4d1f-8e71-dfe07cba78ac"
  },
  {
    name: "ハリーセン（はりーせん）",
    index: 211,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0211.PNG?alt=media&token=d3ca7b7b-1e66-4c66-8728-f88c0e12ece6"
  },
  {
    name: "ハッサム（はっさむ）",
    index: 212,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0212.PNG?alt=media&token=8487ad14-17f2-4702-8b67-36e41a073c93"
  },
  {
    name: "【シャドウ】ハッサム（しゃどうはっさむ）",
    index: 20212,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0212.PNG?alt=media&token=8487ad14-17f2-4702-8b67-36e41a073c93"
  },
  {
    name: "ツボツボ（つぼつぼ）",
    index: 213,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0213.PNG?alt=media&token=17388076-cf04-4151-9fc8-33ce8c4ffe98"
  },
  {
    name: "ヘラクロス（へらくろす）",
    index: 214,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0214.png?alt=media&token=b860f999-ae9b-4c91-a7c8-6d24fa86b0b9"
  },
  {
    name: "ニューラ（にゅーら）",
    index: 215,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0215.PNG?alt=media&token=97941378-1763-42e1-9f17-f7a1f64f054f"
  },
  {
    name: "【シャドウ】ニューラ（しゃどうにゅーら）",
    index: 20215,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0215.PNG?alt=media&token=97941378-1763-42e1-9f17-f7a1f64f054f"
  },
  {
    name: "ヒメグマ（ひめぐま）",
    index: 216,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0216.PNG?alt=media&token=07d95420-d146-4fe2-bab2-8e81f1cda325"
  },
  {
    name: "リングマ（りんぐま）",
    index: 217,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0217.PNG?alt=media&token=d1423d65-a2ac-4015-bd7a-bef174bf23bb"
  },
  {
    name: "マグマッグ（まぐまっぐ）",
    index: 218,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0218.PNG?alt=media&token=682b1e5a-a34e-41f9-8a9b-708346c1c7e7"
  },
  {
    name: "マグカルゴ（まぐかるご）",
    index: 219,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0219.PNG?alt=media&token=d61cd13b-d883-411d-8e13-1efc5297f6db"
  },
  {
    name: "ウリムー（うりむー）",
    index: 220,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0220.PNG?alt=media&token=170bd8f6-ca38-4bac-bfc9-ec9035fc701b"
  },
  {
    name: "イノムー（いのむー）",
    index: 221,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0221.PNG?alt=media&token=31ec0d74-51f4-48aa-8e5a-11bf47a3bb10"
  },
  {
    name: "サニーゴ（さにーご）",
    index: 222,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0222.PNG?alt=media&token=a5938730-b3b1-40af-9899-c9d77a7312ad"
  },
  {
    name: "テッポウオ（てっぽうお）",
    index: 223,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0223.PNG?alt=media&token=2463bcdd-c013-4f9e-9de5-e5545d7d29c5"
  },
  {
    name: "オクタン（おくたん）",
    index: 224,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0224.PNG?alt=media&token=1109db7f-6ca0-481d-9946-20bf88cba26e"
  },
  {
    name: "デリバード（でりばーど）",
    index: 225,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0225.PNG?alt=media&token=6b70b280-76ba-408f-beb5-892bbcccf850"
  },
  {
    name: "【シャドウ】デリバード（しゃどうでりばーど）",
    index: 20225,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0225.PNG?alt=media&token=6b70b280-76ba-408f-beb5-892bbcccf850"
  },
  {
    name: "マンタイン（まんたいん）",
    index: 226,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0226.PNG?alt=media&token=94fc1918-0502-4882-851a-44a28522184b"
  },
  {
    name: "エアームド（えあーむど）",
    index: 227,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0227.PNG?alt=media&token=aae5e17b-78d4-45c2-a5da-176a41c8c75e"
  },
  {
    name: "デルビル（でるびる）",
    index: 228,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0228.PNG?alt=media&token=72269e9b-af55-4750-9479-7c7365e9b967"
  },
  {
    name: "【シャドウ】デルビル（しゃどうでるびる）",
    index: 20228,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0228.PNG?alt=media&token=72269e9b-af55-4750-9479-7c7365e9b967"
  },
  {
    name: "ヘルガー（へるがー）",
    index: 229,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0229.PNG?alt=media&token=ab1e141f-12e6-4c9c-887e-3e07d1c0c21d"
  },
  {
    name: "【シャドウ】ヘルガー（しゃどうへるがー）",
    index: 20229,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0229.PNG?alt=media&token=ab1e141f-12e6-4c9c-887e-3e07d1c0c21d"
  },
  {
    name: "キングドラ（きんぐどら）",
    index: 230,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0230.PNG?alt=media&token=baced5ac-9ee0-46c2-a2f4-10157d705b1c"
  },
  {
    name: "ゴマゾウ（ごまぞう）",
    index: 231,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0231.PNG?alt=media&token=5ef535b8-4aba-4603-a2cc-e0fa55de04fb"
  },
  {
    name: "ドンファン（どんふぁん）",
    index: 232,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0232.PNG?alt=media&token=7b3166dc-016f-4d97-8649-a05b9098422e"
  },
  {
    name: "ポリゴン2（ぽりごんつー２）",
    index: 233,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0233.PNG?alt=media&token=1ffc4e8a-6182-4329-b57a-73dfe1554e16"
  },
  {
    name: "【シャドウ】ポリゴン2（しゃどうぽりごんつー２）",
    index: 20233,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0233.PNG?alt=media&token=1ffc4e8a-6182-4329-b57a-73dfe1554e16"
  },
  {
    name: "オドシシ（おどしし）",
    index: 234,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0234.PNG?alt=media&token=71ffc061-fc55-4456-909a-0e033230a5a0"
  },
  {
    name: "【シャドウ】オドシシ（しゃどうおどしし）",
    index: 20234,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0234.PNG?alt=media&token=71ffc061-fc55-4456-909a-0e033230a5a0"
  },
  {
    name: "ドーブル（どーぶる）",
    index: 235,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0235.PNG?alt=media&token=8d05bb84-7f8a-4a48-b143-0d9f536b278e"
  },
  {
    name: "バルキー（ばるきー）",
    index: 236,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0236.PNG?alt=media&token=85fdb285-ddcf-468c-8c93-87af7b1e3fd8"
  },
  {
    name: "カポエラー（かぽえらー）",
    index: 237,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0237.PNG?alt=media&token=94fb4fca-28c5-44c4-be8c-c42ed6d9e603"
  },
  {
    name: "ムチュール（むちゅーる）",
    index: 238,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0238.PNG?alt=media&token=3c9775ca-6aa4-44e5-866e-eb0eef70405f"
  },
  {
    name: "エレキッド（えれきっど）",
    index: 239,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0239.PNG?alt=media&token=4aba15ca-48ac-47b1-aa0c-8b7baf9f46da"
  },
  {
    name: "ブビィ（ぶびぃ）",
    index: 240,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0240.PNG?alt=media&token=b11ec351-48b5-443d-881e-edab2829f374"
  },
  {
    name: "ミルタンク（みるたんく）",
    index: 241,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0241.PNG?alt=media&token=2b538155-1dd8-4a4d-becb-b48deafa9327"
  },
  {
    name: "ハピナス（はぴなす）",
    index: 242,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0242.PNG?alt=media&token=9ffbc29f-5cd0-40ad-91aa-d57a3f8f2c60"
  },
  {
    name: "ライコウ（らいこう）",
    index: 243,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0243.PNG?alt=media&token=0a3ef857-0c44-4b53-b801-657c89d55096"
  },
  {
    name: "【シャドウ】ライコウ（しゃどうらいこう）",
    index: 20243,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0243.PNG?alt=media&token=0a3ef857-0c44-4b53-b801-657c89d55096"
  },
  {
    name: "エンテイ（えんてい）",
    index: 244,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0244.PNG?alt=media&token=c44f3212-58e2-4315-be87-bc40d1637504"
  },
  {
    name: "スイクン（すいくん）",
    index: 245,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0245.PNG?alt=media&token=25d467da-45ec-4d9f-aad6-fbc47c398d83"
  },
  {
    name: "ヨーギラス（よーぎらす）",
    index: 246,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0246.PNG?alt=media&token=98ea1b9e-306f-4c47-a21c-58e2d079e3db"
  },
  {
    name: "【シャドウ】ヨーギラス（しゃどうよーぎらす）",
    index: 20246,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0246.PNG?alt=media&token=98ea1b9e-306f-4c47-a21c-58e2d079e3db"
  },
  {
    name: "サナギラス（さなぎらす）",
    index: 247,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0247.PNG?alt=media&token=1d8fdaa1-777b-431d-a998-0fe8afe24fda"
  },
  {
    name: "【シャドウ】サナギラス（しゃどうさなぎらす）",
    index: 20247,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0247.PNG?alt=media&token=1d8fdaa1-777b-431d-a998-0fe8afe24fda"
  },
  {
    name: "バンギラス（ばんぎらす）",
    index: 248,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0248.PNG?alt=media&token=cbb0b8c6-2d8f-4bd2-aab4-2a4910e2512a"
  },
  {
    name: "【シャドウ】バンギラス（しゃどうばんぎらす）",
    index: 20248,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0248.PNG?alt=media&token=cbb0b8c6-2d8f-4bd2-aab4-2a4910e2512a"
  },
  {
    name: "ルギア（るぎあ）",
    index: 249,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0249.PNG?alt=media&token=8cb10a05-045e-48a2-916f-f0cf2ec99780"
  },
  {
    name: "ホウオウ（ほうおう）",
    index: 250,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0250.PNG?alt=media&token=049200d8-d0f2-4fa9-bcc7-7ddbf7b4e7ff"
  },
  {
    name: "セレビィ（せれびぃ）",
    index: 251,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0251.PNG?alt=media&token=e1518229-cb2f-4fe1-a4fa-24841c61dae4"
  },
  {
    name: "キモリ（きもり）",
    index: 252,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0252.PNG?alt=media&token=7fa0bff5-3dc1-4ba5-8e3b-627359bb2f0c"
  },
  {
    name: "ジュプトル（じゅぷとる）",
    index: 253,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0253.PNG?alt=media&token=112aa97a-60a8-4aec-b3fb-2c75239c03eb"
  },
  {
    name: "ジュカイン（じゅかいん）",
    index: 254,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0254.PNG?alt=media&token=4d7ce901-bfe3-4cec-8a89-ae932bac2443"
  },
  {
    name: "アチャモ（あちゃも）",
    index: 255,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0255.PNG?alt=media&token=86ee667c-8bb2-4c9a-bbfe-cf7b807682da"
  },
  {
    name: "ワカシャモ（わかしゃも）",
    index: 256,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0256.PNG?alt=media&token=4b1507e0-4b67-4b00-bb8f-e15a5d9da34a"
  },
  {
    name: "バシャーモ（ばしゃーも）",
    index: 257,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0257.PNG?alt=media&token=4b9783d6-1a28-4a4f-bc97-377e16017bf2"
  },
  {
    name: "ミズゴロウ（みずごろう）",
    index: 258,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0258.PNG?alt=media&token=5e73a9cc-1799-4aa8-af71-9a0846b7a27f"
  },
  {
    name: "【シャドウ】ミズゴロウ（しゃどうみずごろう）",
    index: 20258,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0258.PNG?alt=media&token=5e73a9cc-1799-4aa8-af71-9a0846b7a27f"
  },
  {
    name: "ヌマクロー（ぬまくろー）",
    index: 259,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0259.PNG?alt=media&token=48550bf9-9b0a-498c-abe4-d0e50e9fe3da"
  },
  {
    name: "【シャドウ】ヌマクロー（しゃどうぬまくろー）",
    index: 20259,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0259.PNG?alt=media&token=48550bf9-9b0a-498c-abe4-d0e50e9fe3da"
  },
  {
    name: "ラグラージ（らぐらーじ）",
    index: 260,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0260.PNG?alt=media&token=031b68d5-267a-4494-be78-2c68a40bac87"
  },
  {
    name: "【シャドウ】ラグラージ（しゃどうらぐらーじ）",
    index: 20260,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0260.PNG?alt=media&token=031b68d5-267a-4494-be78-2c68a40bac87"
  },
  {
    name: "ポチエナ（ぽちえな）",
    index: 261,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0261.PNG?alt=media&token=6259ff23-d043-4ee1-b3b7-35dfb813149f"
  },
  {
    name: "グラエナ（ぐらえな）",
    index: 262,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0262.PNG?alt=media&token=2ad7ed7c-8274-42ca-876a-d8be3aee6afd"
  },
  {
    name: "ジグザグマ（じぐざぐま）",
    index: 263,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0263.PNG?alt=media&token=2723722b-50a0-4970-abb5-5f56f85fa0d5"
  },
  {
    name: "マッスグマ（まっすぐま）",
    index: 264,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0264.PNG?alt=media&token=3ea158c2-43af-4778-a78b-7a05bb7bc25f"
  },
  {
    name: "ケムッソ（けむっそ）",
    index: 265,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0265.PNG?alt=media&token=708aa608-a4b9-4ac3-9704-8b88e721337f"
  },
  {
    name: "カラサリス（からさりす）",
    index: 266,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0266.PNG?alt=media&token=03a35a30-b4ed-4f43-b5f3-bfcb87ce7b81"
  },
  {
    name: "アゲハント（あげはんと）",
    index: 267,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0267.PNG?alt=media&token=86e41d9d-2043-4e99-97ad-6946943ae50e"
  },
  {
    name: "マユルド（まゆるど）",
    index: 268,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0268.PNG?alt=media&token=8f4a4660-2a1e-4eef-8bfc-03c7b5839f73"
  },
  {
    name: "ドクケイル（どくけいる）",
    index: 269,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0269.PNG?alt=media&token=dac4deca-ccb4-4660-bfa9-3051711414d1"
  },
  {
    name: "ハスボー（はすぼー）",
    index: 270,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0270.PNG?alt=media&token=c8a12487-c935-44f7-8500-e107a887164f"
  },
  {
    name: "ハスブレロ（はすぶれろ）",
    index: 271,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0271.PNG?alt=media&token=0f80687a-f76e-4dc9-ab61-00e36767c8a9"
  },
  {
    name: "ルンパッパ（るんぱっぱ）",
    index: 272,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0272.PNG?alt=media&token=4a26d485-317c-427e-8499-af870bdad367"
  },
  {
    name: "タネボー（たねぼー）",
    index: 273,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0273.PNG?alt=media&token=2fa7e460-b173-4f2f-8646-c9c84e1fa5f6"
  },
  {
    name: "【シャドウ】タネボー（しゃどうたねぼー）",
    index: 20273,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0273.PNG?alt=media&token=2fa7e460-b173-4f2f-8646-c9c84e1fa5f6"
  },
  {
    name: "コノハナ（このはな）",
    index: 274,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0274.PNG?alt=media&token=80f05626-5a53-41da-94ac-cca3d1f5ae8b"
  },
  {
    name: "【シャドウ】コノハナ（しゃどうこのはな）",
    index: 20274,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0274.PNG?alt=media&token=80f05626-5a53-41da-94ac-cca3d1f5ae8b"
  },
  {
    name: "ダーテング（だーてんぐ）",
    index: 275,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0275.PNG?alt=media&token=5b45c61d-ba33-491b-8424-dad570d55df4"
  },
  {
    name: "【シャドウ】ダーテング（しゃどうだーてんぐ）",
    index: 20275,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0275.PNG?alt=media&token=5b45c61d-ba33-491b-8424-dad570d55df4"
  },
  {
    name: "スバメ（すばめ）",
    index: 276,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0276.PNG?alt=media&token=754960c6-f20b-4301-8a94-6f48868912d9"
  },
  {
    name: "オオスバメ（おおすばめ）",
    index: 277,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0277.PNG?alt=media&token=b389ee1c-76f8-419b-8e05-5078b7f048fb"
  },
  {
    name: "キャモメ（きゃもめ）",
    index: 278,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0278.PNG?alt=media&token=1b0c7569-6eb4-4464-b366-a9ead2b1e56e"
  },
  {
    name: "ペリッパー（ぺりっぱー）",
    index: 279,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0279.PNG?alt=media&token=d81182d3-94da-4170-876e-f4cd1031a6ed"
  },
  {
    name: "ラルトス（らるとす）",
    index: 280,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0280.PNG?alt=media&token=722cfde9-020d-4dda-bd65-03857263b008"
  },
  {
    name: "【シャドウ】ラルトス（しゃどうらるとす）",
    index: 20280,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0280.PNG?alt=media&token=722cfde9-020d-4dda-bd65-03857263b008"
  },
  {
    name: "キルリア（きるりあ）",
    index: 281,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0281.PNG?alt=media&token=a5bfcc3f-860e-489b-9988-215919c8ba93"
  },
  {
    name: "【シャドウ】キルリア（しゃどうきるりあ）",
    index: 20281,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0281.PNG?alt=media&token=a5bfcc3f-860e-489b-9988-215919c8ba93"
  },
  {
    name: "サーナイト（さーないと）",
    index: 282,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0282.PNG?alt=media&token=1b59b13e-1e52-4350-865f-904a5ee09e8e"
  },
  {
    name: "【シャドウ】サーナイト（しゃどうさーないと）",
    index: 20282,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0282.PNG?alt=media&token=1b59b13e-1e52-4350-865f-904a5ee09e8e"
  },
  {
    name: "アメタマ（あめたま）",
    index: 283,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0283.PNG?alt=media&token=51e9c174-36d7-4c92-b243-5772ab1926e8"
  },
  {
    name: "アメモース（あまもーす）",
    index: 284,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0284.PNG?alt=media&token=e42d1b2f-354e-405b-9b96-ca8695f0ddd8"
  },
  {
    name: "キノココ（きのここ）",
    index: 285,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0285.PNG?alt=media&token=ceb6c5e0-f786-4f7e-83c2-ba36ae1f52d8"
  },
  {
    name: "キノガッサ（きのがっさ）",
    index: 286,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0286.PNG?alt=media&token=fc475799-bddb-4025-b8ca-bdeadeec51c0"
  },
  {
    name: "キノガッサ（きのがっさ）",
    index: 287,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0287.PNG?alt=media&token=a93ba17a-98bd-4fb6-ba72-58c4bf6e8734"
  },
  {
    name: "ヤルキモノ（やるきもの）",
    index: 288,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0288.PNG?alt=media&token=b7f4590f-89f9-4f40-9b33-d5e975d05393"
  },
  {
    name: "ケッキング（けっきんぐ）",
    index: 289,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0289.PNG?alt=media&token=d3f7c622-96e3-4595-9d60-2f1322a6e838"
  },
  {
    name: "ツチニン（つちにん）",
    index: 290,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0290.PNG?alt=media&token=5c7ebb66-9bb1-4d71-8b6a-9ad9af43abb6"
  },
  {
    name: "テッカニン（てっかにん）",
    index: 291,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0291.PNG?alt=media&token=9507317b-4ded-469f-8dc2-67c776a6596a"
  },
  {
    name: "ヌケニン（ぬけにん）",
    index: 292,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0292.PNG?alt=media&token=38d847a7-3d09-490e-b69e-2b55d7dd09ca"
  },
  {
    name: "ゴニョニョ（ごにょにょ）",
    index: 293,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0293.PNG?alt=media&token=1ec5d7ef-5b0c-4c17-bc52-a2ff096e9966"
  },
  {
    name: "ドゴーム（どごーむ）",
    index: 294,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0294.PNG?alt=media&token=ec4c6bc7-a167-488c-a98a-a870b9cf825c"
  },
  {
    name: "バクオング（ばくおんぐ）",
    index: 295,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0295.PNG?alt=media&token=5129596f-9a4c-417e-a525-4aa3ad65c967"
  },
  {
    name: "マクノシタ（まくのした）",
    index: 296,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0296.PNG?alt=media&token=65c24f1e-ffd8-4a54-b77d-7410e14ed170"
  },
  {
    name: "ハリテヤマ（はりてやま）",
    index: 297,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0297.PNG?alt=media&token=b1f6a81e-fbfd-463d-a9d6-01a3699b1977"
  },
  {
    name: "ルリリ（るりり）",
    index: 298,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0298.PNG?alt=media&token=c17ff0c8-80bd-4b9d-89a8-3664bce80c92"
  },
  {
    name: "ノズパス（のずぱす）",
    index: 299,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0299.PNG?alt=media&token=2cfc1351-353c-4d3b-be8d-e5e158d96034"
  },
  {
    name: "エネコ（えねこ）",
    index: 300,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0300.PNG?alt=media&token=c3d59baa-f9ae-4ad5-91df-147f0883b921"
  },
  {
    name: "エネコロロ（えねころろ）",
    index: 301,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0301.PNG?alt=media&token=39c40efc-4518-47d1-b762-250bef4604a7"
  },
  {
    name: "ヤミラミ（やみらみ）",
    index: 302,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0302.PNG?alt=media&token=9074cc7a-7a04-42e8-81ad-16490afe6672"
  },
  {
    name: "【シャドウ】ヤミラミ（しゃどうやみらみ）",
    index: 20302,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0302.PNG?alt=media&token=9074cc7a-7a04-42e8-81ad-16490afe6672"
  },
  {
    name: "クチート（くちーと）",
    index: 303,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0303.PNG?alt=media&token=9a54169e-dcfc-40f8-a350-224544c34072"
  },
  {
    name: "【シャドウ】クチート（しゃどうくちーと）",
    index: 20303,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0303.PNG?alt=media&token=9a54169e-dcfc-40f8-a350-224544c34072"
  },
  {
    name: "ココドラ（ここどら）",
    index: 304,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0304.PNG?alt=media&token=bb7b5f4e-b7bd-43d5-a7e9-f0797c4812ca"
  },
  {
    name: "コドラ（こどら）",
    index: 305,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0305.PNG?alt=media&token=15e2fbcc-2b0f-45ad-a742-e5397289f3c0"
  },
  {
    name: "ボスゴドラ（ぼすごどら）",
    index: 306,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0306.PNG?alt=media&token=d768e709-3c46-4cb9-95e9-321b6362c134"
  },
  {
    name: "アサナン（あさなん）",
    index: 307,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0307.PNG?alt=media&token=678475a6-cf19-4c01-bbeb-9297b413e530"
  },
  {
    name: "チャーレム（ちゃーれむ）",
    index: 308,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0308.PNG?alt=media&token=602f0f47-92a3-4823-bc23-45532cbd7e9b"
  },
  {
    name: "ラクライ（らくらい）",
    index: 309,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0309.PNG?alt=media&token=3651a747-8a0b-4403-8c2a-dd3f6b29efce"
  },
  {
    name: "ライボルト（らいぼると）",
    index: 310,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0310.PNG?alt=media&token=ce57539b-ee23-4e04-9eb6-8b6826807cdd"
  },
  {
    name: "プラスル（ぷらする）",
    index: 311,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0311.PNG?alt=media&token=b1339492-2493-4bfa-99ea-ae2f7746e3e8"
  },
  {
    name: "マイナン（まいなん）",
    index: 312,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0312.PNG?alt=media&token=ea528803-9af2-4851-9ec1-8a7bfbc5f4a2"
  },
  {
    name: "バルビート（ばるびーと）",
    index: 313,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0313.PNG?alt=media&token=8b88929d-e78b-4f43-a5ad-e40812b93a8b"
  },
  {
    name: "イルミーゼ（いるみーぜ）",
    index: 314,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0314.png?alt=media&token=4f819a57-202b-451a-b4c4-052a40f2fc13"
  },
  {
    name: "ロゼリア（ろぜりあ）",
    index: 315,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0315.PNG?alt=media&token=9bd19d08-a9dd-4336-b286-7e7454897ec4"
  },
  {
    name: "ゴクリン（ごくりん）",
    index: 316,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0316.PNG?alt=media&token=82a8c111-26e7-4729-9205-7fea8124d916"
  },
  {
    name: "マルノーム（まるのーむ）",
    index: 317,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0317.PNG?alt=media&token=f0ac78b5-a4ef-4f1a-b7ff-ecc97c49a6cb"
  },
  {
    name: "キバニア（きばにあ）",
    index: 318,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0318.PNG?alt=media&token=49efe767-59c0-4ac9-bd5e-960c6930fded"
  },
  {
    name: "【シャドウ】キバニア（しゃどうきばにあ）",
    index: 20318,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0318.PNG?alt=media&token=49efe767-59c0-4ac9-bd5e-960c6930fded"
  },
  {
    name: "サメハダー（さめはだー）",
    index: 319,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0319.PNG?alt=media&token=72cd6c66-e9ba-46bf-a60f-c79caee7983b"
  },
  {
    name: "【シャドウ】サメハダー（しゃどうさめはだー）",
    index: 20319,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0319.PNG?alt=media&token=72cd6c66-e9ba-46bf-a60f-c79caee7983b"
  },
  {
    name: "ホエルコ（ほえるこ）",
    index: 320,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0320.PNG?alt=media&token=58a0e560-1d6a-4973-884c-f653fa17afc8"
  },
  {
    name: "ホエルオー（ほえるおー）",
    index: 321,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0321.PNG?alt=media&token=01348984-0e9b-43b1-ab7f-364bc93cbcc2"
  },
  {
    name: "ドンメル（どんめる）",
    index: 322,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0322.PNG?alt=media&token=ed99975e-da62-44ed-93e3-9825a71d53f2"
  },
  {
    name: "バクーダ（ばくーだ）",
    index: 323,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0323.PNG?alt=media&token=3e4ab844-74ae-4e10-8503-b31e6d2fd43b"
  },
  {
    name: "コータス（こーたす）",
    index: 324,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0324.PNG?alt=media&token=cd10941b-c082-485b-aa3d-6b4881ef9f72"
  },
  {
    name: "バネブー（ばねぶー）",
    index: 325,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0325.PNG?alt=media&token=43f73e9a-14e2-4a4d-a1be-f3211beccf1d"
  },
  {
    name: "ブーピッグ（ぶーぴっぐ）",
    index: 326,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0326.PNG?alt=media&token=14a92534-a1cc-45d4-8592-eebc3483f3d1"
  },
  {
    name: "パッチール（ぱっちーる）",
    index: 327,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0327.PNG?alt=media&token=1dbb9d19-0a33-42bb-9ae5-636f54f016bc"
  },
  {
    name: "ナックラー（なっくらー）",
    index: 328,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0328.PNG?alt=media&token=a09f4760-b62d-4571-abce-55ea814211a6"
  },
  {
    name: "【シャドウ】ナックラー（しゃどうなっくらー）",
    index: 20328,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0328.PNG?alt=media&token=a09f4760-b62d-4571-abce-55ea814211a6"
  },
  {
    name: "ビブラーバ（びぶらーば）",
    index: 329,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0329.PNG?alt=media&token=136945ab-80da-4050-8e65-72cccf8e1b91"
  },
  {
    name: "【シャドウ】ビブラーバ（しゃどうびぶらーば）",
    index: 20329,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0329.PNG?alt=media&token=136945ab-80da-4050-8e65-72cccf8e1b91"
  },
  {
    name: "フライゴン（ふらいごん）",
    index: 330,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0330.PNG?alt=media&token=7637c0cf-88d8-4169-aca8-5c2e8de842b9"
  },
  {
    name: "【シャドウ】フライゴン（しゃどうふらいごん）",
    index: 20330,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0330.PNG?alt=media&token=7637c0cf-88d8-4169-aca8-5c2e8de842b9"
  },
  {
    name: "サボネア（さぼねあ）",
    index: 331,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0331.PNG?alt=media&token=efe42b28-27ee-4320-8b04-18bb71785489"
  },
  {
    name: "【シャドウ】サボネア（しゃどうさぼねあ）",
    index: 20331,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0331.PNG?alt=media&token=efe42b28-27ee-4320-8b04-18bb71785489"
  },
  {
    name: "ノクタス（のくたす）",
    index: 332,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0332.PNG?alt=media&token=8811fb64-a0bb-4103-a3f6-8775bb023ca2"
  },
  {
    name: "【シャドウ】ノクタス（しゃどうのくたす）",
    index: 20332,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0332.PNG?alt=media&token=8811fb64-a0bb-4103-a3f6-8775bb023ca2"
  },
  {
    name: "チルット（ちるっと）",
    index: 333,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0333.PNG?alt=media&token=e7bb4191-a1a5-4e08-aac9-64b11da655de"
  },
  {
    name: "チルタリス（ちるたりす）",
    index: 334,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0334.PNG?alt=media&token=c8c3bc5f-ec96-47b0-84e5-086dc69f9085"
  },
  {
    name: "ザングース（ざんぐーす）",
    index: 335,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0335.PNG?alt=media&token=fa144e7a-b73f-4849-b055-28d9567fbab1"
  },
  {
    name: "ハブネーク（はぶねーく）",
    index: 336,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0336.PNG?alt=media&token=8a556519-980b-4d6b-9916-470920b3c7ef"
  },
  {
    name: "ルナトーン（るなとーん）",
    index: 337,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0337.PNG?alt=media&token=e8120a24-6176-40bf-868f-37acc6d4e6a6"
  },
  {
    name: "ソルロック（そるろっく）",
    index: 338,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0338.PNG?alt=media&token=f303e578-c91a-4388-9685-db7560da54f2"
  },
  {
    name: "ドジョッチ（どじょっち）",
    index: 339,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0339.PNG?alt=media&token=881bed04-b27f-4586-920e-00ae1ea4d41c"
  },
  {
    name: "ナマズン（なまずん）",
    index: 340,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0340.PNG?alt=media&token=f0299e96-0c7f-47c2-9952-b31a4cb6e5af"
  },
  {
    name: "ヘイガニ（へいがに）",
    index: 341,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0341.PNG?alt=media&token=6c43a96d-e3ad-456a-b582-697bbe9afbf9"
  },
  {
    name: "シザリガー（しざりがー）",
    index: 342,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0342.PNG?alt=media&token=bb04dfdf-cb68-4f22-8e99-792f6239f81a"
  },
  {
    name: "ヤジロン（やじろん）",
    index: 343,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0343.PNG?alt=media&token=0bc483ed-fb0a-4051-a344-733563ba9e86"
  },
  {
    name: "ネンドール（ねんどーる）",
    index: 344,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0344.PNG?alt=media&token=cdf63cfc-1d4e-41fe-9e5d-c0ffa611417d"
  },
  {
    name: "リリーラ（りりーら）",
    index: 345,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0345.PNG?alt=media&token=adbef722-e7f4-48fa-828b-1a77ff8e3827"
  },
  {
    name: "ユレイドル（ゆれいどる）",
    index: 346,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0346.PNG?alt=media&token=c776a06b-eb85-4adc-92b8-4f6230348a6c"
  },
  {
    name: "アノプス（あのぷす）",
    index: 347,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0347.PNG?alt=media&token=da73a1e9-641b-4f91-86b2-327d927756f6"
  },
  {
    name: "アーマルド（あーまるど）",
    index: 348,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0348.PNG?alt=media&token=10272cc7-10ca-4675-bb27-00cffa7b7fdd"
  },
  {
    name: "ヒンバス（ひんばす）",
    index: 349,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0349.PNG?alt=media&token=8e9500de-75a7-4ee1-8276-3adde416c078"
  },
  {
    name: "ミロカロス（みろかろす）",
    index: 350,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0350.PNG?alt=media&token=a1453014-dc33-4ded-a698-c0986d330cc5"
  },
  {
    name: "ポワルン（ぽわるん）",
    index: 351,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0351.PNG?alt=media&token=1b194b86-5b3d-433d-aaa4-fb7d84212c05"
  },
  // {
  //   name: "カクレオン",
  //   index: 352,
  //   img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0352.png?alt=media&token=c47cb7cf-d2e2-4099-9903-979e50c3e66c"
  // },
  {
    name: "カゲボウズ（かげぼうず）",
    index: 353,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0353.PNG?alt=media&token=870d70e9-b4c4-43b6-89b7-45cd57e4c10b"
  },
  {
    name: "【シャドウ】カゲボウズ（しゃどうかげぼうず）",
    index: 20353,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0353.PNG?alt=media&token=870d70e9-b4c4-43b6-89b7-45cd57e4c10b"
  },
  {
    name: "ジュペッタ（じゅぺった）",
    index: 354,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0354.PNG?alt=media&token=af487478-d96f-4dd2-8bf5-7f6cade05ee7"
  },
  {
    name: "【シャドウ】ジュペッタ（しゃどうじゅぺった）",
    index: 20354,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0354.PNG?alt=media&token=af487478-d96f-4dd2-8bf5-7f6cade05ee7"
  },
  {
    name: "ヨマワル（よまわる）",
    index: 355,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0355.PNG?alt=media&token=e35c5fed-a456-42dc-bcf9-640626c412c8"
  },
  {
    name: "【シャドウ】ヨマワル（しゃどうよまわる）",
    index: 20355,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0355.PNG?alt=media&token=e35c5fed-a456-42dc-bcf9-640626c412c8"
  },
  {
    name: "サマヨール（さまよーる）",
    index: 356,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0356.PNG?alt=media&token=fad3f74e-3be9-4ac5-bd65-9c38b8dc1915"
  },
  {
    name: "【シャドウ】サマヨール（しゃどうさまよーる）",
    index: 20356,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0356.PNG?alt=media&token=fad3f74e-3be9-4ac5-bd65-9c38b8dc1915"
  },
  {
    name: "トロピウス（とろぴうす）",
    index: 357,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0357.png?alt=media&token=f5f7d77a-bfe2-4a70-ae8e-b6539c7a8333"
  },
  {
    name: "チリーン（ちりーん）",
    index: 358,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0358.PNG?alt=media&token=d808229d-5a88-4016-aaa4-fc98e37d448d"
  },
  {
    name: "アブソル（あぶそる）",
    index: 359,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0359.PNG?alt=media&token=39735efe-88d3-4333-ba81-a80ee8cd001f"
  },
  {
    name: "【シャドウ】アブソル（しゃどうあぶそる）",
    index: 20359,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0359.PNG?alt=media&token=39735efe-88d3-4333-ba81-a80ee8cd001f"
  },
  {
    name: "ソーナノ（そーなの）",
    index: 360,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0360.PNG?alt=media&token=451d3392-2f3e-4498-90af-4e0e7399f9d1"
  },
  {
    name: "ユキワラシ（ゆきわらし）",
    index: 361,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0361.PNG?alt=media&token=7ab20f3b-59b8-4551-a487-eead88e60990"
  },
  {
    name: "オニゴーリ（おにごーり）",
    index: 362,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0362.PNG?alt=media&token=51aff94c-f4f5-48f0-b02c-ae656a8af491"
  },
  {
    name: "タマザラシ（たまざらし）",
    index: 363,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0363.PNG?alt=media&token=66cdd567-f88e-4150-9cb3-0a7b9ef7bb28"
  },
  {
    name: "トドグラー（とどぐらー）",
    index: 364,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0364.PNG?alt=media&token=5d7a1fc3-f782-4afd-8e1c-713745bf9122"
  },
  {
    name: "トドゼルガ（とどぜるが）",
    index: 365,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0365.PNG?alt=media&token=eaafaf76-ccc1-47e7-ad4e-b209868b4182"
  },
  {
    name: "パールル（ぱーるる）",
    index: 366,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0366.PNG?alt=media&token=384d10e8-6623-4927-a014-17bc11c54a3f"
  },
  {
    name: "ハンテール（はんてーる）",
    index: 367,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0367.PNG?alt=media&token=3dbf65f2-67a9-4923-ba4d-1eeccba56ffd"
  },
  {
    name: "サクラビス（さくらびす）",
    index: 368,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0368.PNG?alt=media&token=d27d7474-8a72-4d14-a628-5c6f3735f75c"
  },
  {
    name: "ジーランス（じーらんす）",
    index: 369,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0369.jpg?alt=media&token=85a06817-32b4-4d53-8852-1f45184dc1b3"
  },
  {
    name: "ラブカス（らぶかす）",
    index: 370,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0370.PNG?alt=media&token=18e532c6-bd7a-45b7-91f5-ec6936a3af93"
  },
  {
    name: "タツベイ（たつべい）",
    index: 371,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0371.PNG?alt=media&token=224a533c-4a25-49f7-ba48-05b7cc80eee0"
  },
  {
    name: "【シャドウ】タツベイ（しゃどうたつべい）",
    index: 20371,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0371.PNG?alt=media&token=224a533c-4a25-49f7-ba48-05b7cc80eee0"
  },
  {
    name: "コモルー（こもるー）",
    index: 372,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0372.PNG?alt=media&token=440af9db-2b18-4d4d-9601-715d28c797a6"
  },
  {
    name: "【シャドウ】コモルー（しゃどうこもるー）",
    index: 20372,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0372.PNG?alt=media&token=440af9db-2b18-4d4d-9601-715d28c797a6"
  },
  {
    name: "ボーマンダ（ぼーまんだ）",
    index: 373,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0373.PNG?alt=media&token=4227bdd7-ae11-4734-9aef-30ec6d4b66be"
  },
  {
    name: "【シャドウ】ボーマンダ（しゃどうぼーまんだ）",
    index: 20373,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0373.PNG?alt=media&token=4227bdd7-ae11-4734-9aef-30ec6d4b66be"
  },
  {
    name: "ダンバル（だんばる）",
    index: 374,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0374.PNG?alt=media&token=ab536fc9-3dd8-4d7e-acb3-6229e64a64e3"
  },
  {
    name: "【シャドウ】ダンバル（しゃどうだんばる）",
    index: 20374,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0374.PNG?alt=media&token=ab536fc9-3dd8-4d7e-acb3-6229e64a64e3"
  },
  {
    name: "メタング（めたんぐ）",
    index: 375,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0375.PNG?alt=media&token=2ba835e4-8e79-4eca-a91d-83acc82b3354"
  },
  {
    name: "【シャドウ】メタング（しゃどうめたんぐ）",
    index: 20375,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0375.PNG?alt=media&token=2ba835e4-8e79-4eca-a91d-83acc82b3354"
  },
  {
    name: "メタグロス（めたぐろす）",
    index: 376,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0376.PNG?alt=media&token=51a1e52b-3755-4500-a05b-e34491869c28"
  },
  {
    name: "【シャドウ】メタグロス（しゃどうめたぐろす）",
    index: 20376,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0376.PNG?alt=media&token=51a1e52b-3755-4500-a05b-e34491869c28"
  },
  {
    name: "レジロック（れじろっく）",
    index: 377,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0377.PNG?alt=media&token=82c3ecfe-d29a-42da-938e-6b82d182b001"
  },
  {
    name: "レジアイス（れじあいす）",
    index: 378,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0378.PNG?alt=media&token=86ddf182-6f1d-49ac-a5b6-aace87a25c4b"
  },
  {
    name: "レジスチル（れじすちる）",
    index: 379,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0379.PNG?alt=media&token=290c24fa-13b9-464b-963e-c40e839d1a6b"
  },
  {
    name: "ラティアス（らてぃあす）",
    index: 380,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0380.PNG?alt=media&token=45f9268f-2f26-48e2-8006-e4ce1f74bdf9"
  },
  {
    name: "ラティオス（らてぃおす）",
    index: 381,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0381.PNG?alt=media&token=cc69feba-c3c2-4019-9a54-0de40558bcc0"
  },
  {
    name: "カイオーガ（かいおーが）",
    index: 382,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0382.PNG?alt=media&token=a5808618-0835-4d59-80ca-31ae11f7900c"
  },
  {
    name: "グラードン（ぐらーどん）",
    index: 383,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0383.PNG?alt=media&token=b500df03-ade6-4701-8b64-81646e6f043b"
  },
  {
    name: "レックウザ（れっくうざ）",
    index: 384,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0384.PNG?alt=media&token=5e0671db-3c97-4190-b829-f84623b1f47a"
  },
  {
    name: "ジラーチ（じらーち）",
    index: 385,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0385.PNG?alt=media&token=07f5f3f3-4229-4780-9343-6c10d6c20706"
  },
  {
    name: "デオキシス（でおきしす）",
    index: 386,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0386.PNG?alt=media&token=7ec7582c-6877-4d7a-97e7-ade677e197c5"
  },
  {
    name: "ナエトル（なえとる）",
    index: 387,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0387.PNG?alt=media&token=c1cd5df4-e62a-4b53-8314-34650eacbc7e"
  },
  {
    name: "【シャドウ】ナエトル（しゃどうなえとる）",
    index: 20387,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0387.PNG?alt=media&token=c1cd5df4-e62a-4b53-8314-34650eacbc7e"
  },
  {
    name: "ハヤシガメ（はやしがめ）",
    index: 388,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0388.PNG?alt=media&token=b4efef6b-378f-4a41-b4f6-c750cdf40e33"
  },
  {
    name: "【シャドウ】ハヤシガメ（しゃどうはやしがめ）",
    index: 20388,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0388.PNG?alt=media&token=b4efef6b-378f-4a41-b4f6-c750cdf40e33"
  },
  {
    name: "ドダイトス（どだいとす）",
    index: 389,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0389.PNG?alt=media&token=3cffdcd0-6008-4c0b-8495-ec1d572070a8"
  },
  {
    name: "【シャドウ】ドダイトス（しゃどうどだいとす）",
    index: 20389,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0389.PNG?alt=media&token=3cffdcd0-6008-4c0b-8495-ec1d572070a8"
  },
  {
    name: "ヒコザル（ひこざる）",
    index: 390,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0390.PNG?alt=media&token=6029677c-f516-4768-964c-ee5b3597ec7e"
  },
  {
    name: "モウカザル（もうかざる）",
    index: 391,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0391.PNG?alt=media&token=3e44cf51-44ca-4620-ae82-14de1d1e138a"
  },
  {
    name: "ゴウカザル（ごうかざる）",
    index: 392,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0392.PNG?alt=media&token=1ff74af4-4cee-4f4e-babf-f29cc64397c8"
  },
  {
    name: "ポッチャマ（ぽっちゃま）",
    index: 393,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0393.PNG?alt=media&token=e08c15e1-931c-40cf-aad2-cbbd710928b0"
  },
  {
    name: "ポッタイシ（ぽったいし）",
    index: 394,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0394.PNG?alt=media&token=f97e19be-0421-4ead-9b91-4182f4dc8222"
  },
  {
    name: "エンペルト（えんぺると）",
    index: 395,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0395.PNG?alt=media&token=c5f86024-b695-4c9c-88b8-2b80ed252e24"
  },
  {
    name: "ムックル（むっくる）",
    index: 396,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0396.PNG?alt=media&token=4f06cc87-5893-4d22-bc55-e799a5b2abf2"
  },
  {
    name: "ムクバード（むくばーど）",
    index: 397,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0397.PNG?alt=media&token=951b7b05-7ad0-4b51-9691-1b95f09a69bd"
  },
  {
    name: "ムクホーク（むくほーく）",
    index: 398,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0398.PNG?alt=media&token=ee48c382-a6c4-49ad-9c37-ded52bc49a53"
  },
  {
    name: "ビッパ（びっぱ）",
    index: 399,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0399.PNG?alt=media&token=17bc1367-fc03-48a9-bece-89552909e704"
  },
  {
    name: "ビーダル（びーだる）",
    index: 400,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0400.PNG?alt=media&token=91754a8a-fea3-4377-b63c-8f04d846990b"
  },
  {
    name: "コロボーシ（ころぼーし）",
    index: 401,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0401.PNG?alt=media&token=23df0ccd-7729-4172-8927-68895ecda24b"
  },
  {
    name: "コロトック（ころとっく）",
    index: 402,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0402.PNG?alt=media&token=0a26a68a-84c6-4c43-8191-dcbd54ddbcf7"
  },
  {
    name: "コリンク（こりんく）",
    index: 403,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0403.PNG?alt=media&token=ce583419-f3ae-44d1-9e8d-0e6c5a8b2ec7"
  },
  {
    name: "ルクシオ（るくしお）",
    index: 404,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0404.PNG?alt=media&token=e6b84c1b-627e-4ad5-a81f-3c0b2aea59f9"
  },
  {
    name: "レントラー（れんとらー）",
    index: 405,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0405.PNG?alt=media&token=245f4812-0024-4fcc-9de7-8822adbf45b2"
  },
  {
    name: "スボミー（すぼみー）",
    index: 406,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0406.PNG?alt=media&token=c56231e4-0927-4a6e-b321-34d7c0012084"
  },
  {
    name: "ロズレイド（ろずれいど）",
    index: 407,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0407.PNG?alt=media&token=6c4c5e37-4e0c-4750-a725-b2334797105c"
  },
  {
    name: "ズガイドス（ずがいどす）",
    index: 408,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0408.PNG?alt=media&token=7febcae7-fdb7-40eb-ac76-023956ac0833"
  },
  {
    name: "ラムパルド（らむぱるど）",
    index: 409,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0409.PNG?alt=media&token=0f98838e-b755-475d-a08d-7ac6d4df78be"
  },
  {
    name: "タテトプス（たてとぷす）",
    index: 410,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0410.PNG?alt=media&token=079411f2-2c22-4c45-bfbe-24e90528af34"
  },
  {
    name: "トリデプス（とりでぷす）",
    index: 411,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0411.PNG?alt=media&token=14e9e271-1d58-4ff2-b7fb-64e495b038d6"
  },
  {
    name: "ミノムッチ（みのむっち）",
    index: 412,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0412.PNG?alt=media&token=ac0e94db-06c4-441b-8015-5f463645381b"
  },
  {
    name: "ミノマダム（みのまだむ）",
    index: 413,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0413.PNG?alt=media&token=4f61a427-2652-4508-9500-b80df83e3af9"
  },
  {
    name: "ガーメイル（がーめいる）",
    index: 414,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0414.PNG?alt=media&token=e04b977f-8a75-4d3f-ae56-938ff3996987"
  },
  {
    name: "ミツハニー（みつはにー）",
    index: 415,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0415.PNG?alt=media&token=d5b28f56-548b-4b5b-b53e-e39410676717"
  },
  {
    name: "ビークイン（びーくいん）",
    index: 416,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0416.jpg?alt=media&token=e7c001f9-8107-4df7-8eb3-a338427e89ff"
  },
  {
    name: "パチリス（ぱちりす）",
    index: 417,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0417.jpg?alt=media&token=a5405777-1a05-40eb-97d0-92ddc7f12091"
  },
  {
    name: "ブイゼル（ぶいぜる）",
    index: 418,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0418.PNG?alt=media&token=92bdc913-1d7a-47bd-9e72-c608cae0ebbe"
  },
  {
    name: "フローゼル（ふろーぜる）",
    index: 419,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0419.PNG?alt=media&token=34bbb2e0-abce-4c17-a799-877acac8864f"
  },
  {
    name: "チェリンボ（ちぇりんぼ）",
    index: 420,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0420.PNG?alt=media&token=27c3eb87-9476-4c90-aeec-e37d1a978921"
  },
  {
    name: "チェリム（ちぇりむ）",
    index: 421,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0421.PNG?alt=media&token=b957996d-6ffd-48ff-a4fb-332deb914398"
  },
  {
    name: "カラナクシ（からなくし）",
    index: 422,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0422.PNG?alt=media&token=696cd9bf-6cd7-4d75-8ca3-af78c67d9d5e"
  },
  {
    name: "トリトドン（とりとどん）",
    index: 423,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0423.PNG?alt=media&token=407b867d-51f4-4f73-b2ff-029186cb958b"
  },
  {
    name: "エテボース（えてぼーす）",
    index: 424,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0424.jpg?alt=media&token=f0f6490d-6deb-4435-8188-767756e37ef6"
  },
  {
    name: "フワンテ（ふわんて）",
    index: 425,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0425.PNG?alt=media&token=e5face37-2a2d-40c2-8121-1fc2674ce50d"
  },
  {
    name: "フワライド（ふわらいど）",
    index: 426,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0426.PNG?alt=media&token=9cc59264-7a6c-4754-973e-47369478e5cf"
  },
  {
    name: "ミミロル（みみろる）",
    index: 427,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0427.PNG?alt=media&token=01f57e32-6ba9-4d9c-9e3f-edf81e4babcd"
  },
  {
    name: "ミミロップ（みみろっぷ）",
    index: 428,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0428.PNG?alt=media&token=0148d040-973c-4da3-96a7-bf9062909b57"
  },
  {
    name: "ムウマージ（むうまーじ）",
    index: 429,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0429.jpeg?alt=media&token=90def6bd-c158-4d02-b0cc-1d485e4a4a04"
  },
  {
    name: "【シャドウ】ムウマージ（しゃどうむうまーじ）",
    index: 20429,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0429.jpeg?alt=media&token=90def6bd-c158-4d02-b0cc-1d485e4a4a04"
  },
  {
    name: "ドンカラス（どんからす）",
    index: 430,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0430.PNG?alt=media&token=74512d8a-9d90-494b-b65a-8f80a745d569"
  },
  {
    name: "ニャルマー（にゃるまー）",
    index: 431,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0431.PNG?alt=media&token=46331a99-bebb-4561-8705-95c0902ffaf7"
  },
  {
    name: "ブニャット（ぶにゃっと）",
    index: 432,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0432.PNG?alt=media&token=f581548c-4b72-4f78-9382-e9fa33a17106"
  },
  {
    name: "リーシャン（りーしゃん）",
    index: 433,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0433.PNG?alt=media&token=27c7a595-03bc-41f8-b8fa-7cf70a35a64b"
  },
  {
    name: "スカンプー（すかんぷー）",
    index: 434,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0434.PNG?alt=media&token=8f1c9100-120f-4010-8445-8b2d8d73df44"
  },
  {
    name: "スカタンク（すかたんく）",
    index: 435,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0435.PNG?alt=media&token=edd8f551-b4d9-481b-8bfa-e36bf737b0f1"
  },
  {
    name: "ドーミラー（どーみらー）",
    index: 436,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0436.PNG?alt=media&token=eed0b47b-19bb-4ccd-abed-6501cfe2b408"
  },
  {
    name: "ドータクン（どーたくん）",
    index: 437,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0437.PNG?alt=media&token=3de69ab1-861c-4b65-a52e-d7b15f73dc53"
  },
  {
    name: "ウソハチ（うそはち）",
    index: 438,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0438.PNG?alt=media&token=f569cec5-257d-44d5-a5cc-e60e6abbdb79"
  },
  {
    name: "マネネ（まねね）",
    index: 439,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0439.png?alt=media&token=48ec692f-fbe6-491e-882f-6eb24f2cf0a8"
  },
  {
    name: "ピンプク（ぴんぷく）",
    index: 440,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0440.PNG?alt=media&token=10f29d65-6f88-4fb2-a2d8-cd0ba1c5cb12"
  },
  {
    name: "ペラップ（ぺらっぷ）",
    index: 441,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0441.PNG?alt=media&token=960c8948-b423-455c-b988-7ad4f59b430e"
  },
  {
    name: "ミカルゲ（みかるげ）",
    index: 442,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0442.PNG?alt=media&token=19033163-3150-4450-83d8-522396516a35"
  },
  {
    name: "フカマル（ふかまる）",
    index: 443,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0443.PNG?alt=media&token=4471092c-bbcc-46b8-aa9a-6262a768243c"
  },
  {
    name: "ガバイト（がばいと）",
    index: 444,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0444.jpg?alt=media&token=25ef8d6f-7ced-4e1e-8be7-e1ae6699a45d"
  },
  {
    name: "ガブリアス（がぶりあす）",
    index: 445,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0445.jpg?alt=media&token=79001c73-c97f-43f5-819e-0815ce6cb463"
  },
  {
    name: "ゴンベ（ごんべ）",
    index: 446,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0446.PNG?alt=media&token=e9f996a5-fd8b-4af9-827e-60de8c1051f2"
  },
  {
    name: "リオル（りおる）",
    index: 447,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0447.PNG?alt=media&token=898b46ec-c0a4-4270-95ac-fde1e3540429"
  },
  {
    name: "ルカリオ（るかりお）",
    index: 448,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0448.PNG?alt=media&token=388603bc-d4ee-4c70-82c0-555a29953c0d"
  },
  {
    name: "ヒポポタス（ひぽぽたす）",
    index: 449,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0449.PNG?alt=media&token=a91cd92c-b930-4085-940b-c352e32c2795"
  },
  {
    name: "カバルドン（がばるどん）",
    index: 450,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0450.PNG?alt=media&token=dbdce347-fa4a-467a-bb81-0b71a5a1592a"
  },
  {
    name: "スコルピ（すこるぴ）",
    index: 451,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0451.PNG?alt=media&token=c5eb9eab-51ed-420f-9ff8-7ce0f169637e"
  },
  {
    name: "ドラピオン（どらぴおん）",
    index: 452,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0452.PNG?alt=media&token=991a106d-fc6f-44fd-803d-ab6aaf2e975f"
  },
  {
    name: "グレッグル（ぐれっぐる）",
    index: 453,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0453.PNG?alt=media&token=7ed4df16-0982-4d5e-a499-b820d1468c8d"
  },
  {
    name: "ドクロッグ（どくろっぐ）",
    index: 454,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0454.PNG?alt=media&token=9a45aa42-fbc9-4981-981c-95b0148f38e9"
  },
  {
    name: "マスキッパ（ますきっぱ）",
    index: 455,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0455.png?alt=media&token=04382b14-c63f-414a-b353-6e816dd8d213"
  },
  {
    name: "ケイコウオ（けいこうお）",
    index: 456,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0456.PNG?alt=media&token=62f198e7-4cf2-4d86-a305-bcfe8626c0c6"
  },
  {
    name: "ネオラント（ねおらんと）",
    index: 457,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0457.PNG?alt=media&token=eec4359b-63ed-4e9a-b79f-a1d68cad1c3a"
  },
  {
    name: "タマンタ（たまんた）",
    index: 458,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0458.PNG?alt=media&token=efc3ae2a-2141-4e15-991f-64596247eb10"
  },
  {
    name: "ユキカブリ（ゆきかぶり）",
    index: 459,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0459.PNG?alt=media&token=0fb88241-f5c8-481b-bbb1-57b52a7fd365"
  },
  {
    name: "【シャドウ】ユキカブリ（しゃどうゆきかぶり）",
    index: 20459,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0459.PNG?alt=media&token=0fb88241-f5c8-481b-bbb1-57b52a7fd365"
  },
  {
    name: "ユキノオー（ゆきのおー）",
    index: 460,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0460.PNG?alt=media&token=08326dfc-c809-4d45-84ff-3d92fbd5d90a"
  },
  {
    name: "【シャドウ】ユキノオー（しゃどうゆきのおー）",
    index: 20460,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0460.PNG?alt=media&token=08326dfc-c809-4d45-84ff-3d92fbd5d90a"
  },
  {
    name: "マニューラ（まにゅーら）",
    index: 461,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0461.PNG?alt=media&token=13d23c59-bce4-4825-9a4f-96f1d6a97283"
  },
  {
    name: "【シャドウ】マニューラ（しゃどうまにゅーら）",
    index: 20461,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0461.PNG?alt=media&token=13d23c59-bce4-4825-9a4f-96f1d6a97283"
  },
  {
    name: "ジバコイル（じばこいる）",
    index: 462,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0462.PNG?alt=media&token=b2c380db-003c-4c9f-b93c-4721ebe8c070"
  },
  {
    name: "【シャドウ】ジバコイル（しゃどうじばこいる）",
    index: 20462,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0462.PNG?alt=media&token=b2c380db-003c-4c9f-b93c-4721ebe8c070"
  },
  {
    name: "ベロベルト（べろべると）",
    index: 463,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0463.PNG?alt=media&token=e573207e-99ec-4b8e-b527-b9a27c87e441"
  },
  {
    name: "ドサイドン（どさいどん）",
    index: 464,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0464.PNG?alt=media&token=5d3a37c0-4e0e-4921-a309-6a008dce0c48"
  },
  {
    name: "モジャンボ（もじゃんぼ）",
    index: 465,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0465.PNG?alt=media&token=8e41d67d-fd22-431c-8dff-13939e2bc8fc"
  },
  {
    name: "エレキブル（えれきぶる）",
    index: 466,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0466.PNG?alt=media&token=f5f6f6f7-d50d-4801-9148-4cd0b26ae35c"
  },
  {
    name: "【シャドウ】エレキブル（しゃどうえれきぶる）",
    index: 20466,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0466.PNG?alt=media&token=f5f6f6f7-d50d-4801-9148-4cd0b26ae35c"
  },
  {
    name: "ブーバーン（ぶーばーん）",
    index: 467,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0467.PNG?alt=media&token=8477a163-f04a-4cb1-8e17-dd4f2c1b1a01"
  },
  {
    name: "【シャドウ】ブーバーン（しゃどうぶーばーん）",
    index: 20467,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0467.PNG?alt=media&token=8477a163-f04a-4cb1-8e17-dd4f2c1b1a01"
  },
  {
    name: "トゲキッス（とげきっす）",
    index: 468,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0468.PNG?alt=media&token=8ad99b6d-d828-483b-a202-12edc4443b89"
  },
  {
    name: "メガヤンマ（めがやんま）",
    index: 469,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0469.PNG?alt=media&token=6703737c-7464-4499-b5dd-6cc42c9b87c5"
  },
  {
    name: "リーフィア（りーふぃあ）",
    index: 470,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0470.PNG?alt=media&token=a6bb50c2-53c1-481c-9f1e-7e0e38054d57"
  },
  {
    name: "グレイシア（ぐれいしあ）",
    index: 471,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0471.PNG?alt=media&token=37ca5773-1de8-4775-8053-2e03a3d111f3"
  },
  {
    name: "グライオン（ぐらいおん）",
    index: 472,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0472.PNG?alt=media&token=a40d2d00-e200-4645-b821-825266a16498"
  },
  {
    name: "マンムー（まんむー）",
    index: 473,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0473.PNG?alt=media&token=35cb7a92-00a8-46da-9efd-5cb274752965"
  },
  {
    name: "ポリゴンZ（ぽりごんぜっとz）",
    index: 474,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0474.PNG?alt=media&token=e0cd48f0-a705-40ed-b24c-2cf1dea8c4f1"
  },
  {
    name: "【シャドウ】ポリゴンZ（しゃどうぽりごんぜっとz）",
    index: 20474,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0474.PNG?alt=media&token=e0cd48f0-a705-40ed-b24c-2cf1dea8c4f1"
  },
  {
    name: "エルレイド（えるれいど）",
    index: 475,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0475.PNG?alt=media&token=8c818d60-5979-42cf-b20d-764239d7144b"
  },
  {
    name: "【シャドウ】エルレイド（しゃどうえるれいど）",
    index: 20475,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0475.PNG?alt=media&token=8c818d60-5979-42cf-b20d-764239d7144b"
  },
  {
    name: "ダイノーズ（だいのーず）",
    index: 476,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0476.PNG?alt=media&token=11e82a57-279a-4bf9-9a58-90eb56f393aa"
  },
  {
    name: "ヨノワール（よのわーる）",
    index: 477,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0477.PNG?alt=media&token=adf99b03-b5b5-44e0-a3b3-9af10fe20efc"
  },
  {
    name: "【シャドウ】ヨノワール（しゃどうよのわーる）",
    index: 20477,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0477.PNG?alt=media&token=adf99b03-b5b5-44e0-a3b3-9af10fe20efc"
  },
  {
    name: "ユキメノコ（ゆきめのこ）",
    index: 478,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0478.PNG?alt=media&token=add65663-537e-4d99-bded-500484e9c823"
  },
  // {
  //   name: "ロトム（ろとむ）",
  //   index: 479,
  //   img: ""
  // },
  {
    name: "ユクシー（ゆくしー）",
    index: 480,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0480.PNG?alt=media&token=59b990fc-e6b3-43b7-b8f3-c197ad0e4145"
  },
  {
    name: "エムリット（えむりっと）",
    index: 481,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0481.png?alt=media&token=ed241561-edf5-41c1-bfc2-fef7df165038"
  },
  {
    name: "アグノム（あぐのむ）",
    index: 482,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0482.png?alt=media&token=e1beb52a-f7cb-4fd7-aa2c-90839b5e8f7f"
  },
  {
    name: "ディアルガ（でぃあるが）",
    index: 483,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0483.PNG?alt=media&token=d8329d22-394f-41c3-ac21-043cb08943ef"
  },
  {
    name: "パルキア（ぱるきあ）",
    index: 484,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0484.PNG?alt=media&token=734dba51-91d3-4d1b-9368-b8553fe273d3"
  },
  {
    name: "ヒードラン（ひーどらん）",
    index: 485,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0485.PNG?alt=media&token=7309dcb2-f967-4010-a94b-07197929e414"
  },
  {
    name: "レジギガス（れじぎがす）",
    index: 486,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0486.png?alt=media&token=60c7c9c9-196b-479b-9cf4-6bd92a610e48"
  },
  {
    name: "ギラティナ（ぎらてぃな）",
    index: 487,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0487.PNG?alt=media&token=56214a6d-54ab-407a-be7a-5873a6749560"
  },
  {
    name: "クレセリア（くれせりあ）",
    index: 488,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0488.PNG?alt=media&token=fd039161-fc9e-46cf-83a8-0c253ba1da6a"
  },
  // {
  //   name: "フィオネ（ふぃおね）",
  //   index: 489,
  //   img: ""
  // },
  // {
  //   name: "マナフィ（まなふぃ ）",
  //   index: 490,
  //   img: ""
  // },
  {
    name: "ダークライ（だーくらい）",
    index: 491,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0491.PNG?alt=media&token=1fcd9d3b-d010-4e9f-826c-6e271aeb52fd"
  },
  // {
  //   name: "シェイミ（しぇいみ）",
  //   index: 492,
  //   img: ""
  // },
  // {
  //   name: "アルセウス（あるせうす）",
  //   index: 493,
  //   img: ""
  // },
  // {
  //   name: "ビクティニ（びくてぃに）",
  //   index: 494,
  //   img: ""
  // },
  {
    name: "ツタージャ（つたーじゃ）",
    index: 495,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0495.PNG?alt=media&token=44f293c9-77ba-4b9d-b395-00e2d10f0500"
  },
  {
    name: "ジャノビー（じゃのびー）",
    index: 496,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0496.PNG?alt=media&token=8c0758c4-b95a-4069-a524-55b9964de902"
  },
  {
    name: "ジャローダ（じゃろーだ）",
    index: 497,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0497.PNG?alt=media&token=bd5473fc-506a-4977-90f4-305d80604a6b"
  },
  {
    name: "ポカブ（ぽかぶ）",
    index: 498,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0498.PNG?alt=media&token=02f1689a-64c8-4768-a568-eac48dcef258"
  },
  {
    name: "チャオブー（ちゃおぶー）",
    index: 499,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0499.PNG?alt=media&token=6b6c01ac-2608-4209-996c-d7e3b3b6b66f"
  },
  {
    name: "エンブオー（えんぶおー）",
    index: 500,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0500.PNG?alt=media&token=a64adefe-081f-4b3b-911e-e47cdae14ed7"
  },
  {
    name: "ミジュマル（みじゅまる）",
    index: 501,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0501.PNG?alt=media&token=384969a7-30d7-4248-88cc-54552f58ed97"
  },
  {
    name: "フタチマル（ふたちまる）",
    index: 502,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0502.PNG?alt=media&token=fc90723a-aa70-43a8-8fbc-f4a93cd0557a"
  },
  {
    name: "ダイケンキ（だいけんき）",
    index: 503,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0503.PNG?alt=media&token=bc0abb8b-f282-45a1-83c4-854fec079f70"
  },
  {
    name: "ミネズミ（みねずみ）",
    index: 504,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0504.PNG?alt=media&token=ffcf7ef2-23ef-4049-ba6a-625110d00be5"
  },
  {
    name: "ミルホッグ（みるほっぐ）",
    index: 505,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0505.PNG?alt=media&token=daf466d0-0440-4570-b797-ae1ed745dd12"
  },
  {
    name: "ヨーテリー（よーてりー）",
    index: 506,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0506.PNG?alt=media&token=67c3c58c-c71c-43ad-9b16-1f751d36700c"
  },
  {
    name: "ハーデリア（はーでりあ）",
    index: 507,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0507.PNG?alt=media&token=a25682e0-8209-449d-afa7-4ee38b55b360"
  },
  {
    name: "ムーランド（むーらんど）",
    index: 508,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0508.PNG?alt=media&token=8b4132c1-d588-40bd-919f-e60d3d9e8677"
  },
  {
    name: "チョロネコ（ちょろねこ）",
    index: 509,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0509.PNG?alt=media&token=1dea75a4-bc6c-42ee-8cc4-3c10a8e3f03d"
  },
  {
    name: "レパルダス（れぱるだす）",
    index: 510,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0510.PNG?alt=media&token=e88e4c32-cd73-4ab1-a642-2dd5be6f0251"
  },
  {
    name: "ヤナップ（やなっぷ）",
    index: 511,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0511.PNG?alt=media&token=444fe00f-07c8-4463-880d-cc691c3b0a29"
  },
  {
    name: "ヤナッキー（ヤなっきー）",
    index: 512,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0512.PNG?alt=media&token=53f42699-52fb-4acc-9817-1cbd84e75590"
  },
  {
    name: "バオップ（ばおっぷ）",
    index: 513,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0513.jpg?alt=media&token=1df6fa05-e0bc-4ef3-a578-509016df6db3"
  },
  {
    name: "バオッキー（ばおっきー）",
    index: 514,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0514.png?alt=media&token=e618349c-47c2-4ab0-ad8e-92f678b82eda"
  },
  {
    name: "ヒヤップ（ひやっぷ）",
    index: 515,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0515.png?alt=media&token=7621453d-b4dc-4246-b336-98a84d112ccf"
  },
  {
    name: "ヒヤッキー（ひやっきー）",
    index: 516,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0516.png?alt=media&token=99cd3078-562d-44f7-8e5e-6504c10ad747"
  },
  // {
  //   name: "ムンナ（むんな）",
  //   index: 517,
  //   img: ""
  // },
  // {
  //   name: "	ムシャーナ（むしゃーな）",
  //   index: 518,
  //   img: ""
  // },
  {
    name: "マメパト（まめぱと）",
    index: 519,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0519.PNG?alt=media&token=59e55be6-cae3-452d-89f5-be6d62ec0806"
  },
  {
    name: "ハトーボー（はとーぼー）",
    index: 520,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0520.PNG?alt=media&token=309ecee4-b301-4272-a585-dd3339848022"
  },
  {
    name: "ケンホロウ（けんほろう）",
    index: 521,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0521.PNG?alt=media&token=556469a9-42f5-4c5c-958a-e4624892e72c"
  },
  {
    name: "シママ（しまま）",
    index: 522,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0522.PNG?alt=media&token=cd3b9f0c-e181-4cad-bf15-a4dbaaa0ee93"
  },
  {
    name: "ゼブライカ（ぜぶらいか）",
    index: 523,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0523.PNG?alt=media&token=7b117ce6-8f90-4992-94ca-e09accc82fed"
  },
  {
    name: "ダンゴロ（だんごろ）",
    index: 524,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0524.jpeg?alt=media&token=f0722e37-15e5-4fbb-b150-05ce129ecf4b"
  },
  {
    name: "ガントル（がんとる）",
    index: 525,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0525.png?alt=media&token=f6229cc9-f2b2-44ff-99a3-bdc5c140f7bf"
  },
  {
    name: "ギガイアス（ぎがいあす）",
    index: 526,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0526.PNG?alt=media&token=f4e788db-bdd5-4a66-933e-2a179d6e8fb2"
  },
  {
    name: "コロモリ（ころもり）",
    index: 527,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0527.PNG?alt=media&token=591052aa-d4ee-4e22-8717-865ef7fb9175"
  },
  {
    name: "ココロモリ（こころもり）",
    index: 528,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0528.png?alt=media&token=ac2243b5-3469-4a75-9fe4-83b7560cd7a9"
  },
  {
    name: "モグリュー（もぐりゅー）",
    index: 529,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0529.PNG?alt=media&token=068ae6f8-0136-4a35-a0c5-112a2dac6aa2"
  },
  {
    name: "ドリュウズ（どりゅうず）",
    index: 530,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0530.PNG?alt=media&token=40adaee7-2d6c-48f4-b2a6-4ec2a806a1b8"
  },
  {
    name: "タブンネ（たぶんね）",
    index: 531,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0531.PNG?alt=media&token=460913b5-2547-4d41-acf2-c1f0636a9fe4"
  },
  {
    name: "ドッコラー（どっこらー）",
    index: 532,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0532.png?alt=media&token=a8b5f515-0803-4286-8397-91799f0a4043"
  },
  {
    name: "ドテッコツ（どてっこつ）",
    index: 533,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0533.png?alt=media&token=51349269-52b3-4ccd-8efd-c92c701f79ac"
  },
  {
    name: "ローブシン（ろーぶしん）",
    index: 534,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0534.png?alt=media&token=dc103486-ff46-4c2c-be31-c599115a98ca"
  },
  {
    name: "オタマロ（おたまろ）",
    index: 535,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0535.PNG?alt=media&token=1e57d7bf-227c-4caa-9e4d-de97d9167b46"
  },
  {
    name: "ガマガル（がまがる）",
    index: 536,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0536.PNG?alt=media&token=2eb41a2c-d802-4aac-a99b-6b5bedd0d557"
  },
  {
    name: "ガマゲロゲ（がまげろげ）",
    index: 537,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0537.png?alt=media&token=b3399a00-0245-44aa-bf48-c520a1809305"
  },
  {
    name: "ナゲキ（なげき）",
    index: 538,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0538.PNG?alt=media&token=7c7dd77b-052f-4501-9b9e-68927719bd6c"
  },
  {
    name: "ダゲキ（だげき）",
    index: 539,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0539.png?alt=media&token=d5806b7b-4b97-45a0-b1d3-469d02a144e2"
  },
  // {
  //   name: "クルミル（くるみる）",
  //   index: 540,
  //   img: ""
  // },
  // {
  //   name: "クルマユ（くるまゆ）",
  //   index: 541,
  //   img: ""
  // },
  // {
  //   name: "ハハコモリ（ははこもり）",
  //   index: 542,
  //   img: ""
  // },
  {
    name: "フシデ（ふしで）",
    index: 543,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0543.PNG?alt=media&token=0c68caa0-5cc8-480e-8957-aa9802598680"
  },
  {
    name: "ホイーガ（ほいーが）",
    index: 544,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0544.PNG?alt=media&token=4a0ab977-96ce-40e7-a8dc-232777da595f"
  },
  {
    name: "ペンドラー（べんどらー）",
    index: 545,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0545.png?alt=media&token=1608b389-1100-4d38-8900-3961d111c930"
  },
  // {
  //   name: "モンメン（もんめん）",
  //   index: 546,
  //   img: ""
  // },
  // {
  //   name: "エルフーン（えるふーん）",
  //   index: 547,
  //   img: ""
  // },
  // {
  //   name: "チュリネ（ちゅりね）",
  //   index: 548,
  //   img: ""
  // },
  // {
  //   name: "ドレディア（どれでぃあ）",
  //   index: 549,
  //   img: ""
  // },
  {
    name: "バスラオ（ばすらお）",
    index: 550,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0550.PNG?alt=media&token=e5a0b1dc-e4be-48de-afb3-d6b666df860f"
  },
  // {
  //   name: "メグロコ（めぐろこ）",
  //   index: 551,
  //   img: ""
  // },
  // {
  //   name: "ワルビル（わるびる）",
  //   index: 552,
  //   img: ""
  // },
  // {
  //   name: "ワルビアル（わるびある）",
  //   index: 553,
  //   img: ""
  // },
  {
    name: "ダルマッカ（だるまっか）",
    index: 554,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0554.png?alt=media&token=4046f387-b2d7-4504-8952-e749e4093e1e"
  },
  {
    name: "ヒヒダルマ（ひひだるま）",
    index: 555,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0555.png?alt=media&token=83c43bf8-2b81-4026-882c-8f64a2680814"
  },
  {
    name: "マラカッチ（まらかっち）",
    index: 556,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0556.png?alt=media&token=f88ff762-c55f-440c-ad59-7ac813f1184b"
  },
  {
    name: "イシズマイ（いしずまい）",
    index: 557,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0557.png?alt=media&token=0a19095a-7a22-47de-a925-3bfab2c6e869"
  },
  {
    name: "イワパレス（いわぱれす）",
    index: 558,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0558.png?alt=media&token=ef0d27ff-1f17-44f8-a091-32bdf06cef87"
  },
  {
    name: "ズルッグ（ずるっぐ）",
    index: 559,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0559.png?alt=media&token=6dc2aa0f-e9ef-493e-b319-83878595826d"
  },
  {
    name: "ズルズキン（ずるずきん）",
    index: 560,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0560.png?alt=media&token=a80036dc-e0c7-4c1f-9a81-8f6148c84b9a"
  },
  {
    name: "シンボラー（しんぼらー）",
    index: 561,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0561.png?alt=media&token=490f115d-2f64-47d9-8fcd-a5b017536b4b"
  },
  {
    name: "デスマス（ですます）",
    index: 562,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0562.png?alt=media&token=1538f35a-7dfd-4e21-96d0-5989c3d25bb7"
  },
  {
    name: "デスカーン（ですかーん）",
    index: 563,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0563.PNG?alt=media&token=a6711882-1e60-4ff3-9f18-bbd5cdc0bf1e"
  },
  {
    name: "プロトーガ（ぷろとーが）",
    index: 564,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0564.png?alt=media&token=9d594d0d-4a3e-44c1-baa4-01e78d76e785"
  },
  {
    name: "アバゴーラ（あばごーら）",
    index: 565,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0565.png?alt=media&token=8052827c-e0ed-4324-a610-ffba156d50e0"
  },
  {
    name: "アーケン（あーけん）",
    index: 566,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0566.png?alt=media&token=454a4818-177f-4733-8dfd-2dbe805f5662"
  },
  {
    name: "アーケオス（あーけおす）",
    index: 567,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0567.png?alt=media&token=e970e1f5-0be9-4607-ae6c-e5a88649f434"
  },
  {
    name: "ヤブクロン（やぶくろん）",
    index: 568,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0568.png?alt=media&token=56913bfc-1e0a-463b-bf1a-163224dda40f"
  },
  {
    name: "ダストダス（だすとだす）",
    index: 569,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0569.png?alt=media&token=0032b8c7-ce07-4b60-bd71-c30acc070350"
  },
  // {
  //   name: "ゾロア（ぞろあ）",
  //   index: 570,
  //   img: ""
  // },
  // {
  //   name: "ゾロアーク（ぞろあーく）",
  //   index: 571,
  //   img: ""
  // },
  {
    name: "チラーミィ（ちらーみぃ）",
    index: 572,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0572.png?alt=media&token=e5d8e5a3-09dc-4358-9b10-11a74d50f638"
  },
  {
    name: "チラチーノ（ちらちーの）",
    index: 573,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0573.png?alt=media&token=234a3e2a-7c42-4bb0-ab0c-41da6c743265"
  },
  {
    name: "ゴチム（ごちむ）",
    index: 574,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0574.PNG?alt=media&token=cc428e5a-169c-46eb-9216-8450fc684799"
  },
  {
    name: "ゴチミル（ごちみる）",
    index: 575,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0575.PNG?alt=media&token=a8481ce4-1010-4837-a09a-570bdf0c20ff"
  },
  {
    name: "ゴチルゼル（ごちるぜる）",
    index: 576,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0576.jpeg?alt=media&token=85f91ecf-224b-4c56-99ef-e5035b707c49"
  },
  {
    name: "ユニラン（ゆにらん）",
    index: 577,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0577.PNG?alt=media&token=c148ea96-7d11-49b6-b97a-1c7db11ed568"
  },
  {
    name: "ダブラン（だぶらん）",
    index: 578,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0578.PNG?alt=media&token=b0ac4c1f-08f8-4904-a334-1e2223ecd6af"
  },
  {
    name: "ランクルス（らんくるす）",
    index: 579,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0579.PNG?alt=media&token=9e944de3-d408-4802-90b5-5312e203dadf"
  },
  // {
  //   name: "コアルヒー（こあるひー）",
  //   index: 580,
  //   img: ""
  // },
  // {
  //   name: "スワンナ（すわんな）",
  //   index: 581,
  //   img: ""
  // },
  // {
  //   name: "バニプッチ（ばにぷっち）",
  //   index: 582,
  //   img: ""
  // },
  // {
  //   name: "バニリッチ（ばにりっち）",
  //   index: 583,
  //   img: ""
  // },
  // {
  //   name: "バイバニラ（ばいばにら）",
  //   index: 584,
  //   img: ""
  // },
  // {
  //   name: "シキジカ（しきじか）",
  //   index: 585,
  //   img: ""
  // },
  // {
  //   name: "メブキジカ（めぶきじか）",
  //   index: 586,
  //   img: ""
  // },
  // {
  //   name: "エモンガ（えもんが）",
  //   index: 587,
  //   img: ""
  // },
  {
    name: "カブルモ（かぶるも）",
    index: 588,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0588.png?alt=media&token=f8f8ec10-6311-4773-8ca4-60bdc8fb325b"
  },
  {
    name: "シュバルゴ（しゅばるご）",
    index: 589,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0589.png?alt=media&token=1d505464-90aa-45a9-b88a-448e1f7bef68"
  },
  {
    name: "タマゲタケ（たまげたけ）",
    index: 590,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0590.png?alt=media&token=0ba05748-32f8-45bf-a1c8-981bd7ac811d"
  },
  {
    name: "モロバレル（もろばれる）",
    index: 591,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0591.png?alt=media&token=72acc3d0-8563-44f2-af44-295c70b4b917"
  },
  // {
  //   name: "プルリル（ぷるりる）",
  //   index: 592,
  //   img: ""
  // },
  // {
  //   name: "ブルンゲル（ぶるんげる）",
  //   index: 593,
  //   img: ""
  // },
  {
    name: "ママンボウ（ままんぼう）",
    index: 594,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0594.png?alt=media&token=4d203d55-3005-43f4-8fc1-4144957f038b"
  },
  {
    name: "バチュル（ばちゅる）",
    index: 595,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0595.png?alt=media&token=ab6f3c77-e665-4987-8952-3c992dbbb65b"
  },
  {
    name: "デンチュラ（でんちゅら）",
    index: 596,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0596.png?alt=media&token=4c88616c-b696-492a-8033-6c34eff7b15c"
  },
  {
    name: "テッシード（てっしーど）",
    index: 597,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0597.png?alt=media&token=885afbd9-112f-4853-81a0-dade52fc0bcd"
  },
  {
    name: "ナットレイ（なっとれい）",
    index: 598,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0598.jpeg?alt=media&token=5463011f-d720-46de-abd8-64a000a1b8a6"
  },
  {
    name: "ギアル（ぎある）",
    index: 599,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0599.png?alt=media&token=1f808ec7-2f1f-4a81-b569-b255c3b99fa9"
  },
  {
    name: "ギギアル（ぎぎある）",
    index: 600,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0600.png?alt=media&token=98417b1d-1f95-4c4d-afe2-516621b8f8e4"
  },
  {
    name: "ギギギアル（ぎぎぎある）",
    index: 601,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0601.png?alt=media&token=07d23eef-3246-46c5-b3c2-c67d93cc9571"
  },
  // {
  //   name: "シビシラス（しびしらす）",
  //   index: 602,
  //   img: ""
  // },
  // {
  //   name: "シビビール（しびびーる）",
  //   index: 603,
  //   img: ""
  // },
  // {
  //   name: "シビルドン（しびるどん）",
  //   index: 604,
  //   img: ""
  // },
  // {
  //   name: "リグレー（りぐれー）",
  //   index: 605,
  //   img: ""
  // },
  // {
  //   name: "オーベム（おーべむ）",
  //   index: 606,
  //   img: ""
  // },
  {
    name: "ヒトモシ（ひともし）",
    index: 607,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0607.jpeg?alt=media&token=c8d21c36-176a-466e-908a-2a02d4b42e72"
  },
  {
    name: "ランプラー（らんぷらー）",
    index: 608,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0608.png?alt=media&token=1a564eb1-1c70-4e12-9bb6-a3179563ae35"
  },
  {
    name: "シャンデラ（しゃんでら）",
    index: 609,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0609.png?alt=media&token=9d29e92d-5bc1-4c3c-816e-7ec97a564518"
  },
  {
    name: "キバゴ（きばご）",
    index: 610,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0610.png?alt=media&token=b4108624-62d5-4790-81a1-155df90e8881"
  },
  {
    name: "オノンド（おのんど）",
    index: 611,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0611.png?alt=media&token=6b9ad113-5ef8-4f7d-ac9c-45401caa5fcb"
  },
  {
    name: "オノノクス（おののくす）",
    index: 612,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0612.png?alt=media&token=d9e34fbf-9348-4909-a67a-71d516b06ac5"
  },
  {
    name: "クマシュン（くましゅん）",
    index: 613,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0613.png?alt=media&token=8f634604-79b4-482c-be1b-3f0735982cf7"
  },
  {
    name: "ツンベアー（つんべあー）",
    index: 614,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0614.png?alt=media&token=5b170a9e-ccb0-4235-a6eb-a9110c6993c0"
  },
  {
    name: "フリージオ（ふりーじお）",
    index: 615,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0615.png?alt=media&token=80d1b5c8-c270-4e11-8039-6c7db2209a52"
  },
  {
    name: "チョボマキ（ちょぼまき）",
    index: 616,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0616.png?alt=media&token=b690e4f8-00dc-4d81-bd94-119c62c86ffa"
  },
  {
    name: "アギルダー（あぎるだー）",
    index: 617,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0617.png?alt=media&token=1f336636-8415-45f8-b03b-9450779b14ff"
  },
  {
    name: "マッギョ（まっぎょ）",
    index: 618,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0618.JPG?alt=media&token=ae3a07fb-574c-4361-9dac-ee73c05b8df8"
  },
  // {
  //   name: "コジョフー",
  //   index: 619,
  //   img: ""
  // },
  // {
  //   name: "コジョンド",
  //   index: 620,
  //   img: ""
  // },
  // {
  //   name: "クリムガン",
  //   index: 621,
  //   img: ""
  // },
  {
    name: "ゴビット（ごびっと）",
    index: 622,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0622.png?alt=media&token=3cc2a783-aa93-4d81-a5bb-3a1b4b84ecf3"
  },
  {
    name: "ゴルーグ（ごるーぐ）",
    index: 623,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0623.png?alt=media&token=06e263e6-bc71-4605-9aa4-8299301cb75c"
  },
  // {
  //   name: "コマタナ（こまたな）",
  //   index: 624,
  //   img: ""
  // },
  // {
  //   name: "キリキザン（きりきざん）",
  //   index: 625,
  //   img: ""
  // },
  // {
  //   name: "バッフロン（ばっふろん）",
  //   index: 626,
  //   img: ""
  // },
  {
    name: "ワシボン（わしぼん）",
    index: 627,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0627.png?alt=media&token=8e3966ad-8d6b-477c-b606-5c98a6ba446e"
  },
  {
    name: "ウォーグル（うぉーぐる）",
    index: 628,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0628.png?alt=media&token=a1d8f711-f4e0-47d8-af84-46607d5a0e8f"
  },
  // {
  //   name: "バルチャイ（ばるちゃい）",
  //   index: 629,
  //   img: ""
  // },
  // {
  //   name: "バルジーナ（ばるじーな）",
  //   index: 630,
  //   img: ""
  // },
  {
    name: "クイタラン（くいたらん）",
    index: 631,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0631.png?alt=media&token=8449e730-9490-453c-9382-1dea4f4b53dd"
  },
  {
    name: "アイアント（あいあんと）",
    index: 632,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0632.png?alt=media&token=ad75356a-caab-4b58-a14c-2671d68fb178"
  },
  {
    name: "モノズ（ものず）",
    index: 633,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0633.png?alt=media&token=848cacbf-8228-4b8b-9a3a-91f34e0630fa"
  },
  {
    name: "ジヘッド（じへっど）",
    index: 634,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0634.png?alt=media&token=27f1c7df-9269-4ea0-b063-60ac63b50983"
  },
  {
    name: "サザンドラ（さざんどら）",
    index: 635,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0635.png?alt=media&token=80502dca-379a-48af-9647-f5a4d627a9f4"
  },
  // {
  //   name: "メラルバ（めらるば）",
  //   index: 636,
  //   img: ""
  // },
  // {
  //   name: "ウルガモス（うるがもす）",
  //   index: 637,
  //   img: ""
  // },
  {
    name: "コバルオン（こばるおん）",
    index: 638,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0638.png?alt=media&token=9279e5a3-e19d-4116-ad55-6c139a66a75b"
  },
  {
    name: "テラキオン（てらきおん）",
    index: 639,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0639.png?alt=media&token=78e59f3b-d7c0-4abc-a581-c97a7d3241a3"
  },
  {
    name: "ビリジオン（びりじおん）",
    index: 640,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0640.png?alt=media&token=9bc5bc5b-e556-47cd-b4fe-fae7e5bffe77"
  },
  {
    name: "トルネロス（とるねろす）",
    index: 641,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0641.png?alt=media&token=9c95204f-5c5a-4df5-ae67-162972c9f2d6"
  },
  {
    name: "ボルトロス（ぼるとろす）",
    index: 642,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0642.png?alt=media&token=4c78f2b4-abbf-4190-82dc-187415db6895"
  },
  // {
  //   name: "レシラム（れしらむ）",
  //   index: 643,
  //   img: ""
  // },
  // {
  //   name: "ゼクロム（ぜくろむ）",
  //   index: 644,
  //   img: ""
  // },
  {
    name: "ランドロス（らんどろす）",
    index: 645,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0645.jpeg?alt=media&token=c9e089cc-220e-40c5-b38c-0b960b071052"
  },
  // {
  //   name: "キュレム（きゅれむ）",
  //   index: 646,
  //   img: ""
  // },
  // {
  //   name: "ケルディオ（けるでぃお）",
  //   index: 647,
  //   img: ""
  // },
  // {
  //   name: "メロエッタ（めろえった）",
  //   index: 648,
  //   img: ""
  // },
  {
    name: "ゲノセクト（げのせくと）",
    index: 649,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0649.png?alt=media&token=423683d0-0457-4ae5-beef-5f19308b3cf5"
  },
  {
    name: "メルタン（めるたん）",
    index: 808,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0808.PNG?alt=media&token=0dd98aab-3f2b-492d-a78d-b2c850a59888"
  },
  {
    name: "メルメタル（めるめたる）",
    index: 809,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F0809.PNG?alt=media&token=0ae12509-f29c-40f5-819c-b1f923bf4469"
  },
  {
    name: "【アローラ】コラッタ(あろーらこらった)",
    index: 10001,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10001.png?alt=media&token=28cd6d95-50da-4625-875e-a12eaedfa1eb"
  },
  {
    name: "【アローラ】ラッタ(あろーららった)",
    index: 10002,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10002.png?alt=media&token=6a7ec2ca-7f60-4cb3-8b4e-c5b392718d51"
  },
  {
    name: "【アローラ】サンド(あろーらさんど)",
    index: 10003,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10003.png?alt=media&token=a79261b2-bbe5-4179-8164-2ba35adc6738"
  },
  {
    name: "【アローラ】サンドパン(あろーらさんどぱん)",
    index: 10004,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10004.png?alt=media&token=a16751ff-9747-4573-96ab-0df1588272b2"
  },
  {
    name: "【アローラ】ロコン(あろーらろこん)",
    index: 10005,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10005.png?alt=media&token=3ffa3852-1bd7-4722-b27c-ff9bfb8831a7"
  },
  {
    name: "【アローラ】キュウコン(あろーらきゅうこん)",
    index: 10006,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10006.png?alt=media&token=93bccabc-fc2f-46f8-a6d8-f04216cb08f8"
  },
  {
    name: "【アローラ】ニャース(あろーらにゃーす)",
    index: 10007,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10007.png?alt=media&token=b67eebc1-b12f-4be2-8f53-c853d51c4e4e"
  },
  {
    name: "【アローラ】ペルシアン(あろーらぺるしあん)",
    index: 10008,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10008.png?alt=media&token=9da7a231-2260-41c1-8367-e0ac2d6f12a5"
  },
  {
    name: "【アローラ】ベトベター(あろーらべとべたー)",
    index: 10009,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10009.png?alt=media&token=c2058777-79bc-4146-93c2-502af6b3a3b3"
  },
  {
    name: "【アローラ】ベトベトン(あろーらべとべとん)",
    index: 10010,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10010.png?alt=media&token=eaa6872c-08d3-48aa-a2e8-668c575f0c51"
  },
  {
    name: "【アローラ】ナッシー(あろーらなっしー)",
    index: 10011,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10011.png?alt=media&token=cce9e295-2466-4cac-91b9-42ef7bef76c7"
  },
  {
    name: "【アローラ】イシツブテ(あろーらいしつぶて)",
    index: 10012,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10012.png?alt=media&token=be2ddb76-ad0c-40c9-b3f6-ae242c08524d"
  },
  {
    name: "【アローラ】ゴローン(あろーらごろーん)",
    index: 10013,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10013.png?alt=media&token=a1e0795f-c770-4624-987e-e8965a83bcc7"
  },
  {
    name: "【アローラ】ゴローニャ(あろーらごろーにゃ)",
    index: 10014,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10014.png?alt=media&token=de4eaaa9-7c5e-48a3-8104-a417ae37322b"
  },
  {
    name: "【アローラ】ディグダ(あろーらでぃぐだ)",
    index: 10015,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10015.png?alt=media&token=26f53be0-e08a-4ae1-9cf4-af5a6baae463"
  },
  {
    name: "【アローラ】ダグトリオ(あろーらだぐとりお)",
    index: 10016,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10016.png?alt=media&token=3d929af0-9543-457f-b3b8-db01afbbb09e"
  },
  {
    name: "【アローラ】ライチュウ(あろーららいちゅう)",
    index: 10017,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10017.png?alt=media&token=02e3f4c0-ff69-4f58-bf48-03d23d7d9bbc"
  },
  {
    name: "【アローラ】ガラガラ(あろーらがらがら)",
    index: 10018,
    img: "https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/pokemonImg%2F10018.png?alt=media&token=844cb089-666c-48b1-b1d9-1e335eb14395"
  }
]

const shadowList = [20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20013, 20014, 20015, 20019, 20020, 20027, 20028, 20037, 20038, 20041, 20042, 20043, 20044, 20045, 20048, 20049, 20052, 20053, 20054, 20055, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20069, 20070, 20071, 20081, 20082, 20088, 20089, 20096, 20097, 20102, 20103, 20104, 20105, 20106, 20107, 20123, 20125, 20126, 20127, 20129, 20130, 20131, 20137, 20138, 20139, 20143, 20144, 20145, 20146, 20147, 20148, 20149, 20169, 20179, 20180, 20181, 20182, 20186, 20200, 20202, 20212, 20215, 20225, 20228, 20229, 20233, 20234, 20243, 20246, 20247, 20248, 20258, 20259, 20260, 20273, 20274, 20275, 20280, 20281, 20282, 20302, 20303, 20318, 20319, 20328, 20329, 20330, 20331, 20332, 20353, 20354, 20355, 20356, 20359, 20371, 20372, 20373, 20374, 20375, 20376, 20387, 20388, 20389, 20429, 20459, 20460, 20461, 20462, 20466, 20467, 20474, 20475, 20477]

export {
  pokemonList,
  shadowList
}