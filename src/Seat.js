import React from 'react';

//const TreeNode = ({ node }) => (
//  <ul>
//    <li>
//      {node.name}
//      {node.children && node.children.length > 0 && (
//        <ul>
//          {node.children.map(childNode => (
//            <TreeNode key={childNode.id} node={childNode} />
//          ))}
//        </ul>
//      )}
//    </li>
//  </ul>
//);

const sampleData = {
  id: 1,
  name: 'Root',
  children: [
    {
      id: 2,
      name: 'Child 1',
      children: [
        {
          id: 3,
          name: 'Grandchild 1',
        },
        {
          id: 4,
          name: 'Grandchild 2',
        },
      ],
    },
    {
      id: 5,
      name: 'Child 2',
      children: [
        {
          id: 6,
          name: 'Grandchild 3',
        },
        {
          id: 7,
          name: 'Grandchild 4',
        },
      ],
    },
  ],
};

const TreeNode = ({ node }) => (
    <ul>
        <li>
        {node.name}
        {node.children && node.children.length > 0 && (
            <ul>
            {node.children.map(childNode => (
                <TreeNode key={childNode.id} node={childNode} />
            ))}
            </ul>
        )}
        </li>
    </ul>
    );

const App = () => <TreeNode node={sampleData} />;
export default App;