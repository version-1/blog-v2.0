---
templateKey: blog-post
language: ja
title: デザイン実務経験ゼロのエンジニアが個人開発でのアイコンの作り方を考える
slug: how-to-create-logo-for-private-project
createdAt: 2019-12-06 17:49:48
updatedAt: 2020-02-04 21:49:13
thumbnail: /2019/12/20191206_how-to-create-logo-for-private-project/thumbnail.png
categories:
  - design
tags:
  - design
---

こちらは[個人開発 Advent Calendar 2019](https://qiita.com/advent-calendar/2019/private-development)の16日目の投稿になります。

個人開発とのことで技術的なところを書く方がほとんどかと思うので私の方では、
個人サービスを作る時のアイコンの作り方について書いて行きます。
## はじめに


### 自己紹介

私自身デザイナーの経験があったりするわけではなく、最初はRailsから始まり、徐々にReactも触るようになり、
結果的にフルスタックっぽい形でサーバからフロント、React Nativeなどを触りながらフリーランスとしてお仕事させて頂いています。

またその傍ら

[PaPyrus](https://papyrus-app.org/)

という個人アプリを開発しています。

<a href="https://papyrus-app.org/">
  <img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/wallpaper.png" alt="papyrus" width="400px" />
</a>

こちらのアプリを作るまでにもいくつか自分でサービスを作って公開してみたことがあるのですが、
やっぱり機能の実装に手が回らないのと、そもそもデザインの基礎的なところがかけていたりして、
どうもいい感じのイケてるアイコンを作ることができませんでした。

ただ、今回のサービスは個人的に知り合いのデザイナーさんのアドバイスを元に「いい感じのアイコンができた！」という手応えがあったので、
アイコンを作るまでのプロセスについてまとめていこうと思います。この手順さえ守れば誰でも思い通りのアイコンが作れる！というものではないですが、
他で個人開発をされる方の参考になればという形です。

### PaPyrusについて

現在開発中の[PaPyrus](https://papyrus-app.org/)はElectronで開発されたMac上で動作する(今のところMacでしか動作確認できていません）マークダウンメモアプリです。


メモアプリというと「ノートを整理」する機能がついているものが普通かと思うのですが、
ズボラな私は

「ノートを書くのは良いもののノートが整理できない」

という問題に頭を抱えていました。

ブログの下書きのようなものはEvernoteやInkdrop, Boostnoteなどなど世にある優秀なメモアプリで十分対応できるのですが、

* その日のタスクリストを書き連ねる
* 長いコマンドをコピペしてのこしておく
* メッセージの下書き
* ログの一部をコピペ

などなど、**寿命の短いメモ**をこれらのメモアプリに残すとたちまちゴミノートが溜まっていってしまうので、
これらのメモアプリとは別に自分には、

**「落書きをしたりアイデアをまとめる裏紙」**

みたいなアプリが必要でした。

これに一番近いアプリがMacの**stickies**で、しばらくこれをつかっていたのですがstickiesはマークダウンが使えないので、

「ちょっと機能を足したアプリが欲しい・・・」

ということで**stickiesにマークダウンを足した付箋型メモアプリ**を作りました。

ベータ版を公開中で会員登録をして頂ければアプリをダウンロードして使って頂けます。
まだまだ改善の余地の多いアプリですが、興味あれば触っていただけると嬉しいです。


<div class="adsense"></div>

### PaPyrusのアイコン

前をきはこれぐらいにして、早速アイコンの話に移ります。
PaPyrusはデザインも実装も自分でやっているのですが、もちろんアイコンも自分がデザインしました。
そんなPaPyrusのアイコンはこちらです。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/icon.png" width="300" alt="papyrus icon"/>

どうですかね？

これまでに数件個人サービスのようなものを作ってみたことがあるのですが、アイコンがどうしてもみていられないほど
ダサくなってしまっていました。そんな中で、今回のPaPyrusのアイコンは個人的にベストな出来だったのと、「アイコンってこうやって作るのね」みたいな
部分がぼんやり見えたので、ここで言語化しておくことにしました。


## 個人サービスのアイコンの作り方

今回はPaPyrusのアイコンを作るにあたり、アプリのデザインに見合ったカッコいいロゴを作りたいということで、
知り合いのデザイナーさんにアイコンの作り方を相談しました。
そのアドバイス+一部ググった内容+をまとめると下記のような手順になります。

1. アイコンの元になる対象物を決める
2. 対象物をスケッチ
3. スケッチを抽象化
4. 抽象化したスケッチをもとに清書


### アイコンの元になる対象物を決める

これはほぼ、ググった内容と試行錯誤の結果から考えついたものですが、まずはじめにサービスの元となるイメージから対象となる物を決めます。

今回のPaPyrusは、名前の通り「ペーパー（紙）」のイメージがあったのでアイコンにする対象物は、

**「紙」**

にしました。

Evernoteのロゴはゾウさんのイメージがありますが、左上の部分に紙をめくったようなパーツがあるので「象+紙」をロゴにしていますし、
Appleは実直に「りんご」を書いていますし、Sketchはなんでかわからないですが、「ダイアモンドっぽいもの」を書いていますね。
Slackのロゴは何をイメージして書かれているのかわからないですが今のアイコンは花っぽいですし、初期の頃は「シャープ」を抽象化しているようにみえます。

このようにして最初の工程はどういった物体を元にアイコンを作るのかと決めるというものです。
Evertnoteのように、「象+紙」みたいにモチーフを複数決めて組み合わせるのも面白そうですが、慣れないうちは一つにきめてやるのがよいでしょう。
いずれにせよ、モチーフを二つ以上にする場合は、後の工程でひとつずつ物体をスケッチするとそれぞれを組み合わせる時にアイディアのイメージがつきやすいように思います。

### 対象物をスケッチ

ここが前述のデザイナーさんに聞いて一番驚い部分なのですが、
デザイナーさん曰く

**「アイコンを作るときはイラレとかを先に開くのではなく、まずスケッチからですね」**

そういえば確かに、これまではアイコンを作るためにいきなりイラレで書いて細部が書ききれずイマイチなものになっていた。。


スケッチなんて、高校の時の美術の時間にやった時以来くらいなので何から初めてよいのかわからなかったのですが、
ものは試しようなのでとりあえず、スケッチってどんなものだっけという感じで定番の手のスケッチを書いてみました。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/procreate-sketch.png" width="300" alt="手のスケッチ"/>


スケッチのやり方なんてわからないので文明の利器に頼って、Youtubeでスケッチのやり方をみたりしながらスケッチしてみました。


しかし、この手のスケッチを終えてみたところで疑問がわきます。

**「これで良いアイコンができるのか？」**

そんな不安を抱えながら、また別の機会にデザイナーさんにスケッチのやり方や意識する点を聞いてみたのですが、

スケッチを行う目的は**観察力を磨く**ためらしいです。

なるほど手をスケッチしている時も、手がどういう形なのか光の当たり方がどういう感じなのかということのを感じとれないと
どうもうまく書くことができません。(物体を紙に写している時のイメージが間違っていたら、そりゃうまくかけないですよね。)

このことがわかってから、そもそもイケてるアイコンがどうやって書かれているかを理解するため、
アイコンをトレースしてみたり、スケッチしてみたりしました。

ある程度経験値が溜まったところでいよいよ前工程で選んだ「紙」を書いてみようといことで書いてみました。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/procreate-draft-1.png" width="300" alt="アイコンのスケッチ"/>


どうでしょう？紙感を出すためにちょっと巻いてみました。
今見ると紙にしては、ちょっと固そうですが、今回はうまくスケッチすることが目的ではないのでまぁいいでしょう。
自分なりに合格点だったのでこれをもとに次工程で抽象化させてアイコンを作っていきます。

ちなみに、最初に紙を書いた時に自分の下手さに辟易して途中でやめてしまったものがこちらです。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/procreate-draft-2.png" width="300" alt="アイコンの失敗スケッチ"/>

なんですかねこれ笑。紙感より春巻き感の方が強く出てしまっています。
まぁこんな感じで失敗もしつつ、工程を楽しんでやれると良いかと思います。笑


### スケッチを抽象化

次の工程では先ほどのスケッチを抽象化して、アイコンに近づけていきます。
これまでのスケッチはiPadアプリの[Procreate](https://procreate.art/)を使って書いていたので、引き続きProcreateで作業していきます。

最初の案がこちらです。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/procreate-icon-1.png" width="300" alt="アイコンのドラフト"/>

これは色ついてしまっているのですが、最初は線だけ書く感じで抽象化されたものを書いてその後に必要な色を足していきました。
抽象化する時には巻いている感じを強くデフォルメして書いていきました。

これでアイコンのイメージはだいぶかたまってきたのですが、色の感じがアーティスティックすぎたので、
Papyrusのイメージカラーを使ってまとめていきました。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/procreate-icon-2.png" width="300" alt="アイコンのドラフト"/>

ここまでで大分イメージついてきたのですが、線がずれていたりするので微修正はイラレでやっていくことにしました。

### 清書

前段階できっちりアイコンとして使えるものができてしまえばそのままで良いのですが、僕の場合はイラレで清書しました。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/icon-list.png" width="300" alt="アイコンの清書"/>

これが最終的に清書したものです。

色々な色で試してみたかったので、何パターンか用意して最終的に一番しっくりする左上のものをアイコンに採用するよう決めました。

黒も個人的には渋くて好きなのですが、ちょっとアプリのイメージとかけ離れているこちらの採用は見送りました。


### 完成

清書がおわったら気に入ったアイコンを書き出して完了です。
最後にスケッチしたものと最終版を並べて載せておきます。

<img src="https://statics.ver-1-0.xyz/uploads/2019/12/20191206_how-to-create-logo-for-private-project/before-after.png" width="300" alt="アイコンの比較"/>

スケッチしたものと最終的なアイコンのところで大分イメージが変わっていますが、元のスケッチをやっておくと
抽象化やデフォルメをする時のアイデアの土台や出発地点が明確になるので一度試してみていただけると良いと思います。

逆に日頃落書きしたりしてある程度日常のものをささっとかけてしまう人は事前にスケッチしたりする必要もないのかもしれません。

## さいごに

というわけで、プログラミング的要素ゼロの内容になりましたが、この記事が個人開発の手助けになれれば嬉しいです。

PaPyrus自体、React、TypeScript、Electron、Go、GraphQLを使っていて技術的なトピックでも記事がかけそうな技術を使っているので、
そちらについてもおいおい記事がかければなと思います。

では。
