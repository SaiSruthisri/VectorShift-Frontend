import { Handle } from 'reactflow';

export const BaseNode = ({
	title,
	children,
	handles = [],
	width = 232,
	minHeight = 118,
}) => {
	return (
		<div className="base-node" style={{ width, minHeight }}>
			{handles.map((handle) => (
				<Handle key={handle.id} {...handle} />
			))}
			<div className="base-node__title">{title}</div>
			<div className="base-node__content">{children}</div>
		</div>
	);
};
