import { VectorBase } from './vector-base';
import { MatrixBase } from './matrix-base';
import { Matrix3Base } from './matrix3-base';

export abstract class Matrix4Base<
  V extends VectorBase,
  SM extends MatrixBase,
> extends Matrix3Base<V, SM> {
  get 3(): V {
    return this._array[3];
  }

  set 3(v: V) {
    this._array[3].set(v);
  }
}
