import { expect, describe, test } from 'vitest';
import { formatCurrency } from "./format";

describe('formatCurrency', () => {
    test('formats a number as USD', () => {
        expect(formatCurrency(1)).toBe('$1.00')
        expect(formatCurrency(1.5)).toBe('$1.50')
        expect(formatCurrency(1.75)).toBe('$1.75')
    })

    test('formats a string as USD', () => {
        expect(formatCurrency('1')).toBe('$1.00')
    })
})