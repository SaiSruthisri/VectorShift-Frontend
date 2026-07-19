// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar-shell">
            <div className="toolbar-grid">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='database' label='Database' />
                <DraggableNode type='condition' label='Condition' />
            </div>
        </div>
    );
};
