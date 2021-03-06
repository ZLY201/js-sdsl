import { Vector, PriorityQueue } from '@/index';

const arr: number[] = [];
const testNum = 10000;
for (let i = 0; i < testNum; ++i) {
  arr.push(Math.floor(Math.random() * testNum));
}

function judge(myQueue: PriorityQueue<number>, myVector: Vector<number>) {
  while (!myQueue.empty()) {
    if (myQueue.size() !== myVector.size()) return false;
    const u = myQueue.top();
    if (u !== myVector.front()) return false;
    myQueue.pop();
    myVector.eraseElementByPos(0);
  }
  return true;
}

describe('PriorityQueue test', () => {
  test('PriorityQueue empty insert test', () => {
    const myQueue = new PriorityQueue();
    myQueue.pop();
    expect(myQueue.size()).toEqual(0);
    myQueue.push(1);
    expect(myQueue.size()).toEqual(1);
    expect(myQueue.top()).toEqual(1);
  });

  const myQueue = new PriorityQueue(arr);
  const myVector = new Vector(arr);

  test('PriorityQueue size test', () => {
    expect(myQueue.size()).toBe(myVector.size());
  });

  test('PriorityQueue other function test', () => {
    for (let i = 0; i < testNum; ++i) {
      myQueue.push(i);
      myVector.pushBack(i);
    }
    myVector.sort((x, y) => y - x);
    expect(judge(myQueue, myVector)).toEqual(true);
  });

  test('PriorityQueue clear function test', () => {
    myQueue.clear();
    myVector.clear();
    expect(judge(myQueue, myVector)).toEqual(true);
  });
});
