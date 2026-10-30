// 試演会プログラムデータ
// 曲目が確定したら、下記の配列に1作品ずつオブジェクトを追加してください。
// image は仮のプレースホルダーです。本番用の画像パスに差し替えてください。
//
// 記入例：
// {
//   id: "piece-1",
//   order: 1,
//   title: "作品名",
//   composer: "作曲者名",
//   arranger: "編曲者名",        // 編曲作品のみ（不要なら省略可）
//   performer: "演奏者名",       // 複数人の場合は \n で改行して1人1行
//   description: "曲目の解説テキスト。",
//   image: "/path/to/image.jpg",
// },
//
// ※ order（演奏順）と配列の並びは、プログラムのPDF（2026/10/30作成）の掲載順。
//    第1部（デジタル音源作品の発表）が 1〜4、休憩をはさんで第2部（室内楽曲作品の発表）が 5〜10。

export const programData = [
  {
    id: "Pinna",
    order: 1,
    title: "Pinna",
    composer: "酒井結斗（Yuito Sakai）",
    description:
      "バイノーラル録音は、ヘッドフォンやイヤホンで聴かれることを前提に、二つの耳に届く音の差によって空間を再現する技術である。これをスピーカーで再生すると、音の位置の手がかりは崩れてしまうが、音がもつ「近さ」は失われない。本作は、ダミーヘッドマイクで収録した囁きと触れる音から、両耳の差の成分を取り出し、四台のスピーカーで囲まれた空間へと展開する。耳元という最も私的な距離で発せられた声は、やがて増殖し、変質し、空間を自在に駆け巡る。",
    image: "",
  },
  {
    id: "nyukoku-kanrikyoku",
    order: 2,
    title: "入国管理局",
    composer: "李鎔賑", // ローマ字表記は未確認
    description: "", // アンケートの回答なし
    image: "",
  },
  {
    id: "kotonasekai",
    order: 3,
    title: "コトナセカイ",
    composer: "吉田唯翔（Yuito Yoshida）",
    performer: "",
    description:
      "曲としては幻想的でありどこか感動するようなイメージで作品を作ってみました。この曲は本来、合成音声（ボーカロイドのようなもの）が歌唱するポップス曲なのですが、今回は人の声と合成された声を比較し、どのように異なるのかを聴き比べて欲しいと感じたため、このような形の作品とさせていただきました。聞きどころとしては、個人的には曲を通して鳴っているストリングス（ヴァイオリンなどの弦楽器隊）が綺麗だと思うのと、歌詞を深く考えて書いてみたので良ければ着目してみてください。",
    image: "",
  },
  {
    id: "shinkyoku",
    order: 4,
    title: "新曲", // PDFの表記のまま（仮題かは未確認）
    composer: "鈴木悠斗", // ローマ字表記は未確認
    description: "", // アンケートの回答なし
    image: "",
  },
  {
    id: "shinai-naru-anata-e",
    order: 5,
    title: "親愛なるあなたへ。",
    composer: "源内仁都", // ローマ字表記は未確認
    performer: "", // 演奏者は未確認
    description: "", // アンケートの回答なし
    image: "",
  },
  {
    id: "prism",
    order: 6,
    title: "プリズム(Prism)",
    composer: "廣瀬志門（Shimon Hirose）",
    performer:
      "ピアノ：同大学音楽研究科（修士課程）器楽専攻1年　小松さくら（こまつさくら）",
    description:
      "この曲は光を屈折させる「プリズム」をイメージして作ったピアノソロのための小品です。七音からなるテーマを軸にして、七色の光を表現しています。柔らかく、結晶のおように澄んだピアノの音色と、幻想的な和音の響きをお楽しみください。",
    image: "",
  },
  {
    id: "flora",
    order: 7,
    title: "Flora ~for Clarinet Ensemble~",
    composer: "曽根悠佑（Yusuke Sone）",
    performer:
      "Clarinet 1：管楽コース2年　滝川慶吾（たきかわけいご）\n" +
      "Clarinet 2：管楽コース2年　神谷音花（かみやおとは）\n" +
      "Clarinet 3：管楽コース1年　榊原サラ（さかきばらさら）\n" +
      "Alto Clarinet：管楽コース2年　八代悠真（やしろゆうま）\n" +
      "Bass Clarinet：管楽コース2年　野中愛世（のなかあよ）",
    description: "", // PDFでは「＊未回答」
    image: "",
  },
  {
    id: "romanian-folk-dances",
    order: 8,
    title: "弦楽四重奏「ルーマニア民俗舞曲」",
    composer: "B.バルトーク",
    arranger: "山下喜己（Yoshiki Yamashita）",
    performer:
      "1st Vn：弦楽コース4年　石川立都（いしかわりつ）\n" +
      "2nd Vn：弦楽コース2年　柴田蓮音（しばたれおん）\n" +
      "Va：弦楽コース2年　福井清江（ふくいすみえ）\n" +
      "Vc：弦楽コース4年　渡辺彩巴（わたなべいろは）",
    description: "", // PDFでは「＊記入なし」
    image: "",
  },
  {
    id: "fall-leaves",
    order: 9,
    title: "Fall Leaves~for3Trumpets and Piano~",
    composer: "源内仁都", // ローマ字表記は未確認
    performer: "", // 演奏者は未確認
    description: "", // アンケートの回答なし
    image: "",
  },
  {
    id: "allegro-energico",
    order: 10,
    title: "サクソフォン四重奏「Allegro Energico」",
    composer: "山下喜己（Yoshiki Yamashita）",
    performer:
      "S.Sax.：管楽コース1年　高橋伶（たかはしれい）\n" +
      "A.Sax.：管楽コース1年　内藤玲音（ないとうれね）\n" +
      "T.Sax.：音楽教育コース1年　渡辺聖（わたなべさとし）\n" +
      "B.Sax.：管楽コース1年　冨田涼介（とみたりょうすけ）",
    description:
      "サクソフォンの持つ力強さと美しさの対比の付けた作品です。迫力のある音圧と甘い旋律をお楽しみください。",
    image: "",
  },
];
