import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/baseNode';

export const DatabaseNode = ({ id, data }) => {
  const [databaseName, setDatabaseName] = useState(data?.databaseName || 'analytics');

  return (
    <BaseNode
      title="Database"
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
        Database:
        <input
          type="text"
          value={databaseName}
          onChange={(e) => setDatabaseName(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};