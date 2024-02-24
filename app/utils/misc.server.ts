/**
 * Singleton Server-Side Pattern.
 * Source: https://github.com/epicweb-dev/epic-stack
 */
export function singleton<Value>(name: string, value: () => Value): Value {
  const yolo = global as any

  yolo.__singletons ??= {}
  yolo.__singletons[name] ??= value()

  return yolo.__singletons[name]
}
