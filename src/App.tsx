import React, { useState } from 'react';
import { Graph } from './Graph.tsx'
import { graphRelations, dijkstra } from "./Graph.tsx";
import './App.css';

function App() {

  const images = Object.fromEntries(
    Object.entries(import.meta.glob('./assets/*.png', { eager: true }))
      .map(([path, module]) => [path.replace('./assets/', ''), (module as any).default])
  );

  // const keiroImages = Object.fromEntries(
  //   Object.entries(import.meta.glob('./assets/keiro/*.png', { eager: true }))
  //     .map(([path, module]) => [path.replace('./assets/keiro/*.png', ''), (module as any).default])
  // );

  const buildingSelection = [
    { value: '1', label: 'S-Port' },
    { value: '2', label: '北会館・北館食堂' },
    { value: '3', label: '南会館・南館食堂' },
    { value: '4', label: '共通講義棟' },
    { value: '5', label: '情報学部1号館' },
    { value: '6', label: '情報学部2号館' },
    { value: '7', label: '総合研究棟' },
    { value: '8', label: '運動場' },
    { value: '3', label: '体育館' },
    { value: '7', label: '工学部1号館' },
    { value: '11', label: '工学部2号館' },
    { value: '11', label: '工学部3号館' },
    { value: '13', label: '工学部4号館' },
    { value: '14', label: '工学部5号館' },
    { value: '15', label: '工学部6号館' },
    { value: '16', label: '工学部7号館' },
    { value: '17', label: '工学部8号館' },
    { value: '18', label: '武道館' },
    { value: '18', label: '佐鳴会館' },
    { value: '20', label: '課外活動共用施設' },
    // { value: '21', label: 'ものづくり館' },
    // { value: '22', label: '次世代ものづくり人材育成センター' },
    { value: '23', label: 'イノベーション社会連携推進機構' },
    { value: '6', label: '情報基盤センター' },
    { value: '6', label: '創造科学技術大学院' },
    // { value: '26', label: '光創起イノベーション研究拠点棟' },
    // { value: '27', label: '電子工学研究所' },
    // { value: '28', label: 'ナノデバイス作製・評価センター' },
    // { value: '29', label: '高柳記念未来技術創造館' },
    { value: '17', label: 'プール' },
    { value: '15', label: '弓道場' },
    { value: '32', label: 'テニスコート'},
  ];

  const [overlayImages, setOverlayImages] = useState<string[]>([]);
  const [option1, setOption1] = useState<string>("");
  const [option2, setOption2] = useState<string>("");

  // ダイクストラ結果を表示
  const [distance, setDistance] = useState<number | null>(null);
  const [pathNodes, setPathNodes] = useState<string[]>([]);
  const [pathEdges, setPathEdges] = useState<string[]>([]);

  const handleOption1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption1(e.target.value);
  };
  const handleOption2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption2(e.target.value);
  };

  // Button1
  const handleButton1Click = () => {
    // option1, option2 が空の場合は処理しない例
    if (!option1 || !option2) {
      alert("Please select both start and end nodes!");
      return;
    }
    // ダイクストラ実行
    const result = dijkstra(graphRelations, option1, option2);
    setDistance(result.distance);
    setPathNodes(result.pathNodes);
    setPathEdges(result.pathEdges);

    // ラベルの画像を表示
    const edgeImages = result.pathEdges.map((label) => images[`${label}.png`]);
    setOverlayImages(edgeImages);
  };

  // Button2
  // const handleButton2Click = () => {
  //   setOverlayImages([images['map.png'], images['difsize.png']]);
  // };

  return (
    <div className="container">
      <div className="image-area">
        {overlayImages.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Layer ${index}`}
            className="overlay-image"
          />
        ))}
      </div>

      {/* 右カラム */}
      <div className="right-column">
        <h1 className="title">Fresh Navi</h1>
        <h2 className="subtitle">出発地</h2>
        {/* 選択メニュー1 */}
        <select className="blue-area" value={option1} onChange={handleOption1Change}>
          <option value="">出発地を選択</option>
          {buildingSelection.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <h2 className="subtitle">目的地</h2>
        {/* 選択メニュー2 */}
        <select className="blue-area" value={option2} onChange={handleOption2Change}>
          <option value="">目的地を選択</option>
          {buildingSelection.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* ボタン */}
        <button className="green-button" onClick={handleButton1Click}>
          経路を検索
        </button>
        {/* <button className="green-button" onClick={handleButton2Click}> */}
        {/*   Button2 */}
        {/* </button> */}

        {/* 結果表示 debug用 */}
        {/* {distance !== null && ( */}
        {/*   <div style={{ marginTop: "1rem" }}> */}
        {/*     <p>最短距離: {distance}</p> */}
        {/*     <p>通過ノード: {pathNodes.join(" → ")}</p> */}
        {/*     <p>通過ラベル: {pathEdges.join(" → ")}</p> */}
        {/*   </div> */}
        {/* )} */}
      </div>
    </div>
  );
}

export default App;
