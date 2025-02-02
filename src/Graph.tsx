// 辺
export type Edge = {
  to: string;       // 到達先ノード
  cost: number;     // 距離
  label: string;    // ラベル
};

// グラフ構築
export type Graph = {
  [nodeId: string]: Edge[];
};

// グラフ
export const graphRelations: Graph = {
  '32': [
    { to: '59', cost: 18, label: '20' },
    { to: '23', cost: 23, label: '22' },
  ],
  '23': [
    { to: '32', cost: 23, label: '22' },
    { to: '14', cost: 8, label: '47' },
  ],
  '59': [
    { to: '32', cost: 18, label: '20' },
    { to: '58', cost: 10, label: '19' },
    { to: '60', cost: 24, label: '17' },
  ],
  '60': [
    { to: '59', cost: 24, label: '17' },
    { to: '66', cost: 10, label: '15' },
  ],
  '8': [
    { to: '58', cost: 10, label: '21' },
    { to: '14', cost: 13, label: '23' },
  ],
  '58': [
    { to: '8', cost: 10, label: '21' },
    { to: '59', cost: 10, label: '19' },
    { to: '7', cost: 17, label: '18' },
    { to: '56', cost: 13, label: '24' },
  ],
  '7': [
    { to: '58', cost: 17, label: '18' },
    { to: '11', cost: 7, label: '25' },
    { to: '66', cost: 7, label: '16' },
  ],
  '66': [
    { to: '7', cost: 7, label: '16' },
    { to: '60', cost: 10, label: '15' },
    { to: '13', cost: 4, label: '14' },
  ],
  '13': [
    { to: '66', cost: 4, label: '14' },
    { to: '15', cost: 8, label: '13' },
    { to: '6', cost: 13, label: '12' },
  ],
  '15': [
    { to: '13', cost: 8, label: '13' },
  ],
  '11': [
    { to: '7', cost: 7, label: '25' },
    { to: '55', cost: 6, label: '26' },
  ],
  '14': [
    { to: '23', cost: 8, label: '47' },
    { to: '8', cost: 13, label: '23' },
    { to: '57', cost: 7, label: '41' },
    { to: '18', cost: 6, label: '45' },
  ],
  '57': [
    { to: '14', cost: 7, label: '41' },
    { to: '3', cost: 6, label: '39' },
    { to: '56', cost: 3, label: '37' },
  ],
  '56': [
    { to: '57', cost: 3, label: '37' },
    { to: '58', cost: 13, label: '24' },
    { to: '65', cost: 5, label: '34' },
    { to: '64', cost: 6, label: '35' },
  ],
  '65': [
    { to: '56', cost: 5, label: '34' },
    { to: '62', cost: 6, label: '32' },
    { to: '55', cost: 12, label: '27' },
  ],
  '55': [
    { to: '6', cost: 11, label: '11' },
    { to: '65', cost: 12, label: '27' },
    { to: '11', cost: 6, label: '26' },
    { to: '52', cost: 7, label: '4' },
  ],
  '6': [
    { to: '55', cost: 11, label: '11' },
    { to: '13', cost: 13, label: '12' },
    { to: '4', cost: 2, label: '10' },
  ],
  '4': [
    { to: '6', cost: 2, label: '10' },
    { to: '5', cost: 4, label: '8' },
    { to: '53', cost: 5, label: '9' },
  ],
  '5': [
    { to: '4', cost: 4, label: '8' },
    { to: '2', cost: 5, label: '7' },
  ],
  '2': [
    { to: '5', cost: 5, label: '7' },
    { to: '53', cost: 4, label: '6' },
  ],
  '53': [
    { to: '4', cost: 5, label: '9' },
    { to: '2', cost: 4, label: '6' },
    { to: '52', cost: 11, label: '5' },
  ],
  '52': [
    { to: '55', cost: 7, label: '4' },
    { to: '53', cost: 11, label: '5' },
    { to: '51', cost: 3, label: '3' },
  ],
  '51': [
    { to: '52', cost: 3, label: '3' },
    { to: '1', cost: 4, label: '2' },
    { to: '50', cost: 3, label: '1' },
  ],
  '1': [
    { to: '51', cost: 4, label: '2' },
  ],
  '50': [
    { to: '51', cost: 3, label: '1' },
    { to: '63', cost: 11, label: '28' },
  ],
  '62': [
    { to: '65', cost: 6, label: '32' },
    { to: '64', cost: 6, label: '33' },
    { to: '63', cost: 7, label: '31' },
  ],
  '63': [
    { to: '62', cost: 7, label: '31' },
    { to: '50', cost: 11, label: '28' },
    { to: '16', cost: 3, label: '29' },
  ],
  '16': [
    { to: '63', cost: 3, label: '29' },
    { to: '61', cost: 3, label: '30' },
  ],
  '64': [
    { to: '56', cost: 6, label: '35' },
    { to: '62', cost: 6, label: '33' },
    { to: '61', cost: 7, label: '36' },
  ],
  '61': [
    { to: '16', cost: 3, label: '30' },
    { to: '64', cost: 7, label: '36' },
    { to: '17', cost: 3, label: '38' },
  ],
  '3': [
    { to: '57', cost: 6, label: '39' },
    { to: '17', cost: 7, label: '40' },
    { to: '18', cost: 7, label: '43' },
  ],
  '17': [
    { to: '61', cost: 3, label: '38' },
    { to: '3', cost: 7, label: '40' },
    { to: '54', cost: 7, label: '42' },
  ],
  '18': [
    { to: '14', cost: 6, label: '45' },
    { to: '3', cost: 7, label: '43' },
    { to: '54', cost: 7, label: '44' },
    { to: '20', cost: 6, label: '46' },
  ],
  '54': [
    { to: '18', cost: 7, label: '44' },
    { to: '17', cost: 7, label: '42' },
  ],
  '20': [
    { to: '18', cost: 6, label: '46' },
  ],
};

export function dijkstra(graph: Graph, start: string, end: string): { distance: number; pathNodes: string[]; pathEdges: string[] } {
  // distance  最短距離
  // pathNodes 経路のノード
  // pathEdges 経路のラベル

  // 各ノードへの最短距離を保持(初期値: Infinity)
  const dist: { [node: string]: number } = {};
  // 経路記録用
  const prevNode: { [node: string]: string | null } = {};
  const prevEdge: { [node: string]: string | null } = {};

  // 全ノード
  const allNodes = Object.keys(graph);

  // 初期化
  allNodes.forEach((node) => {
    dist[node] = Infinity;
    prevNode[node] = null;
    prevEdge[node] = null;
  });
  dist[start] = 0;

  // 未訪問ノード
  const unvisited = new Set(allNodes);

  while (unvisited.size > 0) {
    // 未訪問ノードの中のdistが最小のノードを探す
    let current: string | null = null;
    let minDistance = Infinity;

    for (const node of unvisited) {
      if (dist[node] < minDistance) {
        minDistance = dist[node];
        current = node;
      }
    }

    // これ以上更新できるノードがない場合
    if (current === null) {
      break;
    }

    if (current === end) {
      break;
    }

    // 探索が終わったら unvisited から除外
    unvisited.delete(current);

    // 隣接するノードの距離を更新
    for (const edge of graph[current]) {
      const alt = dist[current] + edge.cost;
      if (alt < dist[edge.to]) {
        dist[edge.to] = alt;
        prevNode[edge.to] = current;
        prevEdge[edge.to] = edge.label; // どの辺を通ったかを記憶
      }
    }
  }

  // 経路復元
  const pathNodes: string[] = [];
  const pathEdges: string[] = [];
  let node: string | null = end;

  while (node) {
    pathNodes.unshift(node);
    const label = prevEdge[node];
    if (label) {
      pathEdges.unshift(label);
    }
    node = prevNode[node];
  }

  // pathNodes[0]がstartじゃなくて経路が存在しない場合
  if (pathNodes[0] !== start) {
    return { distance: Infinity, pathNodes: [], pathEdges: [] };
  }

  return {
    distance: dist[end],
    pathNodes,
    pathEdges,
  };
}
