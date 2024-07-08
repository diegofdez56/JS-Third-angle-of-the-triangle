import { describe, it, expect } from 'vitest';
import { calcularTercerAngulo } from '../public/js/app';

describe('calcularTercerAngulo', () => {
  it('debe devolver 90 cuando los ángulos son 30 y 60', () => {
    expect(calcularTercerAngulo(30, 60)).toBe(90);
  });

  it('debe devolver 60 cuando los ángulos son 60 y 60', () => {
    expect(calcularTercerAngulo(60, 60)).toBe(60);
  });

  it('debe devolver 59 cuando los ángulos son 43 y 78', () => {
    expect(calcularTercerAngulo(43, 78)).toBe(59);
  });

  it('debe devolver 150 cuando los ángulos son 10 y 20', () => {
    expect(calcularTercerAngulo(10, 20)).toBe(150);
  });
});