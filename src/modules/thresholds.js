export default function thresholds (doughmain, count) {
	const breaks = [doughmain[0]];
	const brek = (doughmain[1] - doughmain[0]) / count;
	while (breaks[breaks.length - 1] < doughmain[1]) {
		const node = breaks[breaks.length - 1] + brek;
		breaks.push(node);
	}
	return breaks;
}
