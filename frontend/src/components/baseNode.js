import { Handle } from 'reactflow';

export const BaseNode = ({
	title,
	children,
	handles = [],
	width = 240,
	minHeight = 120,
}) => {
	return (
		<div
			style={{
				width,
				minHeight,
				border: '1px solid #1f2937',
				borderRadius: 12,
				background: '#ffffff',
				boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
				padding: 12,
				position: 'relative',
			}}
		>
			{handles.map((handle) => (
				<Handle key={handle.id} {...handle} />
			))}
			<div style={{ fontWeight: 700, marginBottom: 12, color: '#111827' }}>{title}</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
		</div>
	);
};
