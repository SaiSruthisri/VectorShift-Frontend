import { shallow } from 'zustand/shallow';
import { useStore } from './store';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Failed to parse pipeline');
            }

            const data = await response.json();
            alert(
                `Pipeline analysis:\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            alert(`Unable to submit pipeline: ${error.message}`);
        }
    };

    return (
        <div className="submit-shell">
            <button className="submit-button" type="button" onClick={handleSubmit}>
                Submit Pipeline
            </button>
        </div>
    );
};
