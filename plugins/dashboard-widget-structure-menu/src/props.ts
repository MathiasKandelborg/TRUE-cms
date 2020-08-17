/** @format */

import { combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'
import { loadStructure } from './lib/structure'

export function toPropsStream(props$: Array<Record<string, unknown>>) {
  const structure$ = loadStructure()

  return combineLatest(props$, structure$).pipe(
    map(([props, structure]) => ({ ...props, structure }))
  )
}
