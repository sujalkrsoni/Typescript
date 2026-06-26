// type DynamicType<T> = {
//   value: DynamicType<T>;
// };

let a: DynamicType<string> = {
  value: {
    value: {
      value: {
        value: {
          value: {
            value : {
                // It will never ends 
                // This is a recursive type definition where the value property is of the same type as the parent type, allowing for nested structures of arbitrary depth.
            }
          },
        },
      },
    },
  },
};


// To end we can simply make it optional 

type DynamicType<T> = {
  value?: DynamicType<T>;
};

let b : DynamicType<string> = {
    value : {
        value : {} // This is valid because the value property is optional, allowing for the possibility of an empty object at any level of nesting.
    }
}


// we can use it like this as well , like tree stucture

type TreeNode<T> = {
    value : T;
    children? : TreeNode<T>[];
}

let tree : TreeNode<string> = {
    value : "Root",
    children : [
        {
            value : "Child 1",
            children : [
                {
                    value : "Grandchild 1"
                },
                {
                    value : "Grandchild 2"
                }
            ]
        },
        {
            value : "Child 2"
        }
    ]
}

console.log(tree.value); // Output: Root
console.log(tree.children?.[0].value); // Output: Child 1
console.log(tree.children?.[0].children?.[1].value); // Output: Grandchild 2


