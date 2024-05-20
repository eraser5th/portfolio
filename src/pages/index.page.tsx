import Image from "next/image"
import { Page } from "../components/Page"
import { TableOfContent } from "../components/TableOfContent"

const AboutPage = () => {
  return (
    <Page sideNav={<TableOfContent />}>
      <Image src="/icon.png" width={120} height={120} alt="me" />
      <h1>eraser5th</h1>
      <Basics />
      <Career />
      <Skilles />
      <Hobbies />
    </Page>
  )
}

const Basics = () => {
  return (
    <>
      <h2>プロフィール</h2>
      <p>
        本名は加藤豪（たけし）。会津大学学部４年、Zliサークル所属。
        <br />
        Webフロントエンドの開発を主にやっています。
        <br />
        趣味はゲームとアニメとVtuberと環境構築(Neovim, Wezterm, SketchyBar,
        etc)。
      </p>
    </>
  )
}

const Career = () => {
  return (
    <>
      <h2>経歴</h2>
      <h3>インターン・アルバイト経験</h3>
      <ul>
        <li>
          2022/1 ~ 現在：Appify
          Technologiesにてアルバイト・インターン(Webフロント)
        </li>
        <li>
          2023/8/14 ~ 9/29：合同会社DMM.com
          サマーインターンに参加（Webフロント）
        </li>
      </ul>
      <h3>ハッカソン</h3>
      <ul>
        <li>第２回100Program：参加</li>
        <li>
          わたしたちのウェルビーイングのためのハッカソン2021：富士通
          つながる豊かさ賞受賞
        </li>
        <li>わたしたちのウェルビーイングのためのハッカソン2022：参加</li>
        <li>Open Hack U 2021 Online Vol.3：参加</li>
      </ul>
    </>
  )
}

const Skilles = () => {
  return (
    <>
      <h2>スキル</h2>
      <h3>言語など</h3>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Lua</li>
        <li>C・C++</li>
        <li>Kotlin</li>
        <li>Java</li>
        <li>GraphQL</li>
        <li>REST API</li>
        <li>WebSocket</li>
        <li>Coq（定理証明）</li>
        <li>Prisma（ORM）</li>
        <li>Rust</li>
        <li>Haskell(勉強中)</li>
      </ul>
      <h3>フレームワーク・ライブラリなど</h3>
      <ul>
        <li>React・Next</li>
        <li>Vue・Nuxt</li>
        <li>
          CSSフレームワーク
          <ul>
            <li>Bootstrap</li>
            <li>tailwind css</li>
            <li>Chakura UI</li>
          </ul>
        </li>
        <li>Apollo Client</li>
        <li>Vite</li>
      </ul>
      <h3>ツールなど</h3>
      <ul>
        <li>Git・GitHub</li>
        <li>AWS Lambda</li>
        <li>Google App Engine</li>
        <li>Figma</li>
      </ul>
      <h3>競技プログラミング</h3>
      <ul>
        <li>
          <a href="https://atcoder.jp/users/ERASER5th">AtCoder</a>
        </li>
      </ul>
    </>
  )
}

const Hobbies = () => {
  return (
    <>
      <h2>趣味・好きなもの</h2>
      <h3>ゲーム</h3>
      <ul>
        <li>Splatoon</li>
        <li>Monster Hunter</li>
      </ul>
      <BookAnimeCommics />
      <h3>音楽</h3>
      <ul>
        <li>EGOIST</li>
        <li>削除</li>
        <li>SEKAI NO OWARI</li>
      </ul>
      <h3>環境構築・UNIX Porn</h3>
      <ul>
        <li>Neovim</li>
        <li>SketchyBar</li>
        <li>Wezterm</li>
      </ul>
      <h3>Vtuber</h3>
      <ul>
        <li>猫又おかゆ</li>
        <li>常闇トワ</li>
        <li>獅白ぼたん</li>
        <li>Hakos Bealz</li>
        <li>Calliope Mori</li>
        <li>Ceres Fauna</li>
        <li>大空スバル</li>
        <li>大神ミオ</li>
        <li>雪花ラミィ</li>
        <li>ロボ子さん</li>
        <li>兎田ぺこら</li>
        <li>姫森ルーナ</li>
        <li>風真いろは</li>
        <li>桃鈴ねね</li>
        <li>天野ピカミィ</li>
        <li>猫百合イッサ</li>
        <li>社築</li>
      </ul>
    </>
  )
}

const BookAnimeCommics = () => {
  return (
    <>
      <h3>小説・アニメ・漫画など</h3>
      <ul>
        <li>Re:ゼロから始める異世界生活</li>
        <li>ダンジョンに出会いを求めるのは間違っているだろうか</li>
        <li>終末なにしてますか？忙しいですか？救ってもらっていいですか？</li>
        <li>ギルティクラウン</li>
        <li>ばらかもん</li>
        <li>Citrus</li>
        <li>ヴァイオレット・エヴァーガーデン</li>
        <li>物語シリーズ</li>
        <li>刀語</li>
        <li>PSYCHO-PASS</li>
        <li>メイドインアビス</li>
        <li>
          TypeMoon作品
          <ul>
            <li>空の境界</li>
            <li>Fateシリーズ</li>
            <li>月姫</li>
          </ul>
        </li>
        <li>
          高橋留美子作品
          <ul>
            <li>うる星やつら</li>
            <li>めぞん一刻</li>
            <li>人魚の森</li>
          </ul>
        </li>
        <li>
          ジブリ作品
          <ul>
            <li>風の谷のナウシカ</li>
            <li>もののけ姫</li>
          </ul>
        </li>
        <li>
          竹宮恵子作品
          <ul>
            <li>私を月まで連れてって</li>
            <li>地球(テラ)へ...</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default AboutPage
