import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('filters falsy values', () => {
    expect(cn('foo', undefined, null, '', false, 'bar')).toBe('foo bar')
  })

  it('handles object syntax', () => {
    expect(cn('foo', { bar: true, baz: false })).toBe('foo bar')
  })

  it('merges tailwind utilities', () => {
    expect(cn('mx-2', 'mx-4')).toBe('mx-4')
  })
})
