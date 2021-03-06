import { Base, initContainer } from '@/container/ContainerBase/index';

class Stack<T> extends Base {
  private stack: T[] = [];
  constructor(container: initContainer<T> = []) {
    super();
    container.forEach(element => this.push(element));
  }
  clear() {
    this.length = 0;
    this.stack.length = 0;
  }
  /**
   * Inserts element at the top.
   */
  push(element: T) {
    this.stack.push(element);
    ++this.length;
  }
  /**
   * Removes the top element.
   */
  pop() {
    this.stack.pop();
    if (this.length > 0) --this.length;
  }
  /**
   * Accesses the top element.
   */
  top() {
    return this.stack[this.length - 1];
  }
}

export default Stack;
