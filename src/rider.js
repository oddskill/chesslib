import { Point } from './point'
import { Mobility, quadrants } from './mobility';

class RiderMobility extends Mobility {

	*adjacentPoints(position, p0) {
		const { m, n } = this;

		for (var o of [new Point(m, n), new Point(n, m)]) {
			rotation: for (var p1 of quadrants) {
				for (var r = 1; r < 8; r++) {
					const pN = p0.sum(p1.product(o.product(new Point(r, r))));
					yield pN;

					if (position.pieceByCoords(pN) != null) {
						continue rotation;
					}
				}
			}
		}
	}
}

export function Rider(m, n) {
	this.mobility.push(new RiderMobility(m, n));
}
