import { useEffect, useMemo, useState } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from '../components/baseNode';

const VARIABLE_PATTERN = /{{\s*([A-Za-z_$][\w$]*)\s*}}/g;

const extractVariables = (text) => {
  return Array.from(text.matchAll(VARIABLE_PATTERN), (match) => match[1]).filter(
    (variable, index, allVariables) => allVariables.indexOf(variable) === index
  );
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => extractVariables(currText), [currText]);

  const longestLineLength = useMemo(
    () => Math.max(...currText.split('\n').map((line) => line.length), 12),
    [currText]
  );

  const lineCount = useMemo(() => currText.split('\n').length, [currText]);
  const wrappedLineEstimate = Math.max(lineCount, Math.ceil(longestLineLength / 22));

  const nodeWidth = Math.max(232, Math.min(420, longestLineLength * 8 + 84));
  const nodeMinHeight = Math.max(118, wrappedLineEstimate * 28 + 78);

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, updateNodeInternals, variables, nodeWidth, nodeMinHeight]);

  const handles = [
    ...variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      isConnectable: true,
      style: { top: `${Math.min(20 + index * 20, 80)}%` },
    })),
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
      isConnectable: true,
    },
  ];

  return (
    <BaseNode
      title="Text"
      handles={handles}
      width={nodeWidth}
      minHeight={nodeMinHeight}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={Math.max(3, wrappedLineEstimate)}
          style={{ resize: 'none', minHeight: 72 }}
        />
      </label>
    </BaseNode>
  );
}
