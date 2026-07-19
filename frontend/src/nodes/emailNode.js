import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/baseNode';

export const EmailNode = ({ id, data }) => {
  const [recipient, setRecipient] = useState(data?.recipient || 'team@example.com');

  return (
    <BaseNode
      title="Email"
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
        Recipient:
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};