/**
 * @format
 */

import 'react-native';
import {onlyNumbersAndDot} from '../helpers/helpers';

it('should be truthy', () => {
  expect(onlyNumbersAndDot('abc')).toBe('');
  expect(onlyNumbersAndDot('..123')).toBe('123');
  expect(onlyNumbersAndDot('00123')).toBe('0.123');
  expect(onlyNumbersAndDot('0.123')).toBe('0.123');
  expect(onlyNumbersAndDot('123....123')).toBe('123.123');
  expect(onlyNumbersAndDot('123.123')).toBe('123.123');
});
