import * as ko from 'knockout'

declare global {
  interface KnockoutObservableFunctions<T> {
    toString(): string
  }
}

ko.observable.fn.toString = function(): string {
  return toString(this, 'Observable')
}

ko.observableArray.fn.toString = function(): string {
  return toString(this, 'ObservableArray')
}

ko.computed.fn.toString = function(): string {
  return toString(this, 'Computed')
}

function toString(obs, type): string {
  return `${type}(${ko.toJSON(obs(), null)})`
}