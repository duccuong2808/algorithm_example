/**
 * @author NDC <duccuong2808@gmail.com>
 * @version 0.1
 * @see Reference https://stackoverflow.com/a/28440436
 */
'use strict';
/**
 * Một Node trong một cây. Bao gồm nút và 2 điểm rẽ nhánh (trái và phải)
 * @param {String} val
 * @property {String} value giá trị của nút
 * @property {Node} left Node bên trái
 * @property {Node} right Node bên phải
 * @example
 * node = new Node(10)
 */
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
/**
 * Cây tìm kiếm nhị phân
 * @property {Node} root nút chính của một cây
 * @property {integer} [size = 0] tổng sổ nút của cây
 * @property {integer} [depth_length = 0] chiều cao của cây
 * @example
 *    var bst = new BinarySearchTree();
 *    bst.push(9)
 *    bst.push(20)
 *    bst.push(4)
 *    bst.push(10)
 *    bst.push(1)
 *    bst.push(13)
 *    bst.push(5)
 *    bst.push(8)
 *    bst.push(15)
 *    bst.push(11)
 */
function BinarySearchTree() {
  this.root = null;
  this.size = 0;
  this.depth_length = 0;
}

BinarySearchTree.prototype = {
  push: function (val) {
    var root = this.root;

    if (!root) {
      this.root = new Node(val);
      this.size += 1;
      this.depth_length += 1;
      return;
    }

    var currentNode = root;
    var newNode = new Node(val);
    var i = 1;
    while (currentNode) {

      if (val < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          this.size += 1
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          this.size += 1
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
      i += 1
    }
    this.depth_length = i > this.depth_length ? i : this.depth_length
  },
  search: function (val) {
    var root = this.root

    currentNode = root
    while (currentNode) {
      if (currentNode.value == val) {
        return currentNode
      } else if (currentNode.value > val) {
        if (!currentNode.left) {
          return null
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (!currentNode.right) {
          return null
        } else {
          currentNode = currentNode.right
        }
      }
    }
  },

  cal_depth_length: function () {
    var node = this.root;
    var maxDepth = 0;
    var traverse = function (node, depth) {
      if (!node) return null; // nếu node không tồn tại, không có gì để xét tiếp, return ngay
      if (node) {
        maxDepth = depth > maxDepth ? depth : maxDepth;
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
      }
    };
    traverse(node, 0);
    return maxDepth;
  },
  sort: function () {
    var sortedArray = [];
    var node = this.root;
    var traverse = function (node) {
      /* Hãy mường tượng, node có dạng như sau:
                       13
                     *    *
                   *        *
                 11           15
      Ta xét node trái của nó: Node chỉ có value: 11, left,right đều là null */

      // Với cây tìm kiếm nhị phân, mọi value của node bên trái đều có value nhỏ hơn 13
      if (node.left) {
        traverse(node.left)
      }
      // Sau khi đã sắp xếp toàn bộ phần bên trái, đẩy node 13 vào array
      sortedArray.push(node.value) // Javascript: push có tác dụng đẩy giá trị bên trong nó vào trong một mảng array
      // Tiếp tục xét với phần bên phải, bên phải có giá trị lớn hơn 13, nên ta đẩy vào sau
      if (node.right) {
        traverse(node.right)
      }
    };
    traverse(node);
    return sortedArray;
  },
}

var bst = new BinarySearchTree();
bst.push(9)
bst.push(20)
bst.push(4)
bst.push(10)
bst.push(1)
bst.push(13)
bst.push(5)
bst.push(8)
bst.push(15)
bst.push(11)

// console.log(bst.search(8))
// console.log(bst.size)
console.log(bst.sort())