import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/baseNode';

export const APINode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(data?.endpoint || 'https://api.example.com');

  return (
    <BaseNode
      title="API"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        Endpoint:
        <input
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};